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
    <section className="py-8 bg-[#f5f5f7]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="sr-only">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.02,
                rotateX: 2,
                rotateY: 2,
                z: 20,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-[20px] text-center w-full h-0 pb-[75%] relative transform-gpu perspective-1000"
              style={{
                transformStyle: "preserve-3d",
                boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
              }}
            >
              <div className="absolute inset-0 p-12 flex flex-col justify-center items-center text-center">
                <div className="flex justify-center mb-8">
                  <div className="w-20 h-20 bg-brand-orange rounded-full flex items-center justify-center shadow-lg shadow-brand-orange/60">
                    <benefit.icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}