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
| `src/components/voice/VoiceAgentWidget.tsx` | Mounts the convai web component, registers `open_booking` client tool. |
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

## Backlog

- Voice clone of Peter (4-hour recording in ElevenLabs) — replace the stock voice ID in `agent-config.ts`.
- Swedish language variant — duplicate the agent with `language: "sv"` and a localized prompt.
- RAG knowledge base — feed full Diabol skills as searchable docs for deeper Q&A.
- Twilio inbound number — same agent answers phone calls.
- Track voice conversations as a GA4 event in addition to the Slack log.
