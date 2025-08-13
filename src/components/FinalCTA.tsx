'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container-max relative z-10">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center"
          >
            <div className="mb-8"></div>

            <h2 className="mb-6">
              <span className="block text-white/90">Ready to</span>
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                10x Your Business?
              </span>
            </h2>

            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-white/80">
              Join 50+ businesses already using our AI agents to dominate their market
            </p>

            <div className="flex justify-center mb-16">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                onClick={openCalendly}
              >
                Start Your Free Demo
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              <div className="glass-effect p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-white/70">Businesses Using AI</div>
              </div>
              <div className="glass-effect p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <div className="text-white/70">Leads Generated</div>
              </div>
              <div className="glass-effect p-6 text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  80%
                </div>
                <div className="text-white/70">Time Savings</div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <p className="text-sm text-white/50">
                No credit card required • Free consultation • 30-day money-back guarantee
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
