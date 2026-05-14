/**
 * Push the agent config in src/lib/voice/agent-config.ts to ElevenLabs.
 *
 * Usage:
 *   ELEVENLABS_API_KEY=sk_... npx tsx scripts/sync-voice-agent.ts
 *
 * If ELEVENLABS_AGENT_ID is set in the environment, the existing agent is
 * updated. Otherwise a new agent is created and its ID is printed — copy it
 * into NEXT_PUBLIC_ELEVENLABS_AGENT_ID and ELEVENLABS_AGENT_ID.
 */

import { AGENT_CONFIG } from "../src/lib/voice/agent-config"

const API_KEY = process.env.ELEVENLABS_API_KEY
const AGENT_ID = process.env.ELEVENLABS_AGENT_ID
const BASE = "https://api.elevenlabs.io"

if (!API_KEY) {
  console.error("ELEVENLABS_API_KEY is not set.")
  process.exit(1)
}

async function main() {
  const isUpdate = Boolean(AGENT_ID)
  const url = isUpdate
    ? `${BASE}/v1/convai/agents/${AGENT_ID}`
    : `${BASE}/v1/convai/agents/create`

  console.log(`${isUpdate ? "Updating" : "Creating"} agent…`)

  const res = await fetch(url, {
    method: isUpdate ? "PATCH" : "POST",
    headers: {
      "Content-Type": "application/json",
      "xi-api-key": API_KEY!,
    },
    body: JSON.stringify(AGENT_CONFIG),
  })

  const body = await res.text()
  if (!res.ok) {
    console.error(`ElevenLabs API ${res.status}:`, body)
    process.exit(1)
  }

  let parsed: { agent_id?: string } = {}
  try {
    parsed = JSON.parse(body)
  } catch {
    /* body might already be JSON-stringified or empty on PATCH */
  }

  if (isUpdate) {
    console.log(`✓ Updated agent ${AGENT_ID}`)
  } else {
    console.log(`✓ Created agent ${parsed.agent_id}`)
    console.log(
      `\nNext: add to .env.local and Vercel:\n  NEXT_PUBLIC_ELEVENLABS_AGENT_ID=${parsed.agent_id}\n  ELEVENLABS_AGENT_ID=${parsed.agent_id}`,
    )
  }
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
