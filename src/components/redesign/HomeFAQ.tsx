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
    q: 'What is AI transformation consulting and how can it help my business?',
    a: 'AI transformation consulting helps businesses identify, prioritize, and implement AI solutions that drive measurable results. We analyze your operations, identify high-impact opportunities, redesign processes, and implement tailored solutions — typically delivering 20-40% cost reduction and 2-3x faster processes within 6 months.',
  },
  {
    q: 'How fast can we start?',
    a: 'Most businesses go live in days. We begin with a simple call flow and expand from there. More complex implementations with CRM integrations or custom workflows may take 3-4 weeks.',
  },
  {
    q: 'What can AI voice agents do for my business?',
    a: 'AI voice agents handle customer support calls, qualify sales leads, schedule appointments, process orders, provide product information, and follow up with customers — all integrated with your existing CRM and business systems, 24/7.',
  },
  {
    q: 'Will this work with our CRM or booking tool?',
    a: 'Yes. We integrate with popular CRMs (Salesforce, HubSpot, Pipedrive), calendaring tools (Calendly, Google Calendar), helpdesk software, and most business applications via APIs or webhooks.',
  },
  {
    q: "What's the ROI of AI implementation?",
    a: 'Most businesses see 300-500% ROI within the first year. Returns come from reduced labor costs (30-70% on automated tasks), 2-3x faster processes, 24/7 customer engagement, and the ability to scale without proportional cost increases.',
  },
  {
    q: 'Are AI voice agents secure and compliant?',
    a: 'Yes. Our solutions are built with enterprise-grade security including data encryption, secure API connections, and compliance with GDPR, CCPA, and industry-specific regulations. Customer data is never shared with third parties.',
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
