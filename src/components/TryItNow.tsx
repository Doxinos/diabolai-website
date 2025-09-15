'use client'

import { motion } from 'framer-motion'

export default function TryItNow() {

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Video Sound Wave Visualization with Text Overlay */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full relative"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          className="w-full h-auto block"
        >
          <source src="/images/imports/backgrounds/soundwave_ai_voic_Cerise_blue.mp4" type="video/mp4" />
        </video>
        
        {/* Text overlay */}
        <div className="absolute inset-0 flex items-start justify-center pt-8 sm:pt-16 md:pt-20">
          <div className="text-center px-6 sm:px-8 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6 drop-shadow-2xl">
                Curious How It Sounds?
              </h2>
              <p className="text-lg sm:text-xl text-black max-w-2xl sm:max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
                Don't take our word for it - have a quick chat with our AI agent! 
                Just click <span className="font-semibold text-blue-600">'Start a call'</span> in the bottom right 
                and see for yourself.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-y-1/2" />
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-3xl" />
    </section>
  )
}