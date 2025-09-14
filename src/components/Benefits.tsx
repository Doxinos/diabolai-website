'use client'

import { motion } from 'framer-motion'
import { Clock, TrendingDown, Zap, CheckCircle } from 'lucide-react'

const benefits = [
  {
    icon: Clock,
    title: '24/7 Availability',
    description: 'Your AI agents never sleep, ensuring no opportunity is missed'
  },
  {
    icon: TrendingDown,
    title: 'Cost Reduction',
    description: 'Reduce operational costs while scaling your business'
  },
  {
    icon: Zap,
    title: 'Instant Responses',
    description: 'Respond to customers immediately, every time'
  },
  {
    icon: CheckCircle,
    title: 'Perfect Consistency',
    description: 'Deliver the same quality experience with every interaction'
  }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#f5f5f7] rounded-[20px] p-8 text-center hover:scale-105 transition-transform duration-300"
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-black mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}