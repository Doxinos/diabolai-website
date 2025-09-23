'use client'

import { useEffect } from 'react'

export default function CalendlyBadge() {
  useEffect(() => {
    // Load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.type = 'text/javascript'
      document.head.appendChild(script)
    }

    // Initialize badge widget when window loads
    const initBadge = () => {
      if ((window as any).Calendly) {
        (window as any).Calendly.initBadgeWidget({
          url: 'https://calendly.com/peter-diabol/30min',
          text: 'Schedule time with me',
          color: '#97cce1',
          textColor: '#ffffff',
          branding: true
        })
      }
    }

    // Check if window is already loaded
    if (document.readyState === 'complete') {
      setTimeout(initBadge, 1000) // Delay to ensure script is loaded
    } else {
      window.addEventListener('load', initBadge)
    }

    // Cleanup function
    return () => {
      window.removeEventListener('load', initBadge)
    }
  }, [])

  return null
}