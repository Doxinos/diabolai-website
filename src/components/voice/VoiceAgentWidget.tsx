"use client"

import { useEffect, useState } from "react"
import { useConsent } from "@/components/consent/ConsentProvider"

const AGENT_ID =
  process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID || "agent_1201k4ydfevsfbmavzyz4j73mcdx"

const EMBED_SRC = "https://unpkg.com/@elevenlabs/convai-widget-embed"
const CALENDLY_URL = "https://calendly.com/peter-diabol/30min"

// Internal event our getUserMedia wrapper fires when the mic-capture class is hit.
const MIC_ERROR_EVENT = "diabol:voice-mic-error"

type OpenBookingArgs = { name: string; email: string; problem?: string }
type MediaDevicesWithFlag = MediaDevices & { __diabolMicWrapped?: boolean }

// getUserMedia DOMException names that mean "the mic never opened" on iOS Safari.
const MIC_ERROR_NAMES = new Set([
  "NotAllowedError",
  "NotReadableError",
  "OverconstrainedError",
  "NotFoundError",
  "SecurityError",
])

// Safari's internal AVAudioSession failures surface as a plain error string
// ("No AVAudioSessionCaptureDevice device") with no useful DOMException name,
// so match those by message.
const MIC_ERROR_PATTERN = /AVAudioSession|AVAudioSessionCaptureDevice|getUserMedia|microphone/i

/**
 * True when an error is the iOS Safari microphone-capture failure class:
 * NotAllowedError / NotReadableError / OverconstrainedError, or Safari's
 * internal AVAudioSession errors (incl. "No AVAudioSessionCaptureDevice device").
 * Exported for tests.
 */
export function isMicCaptureFailure(error: unknown): boolean {
  if (!error) return false
  const obj = typeof error === "object" ? (error as { name?: unknown; message?: unknown }) : null
  const name = obj?.name != null ? String(obj.name) : ""
  const message =
    typeof error === "string" ? error : obj?.message != null ? String(obj.message) : String(error)
  if (MIC_ERROR_NAMES.has(name)) return true
  return MIC_ERROR_PATTERN.test(name) || MIC_ERROR_PATTERN.test(message)
}

/**
 * Catch the iOS mic-capture failure at its source by wrapping
 * navigator.mediaDevices.getUserMedia. The convai widget swallows the
 * rejection and renders the raw error inside its own shadow DOM — it does NOT
 * re-emit it as a DOM event and adds no window error listeners — so wrapping
 * getUserMedia (installed before the embed loads, so our wrapper sits under the
 * widget's own adapter shim) is the only reliable hook. We re-throw so the
 * widget's normal flow is unchanged, and fire MIC_ERROR_EVENT for the UI.
 * Idempotent; safe to call on every mount. Exported for tests.
 */
export function installMicErrorDetection(): void {
  if (typeof navigator === "undefined" || typeof window === "undefined") return
  const md = navigator.mediaDevices as MediaDevicesWithFlag | undefined
  if (!md || typeof md.getUserMedia !== "function" || md.__diabolMicWrapped) return

  const original = md.getUserMedia.bind(md)
  md.getUserMedia = function patchedGetUserMedia(constraints?: MediaStreamConstraints) {
    return original(constraints).catch((error: unknown) => {
      if (isMicCaptureFailure(error)) {
        window.dispatchEvent(new CustomEvent(MIC_ERROR_EVENT))
      }
      throw error
    })
  }
  md.__diabolMicWrapped = true
}

export default function VoiceAgentWidget() {
  const { consent } = useConsent()
  const [micFailed, setMicFailed] = useState(false)

  useEffect(() => {
    if (!consent.functional) return

    // Install the getUserMedia guard before the embed loads so our wrapper sits
    // underneath the convai widget's own adapter shim.
    installMicErrorDetection()

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
    if (!document.querySelector("elevenlabs-convai")) {
      const el = document.createElement("elevenlabs-convai")
      el.setAttribute("agent-id", AGENT_ID)
      document.body.appendChild(el)
    }

    // Register open_booking via the elevenlabs-convai:call event.
    // The event bubbles (bubbles:true, composed:true) so we listen on document —
    // more resilient than the widget element in Chrome.
    const onCall = (event: Event) => {
      const detail = (event as CustomEvent).detail as
        | { config?: { clientTools?: Record<string, (args: unknown) => unknown> } }
        | undefined
      if (!detail?.config) return
      detail.config.clientTools = {
        ...(detail.config.clientTools || {}),
        open_booking: (args: unknown) => {
          const { name, email, problem } = (args || {}) as OpenBookingArgs
          if (!window.Calendly) return { ok: false, reason: "Calendly not loaded" }
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
    }

    document.addEventListener("elevenlabs-convai:call", onCall)

    // Swap the raw iOS mic-failure error for our friendly fallback card.
    const onMicError = () => setMicFailed(true)
    window.addEventListener(MIC_ERROR_EVENT, onMicError)

    // Inject the embed script once.
    if (!document.querySelector(`script[src="${EMBED_SRC}"]`)) {
      const s = document.createElement("script")
      s.src = EMBED_SRC
      s.async = true
      document.body.appendChild(s)
    }

    return () => {
      document.removeEventListener("elevenlabs-convai:call", onCall)
      window.removeEventListener(MIC_ERROR_EVENT, onMicError)
    }
  }, [consent.functional])

  if (!micFailed) return null

  const openBooking = () => {
    if (typeof window !== "undefined" && window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL })
    }
  }

  return (
    <div
      role="alert"
      className="fixed bottom-6 right-6 z-[9999] max-w-[320px] rounded-xl border border-near-black/10 bg-westar p-5 font-sans shadow-xl"
    >
      <button
        type="button"
        aria-label="Dismiss"
        onClick={() => setMicFailed(false)}
        className="absolute right-3 top-3 text-near-black/40 transition-colors hover:text-near-black"
      >
        ×
      </button>
      <p className="pr-4 text-sm font-semibold text-near-black">
        Your mic isn&apos;t available right now
      </p>
      <p className="mt-2 text-[13px] leading-relaxed text-near-black/70">
        Your browser won&apos;t open the microphone — usually another app is holding it. Close
        anything using audio (a call, Voice Memos, music) or restart your browser, then try again.
      </p>
      <p className="mt-3 text-[13px] leading-relaxed text-near-black/70">
        Either way, the voice agent has one job: getting you a 30-minute call with Peter. Skip
        straight to it.
      </p>
      <button
        type="button"
        onClick={openBooking}
        className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-oxford-blue px-4 py-2.5 text-sm font-semibold text-westar transition-colors hover:bg-portland-orange"
      >
        Or book a call directly →
      </button>
    </div>
  )
}
