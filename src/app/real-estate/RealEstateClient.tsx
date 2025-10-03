'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import EmbeddedFAQ from '@/components/EmbeddedFAQ'
import { realEstateFaqData } from '@/data/realEstateFaq'
import { trackCTAClick, trackScheduleClick } from '@/utils/analytics'
import { Calendar, CreditCard, MessageSquare, Users, CheckCircle, ArrowRight } from 'lucide-react'

export default function RealEstateClient() {
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
    { name: 'Zoho CRM', category: 'CRMs' },
    { name: 'Monday.com', category: 'Project Management' },
    { name: 'Asana', category: 'Project Management' },
    { name: 'Slack', category: 'Communication' },
    { name: 'Microsoft Teams', category: 'Communication' },
    { name: 'WhatsApp Business', category: 'Communication' }
  ]

  const features = [
    {
      icon: MessageSquare,
      title: "Lead Qualification",
      description: "Automatically qualify leads by asking the right questions and scoring prospects based on your criteria."
    },
    {
      icon: Calendar,
      title: "Showing Scheduling",
      description: "Schedule property viewings directly with your calendar, handling availability and confirmations."
    },
    {
      icon: Users,
      title: "Client Follow-up",
      description: "Nurture relationships with automated follow-ups, birthday wishes, and market updates."
    },
    {
      icon: CreditCard,
      title: "Commission Tracking",
      description: "Track deal progress and automatically calculate commissions as transactions move through stages."
    }
  ]

  const useCases = [
    {
      title: "24/7 Lead Response",
      description: "Never miss another lead. Your AI voice agent responds to inquiries instantly, even at 2 AM.",
      benefits: ["Instant response time", "Lead qualification", "Appointment scheduling"]
    },
    {
      title: "Buyer Qualification",
      description: "Pre-qualify buyers before you invest your time, ensuring you focus on serious prospects.",
      benefits: ["Budget verification", "Timeline assessment", "Preference gathering"]
    },
    {
      title: "Listing Management",
      description: "Handle property inquiries, schedule showings, and provide detailed property information.",
      benefits: ["Property details", "Virtual tour scheduling", "Market information"]
    },
    {
      title: "Client Nurturing",
      description: "Maintain relationships with past clients and generate referrals through regular touchpoints.",
      benefits: ["Market updates", "Birthday reminders", "Referral requests"]
    }
  ]

  const benefits = [
    "Qualify leads while you sleep",
    "Never miss a hot prospect again",
    "Schedule showings automatically",
    "Handle multiple conversations simultaneously",
    "Follow up with past clients consistently",
    "Reduce admin work by 70%"
  ]

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-16">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Never Miss Another
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Real Estate Lead
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
            AI voice agents that qualify leads, schedule showings, and nurture clients 24/7. 
            Turn every call into opportunity.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleScheduleClick}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3"
            >
              <Calendar className="w-5 h-5" />
              Schedule Demo
            </button>
            <button 
              onClick={() => handleCTAClick('roi_calculator')}
              className="btn-secondary text-lg px-8 py-4"
            >
              Calculate ROI
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
              <div className="text-white/80">Lead Response</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-white/80">Qualification Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl font-bold text-green-400 mb-2">3x</div>
              <div className="text-white/80">More Showings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to <span className="text-blue-600">Close More Deals</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our AI voice agents handle the entire lead journey from first contact to closing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Perfect for Every <span className="text-purple-600">Real Estate Need</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.description}</p>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-blue-900 to-purple-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Top Agents Choose DiabolAI
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transform how you handle leads with AI-powered automation built for real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Seamless <span className="text-blue-600">CRM Integration</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Works with your existing tools and workflows. No disruption to your current process.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {integrations.map((integration, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-sm text-gray-500 mb-2">{integration.category}</div>
                <div className="font-semibold text-gray-900">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Estate <span className="text-purple-600">FAQ</span>
            </h2>
          </div>
          <EmbeddedFAQ faqs={realEstateFaqData} industry="real-estate" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Never Miss Another Lead?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join successful real estate agents who've automated their lead handling with AI.
          </p>
          <button 
            onClick={handleScheduleClick}
            className="btn-primary bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-4 flex items-center gap-3 mx-auto"
          >
            <Calendar className="w-5 h-5" />
            Schedule Your Demo
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}