/**
 * Alternative Calendly implementation using inline embed to avoid scroll issues
 */
export const openCalendlyInline = (url: string = 'https://calendly.com/peter-diabol/30min') => {
  if (typeof window !== 'undefined') {
    // Create modal container
    const modalContainer = document.createElement('div')
    modalContainer.className = 'calendly-inline-modal'
    modalContainer.innerHTML = `
      <div class="calendly-inline-backdrop"></div>
      <div class="calendly-inline-content">
        <button class="calendly-inline-close" aria-label="Close">&times;</button>
        <div class="calendly-inline-widget" style="min-width:320px;height:700px;"></div>
      </div>
    `
    
    // Add to body
    document.body.appendChild(modalContainer)
    
    // Initialize inline widget
    if ((window as any).Calendly) {
      (window as any).Calendly.initInlineWidget({
        url,
        parentElement: modalContainer.querySelector('.calendly-inline-widget'),
        prefill: {},
        utm: {}
      })
    }
    
    // Handle close button
    const closeButton = modalContainer.querySelector('.calendly-inline-close')
    const handleClose = () => {
      modalContainer.remove()
    }
    
    closeButton?.addEventListener('click', handleClose)
    
    // Handle backdrop click
    const backdrop = modalContainer.querySelector('.calendly-inline-backdrop')
    backdrop?.addEventListener('click', handleClose)
    
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
        document.removeEventListener('keydown', handleEscape)
      }
    }
    document.addEventListener('keydown', handleEscape)
  }
}