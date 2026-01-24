'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Link from 'next/link'
import { trackFAQInteraction, trackCTAClick } from '@/utils/analytics'

interface FAQItem {
  id: string
  question: string
  answer: string
}

interface EmbeddedFAQProps {
  faqs: FAQItem[]
  industry?: string
  showPricingCTA?: boolean
}

export default function EmbeddedFAQ({ faqs, industry, showPricingCTA = true }: EmbeddedFAQProps) {
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
    trackFAQInteraction(newOpenItems.has(id) ? 'expand' : 'close', id, industry)
  }

  const handleCTAClick = (cta: string) => {
    trackCTAClick(cta, `embedded_faq_${industry || 'general'}`, cta === 'strategy_session' ? '/contact' : '/pricing')
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq) => (
        <Card key={faq.id} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
          <CardHeader
            className="cursor-pointer"
            onClick={() => toggleItem(faq.id)}
          >
            <CardTitle className="text-white text-lg font-semibold flex items-center justify-between">
              {faq.question}
              {openItems.has(faq.id) ? (
                <ChevronUp className="w-5 h-5 text-brand-orange" />
              ) : (
                <ChevronDown className="w-5 h-5 text-brand-orange" />
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
                  className="bg-brand-orange hover:bg-brand-orange-dark text-white px-4 py-2 rounded-lg font-medium transition-colors text-center"
                >
                  Get Your Strategy Session
                </Link>
                {showPricingCTA && (
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
  )
}