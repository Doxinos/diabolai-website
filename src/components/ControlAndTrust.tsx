'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ControlAndTrust() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="/images/imports/features/ai_Composer_2.png"
                alt="Human conductor leading AI orchestra - You conduct, AI performs"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
              
              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Overlay Text */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center drop-shadow-2xl"
                >
                  You Conduct,
                  <br />
                  <span className="text-[#3B82F6]">AI Performs</span>
                </motion.h2>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#3B82F6]/20 rounded-full blur-xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1E40AF]/20 rounded-full blur-xl" />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="inline-block bg-[#3B82F6]/10 text-[#3B82F6] px-4 py-2 rounded-full text-sm font-medium mb-6"
              >
                Complete Control & Trust
              </motion.div>
              
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight"
              >
                You Stay in Control While
                <br />
                <span className="text-[#3B82F6]">AI Does the Work</span>
              </motion.h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Your Brand Voice:</span> Every conversation reflects your unique personality and values
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Your Business Rules:</span> AI follows your specific processes and requirements exactly
                </p>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-[#3B82F6] rounded-full mt-3 flex-shrink-0" />
                <p className="text-gray-300 text-lg leading-relaxed">
                  <span className="text-white font-semibold">Your Approval Process:</span> Complete oversight with the automation you need
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <p className="text-xl text-[#3B82F6] font-medium">
                Like a conductor leading an orchestra, you set the tempo while AI executes flawlessly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#1E40AF]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-3xl" />
    </section>
  )
}