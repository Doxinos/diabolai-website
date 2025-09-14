'use client'

import { motion } from 'framer-motion'

export default function TryItNow() {

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Curious How It Sounds?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Don't take our word for it - have a quick chat with our AI agent! 
              Just click <span className="font-semibold text-blue-600">'Need Help? Start a call'</span> in the bottom right 
              and see for yourself.
            </p>
          </motion.div>

          {/* Animated Sound Wave Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16 h-32"
          >
            <svg
              width="600"
              height="120"
              viewBox="0 0 600 120"
              className="w-full max-w-2xl"
            >
              <defs>
                <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E40AF" />
                  <stop offset="50%" stopColor="#3B82F6" />
                  <stop offset="100%" stopColor="#1E40AF" />
                </linearGradient>
              </defs>
              
              <motion.path
                d="M0,60 Q150,20 300,60 T600,60"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                animate={{
                  d: [
                    "M0,60 Q150,20 300,60 T600,60",
                    "M0,60 Q150,100 300,60 T600,60",
                    "M0,60 Q150,20 300,60 T600,60"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <motion.path
                d="M0,60 Q75,40 150,60 Q225,80 300,60 Q375,40 450,60 Q525,80 600,60"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
                animate={{
                  d: [
                    "M0,60 Q75,40 150,60 Q225,80 300,60 Q375,40 450,60 Q525,80 600,60",
                    "M0,60 Q75,80 150,60 Q225,40 300,60 Q375,80 450,60 Q525,40 600,60",
                    "M0,60 Q75,40 150,60 Q225,80 300,60 Q375,40 450,60 Q525,80 600,60"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              />
              
              <motion.path
                d="M0,60 Q100,50 200,60 Q300,70 400,60 Q500,50 600,60"
                fill="none"
                stroke="url(#waveGradient)"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.4"
                animate={{
                  d: [
                    "M0,60 Q100,50 200,60 Q300,70 400,60 Q500,50 600,60",
                    "M0,60 Q100,70 200,60 Q300,50 400,60 Q500,70 600,60",
                    "M0,60 Q100,50 200,60 Q300,70 400,60 Q500,50 600,60"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              />
            </svg>
          </motion.div>

          {/* Pulsing Call-to-Action */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-[#3B82F6] rounded-full blur-xl opacity-20"
            />
            
            <div className="relative bg-white border-2 border-[#3B82F6] rounded-2xl p-8 shadow-lg max-w-md mx-auto">
              <div className="text-sm font-medium text-[#1E40AF] mb-2">
                👇 Look for this button
              </div>
              <div className="bg-[#3B82F6] text-white px-6 py-3 rounded-full font-medium inline-block">
                Need Help? Start a call
              </div>
              <div className="text-sm text-gray-500 mt-4">
                Experience our AI voice agent in real-time
              </div>
            </div>
          </motion.div>

          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-y-1/2" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}