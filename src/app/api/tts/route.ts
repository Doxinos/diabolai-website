import { NextRequest, NextResponse } from 'next/server'
import { ElevenLabsClient } from '@elevenlabs/elevenlabs-js'

export async function POST(request: NextRequest) {
  try {
    const { text, voiceId = 'pNInz6obpgDQGcFmaJgB' } = await request.json() // Default to Adam voice
    
    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 })
    }

    if (!process.env.ELEVENLABS_API_KEY) {
      return NextResponse.json({ error: 'ElevenLabs API key not configured' }, { status: 500 })
    }

    // Initialize ElevenLabs client with API key
    const elevenlabs = new ElevenLabsClient({
      apiKey: process.env.ELEVENLABS_API_KEY
    })

    // Generate speech using ElevenLabs Flash model for best latency
    const audioBuffer = await elevenlabs.textToSpeech.convert(voiceId, {
      text,
      modelId: 'eleven_flash_v2_5', // Flash model for lowest latency
      voiceSettings: {
        stability: 0.7,
        similarityBoost: 0.8,
        style: 0.3,
        useSpeakerBoost: true
      },
      optimizeStreamingLatency: 1 // Additional latency optimization
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
    
    // Return more specific error for debugging
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate speech'
    return NextResponse.json(
      { 
        error: 'Failed to generate speech',
        details: errorMessage,
        hint: 'Check ElevenLabs API credits and key configuration'
      }, 
      { status: 500 }
    )
  }
}