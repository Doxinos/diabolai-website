'use client'

import { motion } from 'framer-motion'
import { Search, Settings, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'We analyze your needs',
    description: '30-minute consultation to understand your business processes and automation opportunities',
    duration: '30 minutes'
  },
  {
    icon: Settings,
    number: '02',
    title: 'Build custom AI agents',
    description: 'Our team develops tailored AI agents that integrate with your existing workflows',
    duration: '7 days'
  },
  {
    icon: Rocket,
    number: '03',
    title: 'Launch and scale',
    description: 'Deploy your AI agents and watch them work 24/7 with ongoing optimization',
    duration: 'Ongoing'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="container-max relative z-10">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-20"
          >
            <span className="vertical-text absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block">
              PROCESS
            </span>

            <h2 className="mb-6">
              <span className="block text-white">Get Started in</span>
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                3 Simple Steps
              </span>
            </h2>
            <p className="max-w-3xl mx-auto">
              From consultation to deployment, we make AI automation simple and effective
            </p>
          </motion.div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent z-0" />
              )}

              <div className="relative z-10">
                <div className="glass-effect p-8 md:p-10 hover-lift h-full">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl font-bold text-white/10">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {step.title}
                  </h3>

                  <p className="text-white/70 mb-6">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center gap-2 text-purple-400">
                    <span className="text-sm font-medium uppercase tracking-wider">
                      {step.duration}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 mt-20 text-center"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-3xl p-12 md:p-16 border border-white/10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-white/80 mb-8">
                Book your free consultation and see how AI can transform your business
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="beam-separator absolute bottom-0 left-0 right-0"></div>
    </section>
  )
}
