'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { trackFAQInteraction, trackCTAClick } from '@/utils/analytics'

const quickFaqData = [
  {
    id: 'speed',
    question: "How fast can we start?",
    answer: "Most businesses go live in days. We begin with a simple call flow and expand."
  },
  {
    id: 'complex',
    question: "What if a caller asks something complex?",
    answer: "The agent gathers details and escalates to your team automatically."
  },
  {
    id: 'integrations',
    question: "Will this work with our CRM or booking tool?",
    answer: "Yes. We integrate with popular CRMs and schedulers — or start with email summaries and add integrations later."
  },
  {
    id: 'data',
    question: "How do you handle sensitive data?",
    answer: "We minimize PHI/PII in prompts, control access to logs, and tailor to your compliance needs."
  },
  {
    id: 'pricing',
    question: "How is pricing structured?",
    answer: "Simple tiers by usage and features. Most businesses see ROI within 2-3 months."
  },
  {
    id: 'coaching',
    question: "Can I review conversations and coach the AI?",
    answer: "Yes. You'll get summaries, logs, and a feedback loop to improve."
  }
]

export default function QuickFAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
    
    // Track FAQ expand events
    trackFAQInteraction(newOpenItems.has(id) ? 'expand' : 'close', id, 'homepage')
  }

  const handleCTAClick = (cta: string) => {
    trackCTAClick(cta, 'quick_faq', cta === 'strategy_session' ? '/contact' : '/pricing')
  }

  return (
    <section className="py-16 bg-slate-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Quick Answers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Common questions about getting started with AI voice agents
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {quickFaqData.map((faq) => (
            <Card key={faq.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleItem(faq.id)}
              >
                <CardTitle className="text-white text-lg font-semibold flex items-center justify-between">
                  {faq.question}
                  {openItems.has(faq.id) ? (
                    <ChevronUp className="w-5 h-5 text-purple-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-purple-400" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.has(faq.id) && (
                <CardContent className="pt-0">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    {faq.answer}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      href="/contact"
                      onClick={() => handleCTAClick('strategy_session')}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                    >
                      Get Your Strategy Session
                    </Link>
                    {faq.id === 'pricing' && (
                      <Link
                        href="/pricing"
                        onClick={() => handleCTAClick('see_pricing')}
                        className="bg-slate-700 hover:bg-slate-600 text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                      >
                        See Pricing
                      </Link>
                    )}
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="text-purple-400 hover:text-purple-300 font-medium"
          >
            See all FAQs →
          </Link>
        </div>
      </div>
    </section>
  )
}