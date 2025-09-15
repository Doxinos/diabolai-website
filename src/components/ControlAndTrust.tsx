'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ControlAndTrust() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/imports/features/ai_composer_female.png"
          alt="Female conductor leading AI orchestra - You conduct, AI performs"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/10" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center h-full">
            
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
                className="text-6xl md:text-7xl lg:text-8xl font-helvetica-display text-white drop-shadow-2xl leading-tight mb-12"
              >
                You Conduct,
                <br />
                <span className="text-[#B2363F]">AI Performs</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-2xl md:text-3xl text-white font-helvetica-text leading-relaxed">
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