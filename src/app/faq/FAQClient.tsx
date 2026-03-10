'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Navigation from '@/components/Navigation'
import { trackScheduleClick } from '@/utils/analytics'

interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  category: string
  questions: FAQItem[]
}

interface FAQClientProps {
  faqData: FAQCategory[]
  structuredData: any
}

export default function FAQClient({ faqData, structuredData }: FAQClientProps) {
  const handleScheduleCall = () => {
    trackScheduleClick('faq_page')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <Navigation />
      <div className="min-h-screen bg-black pt-16">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get answers to common questions about AI voice agents, implementation, and how they can transform your business operations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {faqData.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-white mb-6 border-b border-brand-orange/30 pb-3">
                  {category.category}
                </h2>
                
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => (
                    <Card key={faqIndex} className="bg-white/5 border-white/10 backdrop-blur-sm">
                      <CardHeader>
                        <CardTitle className="text-white text-lg font-semibold">
                          {faq.question}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-300 mb-6">
                Can't find the answer you're looking for? Schedule a call with our team to discuss how AI voice agents can benefit your specific business needs.
              </p>
              <button
                onClick={handleScheduleCall}
                className="btn-primary text-lg px-8 py-4"
              >
                Schedule a Call
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}