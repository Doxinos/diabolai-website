'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff, Phone, PhoneOff, Volume2, VolumeX, Settings } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ProfessionalVoiceAgentProps {
  onCallStart?: () => void
  onCallEnd?: () => void
  theme?: 'dark' | 'light'
  size?: 'compact' | 'standard' | 'large'
}

export default function ProfessionalVoiceAgent({ 
  onCallStart, 
  onCallEnd, 
  theme = 'dark',
  size = 'standard' 
}: ProfessionalVoiceAgentProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [statusMessage, setStatusMessage] = useState('Ready to connect')
  const [error, setError] = useState<string | null>(null)
  const [audioLevel, setAudioLevel] = useState(0)
  const [connectionQuality, setConnectionQuality] = useState<'excellent' | 'good' | 'poor'>('excellent')
  
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  // Audio visualization
  useEffect(() => {
    if (isListening && canvasRef.current) {
      const canvas = canvasRef.current
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        // Draw animated waveform
        const centerY = canvas.height / 2
        const amplitude = audioLevel * 50
        
        ctx.beginPath()
        ctx.strokeStyle = '#3b82f6'
        ctx.lineWidth = 2
        
        for (let x = 0; x < canvas.width; x += 4) {
          const y = centerY + Math.sin((x + Date.now() * 0.01) * 0.02) * amplitude
          if (x === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.stroke()
        
        animationRef.current = requestAnimationFrame(animate)
      }
      
      animate()
    }
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isListening, audioLevel])

  // Simulate audio level changes
  useEffect(() => {
    if (isListening) {
      const interval = setInterval(() => {
        setAudioLevel(Math.random() * 0.8 + 0.2)
      }, 100)
      
      return () => clearInterval(interval)
    } else {
      setAudioLevel(0)
    }
  }, [isListening])

  const startConnection = async () => {
    try {
      setError(null)
      setStatusMessage('Connecting to AI agent...')
      
      // Simulate connection process
      setTimeout(() => {
        setIsConnected(true)
        setStatusMessage('Connected - AI agent ready')
        setConnectionQuality('excellent')
        onCallStart?.()
        
        // AI greeting
        setTimeout(() => {
          speakMessage("Hello! I'm your AI assistant from Diabol. I can help you book meetings, answer questions about our services, or connect you with our team. How can I assist you today?")
        }, 1000)
      }, 2000)
      
    } catch (err) {
      console.error('Connection error:', err)
      setError('Connection failed. Please try again.')
      setStatusMessage('Connection failed')
    }
  }

  const endConnection = () => {
    setIsConnected(false)
    setIsListening(false)
    setIsSpeaking(false)
    setStatusMessage('Call ended')
    setConnectionQuality('excellent')
    onCallEnd?.()
    
    setTimeout(() => {
      setStatusMessage('Ready to connect')
    }, 2000)
  }

  const toggleListening = () => {
    if (!isConnected) return
    
    if (isListening) {
      setIsListening(false)
      setStatusMessage('Processing your request...')
      
      // Simulate AI processing and response
      setTimeout(() => {
        const responses = [
          "I'd be happy to help you schedule a demo. I can book you a 30-minute session with our team this week. What day works best for you?",
          "Great question! Our AI voice agents can handle customer service, sales calls, and appointment booking 24/7. Would you like to see a specific use case?",
          "Let me connect you with Peter, our founder. He can walk you through our implementation process and pricing. Should I schedule that call now?",
          "Our voice agents integrate with your existing CRM and can start taking calls within 24 hours. Would you like me to book a technical demo?"
        ]
        const randomResponse = responses[Math.floor(Math.random() * responses.length)]
        speakMessage(randomResponse)
      }, 2500)
    } else {
      setIsListening(true)
      setIsSpeaking(false)
      setStatusMessage('Listening... speak now')
    }
  }

  const speakMessage = (message: string) => {
    setIsSpeaking(true)
    setIsListening(false)
    setStatusMessage('AI agent responding...')
    
    // Calculate speaking duration based on message length
    const wordsPerMinute = 160
    const words = message.split(' ').length
    const duration = (words / wordsPerMinute) * 60 * 1000
    
    setTimeout(() => {
      setIsSpeaking(false)
      setStatusMessage('Your turn - click to speak')
    }, Math.max(duration, 4000))
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const getThemeClasses = () => {
    return theme === 'dark' 
      ? 'bg-black/90 text-white border-white/20' 
      : 'bg-white text-gray-900 border-gray-200'
  }

  const getSizeClasses = () => {
    switch (size) {
      case 'compact': return 'p-4 max-w-sm'
      case 'large': return 'p-12 max-w-2xl'
      default: return 'p-8 max-w-lg'
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${getThemeClasses()} ${getSizeClasses()} backdrop-blur-sm border rounded-3xl mx-auto`}
    >
      {/* Header with Connection Quality */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full ${
            connectionQuality === 'excellent' ? 'bg-green-400' :
            connectionQuality === 'good' ? 'bg-yellow-400' : 'bg-red-400'
          }`} />
          <span className="text-xs opacity-60">
            {isConnected ? `Connected • ${connectionQuality}` : 'Offline'}
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="opacity-60 hover:opacity-100"
        >
          <Settings className="w-4 h-4" />
        </Button>
      </div>

      {/* Main Avatar/Status Display */}
      <div className="text-center mb-8">
        <motion.div
          animate={
            isSpeaking 
              ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
              : isListening
              ? { scale: [1, 1.05, 1] }
              : {}
          }
          transition={{ 
            duration: isSpeaking ? 2 : 1, 
            repeat: (isSpeaking || isListening) ? Infinity : 0 
          }}
          className="relative w-32 h-32 mx-auto mb-6"
        >
          {/* Animated background rings */}
          <AnimatePresence>
            {(isListening || isSpeaking) && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1.2 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute inset-0 rounded-full bg-blue-500/20 blur-sm"
              />
            )}
          </AnimatePresence>
          
          {/* Main avatar circle */}
          <div className="relative w-full h-full rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
            {isConnected ? (
              isListening ? (
                <Mic className="w-16 h-16 text-white" />
              ) : (
                <Volume2 className="w-16 h-16 text-white" />
              )
            ) : (
              <Phone className="w-16 h-16 text-white/60" />
            )}
          </div>
        </motion.div>

        {/* Audio Visualization Canvas */}
        {isListening && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 60 }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 overflow-hidden rounded-lg bg-black/20"
          >
            <canvas
              ref={canvasRef}
              width={300}
              height={60}
              className="w-full h-full"
            />
          </motion.div>
        )}
        
        <h3 className="text-xl font-semibold mb-2">AI Voice Agent</h3>
        <p className={`text-sm ${error ? 'text-red-400' : 'opacity-70'}`}>
          {error || statusMessage}
        </p>
      </div>

      {/* Control Buttons */}
      <div className="flex gap-3 justify-center mb-6">
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
                  : theme === 'dark' 
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
              disabled={isSpeaking}
            >
              {isListening ? <Mic className="w-4 h-4 mr-2" /> : <MicOff className="w-4 h-4 mr-2" />}
              {isListening ? 'Stop' : 'Talk'}
            </Button>
            
            <Button
              onClick={toggleMute}
              variant="outline"
              className={`${
                theme === 'dark' 
                  ? 'border-white/20 text-white hover:bg-white/10' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-100'
              } ${isMuted ? 'bg-red-500/20' : ''}`}
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

      {/* Status Footer */}
      <div className={`text-center p-4 rounded-xl ${
        theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
      }`}>
        <p className="text-xs opacity-60">
          {!isConnected 
            ? "Professional AI voice agent powered by ElevenLabs V3"
            : "Speak naturally - the AI will respond automatically"
          }
        </p>
      </div>
    </motion.div>
  )
}