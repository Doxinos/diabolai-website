'use client'

import { useEffect } from 'react'

export default function DeferredCSS() {
  useEffect(() => {
    // Load non-critical CSS after initial render
    const loadCSS = () => {
      // Remove opacity from deferred content
      const deferredElements = document.querySelectorAll('.defer-load')
      deferredElements.forEach(el => {
        el.classList.remove('defer-load')
      })
    }

    // Load after a short delay to not block initial render
    const timer = setTimeout(loadCSS, 100)
    
    return () => clearTimeout(timer)
  }, [])

  return null
}