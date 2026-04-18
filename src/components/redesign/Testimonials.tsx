'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const testimonials = [
  {
    name: 'Stefan Berg',
    role: 'CTO',
    company: 'Transcom AB',
    content:
      'Diabol has proven to be a reliable and knowledgeable partner, delivering a solution that significantly improved our development and operations workflows. If you are seeking a dependable and effective service provider, Diabol AB is the company to choose.',
    initials: 'SB',
  },
  {
    name: 'Matilda Ringstrom',
    role: 'Chief Digital Customer Experience',
    company: 'Länsförsäkringar AB',
    content:
      'Diabol has proven to be a valuable partner throughout our project which have had a significant impact on our organization. Their expertise has been invaluable in transforming our operations and enabling us to become more agile and responsive to market demands. I highly recommend Diabol AB.',
    initials: 'MR',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonial-card',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 80%',
            once: true,
          },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">Proof</div>
          <h2 className="mt-4 text-[clamp(36px,5vw,56px)] font-black leading-[1] tracking-[-0.03em] text-[#111111]">
            Trusted by industry leaders.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {testimonials.map((t, i) => {
            const isDark = i % 2 === 1
            return (
              <div
                key={i}
                className={`testimonial-card card-lift flex flex-col rounded-2xl p-10 lg:p-12 ${
                  isDark
                    ? 'bg-[#0A2843] border border-[rgba(255,255,255,0.08)]'
                    : 'bg-[#DCDBD3] border border-[rgba(17,17,17,0.08)]'
                }`}
              >
                <div className="mb-8 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, si) => (
                      <svg key={si} className="h-4 w-4 text-[#FF4F30]" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span
                    className={`font-mono text-[10px] uppercase tracking-[0.14em] ${
                      isDark ? 'text-[rgba(255,255,255,0.30)]' : 'text-[rgba(17,17,17,0.30)]'
                    }`}
                  >
                    Verified client
                  </span>
                </div>

                <div
                  className={`text-[80px] font-black leading-none mb-2 -mt-2 select-none ${
                    isDark ? 'text-[rgba(255,255,255,0.08)]' : 'text-[rgba(17,17,17,0.07)]'
                  }`}
                >
                  &ldquo;
                </div>

                <blockquote
                  className={`flex-1 text-[clamp(17px,1.3vw,20px)] leading-[1.65] font-medium ${
                    isDark ? 'text-[rgba(255,255,255,0.80)]' : 'text-[rgba(17,17,17,0.75)]'
                  }`}
                >
                  {t.content}
                </blockquote>

                <div
                  className={`mt-10 flex items-center gap-4 border-t pt-8 ${
                    isDark ? 'border-[rgba(255,255,255,0.10)]' : 'border-[rgba(17,17,17,0.08)]'
                  }`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-mono text-sm font-bold ${
                      isDark ? 'bg-[#DCDBD3] text-[#0A2843]' : 'bg-[#0A2843] text-white'
                    }`}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className={`text-sm font-bold ${isDark ? 'text-white' : 'text-[#111111]'}`}>{t.name}</div>
                    <div className={`text-[13px] ${isDark ? 'text-[rgba(255,255,255,0.50)]' : 'text-[rgba(17,17,17,0.50)]'}`}>
                      {t.role}
                    </div>
                    <div className="font-mono text-[11px] tracking-[0.08em] text-[#FF4F30]">{t.company}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
