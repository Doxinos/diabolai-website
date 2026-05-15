"use client"

import { useEffect } from "react"
import { useConsent } from "@/components/consent/ConsentProvider"

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_1201k4ydfevsfbmavzyz4j73mcdx"

const EMBED_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const CALENDLY_URL = "https://calendly.com/peter-diabol/30min"

type OpenBookingArgs = { name: string; email: string; problem?: string }

function openCalendlyWithPrefill(name: string, email: string, problem?: string) {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: CALENDLY_URL,
      prefill: {
        name,
        email,
        customAnswers: problem ? { a1: problem } : undefined,
      },
    })
    return
  }
  // Calendly not loaded yet — load it now and open once ready
  if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
    const s = document.createElement("script")
    s.src = "https://assets.calendly.com/assets/external/widget.js"
    s.async = true
    s.onload = () => {
      window.Calendly?.initPopupWidget({
        url: CALENDLY_URL,
        prefill: { name, email, customAnswers: problem ? { a1: problem } : undefined },
      })
    }
    document.body.appendChild(s)
  }
}

export default function VoiceAgentWidget() {
  const { consent } = useConsent()

  useEffect(() => {
    if (!consent.functional) return

    // Inject the convai web component once.
    let widgetEl = document.querySelector("elevenlabs-convai") as HTMLElement | null
    if (!widgetEl) {
      widgetEl = document.createElement("elevenlabs-convai")
      widgetEl.setAttribute("agent-id", AGENT_ID)
      document.body.appendChild(widgetEl)
    }

    // Register open_booking via the elevenlabs-convai:call event — this is the
    // documented API: https://elevenlabs.io/docs/eleven-agents/customization/widget
    const onCall = (event: Event) => {
      const detail = (event as CustomEvent).detail as {
        config: { clientTools: Record<string, (args: unknown) => unknown> }
      }
      detail.config.clientTools = {
        ...detail.config.clientTools,
        open_booking: (args: unknown) => {
          const { name, email, problem } = (args || {}) as OpenBookingArgs
          openCalendlyWithPrefill(name, email, problem)
          return { ok: true }
        },
      }
    }

    widgetEl.addEventListener("elevenlabs-convai:call", onCall)

    // Inject the embed script once.
    if (!document.querySelector(`script[src="${EMBED_SRC}"]`)) {
      const s = document.createElement("script")
      s.src = EMBED_SRC
      s.async = true
      document.body.appendChild(s)
    }

    return () => {
      widgetEl?.removeEventListener("elevenlabs-convai:call", onCall)
    }
  }, [consent.functional])

  return null
}
