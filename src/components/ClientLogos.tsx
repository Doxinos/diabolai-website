'use client'

import { motion } from 'framer-motion'

export default function ClientLogos() {
  const clients = [
    'Spotify', 'Klarna', 'PayPal', 'King', 'Transcom', 'Lansförsäkringar'
  ]

  return (
    <section className="py-16 px-6 md:px-8" style={{ backgroundColor: '#f4f4f5' }}>
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-gray-600 text-sm mb-8">
            Previously delivered technical excellence to:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-500 text-sm font-medium"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
