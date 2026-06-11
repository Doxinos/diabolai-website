import { describe, it, expect, beforeEach, afterEach, vi } from "vitest"
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react"
import VoiceAgentWidget, { isMicCaptureFailure } from "./VoiceAgentWidget"

// The widget only mounts/attaches its guard when functional consent is granted.
vi.mock("@/components/consent/ConsentProvider", () => ({
  useConsent: () => ({
    consent: { necessary: true, functional: true, analytics: false, marketing: false },
  }),
}))

// Replace navigator.mediaDevices.getUserMedia with a controllable mock. A fresh
// object each test means the widget's idempotent wrapper re-installs cleanly.
function setGetUserMedia(impl: (constraints?: MediaStreamConstraints) => Promise<unknown>) {
  Object.defineProperty(navigator, "mediaDevices", {
    configurable: true,
    value: { getUserMedia: impl },
  })
}

// Drive the wrapped getUserMedia inside act() so the resulting state update is
// flushed; returns the rejection reason (or null on resolve) for assertions.
async function triggerMic(): Promise<unknown> {
  let result: unknown = null
  await act(async () => {
    result = await navigator.mediaDevices.getUserMedia({ audio: true }).then(
      () => null,
      (error) => error
    )
  })
  return result
}

describe("isMicCaptureFailure", () => {
  it.each([
    ["NotAllowedError", new DOMException("Permission denied", "NotAllowedError")],
    ["NotReadableError", new DOMException("Could not start audio source", "NotReadableError")],
    ["OverconstrainedError", new DOMException("constraint", "OverconstrainedError")],
    ["AVAudioSession error object", new Error("No AVAudioSessionCaptureDevice device")],
    ["raw AVAudioSession string", "No AVAudioSessionCaptureDevice device"],
  ])("returns true for the iOS mic-failure class: %s", (_label, error) => {
    expect(isMicCaptureFailure(error)).toBe(true)
  })

  it.each([
    ["unrelated network error", new Error("Failed to fetch")],
    ["null", null],
    ["undefined", undefined],
  ])("returns false for non-mic errors: %s", (_label, error) => {
    expect(isMicCaptureFailure(error)).toBe(false)
  })
})

describe("VoiceAgentWidget — friendly iOS mic-error UI", () => {
  beforeEach(() => {
    ;(window as unknown as { Calendly?: unknown }).Calendly = undefined
  })

  afterEach(() => {
    cleanup()
  })

  it("renders nothing until a mic failure occurs", () => {
    setGetUserMedia(vi.fn().mockResolvedValue({}))
    render(<VoiceAgentWidget />)
    expect(screen.queryByRole("alert")).toBeNull()
  })

  it("shows the friendly state when getUserMedia rejects with a mic-failure error", async () => {
    const rejection = new DOMException("Could not start audio source", "NotReadableError")
    setGetUserMedia(vi.fn().mockRejectedValue(rejection))
    render(<VoiceAgentWidget />)

    // Simulate the widget opening the mic. The rejection must still propagate.
    expect(await triggerMic()).toBe(rejection)

    expect(await screen.findByRole("alert")).toBeInTheDocument()
    expect(screen.getByText(/mic isn't available right now/i)).toBeInTheDocument()
    // Pairs "voice agent" with the booking outcome — no bare category label, no apology.
    expect(screen.getByText(/30-minute call with Peter/i)).toBeInTheDocument()
  })

  it("shows the friendly state for Safari's raw AVAudioSession error", async () => {
    setGetUserMedia(vi.fn().mockRejectedValue(new Error("No AVAudioSessionCaptureDevice device")))
    render(<VoiceAgentWidget />)

    await triggerMic()

    expect(await screen.findByRole("alert")).toBeInTheDocument()
  })

  it("ignores unrelated getUserMedia rejections", async () => {
    setGetUserMedia(vi.fn().mockRejectedValue(new Error("Failed to fetch")))
    render(<VoiceAgentWidget />)

    expect(await triggerMic()).toBeInstanceOf(Error)
    expect(screen.queryByRole("alert")).toBeNull()
  })

  it("passes a successful getUserMedia through untouched", async () => {
    const stream = { id: "stream" }
    setGetUserMedia(vi.fn().mockResolvedValue(stream))
    render(<VoiceAgentWidget />)

    await expect(navigator.mediaDevices.getUserMedia({ audio: true })).resolves.toBe(stream)
    expect(screen.queryByRole("alert")).toBeNull()
  })

  it("opens the Calendly popup when the fallback CTA is clicked", async () => {
    const initPopupWidget = vi.fn()
    ;(window as unknown as { Calendly: { initPopupWidget: typeof initPopupWidget } }).Calendly = {
      initPopupWidget,
    }
    setGetUserMedia(vi.fn().mockRejectedValue(new DOMException("denied", "NotAllowedError")))
    render(<VoiceAgentWidget />)

    await triggerMic()
    fireEvent.click(await screen.findByRole("button", { name: /book a call directly/i }))

    expect(initPopupWidget).toHaveBeenCalledTimes(1)
    expect(initPopupWidget).toHaveBeenCalledWith(
      expect.objectContaining({ url: expect.stringContaining("calendly.com") })
    )
  })
})
