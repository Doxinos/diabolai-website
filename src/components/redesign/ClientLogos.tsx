'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const clients = [
  { name: 'Spotify', file: 'Spotify_logo_v1.2.png' },
  { name: 'Klarna', file: 'Klarna_logo_v1.2.png' },
  { name: 'PayPal', file: 'Paypal_logo_v1.2.png' },
  { name: 'King', file: 'King_logo_v1.2.png' },
  { name: 'Länsförsäkringar', file: 'lansforsakringar-logotyp_v1.2.png' },
  { name: 'Tele2', file: 'Tele2_logo_v1.2.png' },
]

export default function ClientLogos() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.logo-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: trackRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, trackRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={trackRef} className="w-full bg-white px-6 pt-20 pb-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.35)]">
          Previously delivered technical excellence to
        </div>
        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-16 lg:gap-20">
          {clients.map((client) => (
            <div
              key={client.name}
              className="logo-item group flex h-10 w-28 items-center justify-center md:h-12 md:w-32"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`/logos/clients/${client.file}`}
                alt={`${client.name} logo`}
                className="h-full w-full object-contain opacity-30 grayscale transition-all duration-300 group-hover:opacity-60 group-hover:grayscale-0"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
