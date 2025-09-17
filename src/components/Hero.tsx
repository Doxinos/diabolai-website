'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && window.Calendly) {
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        disablePictureInPicture
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/ai-voice-agent-business-transformation-demo.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>

      <div className="container-max relative z-10">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="col-span-12 lg:col-span-10 lg:col-start-2"
          >
            <div className="text-center">

              <h1 className="mb-4 text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block silver-gradient">
                  AI Voice Agents That Transform Business
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12">
                Our agents book, qualify & follow up automatically.
              </p>



            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/50"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
