'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight, Sparkles, Zap, Target } from 'lucide-react'
import Navbar from '@/components/redesign/Navbar'
import Testimonials from '@/components/redesign/Testimonials'
import ClientLogos from '@/components/redesign/ClientLogos'
import PageFAQ from '@/components/redesign/PageFAQ'
import { aiUgcFaqData } from '@/data/aiUgcFaq'
import { trackScheduleClick } from '@/utils/analytics'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const openCalendly = (source: string) => {
  trackScheduleClick(source)
  if (typeof window !== 'undefined' && (window as any).Calendly) {
    ;(window as any).Calendly.initPopupWidget({
      url: 'https://calendly.com/peter-diabol/30min',
    })
  }
}

/* ------------------------------------------------------------------ */
/* SECTION 1 — HERO (Westar, dark variant for energy)                  */
/* ------------------------------------------------------------------ */
const UgcHero = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.uh-label', { y: 12, opacity: 0, duration: 0.6 })
        .from('.uh-line1', { y: 30, opacity: 0, duration: 0.7 }, 0.2)
        .from('.uh-line2', { y: 30, opacity: 0, duration: 0.7 }, 0.35)
        .from('.uh-body', { y: 16, opacity: 0, duration: 0.5 }, 0.6)
        .from('.uh-ctas', { y: 16, opacity: 0, duration: 0.5 }, 0.8)
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={ref}
      data-theme="dark"
      className="relative min-h-screen w-full bg-[#111111] flex items-center justify-center overflow-hidden pt-32 pb-24"
    >
      {/* Decorative grid backdrop */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-0 opacity-50">
        {Array.from({ length: 9 }).map((_, i) => {
          const gradients = [
            'from-[#0A2843] to-[#111111]',
            'from-[#FF4F30]/30 to-[#111111]',
            'from-[#0A2843] to-[#1a0a00]',
          ]
          return (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${gradients[i % 3]}`}
            />
          )
        })}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl px-8 md:px-16 lg:px-20 text-center">
        <p className="uh-label font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(255,255,255,0.50)] mb-8">
          — AI UGC ADS
        </p>

        <h1 className="font-black leading-[0.92] tracking-[-0.04em] text-[clamp(40px,7vw,84px)] mb-8">
          <span className="uh-line1 block text-white">
            Generate 30 UGC ad variants
          </span>
          <span className="uh-line2 block text-[#FF4F30]">
            in the time it takes to brief one creator.
          </span>
        </h1>

        <p className="uh-body max-w-[620px] mx-auto text-[clamp(16px,1.3vw,20px)] leading-[1.65] text-[rgba(255,255,255,0.70)] mb-10">
          AI-generated UGC ads for TikTok, Reels, and Meta — produced from a single brief, ready to test the same day. The volume paid social actually needs to find a winner, without scheduling a single shoot.
        </p>

        <div className="uh-ctas flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => openCalendly('ai_ugc_hero_early_access')}
            className="flex items-center gap-2 rounded-full bg-[#FF4F30] px-8 py-4 text-sm font-bold text-white hover:bg-[#E64528] transition-colors duration-200"
          >
            Get early access <ArrowRight size={16} />
          </button>
          <button
            onClick={() => openCalendly('ai_ugc_hero_demo')}
            className="rounded-full border border-[rgba(255,255,255,0.30)] bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 2 — WHAT IT DOES (Westar, three feature cards)              */
/* ------------------------------------------------------------------ */
const WhatItDoes = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ugc-feature-card', {
        y: 30,
        opacity: 0,
        stagger: 0.15,
        duration: 0.7,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const cards = [
    {
      icon: Sparkles,
      title: 'Brief in, ad batch out.',
      body: 'Drop in a product, audience, and angle. The app returns 10–30 UGC variants — different hooks, creators, pacing, captions — ready for Ads Manager.',
    },
    {
      icon: Target,
      title: 'Built for TikTok, Reels, and Meta.',
      body: 'Vertical and square aspect ratios. Hook-first structure. Sub-30-second runtimes. Native to where paid social actually lives.',
    },
    {
      icon: Zap,
      title: 'Test more, win faster.',
      body: 'Ship a batch, let the algorithm find the winners, feed the learnings back. The volume of testing is what surfaces breakout creative — and the app makes that volume cheap.',
    },
  ]

  return (
    <section ref={ref} className="w-full bg-[#DCDBD3] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            What it does
          </div>
          <h2 className="mt-4 text-[clamp(40px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-[#111111]">
            Brief once.
            <br />
            <span className="text-[rgba(17,17,17,0.35)]">Test thirty.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {cards.map((card) => {
            const Icon = card.icon
            return (
              <div
                key={card.title}
                className="ugc-feature-card flex flex-col rounded-2xl border border-[rgba(17,17,17,0.08)] bg-white p-8"
              >
                <div className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4F30]/10 text-[#FF4F30]">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-[rgba(17,17,17,0.90)]">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.65] text-[rgba(17,17,17,0.60)]">
                  {card.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 3 — HOW IT WORKS (Oxford, 3 steps)                          */
/* ------------------------------------------------------------------ */
const HowItWorks = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ugc-step', {
        y: 40,
        opacity: 0,
        stagger: 0.18,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 75%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const steps = [
    {
      n: '01',
      title: 'Brief',
      body: 'Product, audience, hook angle, brand voice notes. The more specific, the more on-brand the output.',
    },
    {
      n: '02',
      title: 'Generate',
      body: '10–30 UGC variants in minutes. Different creators, hooks, captions, pacing. Pick the ones worth testing.',
    },
    {
      n: '03',
      title: 'Ship + learn',
      body: 'Export to Ads Manager. The platform algorithm finds the winners. Feed the data back into the next brief.',
    },
  ]

  return (
    <section ref={ref} data-theme="dark" className="w-full bg-[#0A2843] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 max-w-2xl">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[#FF4F30]">
            How it works
          </div>
          <h2 className="mt-4 text-[clamp(40px,6vw,72px)] font-black leading-[0.95] tracking-[-0.03em] text-white">
            Three steps.
            <br />
            <span className="text-[rgba(255,255,255,0.40)]">Same-day creative.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.n}
              className="ugc-step flex flex-col rounded-2xl border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.04)] backdrop-blur-md p-8"
            >
              <div className="font-black text-[clamp(48px,5vw,72px)] leading-none text-[rgba(255,255,255,0.15)] mb-6">
                {step.n}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {step.title}
              </h3>
              <p className="text-[15px] leading-[1.65] text-[rgba(255,255,255,0.70)]">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 4 — SERVICE TIER (Westar, light secondary mention)          */
/* ------------------------------------------------------------------ */
const ServiceTier = () => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.ugc-service', {
        y: 24,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="ugc-service">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[rgba(17,17,17,0.45)]">
            Don&apos;t want to run it yourself?
          </div>
          <h2 className="mt-5 text-[clamp(28px,3.5vw,44px)] font-extrabold leading-[1.05] tracking-[-0.02em] text-[#111111]">
            We&apos;ll run UGC ads for you, end to end.
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[15px] leading-[1.65] text-[rgba(17,17,17,0.60)]">
            Brief, generate, test, scale — managed by us, reporting weekly. Same app underneath, none of the time on your end.
          </p>
          <button
            onClick={() => openCalendly('ai_ugc_service_tier')}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[rgba(17,17,17,0.20)] bg-transparent px-6 py-3 text-sm font-semibold text-[#111111] hover:border-[#FF4F30] hover:text-[#FF4F30] transition-colors duration-200"
          >
            Book a strategy call <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* SECTION 5 — FINAL CTA (Oxford for gravitas)                         */
/* ------------------------------------------------------------------ */
const UgcFinalCTA = () => {
  return (
    <section data-theme="dark" className="w-full bg-[#0A2843] px-6 py-32 md:px-12">
      <div className="mx-auto max-w-3xl text-center">
        <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#FF4F30]">
          Start testing
        </div>
        <h2 className="mt-5 text-[clamp(36px,5vw,64px)] font-black leading-[0.95] tracking-[-0.03em] text-white">
          Ten ads a week.
          <br />
          <span className="text-[rgba(255,255,255,0.45)]">In your brand voice. Without the wait.</span>
        </h2>
        <div className="mt-12 flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => openCalendly('ai_ugc_final_early_access')}
            className="flex items-center gap-2 rounded-full bg-[#FF4F30] px-8 py-4 text-sm font-bold text-white hover:bg-[#E64528] transition-colors duration-200"
          >
            Get early access <ArrowRight size={16} />
          </button>
          <button
            onClick={() => openCalendly('ai_ugc_final_demo')}
            className="rounded-full border border-[rgba(255,255,255,0.30)] bg-transparent px-8 py-4 text-sm font-bold text-white hover:bg-[rgba(255,255,255,0.05)] transition-colors duration-200"
          >
            Book a demo
          </button>
        </div>
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------ */
/* PAGE                                                                */
/* ------------------------------------------------------------------ */
export default function AIUgcClient() {
  return (
    <main className="relative w-full selection:bg-[#FF4F30] selection:text-white">
      <Navbar />
      <UgcHero />
      <WhatItDoes />
      <HowItWorks />
      <ServiceTier />
      <Testimonials />
      <ClientLogos />
      <PageFAQ
        data={aiUgcFaqData}
        eyebrow="AI UGC FAQ"
        title="What teams ask about AI UGC ads."
        schemaId="ai-ugc-faq-schema"
      />
      <UgcFinalCTA />
    </main>
  )
}
