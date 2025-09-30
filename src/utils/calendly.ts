/**
 * Utility function to open Calendly popup with proper scroll handling
 */
export const openCalendlyPopup = (url: string = 'https://calendly.com/peter-diabol/30min') => {
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    // Store original body styles
    const originalStyles = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      width: document.body.style.width,
      top: document.body.style.top
    }
    
    // Open Calendly popup
    ;(window as any).Calendly.initPopupWidget({
      url,
      parentElement: document.body,
      prefill: {},
      utm: {}
    })

    // Force scroll restoration with observer
    try {
      const observer = new (window as any).MutationObserver(() => {
        // Check if Calendly has modified body styles
        if (document.body.style.overflow === 'hidden' || 
            document.body.style.position === 'fixed') {
          // Override Calendly's scroll lock
          document.body.style.setProperty('overflow', 'auto', 'important')
          document.body.style.setProperty('position', 'static', 'important')
          document.body.style.setProperty('width', 'auto', 'important')
          document.body.style.setProperty('top', 'auto', 'important')
        }
      })

      // Start observing body style changes
      observer.observe(document.body, {
        attributes: true,
        attributeFilter: ['style']
      })

      // Store observer for cleanup
      (window as any).__calendlyObserver = observer
    } catch (error) {
      // Fallback if MutationObserver not available
      console.log('MutationObserver not available')
    }

    // Also set a recurring check as backup
    const intervalId = setInterval(() => {
      if (document.querySelector('.calendly-overlay')) {
        document.body.style.setProperty('overflow', 'auto', 'important')
        document.body.style.setProperty('position', 'static', 'important')
      }
    }, 100) as any

    // Store interval for cleanup
    (window as any).__calendlyInterval = intervalId
  }
}

/**
 * Load Calendly script and setup global event listeners
 */
export const loadCalendlyScript = () => {
  if (typeof window === 'undefined') return

  // Check if Calendly script is already loaded
  if (document.querySelector('script[src^="https://assets.calendly.com/assets/external/widget.js"]')) return
  
  const script = document.createElement('script')
  script.src = "https://assets.calendly.com/assets/external/widget.js"
  script.async = true
  document.body.appendChild(script)

  // Add global event listener for Calendly close events
  const handleCalendlyEvent = (e: MessageEvent) => {
    if (e.data.event && e.data.event.indexOf('calendly') === 0) {
      if (e.data.event === 'calendly.popup_widget_closed') {
        // Cleanup observer and interval
        if ((window as any).__calendlyObserver) {
          (window as any).__calendlyObserver.disconnect()
          delete (window as any).__calendlyObserver
        }
        if ((window as any).__calendlyInterval) {
          clearInterval((window as any).__calendlyInterval)
          delete (window as any).__calendlyInterval
        }
        
        // Restore normal scrolling when popup closes
        document.body.style.removeProperty('overflow')
        document.body.style.removeProperty('position')
        document.body.style.removeProperty('width')
        document.body.style.removeProperty('top')
        document.body.classList.remove('calendly-popup-open')
      }
    }
  }

  // Remove existing listener if any
  window.removeEventListener('message', handleCalendlyEvent)
  // Add new listener
  window.addEventListener('message', handleCalendlyEvent)
}