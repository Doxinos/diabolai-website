'use client'

import { useEffect } from 'react'

export default function ElevenLabsWidget() {
  useEffect(() => {
    // Load ElevenLabs widget script
    const script = document.createElement('script')
    script.src = 'https://elevenlabs.io/convai-widget/index.js'
    script.async = true
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div 
        id="elevenlabs-convai-widget" 
        data-agent-id={process.env.NEXT_PUBLIC_AGENT_ID}
        className="w-full max-w-md"
      />
      <p className="text-sm text-white/60 mt-4 text-center">
        Official ElevenLabs Voice Agent - Click to start conversation
      </p>
    </div>
  )
}