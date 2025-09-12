'use client'

import { useState, useCallback } from 'react'
import { useConversation } from '@elevenlabs/react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mic, MicOff, Phone, PhoneOff, MessageCircle, Zap } from 'lucide-react'

export default function ConversationalAI() {
  const [isConnecting, setIsConnecting] = useState(false)
  const [messages, setMessages] = useState<Array<{type: 'user' | 'agent', text: string, timestamp: Date}>>([])
  const [error, setError] = useState<string | null>(null)

  const conversation = useConversation({
    onConnect: () => {
      console.log('🎤 Connected to AI agent')
      setIsConnecting(false)
      setError(null)
      setMessages(prev => [...prev, {
        type: 'agent',
        text: 'Hello! I\'m your AI business assistant. I can help you with questions about DiabolAI\'s services, pricing, and how we can automate your business processes. What would you like to know?',
        timestamp: new Date()
      }])
    },
    onDisconnect: () => {
      console.log('🔌 Disconnected from AI agent')
      setIsConnecting(false)
    },
    onMessage: (message) => {
      console.log('💬 Message received:', message)
      // Handle different message types based on the actual API structure
      if (typeof message === 'object' && message.message) {
        const messageText = message.message
        const isUser = message.source === 'user' || (message as any).type === 'user_transcript'
        
        setMessages(prev => [...prev, {
          type: isUser ? 'user' : 'agent',
          text: messageText,
          timestamp: new Date()
        }])
      }
    },
    onError: (error) => {
      console.error('❌ Conversation error:', error)
      const errorMsg = typeof error === 'string' ? error : (error as any)?.message || 'Unknown error'
      setError(`Connection error: ${errorMsg}`)
      setIsConnecting(false)
    },
    onStatusChange: (status) => {
      console.log('🔄 Status changed:', status)
    }
  })

  const startConversation = useCallback(async () => {
    setIsConnecting(true)
    setError(null)
    setMessages([])
    
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true })
      
      // Start the conversation session
      await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_AGENT_ID || 'your-agent-id-here',
        connectionType: 'websocket'
      })
      
    } catch (err) {
      console.error('Failed to start conversation:', err)
      setError(err instanceof Error ? err.message : 'Failed to start conversation')
      setIsConnecting(false)
    }
  }, [conversation])

  const stopConversation = useCallback(async () => {
    try {
      await conversation.endSession()
      setMessages(prev => [...prev, {
        type: 'agent',
        text: 'Thanks for chatting! Feel free to start another conversation anytime.',
        timestamp: new Date()
      }])
    } catch (err) {
      console.error('Failed to stop conversation:', err)
    }
  }, [conversation])

  const isActive = conversation.status === 'connected'
  const isSpeaking = conversation.isSpeaking

  return (
    <section className="section-padding bg-gradient-to-b from-indigo-900 via-purple-900 to-pink-900">
      <div className="container-max">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🤖 Live AI Conversation Demo
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Have a real conversation with our AI agent. Ask about our services, pricing, or how AI can transform your business.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Control Panel */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-white/20">
            <div className="flex flex-col items-center gap-6">
              
              {/* Status Display */}
              <div className="flex items-center gap-4">
                <div className={`w-4 h-4 rounded-full ${
                  isActive ? 'bg-green-400 animate-pulse' : 
                  isConnecting ? 'bg-yellow-400 animate-pulse' : 
                  'bg-gray-400'
                }`}></div>
                <span className="text-white font-medium">
                  {isActive ? (isSpeaking ? 'AI is speaking...' : 'Ready to chat') :
                   isConnecting ? 'Connecting...' : 
                   'Ready to start'}
                </span>
              </div>

              {/* Main Controls */}
              <div className="flex gap-4">
                {!isActive ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startConversation}
                    disabled={isConnecting}
                    className="bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all"
                  >
                    <Phone className="w-6 h-6" />
                    {isConnecting ? 'Connecting...' : 'Start Conversation'}
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={stopConversation}
                    className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full flex items-center gap-3 text-lg font-semibold transition-all"
                  >
                    <PhoneOff className="w-6 h-6" />
                    End Conversation
                  </motion.button>
                )}
              </div>

              {/* Speaking Indicator */}
              <AnimatePresence>
                {isSpeaking && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="flex items-center gap-3 bg-blue-500/20 px-4 py-2 rounded-full"
                  >
                    <div className="flex gap-1">
                      {[0, 1, 2].map((i) => (
                        <div
                          key={i}
                          className="w-1 h-4 bg-blue-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-blue-200 text-sm">AI is speaking...</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Instructions */}
              {isActive && (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-2">
                    <Mic className="w-4 h-4" />
                    <span>Just start talking - the AI will respond naturally</span>
                  </div>
                  <div className="text-white/40 text-xs">
                    Try asking: "What services do you offer?" or "How can AI help my business?"
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Conversation History */}
          {messages.length > 0 && (
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <MessageCircle className="w-5 h-5" />
                Conversation
              </h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {messages.map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      msg.type === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-white/10 text-white border border-white/20'
                    }`}>
                      <p className="text-sm">{msg.text}</p>
                      <div className={`text-xs mt-1 ${
                        msg.type === 'user' ? 'text-blue-200' : 'text-white/50'
                      }`}>
                        {msg.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Error Display */}
          {error && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 bg-red-600/20 border border-red-500 text-red-200 px-6 py-4 rounded-2xl"
            >
              <h4 className="font-semibold mb-2">Connection Error</h4>
              <p className="text-sm">{error}</p>
              <p className="text-xs mt-2 text-red-300">
                Make sure your microphone is enabled and you have a stable internet connection.
              </p>
            </motion.div>
          )}

          {/* Demo Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Zap, title: "Real-time", desc: "Instant voice responses" },
              { icon: MessageCircle, title: "Natural", desc: "Human-like conversations" },
              { icon: Phone, title: "Business Ready", desc: "Professional AI assistant" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
                <feature.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}