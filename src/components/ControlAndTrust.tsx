'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ControlAndTrust() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/imports/features/ai_Composer_2.png"
          alt="Human conductor leading AI orchestra - You conduct, AI performs"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/20" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-screen">
            
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 lg:pr-16"
            >
              {/* Main Headline */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl leading-tight"
              >
                You Conduct,
                <br />
                <span className="text-[#B2363F]">AI Performs</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-xl leading-relaxed">
                    <span className="text-white font-bold">Your Brand Voice:</span> Every conversation reflects your unique personality and values
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-xl leading-relaxed">
                    <span className="text-white font-bold">Your Business Rules:</span> AI follows your specific processes and requirements exactly
                  </p>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-3 h-3 bg-white rounded-full mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-xl leading-relaxed">
                    <span className="text-white font-bold">Your Approval Process:</span> Complete oversight with the automation you need
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="pt-8"
              >
                <p className="text-2xl text-white font-medium">
                  Like a conductor leading an orchestra, you set the tempo while AI executes flawlessly.
                </p>
              </motion.div>
            </motion.div>

            {/* Right side - kept empty to let image show through */}
            <div></div>
          </div>
        </div>
      </div>
    </section>
  )
}