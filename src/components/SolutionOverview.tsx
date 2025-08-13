'use client'

import { motion } from 'framer-motion'
import { Zap, Clock, Link, TrendingUp, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Automated Lead Generation',
    description: 'AI agents work 24/7 to find and qualify leads automatically',
    result: '50% more leads'
  },
  {
    icon: Clock,
    title: 'Instant Response',
    description: 'Respond to customer inquiries within seconds, not hours',
    result: '3x faster response'
  },
  {
    icon: Link,
    title: 'Seamless Integration',
    description: 'Works with your existing tools and workflows',
    result: '0 disruption'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Without Hiring',
    description: 'Scale your business without adding more staff',
    result: '80% cost savings'
  }
]

export default function SolutionOverview() {
  return (
    <section id="why-us" className="section-padding relative">
      <div className="absolute inset-0 bg-black"></div>

      <div className="container-max relative z-10">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-20"
          >
            <span className="vertical-text absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block">
              CAPABILITIES
            </span>

            <h2 className="mb-6">
              <span className="block text-white">AI Solutions That</span>
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Actually Work
              </span>
            </h2>
            <p className="max-w-3xl mx-auto">
              Our AI agents handle your repetitive tasks so you can focus on strategic growth
            </p>
          </motion.div>

          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6"
            >
              <div className="glass-effect p-8 md:p-12 hover-lift">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {benefit.description}
                    </p>
                    <div className="flex items-center gap-2 text-blue-400">
                      <ArrowRight className="w-5 h-5" />
                      <span className="font-medium">{benefit.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 mt-20"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-3xl p-12 md:p-16 border border-white/10 text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to 10x Your Productivity?
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join hundreds of businesses that have already automated their processes with our AI agents
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
              >
                Get Started Today
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
