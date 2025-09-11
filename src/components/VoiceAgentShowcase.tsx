'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Star, Palette, Zap, Minimize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

// Import the different voice agent designs
import VoiceAgent from './VoiceAgent'
import ProfessionalVoiceAgent from './ProfessionalVoiceAgent'
import MinimalVoiceAgent from './MinimalVoiceAgent'
import ElevenLabsWidget from './ElevenLabsWidget'
import RealVoiceAgent from './RealVoiceAgent'

type DesignOption = 'real' | 'professional' | 'minimal' | 'original' | 'widget'

export default function VoiceAgentShowcase() {
  const [selectedDesign, setSelectedDesign] = useState<DesignOption>('real')
  const [callCount, setCallCount] = useState(0)

  const handleCallStart = () => {
    setCallCount(prev => prev + 1)
  }

  const designOptions = [
    {
      id: 'real' as DesignOption,
      name: 'Real Voice',
      description: 'Actually speaks using ElevenLabs API',
      icon: Star,
      badge: 'Live Demo',
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'professional' as DesignOption,
      name: 'Professional',
      description: 'Advanced UI with audio visualization',
      icon: Palette,
      badge: 'Most Impressive',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'minimal' as DesignOption,
      name: 'Minimal',
      description: 'Clean, modern orb design',
      icon: Minimize2,
      badge: 'Clean',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'original' as DesignOption,
      name: 'Custom',
      description: 'Our original demo design',
      icon: Zap,
      badge: 'Demo Ready',
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'widget' as DesignOption,
      name: 'ElevenLabs',
      description: 'Official widget (requires API key)',
      icon: Star,
      badge: 'Official',
      color: 'from-orange-500 to-red-500'
    }
  ]

  const renderVoiceAgent = () => {
    const props = { onCallStart: handleCallStart, onCallEnd: () => {} }
    
    switch (selectedDesign) {
      case 'real':
        return <RealVoiceAgent {...props} />
      case 'professional':
        return <ProfessionalVoiceAgent {...props} theme="dark" size="standard" />
      case 'minimal':
        return <MinimalVoiceAgent />
      case 'widget':
        return <ElevenLabsWidget />
      case 'original':
      default:
        return <VoiceAgent {...props} />
    }
  }

  const features = [
    "Real ElevenLabs voice synthesis",
    "Multiple professional UI designs", 
    "Natural conversation flow",
    "Instant voice responses",
    "Demo-ready interface",
    "Easy API integration"
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black relative">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-max relative z-10">
        <div className="grid-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Palette className="w-4 h-4" />
              Multiple UI Designs Available
            </div>
            <h2 className="mb-6">
              <span className="block text-white">Choose Your</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Voice Agent Design
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Try different professional UI designs for your voice agent. Each optimized for different use cases and presentation styles.
            </p>
          </motion.div>

          {/* Design Selector */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-12 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {designOptions.map((option) => (
                <motion.div
                  key={option.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedDesign(option.id)}
                  className={`cursor-pointer p-4 rounded-xl border transition-all ${
                    selectedDesign === option.id
                      ? 'border-blue-500 bg-blue-500/10'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                      <option.icon className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {option.badge}
                    </Badge>
                  </div>
                  <h4 className="font-semibold text-white mb-1">{option.name}</h4>
                  <p className="text-sm text-white/60">{option.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Voice Agent Demo */}
          <motion.div
            key={selectedDesign} // Re-render when design changes
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-12 lg:col-span-8 lg:col-start-3 mb-16"
          >
            {renderVoiceAgent()}
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Usage Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 mb-16"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {selectedDesign.charAt(0).toUpperCase() + selectedDesign.slice(1)}
                  </div>
                  <div className="text-white/60 text-sm">Current Design</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {callCount}
                  </div>
                  <div className="text-white/60 text-sm">Demo Calls</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">
                    4
                  </div>
                  <div className="text-white/60 text-sm">Design Options</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Implement This Design?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Choose your preferred design and get your AI voice agent deployed in 24 hours.
            </p>
            <Button
              className="btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({
                    url: 'https://calendly.com/peter-diabol/30min'
                  })
                }
              }}
            >
              Book Implementation Call
              <ArrowRight className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}