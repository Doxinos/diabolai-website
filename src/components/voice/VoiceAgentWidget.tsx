"use client"

import { useEffect } from "react"
import { useConsent } from "@/components/consent/ConsentProvider"

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_1201k4ydfevsfbmavzyz4j73mcdx"

const EMBED_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const CALENDLY_URL = "https://calendly.com/peter-diabol/30min"

type OpenBookingArgs = { name: string; email: string; problem?: string }

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
      console.log("[voice] elevenlabs-convai:call fired", event)
      const detail = (event as CustomEvent).detail as
        | { config?: { clientTools?: Record<string, (args: unknown) => unknown> } }
        | undefined
      console.log("[voice] detail:", detail)
      if (!detail?.config) return
      detail.config.clientTools = {
        ...(detail.config.clientTools || {}),
        open_booking: (args: unknown) => {
          console.log("[voice] open_booking called with:", args)
          const { name, email, problem } = (args || {}) as OpenBookingArgs
          if (typeof window === "undefined" || !window.Calendly) {
            console.log("[voice] Calendly not loaded")
            return { ok: false, reason: "Calendly not loaded yet" }
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
      console.log("[voice] clientTools registered:", Object.keys(detail.config.clientTools))
    }

    console.log("[voice] attaching elevenlabs-convai:call listener to", widgetEl)
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
