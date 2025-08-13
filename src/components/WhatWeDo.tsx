'use client'

import { motion } from 'framer-motion'

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section-padding">
      <div className="container-max">
        <div className="grid-container gap-12">
          <div className="col-span-12 text-center mb-8">
            <h2 className="mb-4">What we do</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              AI Voice Agents and connected sales automations that book, qualify and follow up — end-to-end.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="glass-effect p-8 h-full">
              <h3 className="mb-4">AI Voice Agents</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Natural conversation (ElevenLabs + GPT-4o/Claude)</li>
                <li>Bookings & lead qualification (voice + SMS + email)</li>
                <li>CRM & Calendar integrations: HubSpot, Pipedrive, GoHighLevel, Calendly</li>
                <li>Real-time updates to deals, contacts, activities</li>
              </ul>
              <div className="mt-6">
                <button
                  className="btn-primary"
                  onClick={() => {
                    if (typeof window !== 'undefined' && (window as any).Calendly) {
                      (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/peter-diabol/30min' })
                    }
                  }}
                >
                  Let’s Talk AI Voice
                </button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="col-span-12 lg:col-span-6"
          >
            <div className="glass-effect p-8 h-full">
              <h3 className="mb-4">Connected Sales Automations</h3>
              <ul className="list-disc list-inside text-white/80 space-y-2">
                <li>Personalized cold outreach (multi-channel)</li>
                <li>Automated follow-up sequences with branching logic</li>
                <li>Instant meeting notes + CRM updates after calls</li>
                <li>No-code backbone: Make, n8n, Zapier, GoHighLevel</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


