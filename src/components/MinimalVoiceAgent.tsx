'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Square, Mic } from 'lucide-react'

export default function MinimalVoiceAgent() {
  const [isActive, setIsActive] = useState(false)
  const [isListening, setIsListening] = useState(false)

  const toggleAgent = () => {
    if (!isActive) {
      setIsActive(true)
      setTimeout(() => setIsListening(true), 1000)
    } else {
      setIsActive(false)
      setIsListening(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-12 max-w-md mx-auto">
      {/* Minimal Orb Design */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggleAgent}
        className="relative cursor-pointer mb-8"
      >
        {/* Animated background rings */}
        {isActive && (
          <>
            <motion.div
              animate={{ scale: [1, 1.4], opacity: [0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 w-32 h-32 rounded-full bg-blue-500/30"
            />
            <motion.div
              animate={{ scale: [1, 1.2], opacity: [0.5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              className="absolute inset-0 w-32 h-32 rounded-full bg-purple-500/30"
            />
          </>
        )}
        
        {/* Main orb */}
        <motion.div
          animate={isListening ? { 
            background: ["linear-gradient(45deg, #3b82f6, #8b5cf6)", "linear-gradient(45deg, #8b5cf6, #3b82f6)"]
          } : {}}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl"
        >
          {!isActive ? (
            <Play className="w-12 h-12 text-white ml-1" />
          ) : isListening ? (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Mic className="w-12 h-12 text-white" />
            </motion.div>
          ) : (
            <Square className="w-8 h-8 text-white" />
          )}
        </motion.div>
      </motion.div>

      {/* Minimal Status Text */}
      <motion.div
        animate={{ opacity: isActive ? 1 : 0.6 }}
        className="text-center"
      >
        <h3 className="text-lg font-medium text-white mb-2">
          {!isActive ? "Start Conversation" : isListening ? "Listening..." : "Processing..."}
        </h3>
        <p className="text-sm text-white/60">
          {!isActive 
            ? "Click to activate voice agent" 
            : "Speak naturally about your needs"
          }
        </p>
      </motion.div>
    </div>
  )
}