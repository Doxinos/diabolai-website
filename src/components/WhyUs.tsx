'use client'

import { motion } from 'framer-motion'

export default function WhyUs() {
  return (
    <section id="why-us" className="section-padding">
      <div className="container-max">
        <div className="grid-container">
          <div className="col-span-12 text-center mb-10">
            <h2 className="mb-4">Why us</h2>
          </div>

          {[{
            title: 'Fast to launch',
            desc: 'Live in weeks, not months'
          }, {
            title: 'No-code backbone',
            desc: 'Make, n8n, Zapier, GoHighLevel'
          }, {
            title: 'Enterprise-grade reliability',
            desc: 'DevOps-DNA in delivery'
          }, {
            title: 'Focused ROI',
            desc: 'More meetings, better conversion, less manual work'
          }].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 lg:col-span-3"
            >
              <div className="glass-effect p-6 h-full">
                <h3 className="text-xl mb-2">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            </motion.div>
          ))}

          <div className="col-span-12 text-center mt-10">
            <button
              className="btn-primary"
              onClick={() => {
                if (typeof window !== 'undefined' && (window as any).Calendly) {
                  (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/peter-diabol/30min' })
                }
              }}
            >
              Book a Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}


