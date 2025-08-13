'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ClientLogos() {
  const clients = [
    { name: 'Spotify', logo: '/logos/clients/Spotify_logo.png' },
    { name: 'Klarna', logo: '/logos/clients/Klarna_logo.png' },
    { name: 'PayPal', logo: '/logos/clients/Paypal_logo.png' },
    { name: 'King', logo: '/logos/clients/King_logo_v1.png' },
    { name: 'Lansförsäkringar', logo: '/logos/clients/lansforsakringar-logotyp.png' },
    { name: 'Tele2', logo: '/logos/clients/Tele2_logo-no-margin.png' }
  ]

  return (
    <section className="py-24 px-6 md:px-8" style={{ backgroundColor: '#f4f4f5' }}>
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
                key={client.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <Image 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  width={120} 
                  height={60} 
                  className="opacity-60 hover:opacity-100 transition-opacity object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
