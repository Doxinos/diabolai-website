"use client"

import React, { useEffect } from "react"
import { useConsent } from "./consent/ConsentProvider"

export const CalendlyGate: React.FC = () => {
  const { consent } = useConsent()
  useEffect(() => {
    if (!consent.functional) return
    if (document.querySelector('script[src^="https://assets.calendly.com/assets/external/widget.js"]')) return
    const s = document.createElement("script")
    s.src = "https://assets.calendly.com/assets/external/widget.js"
    s.async = true
    document.body.appendChild(s)
    return () => { s.remove() }
  }, [consent.functional])
  return null
}

export const ElevenLabsGate: React.FC = () => {
  const { consent } = useConsent()
  useEffect(() => {
    if (!consent.functional) return
    if (document.querySelector('script[src^="https://unpkg.com/@elevenlabs/convai-widget-embed"]')) return
    const container = document.createElement("div")
    container.innerHTML = '<elevenlabs-convai agent-id="agent_1201k4ydfevsfbmavzyz4j73mcdx"></elevenlabs-convai>'
    document.body.appendChild(container)

    const s = document.createElement("script")
    s.src = "https://unpkg.com/@elevenlabs/convai-widget-embed"
    s.async = true
    document.body.appendChild(s)
    return () => {
      s.remove()
      container.remove()
    }
  }, [consent.functional])
  return null
}

export default function ScriptGates() {
  return (
    <>
      <CalendlyGate />
      <ElevenLabsGate />
    </>
  )
}


