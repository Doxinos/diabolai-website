'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Stefan Berg',
    role: 'CTO',
    company: 'Transcom AB',
    content: 'A great DevOps partnership with Diabol AB. Their technical expertise and professional approach made all the difference.',
    rating: 5,
    avatar: '/images/avatars/stefan-berg.jpg'
  },
  {
    name: 'Matilda Ringstrom',
    role: 'Chef Digital Kundupplevelse',
    company: 'Lansförsäkringar AB',
    content: 'I highly recommend considering Diabol AB for their expertise in DevOps and CD services. Their professionalism and commitment to customer success make them a valuable partner.',
    rating: 5,
    avatar: '/images/avatars/matilda-ringstrom.jpg'
  },
  {
    name: 'Lars Anderson',
    role: 'Head of Engineering',
    company: 'TechCorp',
    content: 'Exceptional AI automation solutions that transformed our customer service. Response times improved by 80% while maintaining quality.',
    rating: 5,
    avatar: '/images/avatars/lars-anderson.jpg'
  }
]

export default function SocialProof() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our clients say about transforming their business with AI automation
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-gray-200 p-8 shadow-lg hover:shadow-xl transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-blue-100" />
              </div>

              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center pt-6 border-t border-gray-100">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                  <div className="text-sm font-medium text-blue-600">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">Join these industry leaders in transforming your business</p>
          <div className="inline-flex items-center text-sm text-gray-500">
            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
            <span className="font-semibold mr-1">4.9/5</span>
            <span>from 50+ reviews</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
