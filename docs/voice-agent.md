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
[ElevenLabs Agent]
   ├── webhook tool: qualify_lead
   │      └── POST /api/voice/qualify  →  Slack
   │
   └── client tool: open_booking
          └── window.Calendly.initPopupWidget({ url, prefill: {name, email, customAnswers} })
```

## Files

| Path | Role |
|---|---|
| `src/lib/voice/agent-config.ts` | Single source of truth — system prompt, voice ID, LLM, tool definitions. |
| `src/components/voice/VoiceAgentWidget.tsx` | Mounts the convai web component, registers `open_booking` client tool. |
| `src/app/api/voice/qualify/route.ts` | Receives `qualify_lead` webhook, posts to Slack. |
| `scripts/sync-voice-agent.ts` | Pushes the config to ElevenLabs. Run after editing the config. |

## Iteration loop

1. Edit `src/lib/voice/agent-config.ts` (prompt, voice, first message, tool descriptions).
2. Push to ElevenLabs:
   ```sh
   ELEVENLABS_API_KEY=sk_… npm run voice-agent:sync
   ```
   First run: omit `ELEVENLABS_AGENT_ID` to create a new agent. Copy the printed ID into your env (see below).
   Subsequent runs: keep `ELEVENLABS_AGENT_ID` set so the script PATCHes instead of creating a new one.
3. Refresh `localhost:3000` and talk to the widget.
4. Note what's off (pacing, voice, prompt nuance), repeat from step 1.

The ElevenLabs dashboard is **only** used for security locks (allowed origins, conversation cap, daily limit). Everything else lives in this repo.

## Environment variables

| Var | Where | Purpose |
|---|---|---|
| `ELEVENLABS_API_KEY` | local `.env.local`, Vercel server | Required by the sync script. |
| `ELEVENLABS_AGENT_ID` | local `.env.local`, Vercel server | Set after first sync; tells the sync script to update instead of create. |
| `NEXT_PUBLIC_ELEVENLABS_AGENT_ID` | local `.env.local`, Vercel client | Read by the widget. Same value as `ELEVENLABS_AGENT_ID`. |
| `SLACK_VOICE_QUALIFY_WEBHOOK` | Vercel server | Optional. Slack incoming webhook URL for new lead notifications. If unset, leads are logged to console. |
| `VOICE_QUALIFY_URL` | local only, when running sync from a non-prod domain | Optional override for the webhook URL the agent calls. Defaults to `https://www.diabolai.com/api/voice/qualify`. |

## Dashboard locks (do this once after first sync)

In the ElevenLabs dashboard for the agent:
- **Allowed origins**: `https://www.diabolai.com`, `https://diabolai.com`, `http://localhost:3000`. Prevents someone from copying the agent ID and embedding it on another site to burn through your credits.
- **Conversation cap**: cap the agent to a sensible per-conversation token / minute limit.
- **Daily limit**: cap total daily conversations to protect against abuse.

## Consent

The widget is gated by `consent.functional` — it does not mount until the visitor accepts functional cookies. Disclosure is already in `src/components/consent/CookieSettingsModal.tsx`, `src/app/(legal)/privacy/page.tsx`, and `src/app/(legal)/cookies/page.tsx`. No legal copy changes are needed for this rebuild.

## Backlog

- Voice clone of Peter (4-hour recording in ElevenLabs) — replaces the stock voice ID in `agent-config.ts`.
- Swedish language variant — duplicate the agent with `language: "sv"` and a SE-localized prompt; route by `Accept-Language` or a UI toggle.
- RAG knowledge base — feed full Diabol skills (brand voice, ICP, ISRT framework) as searchable docs for deeper Q&A.
- Twilio inbound number — same agent answers calls.
- Mobile-responsive widget tweaks if the default compact variant feels off on small screens.
- Track voice conversations as a GA4 event in addition to the Slack log.
