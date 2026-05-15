"use client"

import { useEffect } from "react"
import { useConsent } from "@/components/consent/ConsentProvider"

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_1201k4ydfevsfbmavzyz4j73mcdx"

const EMBED_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const CALENDLY_URL = "https://calendly.com/peter-diabol/30min"

type OpenBookingArgs = { name: string; email: string; problem?: string }

declare global {
  interface Window {
    __voiceDebug?: string[]
  }
}

function vlog(msg: string) {
  window.__voiceDebug = window.__voiceDebug ?? []
  window.__voiceDebug.push(`${new Date().toISOString()} ${msg}`)
}

export default function VoiceAgentWidget() {
  const { consent } = useConsent()

  useEffect(() => {
    if (!consent.functional) return

    // Eagerly load Calendly so window.Calendly is ready before any booking attempt.
    // CalendlyLoader is lazy (first interaction + 3s) — we can't rely on that timing.
    if (!document.querySelector('link[href*="calendly.com"]')) {
      const link = document.createElement("link")
      link.href = "https://assets.calendly.com/assets/external/widget.css"
      link.rel = "stylesheet"
      document.head.appendChild(link)
    }
    if (!document.querySelector('script[src*="calendly.com"]')) {
      const s = document.createElement("script")
      s.src = "https://assets.calendly.com/assets/external/widget.js"
      s.async = true
      document.body.appendChild(s)
    }

    // Inject the convai web component once.
    let widgetEl = document.querySelector("elevenlabs-convai") as HTMLElement | null
    if (!widgetEl) {
      widgetEl = document.createElement("elevenlabs-convai")
      widgetEl.setAttribute("agent-id", AGENT_ID)
      document.body.appendChild(widgetEl)
    }

    // Register open_booking via the elevenlabs-convai:call event.
    // The event is dispatched with bubbles:true, composed:true so we listen on
    // document — more resilient than the widget element in Chrome.
    const onCall = (event: Event) => {
      vlog("elevenlabs-convai:call fired")
      const detail = (event as CustomEvent).detail as
        | { config?: { clientTools?: Record<string, (args: unknown) => unknown> } }
        | undefined
      vlog(`detail.config present: ${!!detail?.config}`)
      if (!detail?.config) return
      detail.config.clientTools = {
        ...(detail.config.clientTools || {}),
        open_booking: (args: unknown) => {
          vlog(`open_booking called: ${JSON.stringify(args)}`)
          const { name, email, problem } = (args || {}) as OpenBookingArgs
          if (typeof window === "undefined" || !window.Calendly) {
            vlog("window.Calendly not loaded")
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
          vlog("Calendly.initPopupWidget called")
          return { ok: true }
        },
      }
      vlog(`clientTools registered: ${Object.keys(detail.config.clientTools).join(", ")}`)
    }

    vlog("attaching elevenlabs-convai:call listener to document")
    document.addEventListener("elevenlabs-convai:call", onCall)

    // Inject the embed script once.
    if (!document.querySelector(`script[src="${EMBED_SRC}"]`)) {
      const s = document.createElement("script")
      s.src = EMBED_SRC
      s.async = true
      document.body.appendChild(s)
    }

    return () => {
      document.removeEventListener("elevenlabs-convai:call", onCall)
    }
  }, [consent.functional])

  return null
}
