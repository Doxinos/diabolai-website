'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitChars from '@/components/redesign/SplitChars'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Philosophy() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: ref.current,
        start: 'top 65%',
        onEnter: () => {
          gsap.to('.phil-dim .split-char', {
            opacity: 1,
            y: 0,
            duration: prefersReduced ? 0 : 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.025,
          })
          gsap.to('.phil-lit .split-char', {
            opacity: 1,
            y: 0,
            duration: prefersReduced ? 0 : 0.6,
            ease: 'back.out(1.7)',
            stagger: 0.025,
            delay: 0.3,
          })
        },
      })

      // Parallax background texture
      gsap.to('.phil-bg', {
        yPercent: 20,
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative w-full overflow-hidden bg-[#0A2843] px-6 py-40 md:px-12"
    >
      {/* Background texture */}
      <div
        className="phil-bg absolute -top-[20%] left-0 h-[140%] w-full bg-[url('/img-philosophy-bg.png')] bg-cover bg-center opacity-[0.15]"
        style={{ mixBlendMode: 'screen' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-12 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
          Philosophy
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-0">
          {/* Left -- dimmed */}
          <div className="phil-dim flex flex-col justify-center pr-0 md:pr-12">
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.40)]">
              Most founders ask:
            </p>
            <h2 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1] text-[rgba(255,255,255,0.30)]">
              <SplitChars text="How do I do more?" />
            </h2>
          </div>

          {/* Right -- lit */}
          <div className="phil-lit relative flex flex-col justify-center pl-0 md:pl-12">
            <div className="absolute left-0 top-0 hidden h-full w-[1px] bg-[rgba(255,255,255,0.12)] md:block" />
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(255,255,255,0.60)]">
              We ask:
            </p>
            <h2 className="text-[clamp(40px,5vw,72px)] font-extrabold leading-[1]">
              <span className="text-[rgba(255,255,255,0.95)]">
                <SplitChars text="How do you grow " />
              </span>
              <span className="text-[#FF4F30]">
                <SplitChars text="without growing?" />
              </span>
            </h2>
          </div>
        </div>

        {/* Manifesto paragraph */}
        <div className="mx-auto mt-20 max-w-[640px] text-center">
          <p className="text-[clamp(17px,2vw,20px)] leading-[1.65] text-[rgba(255,255,255,0.65)]">
            We built these systems because we ran out of hours before we ran out of ambition.
            Voice agents that answer every call. AI video that shows up everywhere — UGC ads,
            avatars of you on camera, hero commercials. That&apos;s not automation — that&apos;s a second founder.
          </p>
        </div>
      </div>
    </section>
  )
}
