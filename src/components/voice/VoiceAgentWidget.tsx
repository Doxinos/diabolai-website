"use client"

import { useEffect } from "react"
import { useConsent } from "@/components/consent/ConsentProvider"

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_1201k4ydfevsfbmavzyz4j73mcdx"

const EMBED_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const CALENDLY_URL = "https://calendly.com/peter-diabol/30min"

type OpenBookingArgs = { name: string; email: string; problem?: string }

// ElevenLabs convai widget exposes clientTools as a direct property on the element.
type ConvaiElement = HTMLElement & {
  clientTools?: Record<string, (args: unknown) => unknown>
}

export default function VoiceAgentWidget() {
  const { consent } = useConsent()

  useEffect(() => {
    if (!consent.functional) return

    // Inject the convai web component once.
    let widgetEl = document.querySelector("elevenlabs-convai") as ConvaiElement | null
    if (!widgetEl) {
      widgetEl = document.createElement("elevenlabs-convai") as ConvaiElement
      widgetEl.setAttribute("agent-id", AGENT_ID)
      document.body.appendChild(widgetEl)
    }

    // Register client tools directly on the element — this is the supported API.
    widgetEl.clientTools = {
      ...(widgetEl.clientTools || {}),
      open_booking: (args: unknown) => {
        const { name, email, problem } = (args || {}) as OpenBookingArgs

        if (typeof window === "undefined" || !window.Calendly) {
          // Calendly not loaded yet — try loading it now and retry once
          const script = document.querySelector(
            'script[src="https://assets.calendly.com/assets/external/widget.js"]',
          )
          if (!script) {
            const s = document.createElement("script")
            s.src = "https://assets.calendly.com/assets/external/widget.js"
            s.async = true
            s.onload = () => {
              window.Calendly?.initPopupWidget({
                url: CALENDLY_URL,
                prefill: {
                  name,
                  email,
                  customAnswers: problem ? { a1: problem } : undefined,
                },
              })
            }
            document.body.appendChild(s)
          }
          return { ok: false, reason: "Calendly was loading — retry" }
        }

        window.Calendly.initPopupWidget({
          url: CALENDLY_URL,
          prefill: {
            name,
            email,
            customAnswers: problem ? { a1: problem } : undefined,
          },
        })
        return { ok: true }
      },
    }

    // Inject the embed script once.
    if (!document.querySelector(`script[src="${EMBED_SRC}"]`)) {
      const s = document.createElement("script")
      s.src = EMBED_SRC
      s.async = true
      document.body.appendChild(s)
    }
  }, [consent.functional])

  return null
}
