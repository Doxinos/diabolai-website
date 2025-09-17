'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Settings, Shield } from 'lucide-react'

export default function Explanation() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            How It Works in Practice
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your business maintains complete control while AI handles the execution. 
            It's the perfect balance of automation and oversight.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Your Brand Voice */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <Settings className="w-8 h-8 text-black" />
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              Your Brand Voice
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Every conversation reflects your unique personality, tone, and values. 
              The AI speaks exactly how you would speak to your customers.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Custom personality training</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Brand-consistent messaging</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Industry-specific language</span>
              </div>
            </div>
          </motion.div>

          {/* Your Business Rules */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-6">
              <Shield className="w-8 h-8 text-black" />
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              Your Business Rules
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              AI follows your specific processes, pricing, availability, and business logic. 
              No surprises, just consistent execution of your standards.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Custom workflow automation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Business logic implementation</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Compliance & standards</span>
              </div>
            </div>
          </motion.div>

          {/* Your Approval Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center mb-6">
              <CheckCircle2 className="w-8 h-8 text-green-500" />
            </div>
            
            <h3 className="text-2xl font-bold text-black mb-4">
              Your Approval Process
            </h3>
            
            <p className="text-gray-600 leading-relaxed mb-6">
              Maintain complete oversight with automated workflows. 
              You decide what requires approval and what can run automatically.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Real-time monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Custom approval workflows</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-sm text-gray-600">Full audit trail</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 24/7 Automation Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-black rounded-2xl p-8 md:p-12 text-center text-white mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            All With 24/7 Automation
          </h3>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            While you sleep, your AI agents are booking meetings, qualifying leads, 
            and following up with prospects. Never miss another opportunity.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Ready to Transform Your Business?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            See how AI voice agents can work within your existing processes 
            while maintaining your brand and business standards.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-[#B2363F] hover:bg-[#9a2d35] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors duration-300 shadow-lg"
            onClick={openCalendly}
          >
            <span>Book Your Free Demo</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

      </div>
    </section>
  )
}