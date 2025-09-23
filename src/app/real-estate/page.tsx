'use client'

import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EmbeddedFAQ from '@/components/EmbeddedFAQ'
import { realEstateFaqData } from '@/data/realEstateFaq'
import { trackCTAClick, trackScheduleClick } from '@/utils/analytics'
import { Calendar, CreditCard, MessageSquare, Users, CheckCircle, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Voice Agents for Real Estate - DiabolAI',
  description: 'AI voice agents for real estate professionals. 24/7 lead qualification, showing scheduling, and client follow-up. Never miss a potential buyer again.',
  keywords: 'AI voice agents real estate, real estate AI receptionist, lead qualification, showing scheduling, real estate automation',
  // No noindex - this page has full content and should be indexed
}

export default function RealEstatePage() {
  const handleCTAClick = (ctaType: string) => {
    trackCTAClick(ctaType, 'real_estate_page', '/contact')
  }

  const handleScheduleClick = () => {
    trackScheduleClick('real_estate_page')
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  const integrations = [
    { name: 'Google Calendar', category: 'Calendars' },
    { name: 'Outlook', category: 'Calendars' },
    { name: 'HubSpot', category: 'CRMs' },
    { name: 'Salesforce', category: 'CRMs' },
    { name: 'Pipedrive', category: 'CRMs' },
    { name: 'Follow Up Boss', category: 'CRMs' },
    { name: 'Zoho', category: 'CRMs' },
    { name: 'GoHighLevel', category: 'CRMs' },
    { name: 'WhatsApp', category: 'Channels' },
    { name: 'Instagram Messenger', category: 'Channels' },
    { name: 'Phone (voice)', category: 'Channels' }
  ]

  const howItWorksSteps = [
    {
      number: 1,
      title: 'Capture',
      description: 'Inquiries from site, portals, ads, WhatsApp/Messenger',
      icon: MessageSquare
    },
    {
      number: 2,
      title: 'Qualify',
      description: 'Budget, timeline, location, buyer vs seller',
      icon: Users
    },
    {
      number: 3,
      title: 'Schedule',
      description: 'Showings auto-scheduled; confirmations + reminders',
      icon: Calendar
    },
    {
      number: 4,
      title: 'Sync',
      description: 'Pushes notes and activity to your CRM',
      icon: CreditCard
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              AI Voice Assistant for Real Estate —{' '}
              <span className="text-brand-cerise">Never Miss a Lead</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
              Built for real estate. Your AI Assistant answers every inquiry, qualifies buyers/sellers, 
              schedules showings, and syncs to your CRM — 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleScheduleClick}
                className="bg-brand-cerise hover:bg-brand-cerise-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                Book Your Strategy Session
              </button>
              <button
                onClick={() => handleCTAClick('see_pricing')}
                className="bg-gray-100 hover:bg-gray-200 text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
              >
                See Pricing
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes Section */}
      <section className="py-16 bg-brand-lily-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Transform Your Real Estate Business
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-cerise rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">24/7 Availability</h3>
              <p className="text-gray-600">Faster response time means higher conversion rates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-cornflower rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">More Qualified Showings</h3>
              <p className="text-gray-600">Fewer no-shows with confirmations and better agent time use</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-nile-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Focus on Closing</h3>
              <p className="text-gray-600">Agents focus on closing, not chasing first touches</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your business maintains complete control while AI handles the execution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-brand-cerise rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedded FAQ Section */}
      <section className="py-16 bg-brand-lily-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about AI voice assistants for real estate
            </p>
          </div>
          <EmbeddedFAQ 
            faqs={realEstateFaqData} 
            industry="real_estate" 
            showPricingCTA={true}
          />
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Integrations
            </h2>
            <p className="text-xl text-gray-600">
              Works with the tools you already use
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Calendars', 'CRMs', 'Channels'].map((category) => (
              <div key={category} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-black mb-4">{category}</h3>
                <ul className="space-y-2">
                  {integrations
                    .filter(integration => integration.category === category)
                    .map((integration, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-brand-cerise" />
                        <span className="text-gray-700">{integration.name}</span>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Never Miss Another Lead?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            See how AI voice assistants can transform your real estate business with 24/7 lead qualification and automated showing scheduling.
          </p>
          <button
            onClick={handleScheduleClick}
            className="bg-brand-cerise hover:bg-brand-cerise-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Book Your Strategy Session
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}