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
    <section className="py-16 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-12">
            Previously delivered technical excellence to
          </p>
          
          {/* Logo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="col-span-1 flex justify-center items-center"
              >
                <div className="relative h-12 w-32 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                  <Image
                    src={client.logo}
                    alt={`${client.name} logo`}
                    fill
                    className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
