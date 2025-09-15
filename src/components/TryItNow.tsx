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

          {/* Video Sound Wave Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-screen mb-20 mt-12 relative left-1/2 transform -translate-x-1/2 h-24 overflow-hidden"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              disablePictureInPicture
              className="w-full h-full object-cover object-center"
            >
              <source src="/images/imports/backgrounds/soundwave_ai_voic_Cerise_blue.mp4" type="video/mp4" />
            </video>
          </motion.div>


          {/* Background decoration */}
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-blue-100 rounded-full opacity-20 blur-3xl transform -translate-y-1/2" />
          <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-100 rounded-full opacity-20 blur-3xl" />
        </div>
      </div>
    </section>
  )
}