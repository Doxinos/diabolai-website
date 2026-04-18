'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ArrowRight } from 'lucide-react'
import { trackScheduleClick } from '@/utils/analytics'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  const handleBookCall = useCallback(() => {
    trackScheduleClick('hero')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min',
      })
    }
  }, [])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out', duration: prefersReduced ? 0 : 1 } })

      tl.to('.hero-label', { y: 0, opacity: 1 }, 0)
        .fromTo('.hero-h1-1', { y: 30, opacity: 0 }, { y: 0, opacity: 1 }, 0.2)
        .fromTo(
          '.hero-h1-2',
          { y: 30, opacity: 0, scaleX: 0.96 },
          { y: 0, opacity: 1, scaleX: 1, duration: 1.2, ease: 'expo.out' },
          0.4
        )
        .fromTo('.hero-body', { y: 20, opacity: 0 }, { y: 0, opacity: 1 }, 0.65)
        .fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.1 }, 0.75)
        .fromTo('.hero-stats', { x: 16, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.15 }, 0.85)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative flex h-[100dvh] w-full items-center bg-[#DCDBD3] pt-24">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-6 px-8 md:px-16 lg:px-20">
        {/* Main content */}
        <div className="col-span-12 lg:col-span-9">
          <div className="hero-label translate-y-3 opacity-0 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            — AI Voice Agents · AI Content · AI Avatars
          </div>

          <h1 className="mt-6 flex flex-col font-black tracking-[-0.04em] text-[#111111]">
            <span className="hero-h1-1 text-[clamp(80px,12vw,140px)] leading-[0.88]">Grow without</span>
            <span className="hero-h1-2 origin-left text-[clamp(80px,12vw,140px)] leading-[0.88] text-[#FF4F30]">
              growing.
            </span>
          </h1>

          <div className="hero-body mt-10 flex flex-col gap-1 text-[clamp(17px,1.4vw,20px)] leading-[1.65] text-[rgba(17,17,17,0.60)]">
            <p>Avatars that look like you.</p>
            <p>Agents that sound like you.</p>
            <p>Content that speaks for you.</p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#platform"
              className="hero-cta btn-magnetic flex items-center gap-2 rounded-full bg-[#111111] px-6 py-4 text-sm font-bold text-[#DCDBD3] hover:bg-[#222222] no-underline md:px-8"
            >
              See how it works <ArrowRight size={16} />
            </a>
            <button
              onClick={handleBookCall}
              className="hero-cta btn-magnetic rounded-full border border-[rgba(17,17,17,0.20)] bg-transparent px-6 py-4 text-sm font-bold text-[#111111] hover:bg-[rgba(17,17,17,0.05)] md:px-8"
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Right stats */}
        <div className="col-span-12 lg:col-span-3 flex flex-row lg:flex-col justify-start lg:justify-center gap-8 lg:gap-12 lg:border-l lg:border-[rgba(17,17,17,0.10)] lg:pl-8">
          <div className="hero-stats">
            <div className="text-[clamp(48px,5vw,72px)] font-extrabold leading-none text-[#111111]">247</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
              Calls answered today
            </div>
          </div>
          <div className="hero-stats">
            <div className="text-[clamp(48px,5vw,72px)] font-extrabold leading-none text-[#111111]">€50K+</div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
              Annual revenue recovered per client
            </div>
          </div>
        </div>
      </div>

      {/* Vertical label */}
      <div className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <div className="origin-center rotate-90 font-mono text-[11px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.35)] whitespace-nowrap">
          EST. 2005 · Stockholm
        </div>
      </div>
    </section>
  )
}
