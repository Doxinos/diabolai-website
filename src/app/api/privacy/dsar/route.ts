import { NextRequest, NextResponse } from 'next/server'

function randomId(): string {
  return Math.random().toString(36).slice(2, 10) + '-' + Math.random().toString(36).slice(2, 10)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, type, details } = body || {}
    if (!name || !email || !type) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 })
    }
    const caseId = randomId()

    // TODO: wire email or webhook. For now, log server-side (Vercel logs).
    console.log('[DSAR]', { caseId, name, email, type, details, when: new Date().toISOString() })

    return NextResponse.json({ ok: true, caseId })
  } catch (err) {
    return NextResponse.json({ message: 'Invalid request' }, { status: 400 })
  }
}


