'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc',
    content: 'DiabolAI helped us increase our lead generation by 60% while reducing our team\'s workload by 40%. The ROI was immediate.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Marketing Director, GrowthCo',
    content: 'The AI agents work 24/7 and never miss a follow-up. Our conversion rates have never been higher.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, StartupXYZ',
    content: 'We scaled from 10 to 100 leads per month without hiring additional staff. DiabolAI made it possible.',
    rating: 5
  }
]

const metrics = [
  { number: '500+', label: 'Leads Generated' },
  { number: '80%', label: 'Time Savings' },
  { number: '50+', label: 'Businesses Served' },
  { number: '24/7', label: 'AI Availability' }
]

export default function SocialProof() {
  return (
    <section id="tech" className="section-padding relative">
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
              <span className="block text-white">Trusted by</span>
              <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                Growing Businesses
              </span>
            </h2>
          </motion.div>

          {/* Metrics */}
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="col-span-6 md:col-span-3 text-center"
            >
              <div className="glass-effect p-8 hover-lift">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  {metric.number}
                </div>
                <div className="text-white/70 uppercase tracking-wider text-sm">
                  {metric.label}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="col-span-12 mt-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass-effect p-8 hover-lift"
                >
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-green-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/80 mb-6 text-lg italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-white/10 pt-4">
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="beam-separator absolute bottom-0 left-0 right-0"></div>
    </section>
  )
}
