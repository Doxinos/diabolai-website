'use client'

import { useEffect, useState } from 'react'

export default function CalendlyLoader() {
  const [hasInteracted, setHasInteracted] = useState(false)

  useEffect(() => {
    // Load Calendly on first user interaction to improve initial page load
    const loadCalendly = () => {
      if (!hasInteracted) {
        setHasInteracted(true)
        
        // Load Calendly CSS
        if (!document.querySelector('link[href="https://assets.calendly.com/assets/external/widget.css"]')) {
          const link = document.createElement('link')
          link.href = 'https://assets.calendly.com/assets/external/widget.css'
          link.rel = 'stylesheet'
          document.head.appendChild(link)
        }
        
        // Load Calendly JS
        if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
          const script = document.createElement('script')
          script.src = 'https://assets.calendly.com/assets/external/widget.js'
          script.async = true
          script.type = 'text/javascript'
          script.defer = true
          document.head.appendChild(script)
        }
        
        // Remove listeners after loading
        window.removeEventListener('scroll', loadCalendly)
        window.removeEventListener('click', loadCalendly)
        window.removeEventListener('mousemove', loadCalendly)
      }
    }

    // Add listeners for user interaction
    window.addEventListener('scroll', loadCalendly, { once: true, passive: true })
    window.addEventListener('click', loadCalendly, { once: true })
    window.addEventListener('mousemove', loadCalendly, { once: true, passive: true })

    // Also load after a delay as fallback
    const timer = setTimeout(loadCalendly, 3000)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', loadCalendly)
      window.removeEventListener('click', loadCalendly)
      window.removeEventListener('mousemove', loadCalendly)
    }
  }, [hasInteracted])

  return null // This component only loads the script
}