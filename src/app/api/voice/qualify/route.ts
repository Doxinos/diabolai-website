import { NextRequest, NextResponse } from "next/server"

type QualifyPayload = {
  name?: string
  email?: string
  company?: string
  role?: string
  team_size?: string
  problem?: string
}

export async function POST(request: NextRequest) {
  let payload: QualifyPayload
  try {
    payload = (await request.json()) as QualifyPayload
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 })
  }

  if (!payload.email && !payload.name) {
    return NextResponse.json({ error: "name or email required" }, { status: 400 })
  }

  const slackWebhook = process.env.SLACK_VOICE_QUALIFY_WEBHOOK
  if (slackWebhook) {
    const lines = [
      `*New voice-agent lead*`,
      payload.name && `• Name: ${payload.name}`,
      payload.email && `• Email: ${payload.email}`,
      payload.company && `• Company: ${payload.company}`,
      payload.role && `• Role: ${payload.role}`,
      payload.team_size && `• Team size: ${payload.team_size}`,
      payload.problem && `• Problem: ${payload.problem}`,
    ].filter(Boolean)

    try {
      await fetch(slackWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: lines.join("\n") }),
      })
    } catch (err) {
      console.error("Slack webhook failed", err)
    }
  } else {
    console.log("[voice/qualify] lead received (no Slack webhook configured):", payload)
  }

  return NextResponse.json({ ok: true })
}
