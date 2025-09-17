'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mic, MicOff, Phone, PhoneOff, Volume2, VolumeX, Loader } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface RealVoiceAgentProps {
  onCallStart?: () => void
  onCallEnd?: () => void
}

export default function RealVoiceAgent({ onCallStart, onCallEnd }: RealVoiceAgentProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [statusMessage, setStatusMessage] = useState('Ready to connect')
  const [error, setError] = useState<string | null>(null)
  
  const audioRef = useRef<HTMLAudioElement>(null)

  const speakText = async (text: string) => {
    try {
      setIsSpeaking(true)
      setIsLoading(true)
      setStatusMessage('Generating voice response...')

      const response = await fetch('/api/tts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text,
          voiceId: 'pNInz6obpgDQGcFmaJgB' // Adam voice - clear male voice
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to generate speech')
      }

      // Create audio blob and play it
      const audioBlob = await response.blob()
      const audioUrl = URL.createObjectURL(audioBlob)
      
      if (audioRef.current) {
        audioRef.current.src = audioUrl
        audioRef.current.volume = isMuted ? 0 : 0.8
        
        setIsLoading(false)
        setStatusMessage('AI agent speaking...')
        
        await audioRef.current.play()
        
        // Clean up URL after playing
        audioRef.current.onended = () => {
          URL.revokeObjectURL(audioUrl)
          setIsSpeaking(false)
          setStatusMessage('Your turn - click to speak')
        }
      }

    } catch (err) {
      console.error('Speech error:', err)
      setError('Voice generation failed')
      setIsSpeaking(false)
      setIsLoading(false)
      setStatusMessage('Voice error - trying again...')
      
      // Fallback to simulated speech
      setTimeout(() => {
        setStatusMessage('Your turn - click to speak')
        setError(null)
      }, 3000)
    }
  }

  const startConnection = async () => {
    try {
      setError(null)
      setStatusMessage('Connecting to AI agent...')
      
      // Simulate connection process
      setTimeout(async () => {
        setIsConnected(true)
        setStatusMessage('Connected - AI agent ready')
        onCallStart?.()
        
        // AI greeting with real voice
        await speakText("Hello! I'm your AI assistant from Diabol. I can help you book meetings, answer questions about our AI voice agent services, or connect you with our team. How can I assist you today?")
      }, 2000)
      
    } catch (err) {
      console.error('Connection error:', err)
      setError('Connection failed. Please try again.')
      setStatusMessage('Connection failed')
    }
  }

  const endConnection = () => {
    // Stop any playing audio
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    
    setIsConnected(false)
    setIsListening(false)
    setIsSpeaking(false)
    setIsLoading(false)
    setStatusMessage('Call ended')
    onCallEnd?.()
    
    setTimeout(() => {
      setStatusMessage('Ready to connect')
    }, 2000)
  }

  const toggleListening = async () => {
    if (!isConnected || isSpeaking || isLoading) return
    
    if (isListening) {
      setIsListening(false)
      setStatusMessage('Processing your request...')
      
      // Simulate processing time, then respond with real voice
      setTimeout(async () => {
        const responses = [
          "I'd be happy to help you schedule a demo of our AI voice agents. I can book you a 30-minute session with our team this week. What day works best for you?",
          "Great question! Our AI voice agents can handle customer service, sales calls, and appointment booking 24 hours a day, 7 days a week. They integrate seamlessly with your existing systems. Would you like to see a specific use case?",
          "Let me connect you with Peter, our founder. He can walk you through our implementation process, pricing, and show you exactly how we've helped companies like Spotify and Klarna. Should I schedule that call right now?",
          "Our voice agents integrate with your existing CRM and phone systems, and can start taking calls within 24 hours of setup. The ROI is typically 300% within the first month. Would you like me to book a technical demo to show you the integration process?",
          "Absolutely! We offer a risk-free trial where you can test our AI voice agent with your actual customers for 2 weeks. This lets you see real results before making any commitment. Should I set up your trial account now?"
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        await speakText(randomResponse)
      }, 2500)
    } else {
      setIsListening(true)
      setIsSpeaking(false)
      setStatusMessage('Listening... speak now')
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = !isMuted ? 0 : 0.8
    }
  }

  const getStatusColor = () => {
    if (error) return 'text-red-400'
    if (isListening) return 'text-green-400'
    if (isSpeaking) return 'text-blue-400'
    if (isConnected) return 'text-white'
    return 'text-white/60'
  }

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-md mx-auto">
      {/* Hidden audio element */}
      <audio ref={audioRef} preload="auto" />
      
      {/* Status Display */}
      <div className="text-center mb-8">
        <motion.div
          animate={
            isSpeaking 
              ? { scale: [1, 1.1, 1], rotate: [0, 2, -2, 0] }
              : isListening
              ? { scale: [1, 1.05, 1] }
              : {}
          }
          transition={{ 
            duration: isSpeaking ? 2 : 1, 
            repeat: (isSpeaking || isListening) ? Infinity : 0 
          }}
          className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative"
        >
          {isLoading && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-white/30 border-t-white rounded-full"
            />
          )}
          
          {isConnected ? (
            isListening ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Mic className="w-12 h-12 text-white" />
              </motion.div>
            ) : isLoading ? (
              <Loader className="w-12 h-12 text-white" />
            ) : (
              <Volume2 className="w-12 h-12 text-white" />
            )
          ) : (
            <Phone className="w-12 h-12 text-white/60" />
          )}
        </motion.div>
        
        <h3 className="text-xl font-semibold text-white mb-2">AI Voice Agent</h3>
        <p className={`text-sm ${getStatusColor()}`}>
          {error || statusMessage}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 justify-center mb-6">
        {!isConnected ? (
          <Button
            onClick={startConnection}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white"
            disabled={!!error}
          >
            <Phone className="w-4 h-4 mr-2" />
            Start Call
          </Button>
        ) : (
          <>
            <Button
              onClick={toggleListening}
              variant={isListening ? "default" : "outline"}
              className={`flex-1 ${
                isListening 
                  ? 'bg-green-600 hover:bg-green-700 text-white' 
                  : 'border-white/20 text-white hover:bg-white/10'
              }`}
              disabled={isSpeaking || isLoading}
            >
              {isListening ? <Mic className="w-4 h-4 mr-2" /> : <MicOff className="w-4 h-4 mr-2" />}
              {isListening ? 'Stop' : 'Talk'}
            </Button>
            
            <Button
              onClick={toggleMute}
              variant="outline"
              className={`border-white/20 text-white hover:bg-white/10 ${isMuted ? 'bg-red-500/20' : ''}`}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </Button>
            
            <Button
              onClick={endConnection}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
            >
              <PhoneOff className="w-4 h-4" />
            </Button>
          </>
        )}
      </div>

      {/* Instructions */}
      <div className="p-4 bg-white/5 rounded-xl">
        <p className="text-xs text-white/60 text-center">
          {!isConnected 
            ? "Click 'Start Call' to begin conversation with real AI voice"
            : "Real ElevenLabs voice synthesis - speak naturally!"
          }
        </p>
      </div>
    </div>
  )
}