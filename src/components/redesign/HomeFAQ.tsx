'use client'

import { useState, useEffect, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const faqItems = [
  {
    q: 'What does AI voice + AI video actually do for a Builder like me?',
    a: 'AI voice agents answer every call 24/7 in your voice, qualify leads, and book meetings while you sleep. AI video puts you in front of your market every day — UGC ads on every feed, AI avatar videos in any language, hero commercials when it matters. Together they let you show up everywhere your customers look without scaling headcount.',
  },
  {
    q: 'How fast can we go live?',
    a: 'A first AI voice agent typically launches in 1–2 weeks. AI video and UGC ad creative can ship within a week of brief. AI avatar setup takes about a day of training footage; the avatar is generating videos within a week. We start with one focused use case, prove it works, then expand.',
  },
  {
    q: 'Will AI content actually sound like me, not generic AI?',
    a: 'Yes — if you give it a brand voice framework. We capture your vocabulary, tone, sentence rhythm, examples you\'re proud of, and patterns to avoid, then constrain every generation to that voice. The output reads (and sounds) like you wrote it. Generic prompts make generic AI; constrained prompts make on-brand AI.',
  },
  {
    q: 'Will this integrate with my CRM, calendar, and existing tools?',
    a: 'Yes. Voice agents integrate with Salesforce, HubSpot, Pipedrive, Calendly, Google Calendar, Zendesk, Freshdesk, and most business systems with an API. AI video and content publish into your CMS, ad platforms, and social schedulers. If your tool exposes an API or webhook, we can wire it.',
  },
  {
    q: 'How is this different from hiring more staff?',
    a: 'Different shape, same goal — capture more revenue without losing your weekends. Voice agents and AI video work 24/7, scale instantly with demand, never burn out, and keep quality consistent on the work humans find repetitive. Most Builders don\'t replace humans with AI; they let AI handle volume so humans focus on the conversations and creative judgment that actually need a person.',
  },
  {
    q: 'Is this secure and GDPR/HIPAA compliant?',
    a: 'Yes — enterprise-grade security by default: encrypted transport, encrypted storage, role-based access, full audit logging. For regulated industries we configure GDPR-compliant deployments for EU-based businesses, HIPAA-aligned for U.S. healthcare, and CCPA-aligned for California. Compliance specifics are scoped during the audit.',
  },
]

export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-item',
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power2.out',
          scrollTrigger: { trigger: ref.current, start: 'top 80%', once: true },
        }
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="w-full bg-white px-6 py-24 md:px-12">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">FAQ</div>
        <h2 className="mb-14 text-[clamp(36px,5vw,52px)] font-black leading-[1] tracking-[-0.03em] text-[#111111]">
          Questions we get asked.
        </h2>

        <div className="flex flex-col">
          {faqItems.map((item, i) => (
            <div key={i} className="faq-item border-b border-[rgba(17,17,17,0.08)]">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#FF4F30]"
              >
                <span className="text-[15px] font-semibold leading-snug text-[#111111] md:text-[17px]">{item.q}</span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-[rgba(17,17,17,0.35)] transition-transform duration-300 ${
                    open === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  open === i ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <p className="text-[14px] leading-[1.7] text-[rgba(17,17,17,0.55)] md:text-[15px]">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
