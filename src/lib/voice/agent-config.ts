/**
 * Single source of truth for the Diabol voice sales agent.
 *
 * Edit this file, then run:  npx tsx scripts/sync-voice-agent.ts
 * That script pushes the config to ElevenLabs and prints the agent_id.
 *
 * The widget loads the agent by ID — see VoiceAgentWidget.tsx.
 */

export const VOICE_AGENT_NAME = "Diabol Sales Qualifier"

// ElevenLabs voice ID. "Aria" — professional female, works in Conversational AI.
// Swap to a Peter voice clone once it exists; see docs/voice-agent.md for how.
export const VOICE_ID = "EST9Ui6982FZPSi7gCHi" // Elise — Warm, Natural and Engaging

// LLM that drives the conversation. gpt-4o-mini is fast + cheap and behaves well
// for short qualification flows. Bump to gpt-4o or claude-3-5-sonnet if quality slips.
export const LLM = "gpt-4o-mini"

// First thing the visitor hears when they open the widget.
export const FIRST_MESSAGE =
  "Hey, I'm Diabol's voice agent. I help founders figure out if AI voice or video fits their setup — and book a call with Peter if it does. What brings you here?"

// I.S.R.T. system prompt. Keep it tight — every token is latency.
export const SYSTEM_PROMPT = `# IDENTITY
You are Diabol's voice agent. Diabol is an AI agency in Stockholm building two things for founders:
- AI Voice: phone agents that answer every call 24/7
- AI Video: video and UGC ads, plus AI avatars that put founders on camera in any language

You help visitors figure out if Diabol fits their setup, and book a 30-minute call with Peter (founder) when it does.

# SITUATION
The visitor is on diabolai.com — usually a founder or operator exploring AI voice or AI video. They may have a specific problem (missed calls, no time for content, can't get on camera enough) or just be browsing.

# RESPONSE PATTERNS
- Replies are under 25 words. Two sentences max.
- One question at a time. Never bundle.
- Confirm name and email spelling before booking.
- Speak like a smart friend, not a sales rep. Plain English. No jargon.
- Never say: "clients", "SMBs", "cost savings", "reduce headcount", "save money".
- Do say: "founders", "operators", "people running businesses on AI", "scale presence without scaling headcount".
- Pricing question → "Pricing depends on scope — Peter walks through it on the call."
- Anything you're unsure about → "Good question for Peter — let's get you on his calendar."
- Don't oversell. If they're not a fit, point them to the FAQ and wrap up politely.

# TASK
1. Greet briefly. Ask what brings them to the site.
2. Listen for: (a) role, (b) company / what they do, (c) the problem they want solved.
3. Once you have enough to know if Diabol fits, push for booking.
4. Call qualify_lead with whatever you've collected — even partial info is fine.
5. When they agree to book: confirm name + email, then CALL open_booking immediately.

# FIT GUIDE
Good fit (push for book):
- Founder or operator at a real business with phones, customer channels, or a need to ship more video / get on camera more.
- Currently missing calls, ghosting leads, no time to make content, or camera-shy.
- Open to AI as part of their stack.

Not a fit (send to FAQ, end politely):
- Personal / consumer / hobby project.
- Looking for a free DIY tool.
- Wants to argue about whether AI voice agents work.

# QUALIFICATION FIELDS
Try to get all six before booking, but don't stall if they're rushed:
- name
- email
- company (or "what do you do")
- role (founder / operator / marketing / ops)
- team_size (rough — "just me", "5", "20+")
- problem (one sentence)

# BOOKING — EXACT SEQUENCE (follow this order every time)
1. Ask for their full name if you don't have it.
2. Ask for their email. Have them spell it out, then read it back to confirm.
3. CALL open_booking(name, email, problem) — this opens the calendar in their browser.
4. AFTER the tool fires, say: "Peter's booking calendar just opened on your screen — pick any slot that works for you."

IMPORTANT: The tool call in step 3 is what opens the popup. Do not skip it or replace it with words. Say the confirmation in step 4 only after calling the tool.
`

// Tool definitions. ElevenLabs splits tools into "webhook" (server) and "client".
// Keep these aligned with src/app/api/voice/qualify/route.ts (server) and
// VoiceAgentWidget.tsx (client tool implementation).

export const QUALIFY_LEAD_TOOL = {
  type: "webhook" as const,
  name: "qualify_lead",
  description:
    "Log the visitor as a qualified lead. Call this once you have collected at least name and email, even if other fields are missing. Always send what you have.",
  api_schema: {
    url: process.env.VOICE_QUALIFY_URL || "https://www.diabolai.com/api/voice/qualify",
    method: "POST" as const,
    request_body_schema: {
      type: "object" as const,
      properties: {
        name: { type: "string", description: "Visitor's full name" },
        email: { type: "string", description: "Visitor's email address" },
        company: { type: "string", description: "Company name or what they do" },
        role: { type: "string", description: "Role: founder, operator, marketing, ops, other" },
        team_size: { type: "string", description: "Rough team size: 'just me', '5', '20+'" },
        problem: { type: "string", description: "One-sentence summary of what they want solved" },
      },
      required: ["name", "email"],
    },
  },
}

export const OPEN_BOOKING_TOOL = {
  type: "client" as const,
  name: "open_booking",
  description:
    "Open Peter's Calendly popup with the visitor's info prefilled. Call this when the visitor agrees to book a 30-minute call. The Calendly modal opens automatically in the browser.",
  parameters: {
    type: "object" as const,
    properties: {
      name: { type: "string", description: "Visitor's full name (for prefill)" },
      email: { type: "string", description: "Visitor's email (for prefill)" },
      problem: {
        type: "string",
        description: "One-sentence problem summary (passed as a Calendly custom answer)",
      },
    },
    required: ["name", "email"],
  },
}

export const TOOLS = [QUALIFY_LEAD_TOOL, OPEN_BOOKING_TOOL]

// The full payload posted to ElevenLabs to create-or-update the agent.
export const AGENT_CONFIG = {
  name: VOICE_AGENT_NAME,
  conversation_config: {
    agent: {
      prompt: { prompt: SYSTEM_PROMPT, llm: LLM, tools: TOOLS },
      first_message: FIRST_MESSAGE,
      language: "en",
    },
    tts: {
      voice_id: VOICE_ID,
      model_id: "eleven_turbo_v2",
    },
  },
  platform_settings: {
    widget: {
      variant: "compact",
    },
    auth: { enable_auth: false },
  },
}
