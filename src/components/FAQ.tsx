'use client'

import { useState } from 'react'

const faqs = [
  { q: 'Funkar det på svenska och engelska?', a: 'Ja, fullt stöd för båda.' },
  { q: 'Måste vi byta CRM?', a: 'Nej, vi kopplar till ert befintliga system.' },
  { q: 'Behöver vi utvecklare?', a: 'Nej — vi kör no-code/low-code och färdiga integrationer.' },
  { q: 'Hur snabbt kan vi vara live?', a: 'Ofta inom 1–3 veckor beroende på scope.' },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  return (
    <section id="faq" className="section-padding">
      <div className="container-max">
        <h2 className="text-center mb-10">FAQ</h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((item, idx) => (
            <div key={idx} className="glass-effect p-4">
              <button
                className="w-full text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold">{item.q}</span>
                <span className="text-white/50">{openIndex === idx ? '−' : '+'}</span>
              </button>
              {openIndex === idx && (
                <p className="mt-2 text-white/70">{item.a}</p>
              )}
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button
            className="btn-primary"
            onClick={() => {
              if (typeof window !== 'undefined' && (window as any).Calendly) {
                (window as any).Calendly.initPopupWidget({ url: 'https://calendly.com/peter-diabol/30min' })
              }
            }}
          >
            Talk to an Expert
          </button>
        </div>
      </div>
    </section>
  )
}


