'use client'

import { useEffect } from 'react'

export default function CalendlyLoader() {
  useEffect(() => {
    // Only load Calendly script if not already loaded
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script')
      script.src = 'https://assets.calendly.com/assets/external/widget.js'
      script.async = true
      script.type = 'text/javascript'
      document.head.appendChild(script)
    }
  }, [])

  return null // This component only loads the script
}