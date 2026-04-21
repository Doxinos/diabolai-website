'use client'

import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import { ChevronDown } from 'lucide-react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { FAQItem } from '@/data/mainFaq'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface PageFAQProps {
  data: FAQItem[]
  eyebrow?: string
  title?: string
  schemaId?: string
}

function buildFaqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  }
}

export default function PageFAQ({
  data,
  eyebrow = 'FAQ',
  title = 'Questions we get asked.',
  schemaId = 'page-faq-structured-data',
}: PageFAQProps) {
  const [open, setOpen] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-faq-item',
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
    <>
      <Script id={schemaId} type="application/ld+json" strategy="beforeInteractive">
        {JSON.stringify(buildFaqSchema(data))}
      </Script>
      <section ref={ref} className="w-full bg-white px-6 py-24 md:px-12">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 font-mono text-[12px] uppercase tracking-[0.14em] text-[rgba(17,17,17,0.40)]">
            {eyebrow}
          </div>
          <h2 className="mb-14 text-[clamp(36px,5vw,52px)] font-black leading-[1] tracking-[-0.03em] text-[#111111]">
            {title}
          </h2>

          <div className="flex flex-col">
            {data.map((item, i) => (
              <div key={i} className="page-faq-item border-b border-[rgba(17,17,17,0.08)]">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-[#FF4F30]"
                  aria-expanded={open === i}
                >
                  <span className="text-[15px] font-semibold leading-snug text-[#111111] md:text-[17px]">
                    {item.question}
                  </span>
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
                    <p className="text-[14px] leading-[1.7] text-[rgba(17,17,17,0.55)] md:text-[15px]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
