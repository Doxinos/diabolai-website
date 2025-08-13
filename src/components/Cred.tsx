'use client'

import { motion } from 'framer-motion'

export default function Cred() {
  return (
    <section id="cred" className="section-padding">
      <div className="container-max">
        <div className="grid-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-8 lg:col-start-3 text-center"
          >
            <h3 className="mb-4">Founder @ DiabolAI — Building AI Voice Solutions</h3>
            <p className="text-white/80 mb-6">
              Previously: 10 years running Diabol, delivering DevOps excellence to Spotify, Klarna, King, PayPal.
            </p>
            <p className="text-white/80 mb-2">The Pivot: DevOps taught us systems thinking. AI needs exactly that.</p>
            <p className="text-white/80">Now: Enterprise-grade reliability for AI voice automation.</p>
            <div className="mt-8">
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
          </motion.div>
        </div>
      </div>
    </section>
  )
}


