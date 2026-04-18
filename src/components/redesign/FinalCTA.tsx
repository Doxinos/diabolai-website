'use client'

import { useEffect, useRef, useCallback } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { trackScheduleClick } from '@/utils/analytics'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null)

  const handleBookCall = useCallback(() => {
    trackScheduleClick('final_cta')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      ;(window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min',
      })
    }
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.final-cta-content > *',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full bg-[#FF4F30] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl">
        <div className="final-cta-content flex flex-col items-start gap-10">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.45)]">
            Ready when you are
          </p>
          <h2 className="text-[clamp(36px,7vw,96px)] font-black leading-[0.92] tracking-[-0.04em] text-[#111111]">
            Stop losing leads
            <br />
            to your competitors.
          </h2>
          <p className="max-w-xl text-[clamp(17px,1.4vw,22px)] font-medium leading-relaxed text-[rgba(17,17,17,0.65)]">
            One call. We scope your system, agree on the outcome, and start building. Live in 3 weeks.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={handleBookCall}
              className="btn-magnetic rounded-full bg-[#111111] px-8 py-4 md:px-10 md:py-5 text-sm font-bold text-[#DCDBD3] hover:bg-[#222222] transition-colors duration-200"
            >
              Book a free call &rarr;
            </button>
            <a
              href="#pricing"
              className="btn-magnetic rounded-full border-2 border-[rgba(17,17,17,0.25)] bg-transparent px-8 py-4 md:px-10 md:py-5 text-sm font-bold text-[#111111] hover:border-[#111111] transition-colors duration-200 no-underline"
            >
              See pricing first
            </a>
          </div>
          <p className="font-mono text-[11px] text-[rgba(17,17,17,0.40)] uppercase tracking-[0.12em]">
            No retainer. No lock-in. Cancel if it&apos;s not working.
          </p>
        </div>
      </div>
    </section>
  )
}
