'use client'

import { motion } from 'framer-motion'
import { Clock, Users, TrendingUp, MessageSquare } from 'lucide-react'

const painPoints = [
  {
    icon: Clock,
    title: 'Manual Lead Generation',
    description: 'Spending hours on repetitive outreach with low conversion rates',
    metric: '15+ hrs/week'
  },
  {
    icon: Users,
    title: 'Slow Response Times',
    description: 'Missing opportunities due to delayed customer responses',
    metric: '48% lost leads'
  },
  {
    icon: TrendingUp,
    title: 'Scaling Challenges',
    description: 'Can\'t grow without hiring more staff or working longer hours',
    metric: '3x cost increase'
  },
  {
    icon: MessageSquare,
    title: 'Inconsistent Follow-up',
    description: 'Leads falling through the cracks due to manual processes',
    metric: '67% no follow-up'
  }
]

export default function ProblemStatement() {
  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      
      <div className="container-max relative z-10">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-20"
          >
            <h2 className="mb-6">
              <span className="block">The Cost of</span>
              <span className="block text-red-400">Manual Processes</span>
            </h2>
            <p className="max-w-3xl mx-auto">
              Most businesses waste valuable time and money on repetitive tasks that AI can handle better, faster, and cheaper
            </p>
          </motion.div>

          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <div className="glass-effect p-8 h-full hover-lift">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <point.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="text-3xl font-bold text-red-400 mb-4">
                  {point.metric}
                </div>
                
                <h3 className="text-xl font-semibold mb-3">
                  {point.title}
                </h3>
                
                <p className="text-white/60">
                  {point.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="beam-separator absolute bottom-0 left-0 right-0"></div>
    </section>
  )
}
