# Voice Agent — Diabol Sales Qualifier

A site-wide ElevenLabs Conversational AI widget that qualifies prospects and hands them off to the existing Calendly booking popup.

## Architecture

```
Visitor on diabolai.com
        │
        ▼
[VoiceAgentWidget]  ──gated by──▶ ConsentProvider.functional
   (mounted in layout.tsx, site-wide)
        │
        ▼  loads convai embed + registers a client tool
[<elevenlabs-convai agent-id="…">]
        │
        ▼  conversation
[ElevenLabs Agent]  (gpt-4o, Elise voice)
   ├── webhook tool: qualify_lead
   │      └── POST /api/voice/qualify  →  Slack
   │
   └── client tool: open_booking
          └── window.Calendly.initPopupWidget({ url, prefill: {name, email, customAnswers} })
```

## Files

| Path | Role |
|---|---|
| `src/lib/voice/agent-config.ts` | Single source of truth — system prompt, voice ID, LLM, tool definitions. Edit this, then run sync. |
| `src/components/voice/VoiceAgentWidget.tsx` | Mounts the convai web component, registers `open_booking` client tool, catches the iOS mic-failure error class and renders the friendly fallback UI. |
| `src/app/api/voice/qualify/route.ts` | Receives `qualify_lead` webhook, posts to Slack. |
| `scripts/sync-voice-agent.ts` | Pushes the config to ElevenLabs. Run after editing the config. |

## Iteration loop

1. Edit `src/lib/voice/agent-config.ts` (prompt, voice, first message, tool descriptions).
2. Push to ElevenLabs:
   ```sh
   npm run voice-agent:sync
   ```
   First run: omit `ELEVENLABS_AGENT_ID` from `.env.local` to create a new agent. Copy the printed ID into your env.
   Subsequent runs: keep `ELEVENLABS_AGENT_ID` set so the script PATCHes instead of creating a new one.
3. Test immediately — the agent updates live, no deploy needed.
4. Note what's off (pacing, voice, prompt nuance), repeat from step 1.

The ElevenLabs dashboard is **only** used for security locks (allowed origins, conversation cap, daily limit). Everything else lives in this repo.

## Environment variables

| Var | Where | Purpose |
|---|---|---|
| `ELEVENLABS_API_KEY` | `.env.local`, Vercel server | Required by the sync script. |
| `ELEVENLABS_AGENT_ID` | `.env.local`, Vercel server | Set after first sync; tells the sync script to update instead of create. |
| `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` | `.env.local`, Vercel client | Read by the widget at build time. Same value as `ELEVENLABS_AGENT_ID`. |
| `SLACK_VOICE_QUALIFY_WEBHOOK` | Vercel server | Optional. Slack incoming webhook URL for new lead notifications. |
| `VOICE_QUALIFY_URL` | `.env.local` only | Override webhook URL for the agent (defaults to `https://www.diabolai.com/api/voice/qualify`). |

## Dashboard locks (do this once after first sync)

In the ElevenLabs dashboard for the agent:
- **Allowed origins**: `https://www.diabolai.com`, `https://diabolai.com`, `http://localhost:3000`
- **Conversation cap**: cap per-conversation token/minute limit
- **Daily limit**: cap total daily conversations to protect against abuse

## Consent

The widget is gated by `consent.functional` — it does not mount until the visitor accepts functional cookies. Disclosure is already in `src/components/consent/CookieSettingsModal.tsx`, `src/app/(legal)/privacy/page.tsx`, and `src/app/(legal)/cookies/page.tsx`.

## Microphone-failure fallback UI (iOS Safari)

When the mic never opens — stale `AVAudioSession`, denied permission, or another app holding the device — the widget no longer surfaces the raw error string. `VoiceAgentWidget.tsx` catches the failure class and renders a friendly inline card with a Calendly fallback instead.

- **What it catches.** `isMicCaptureFailure()` matches the getUserMedia DOMException names (`NotAllowedError`, `NotReadableError`, `OverconstrainedError`, `NotFoundError`, `SecurityError`) plus Safari's internal `AVAudioSession` errors by message (incl. `No AVAudioSessionCaptureDevice device`).
- **How it intercepts.** The convai widget **swallows the getUserMedia rejection and renders the raw error inside its own shadow DOM** — it does not re-emit it as a DOM event and adds no `window` error listeners (verified against embed `@elevenlabs/convai-widget-embed@0.14.0`). So `installMicErrorDetection()` wraps `navigator.mediaDevices.getUserMedia` instead — installed before the embed loads, so our wrapper sits *underneath* the widget's own adapter shim. On a matching rejection it fires an internal `diabol:voice-mic-error` event and **re-throws**, so the widget's normal flow is untouched; successful calls pass through unchanged. This is the only reliable hook, since the error never escapes the widget's shadow DOM.
- **What it shows.** A dismissible card (brand Westar/Oxford styling) explaining the mic isn't available and what to try (close other audio apps, restart the browser), plus an `Or book a call directly →` button that opens the existing Calendly popup via `window.Calendly.initPopupWidget` (same URL the rest of the site uses — no new dependency). The visitor always has a non-voice path to a call.
- **Tests.** `src/components/voice/VoiceAgentWidget.test.tsx` (Vitest + React Testing Library) covers the error branch and the Calendly CTA. Run with `npm test`.

## Known gotchas (learned in production — 2026-05-15)

### Use gpt-4o, not gpt-4o-mini
gpt-4o-mini reliably follows speech instructions but silently skips tool invocations in multi-step sequences. With gpt-4o-mini the agent would say "I'm opening the calendar now" without actually calling `open_booking`. Upgrade the `LLM` constant in `agent-config.ts` if you see this.

### Tool call must come before the spoken confirmation
In the system prompt's booking sequence, the `open_booking` tool call must be step 3 and the spoken confirmation step 4 — not the other way around. If speech comes first, the LLM considers its turn "done" after speaking and forgets to invoke the tool.

### Listen on `document`, not the widget element
The `elevenlabs-convai:call` event is dispatched with `bubbles: true, composed: true`. Listening on `document` is more resilient than attaching to the widget element directly (avoids Chrome shadow DOM edge cases). See `VoiceAgentWidget.tsx`.

### Eagerly load Calendly
`CalendlyLoader` in `layout.tsx` is lazy (loads on first user interaction + 3s fallback). For the booking tool, load Calendly CSS+JS immediately when `consent.functional` becomes true inside `VoiceAgentWidget` — don't rely on CalendlyLoader's timing.

### Debugging without console.log
Chrome extensions (e.g. Element Cloner) can filter `console.log`. If you need to debug the event chain, add a `window.__voiceDebug` array and push to it instead — it's inspectable by typing `window.__voiceDebug` in any console regardless of extension filtering.

### `clientTools` may be undefined on first call
Always spread with a fallback: `...(detail.config.clientTools || {})`. Without the `|| {}`, Chrome throws a silent TypeError when `clientTools` is undefined, breaking the entire event handler.

### iOS Safari: stale `AVAudioSession` → "No AVAudioSessionCaptureDevice device"

**Error string the user sees:**
> *An error occurred*
> *No AVAudioSessionCaptureDevice device*

**What it means.** This is **not** an ElevenLabs error and not a code regression — it is iOS's `AVAudioSession` (the Apple audio capture stack underneath Safari) refusing to bind a microphone capture device. The widget never reaches `getUserMedia` success, so no network call to ElevenLabs even occurs.

**Top cause** (resolved 2026-06-10 for Peter, iPhone Safari):

A **wedged `AVAudioSession`** carried over from a prior Safari tab / app / Siri activation / FaceTime / Voice Memo / etc. iOS does not share the mic across apps the way macOS does, and once a session gets stuck the only fix is to fully drop and rebuild it.

**Resolution — try in order. Stop at whichever works:**

1. **Hard-quit Safari** (swipe up from app switcher) → reopen → retry the widget. Resolves ~80% of cases.
2. **Tap the `AA` menu in Safari → Website Settings → Microphone**: set to `Allow` (or `Ask`). If it was `Deny`, this is the cause.
3. **Settings → Safari → Microphone**: set to `Ask` or `Allow`.
4. **Settings → Privacy & Security → Microphone**: verify Safari is enabled.
5. **Disconnect any active Bluetooth audio device** (AirPods especially — routing through another paired device can confuse `AVAudioSession`).
6. **Confirm no other app is holding the mic** — active call, FaceTime, Voice Memos recording, Siri stuck active.
7. **iOS 16+** — iOS 15 and earlier have known WebRTC `getUserMedia` issues in Safari that cannot be resolved by permission tweaking.

**Friendly fallback is now in place (2026-06-10).** The widget catches this error class (`NotAllowedError` / `NotReadableError` / `OverconstrainedError` / `AVAudioSession*`) and swaps the raw string for a friendly inline card plus an `Or book a call directly →` Calendly CTA — so a visitor whose mic never opens still has a path to a call. See **Microphone-failure fallback UI (iOS Safari)** above. The resolution steps below still apply for visitors who want voice itself to work.

## Backlog

- Voice clone of Peter (4-hour recording in ElevenLabs) — replace the stock voice ID in `agent-config.ts`.
- Swedish language variant — duplicate the agent with `language: "sv"` and a localized prompt.
- RAG knowledge base — feed full Diabol skills as searchable docs for deeper Q&A.
- Twilio inbound number — same agent answers phone calls.
- Track voice conversations as a GA4 event in addition to the Slack log.
