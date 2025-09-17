'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { Mic, MicOff, Phone, PhoneOff } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface VoiceAgentProps {
  onCallStart?: () => void
  onCallEnd?: () => void
}

export default function VoiceAgent({ onCallStart, onCallEnd }: VoiceAgentProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [statusMessage, setStatusMessage] = useState('Ready to connect')
  const [error, setError] = useState<string | null>(null)
  
  const mediaRecorderRef = useRef<MediaRecorder | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const streamRef = useRef<MediaStream | null>(null)

  const startConnection = async () => {
    try {
      setError(null)
      setStatusMessage('Requesting microphone access...')
      
      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        }
      })
      
      streamRef.current = stream
      setStatusMessage('Connecting to AI agent...')
      
      // For demo purposes, simulate connection
      setTimeout(() => {
        setIsConnected(true)
        setStatusMessage('Connected - AI agent ready!')
        onCallStart?.()
        
        // Start with a greeting
        setTimeout(() => {
          speakMessage("Hello! I'm your AI assistant. How can I help you today?")
        }, 1000)
      }, 1500)
      
    } catch (err) {
      console.error('Error accessing microphone:', err)
      setError('Unable to access microphone. Please check permissions.')
      setStatusMessage('Connection failed')
    }
  }

  const endConnection = () => {
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop())
      streamRef.current = null
    }
    
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop()
    }
    
    setIsConnected(false)
    setIsListening(false)
    setIsSpeaking(false)
    setStatusMessage('Disconnected')
    onCallEnd?.()
    
    setTimeout(() => {
      setStatusMessage('Ready to connect')
    }, 2000)
  }

  const toggleListening = () => {
    if (!isConnected) return
    
    if (isListening) {
      setIsListening(false)
      setStatusMessage('Processing...')
      
      // Simulate AI processing and response
      setTimeout(() => {
        speakMessage("I understand. Let me help you with that. Would you like to schedule a meeting to discuss our AI voice agent solutions?")
      }, 2000)
    } else {
      setIsListening(true)
      setIsSpeaking(false)
      setStatusMessage('Listening...')
    }
  }

  const speakMessage = (message: string) => {
    setIsSpeaking(true)
    setStatusMessage('AI agent speaking...')
    
    // For demo - simulate speaking duration
    const wordsPerMinute = 150
    const words = message.split(' ').length
    const duration = (words / wordsPerMinute) * 60 * 1000
    
    setTimeout(() => {
      setIsSpeaking(false)
      setStatusMessage('Connected - Your turn to speak')
    }, Math.max(duration, 3000))
  }

  const getStatusColor = () => {
    if (error) return 'text-red-400'
    if (isListening) return 'text-green-400'
    if (isSpeaking) return 'text-blue-400'
    if (isConnected) return 'text-white'
    return 'text-white/60'
  }

  const getMicIcon = () => {
    if (isListening) return <Mic className="w-8 h-8 text-green-400" />
    return <MicOff className="w-8 h-8 text-white/60" />
  }

  return (
    <div className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 max-w-md mx-auto">
      {/* Status Display */}
      <div className="text-center mb-8">
        <motion.div
          animate={isSpeaking ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 1, repeat: isSpeaking ? Infinity : 0 }}
          className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center"
        >
          {isConnected ? (
            isListening ? (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Mic className="w-12 h-12 text-white" />
              </motion.div>
            ) : (
              <Phone className="w-12 h-12 text-white" />
            )
          ) : (
            <PhoneOff className="w-12 h-12 text-white/60" />
          )}
        </motion.div>
        
        <h3 className="text-xl font-semibold text-white mb-2">AI Voice Agent</h3>
        <p className={`text-sm ${getStatusColor()}`}>
          {error || statusMessage}
        </p>
      </div>

      {/* Controls */}
      <div className="flex gap-4 justify-center">
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
              disabled={isSpeaking}
            >
              {getMicIcon()}
              {isListening ? 'Stop' : 'Talk'}
            </Button>
            
            <Button
              onClick={endConnection}
              variant="outline"
              className="border-red-500/50 text-red-400 hover:bg-red-500/10"
            >
              <PhoneOff className="w-4 h-4 mr-2" />
              End Call
            </Button>
          </>
        )}
      </div>

      {/* Demo Instructions */}
      <div className="mt-6 p-4 bg-white/5 rounded-xl">
        <p className="text-xs text-white/60 text-center">
          {!isConnected 
            ? "Click 'Start Call' to begin your conversation with the AI agent"
            : "This is a demo. Click 'Talk' to simulate speaking with the AI agent."
          }
        </p>
      </div>
    </div>
  )
}