'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import VoiceAgent from './VoiceAgent'
import { ArrowRight, CheckCircle, Star } from 'lucide-react'

export default function VoiceAgentDemo() {
  const [isCallActive, setIsCallActive] = useState(false)
  const [callCount, setCallCount] = useState(0)

  const handleCallStart = () => {
    setIsCallActive(true)
    setCallCount(prev => prev + 1)
  }

  const handleCallEnd = () => {
    setIsCallActive(false)
  }

  const features = [
    "Natural conversation flow",
    "Real-time voice processing", 
    "Intelligent meeting booking",
    "Lead qualification",
    "24/7 availability",
    "Multi-language support"
  ]

  const demoStats = [
    { label: "Response Time", value: "<200ms" },
    { label: "Accuracy", value: "99.2%" },
    { label: "Calls Handled", value: callCount.toString() }
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
              <Star className="w-4 h-4" />
              Live Demo Available
            </div>
            <h2 className="mb-6">
              <span className="block text-white">Experience Our</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Voice Agent Live
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Try our AI voice agent right now. See how it naturally handles conversations, 
              books meetings, and qualifies leads - just like it would for your business.
            </p>
          </motion.div>

          {/* Demo Interface */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <VoiceAgent 
                onCallStart={handleCallStart}
                onCallEnd={handleCallEnd}
              />
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 mt-16"
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

          {/* Demo Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 mt-12"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {demoStats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">
                      {stat.value}
                    </div>
                    <div className="text-white/60 text-sm">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 mt-16 text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Deploy This for Your Business?
            </h3>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Get your own AI voice agent set up in just 24 hours. 
              Start automating your customer interactions today.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({
                    url: 'https://calendly.com/peter-diabol/30min'
                  })
                }
              }}
            >
              Book Your Setup Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}