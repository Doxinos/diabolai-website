'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ElevenLabsOfficialWidget() {
  useEffect(() => {
    // Load the ElevenLabs widget script if it's not already loaded
    if (typeof window !== 'undefined' && !document.querySelector('script[src="https://unpkg.com/@elevenlabs/convai-widget-embed"]')) {
      const script = document.createElement('script')
      script.src = 'https://unpkg.com/@elevenlabs/convai-widget-embed'
      script.async = true
      script.type = 'text/javascript'
      document.body.appendChild(script)
    }
  }, [])

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
              🎯 DiabolAI Voice Demo - Ready for Tuesday!
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Have a real conversation with our AI business assistant. Powered by ElevenLabs' official conversational AI widget.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Widget Container */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="text-center mb-6">
              <p className="text-white/80 mb-4">
                Click the microphone below to start your conversation
              </p>
            </div>
            
            {/* Note: ElevenLabs widget will appear as floating button */}
            <div className="flex justify-center">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-8 text-center">
                <p className="text-white/80 mb-4">
                  The ElevenLabs voice agent will appear as a floating button in the bottom right corner of your screen.
                </p>
                <p className="text-white/60 text-sm">
                  Look for the circular voice button that follows you as you scroll.
                </p>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4">
                Try These Questions:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/80">"What services does DiabolAI offer?"</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/80">"How can AI help automate my business?"</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/80">"What's the pricing for AI voice agents?"</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-white/80">"Tell me about your implementation process"</p>
                </div>
              </div>
            </div>
          </div>

          {/* Demo Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Real-time Voice", desc: "Natural conversation with AI agent" },
              { title: "Business Knowledge", desc: "Trained on DiabolAI services & pricing" },
              { title: "Demo Ready", desc: "Perfect for partner presentations" }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10"
              >
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