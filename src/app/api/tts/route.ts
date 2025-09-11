import { NextRequest, NextResponse } from 'next/server'
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'

// Initialize ElevenLabs client
const elevenlabs = new ElevenLabsClient({
  apiKey: process.env.ELEVENLABS_API_KEY
})

export async function POST(request: NextRequest) {
  try {
    const { text, voiceId = 'pNInz6obpgDQGcFmaJgB' } = await request.json() // Default to Adam voice
    
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json({ error: 'ElevenLabs API key not configured' }, { status: 500 })
    }

    // Generate speech using ElevenLabs
    const audioBuffer = await elevenlabs.textToSpeech.convert(voiceId, {
      text,
      modelId: 'eleven_turbo_v2_5', // Fast model for real-time use
      voiceSettings: {
        stability: 0.7,
        similarityBoost: 0.8,
        style: 0.3,
        useSpeakerBoost: true
      }
    })

    // Return audio stream directly
    return new NextResponse(audioBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    })

  } catch (error) {
    console.error('ElevenLabs TTS Error:', error)
    return NextResponse.json(
      { error: 'Failed to generate speech' }, 
      { status: 500 }
    )
  }
}