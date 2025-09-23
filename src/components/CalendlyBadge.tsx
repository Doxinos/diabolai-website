'use client'

import { useEffect } from 'react'

export default function CalendlyBadge() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    script.type = 'text/javascript'
    
    script.onload = () => {
      // Initialize badge widget after script loads
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
    
    // Check if script is already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      document.head.appendChild(script)
    } else if ((window as any).Calendly) {
      // Script already loaded, initialize directly
      (window as any).Calendly.initBadgeWidget({
        url: 'https://calendly.com/peter-diabol/30min',
        text: 'Schedule time with me',
        color: '#97cce1',
        textColor: '#ffffff',
        branding: true
      })
    }

    // Cleanup function
    return () => {
      // Remove any existing badge widgets
      const existingBadge = document.querySelector('.calendly-badge-widget')
      if (existingBadge) {
        existingBadge.remove()
      }
    }
  }, [])

  return null // This component doesn't render anything visible
}