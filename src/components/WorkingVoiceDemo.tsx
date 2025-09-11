'use client'

import { useState } from 'react'
import { Play, Square, Loader2 } from 'lucide-react'

export default function WorkingVoiceDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSpeak = async () => {
    if (isPlaying) return

    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: 'Hello! This is your AI voice agent speaking. I am powered by ElevenLabs and ready for your Tuesday demo.',
          voiceId: 'pNInz6obpgDQGcFmaJgB'
        }),
      })

      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`)
      }

      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)
      const audio = new Audio(audioUrl)
      
      setIsPlaying(true)
      
      audio.onended = () => {
        setIsPlaying(false)
        URL.revokeObjectURL(audioUrl)
      }
      
      audio.onerror = () => {
        setError('Audio playback failed')
        setIsPlaying(false)
        URL.revokeObjectURL(audioUrl)
      }
      
      await audio.play()
      
    } catch (err) {
      console.error('Voice demo error:', err)
      setError(err instanceof Error ? err.message : 'Unknown error')
      setIsPlaying(false)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="section-padding bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="container-max">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-4">
            🎤 Working Voice Demo
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Live ElevenLabs integration - click to hear real AI voice
          </p>
          
          <div className="flex justify-center mb-6">
            <button
              onClick={handleSpeak}
              disabled={isLoading || isPlaying}
              className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Generating...
                </>
              ) : isPlaying ? (
                <>
                  <Square className="w-6 h-6" />
                  Speaking...
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" />
                  Test Voice Agent
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="bg-red-600/20 border border-red-500 text-red-200 px-4 py-2 rounded-lg max-w-md mx-auto">
              Error: {error}
            </div>
          )}

          <p className="text-white/60 text-sm">
            This component tests the actual ElevenLabs API integration
          </p>
        </div>
      </div>
    </section>
  )
}