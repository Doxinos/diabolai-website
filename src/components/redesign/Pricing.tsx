'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { m } from 'framer-motion'
import { cn } from '@/lib/utils'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

/* ------------------------------------------------------------------ */
/* Tone styles                                                         */
/* ------------------------------------------------------------------ */

const toneStyles = {
  pilot: {
    card: 'bg-[#DCDBD3] border border-[rgba(17,17,17,0.08)]',
    text: 'text-[#111111]',
    button: 'bg-[#111111] text-[#DCDBD3] hover:bg-[#222222]',
    label: 'text-[rgba(17,17,17,0.45)]',
  },
  growth: {
    card: 'bg-[#0A2843]',
    text: 'text-white',
    button: 'bg-[#FF4F30] text-white hover:bg-[#E64528]',
    label: 'text-[rgba(255,255,255,0.50)]',
  },
  studio: {
    card: 'bg-[#DCDBD3] border border-[rgba(17,17,17,0.08)]',
    text: 'text-[#111111]',
    button: 'bg-[#FF4F30] text-white hover:bg-[#E64528]',
    label: 'text-[rgba(17,17,17,0.45)]',
  },
}

/* ------------------------------------------------------------------ */
/* CheckIcon                                                           */
/* ------------------------------------------------------------------ */

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 8L6.5 11.5L13 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/* ------------------------------------------------------------------ */
/* Feature data                                                        */
/* ------------------------------------------------------------------ */

const pilotFeatures = [
  'Single AI system deployment',
  '3-week delivery timeline',
  '30-day post-launch support',
  'Performance & ROI report',
  'Handoff documentation included',
]

const growthFeatures = [
  'Voice Agent + Content pipeline',
  'Ongoing optimisation & tuning',
  'Priority support (< 4h response)',
  'Monthly strategy calls',
  'New automations added monthly',
  'Full analytics dashboard',
]

const studioFeatures = [
  'Everything in Growth',
  'Custom AI avatar build',
  'Enterprise system integrations',
  'Dedicated AI engineer',
  'White-glove onboarding',
  'SLA & uptime guarantee',
]

/* ------------------------------------------------------------------ */
/* PricingCard                                                         */
/* ------------------------------------------------------------------ */

interface PricingCardProps {
  planName: string
  description: string
  price: string
  buttonText: string
  features: string[]
  isFeatured?: boolean
  tone: keyof typeof toneStyles
}

function PricingCard({ planName, description, price, buttonText, features, isFeatured, tone }: PricingCardProps) {
  const styles = toneStyles[tone]
  const checkColor = 'text-[#FF4F30]'
  const featureTextColor = tone === 'growth' ? 'text-[rgba(255,255,255,0.75)]' : 'text-[rgba(17,17,17,0.65)]'
  const dividerColor = tone === 'growth' ? 'border-[rgba(255,255,255,0.10)]' : 'border-[rgba(17,17,17,0.08)]'

  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative rounded-3xl p-10 flex flex-col',
        styles.card,
        isFeatured ? 'shadow-2xl lg:scale-105 z-10' : ''
      )}
    >
      {isFeatured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-block px-6 py-2 bg-[#FF4F30] text-white text-[10px] font-mono uppercase tracking-[0.14em] rounded-full">
            Most Chosen
          </span>
        </div>
      )}
      <p className={cn('font-mono text-[11px] uppercase tracking-[0.18em] mb-6', styles.label)}>{planName}</p>
      <h3 className={cn('text-[clamp(52px,6vw,72px)] font-black leading-none tracking-[-0.04em] mb-4', styles.text)}>
        {price}
      </h3>
      <p className={cn('text-[15px] leading-relaxed mb-8', styles.label)}>{description}</p>
      <div className={cn('border-t mb-8', dividerColor)} />
      <ul className="flex flex-col gap-3 mb-10 flex-1">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <CheckIcon className={cn('w-4 h-4 mt-0.5 flex-shrink-0', checkColor)} />
            <span className={cn('text-[14px] leading-snug', featureTextColor)}>{feature}</span>
          </li>
        ))}
      </ul>
      <button
        className={cn(
          'btn-magnetic w-full rounded-full py-5 text-sm font-bold transition-colors duration-200',
          styles.button
        )}
      >
        {buttonText}
      </button>
    </m.div>
  )
}

/* ------------------------------------------------------------------ */
/* Pricing section                                                     */
/* ------------------------------------------------------------------ */

export default function Pricing() {
  return (
    <section id="pricing" className="w-full bg-white px-6 py-32 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <div className="font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            How we work
          </div>
          <h2 className="mt-4 text-[clamp(52px,7vw,88px)] font-black leading-[0.95] tracking-[-0.04em] text-[#111111]">
            Start small.
            <br />
            <span className="text-[rgba(17,17,17,0.35)]">Scale when it works.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
          <PricingCard
            tone="pilot"
            planName="Pilot"
            price="One system"
            description="One AI system. Three weeks. Prove the ROI."
            buttonText="Book a Call"
            features={pilotFeatures}
          />
          <PricingCard
            tone="growth"
            planName="Growth"
            price="Full stack"
            description="Full AI stack running and compounding every month."
            buttonText="Book a Call"
            isFeatured
            features={growthFeatures}
          />
          <PricingCard
            tone="studio"
            planName="Studio"
            price="Custom"
            description="End-to-end AI transformation with your own avatar."
            buttonText="Book a Call"
            features={studioFeatures}
          />
        </div>
      </div>
    </section>
  )
}
