import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowLeft } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI Voice Agent Pricing - DiabolAI',
  description: 'Transparent pricing for AI voice agents. Content coming soon.',
  robots: 'noindex, nofollow', // SEO protection until content is ready
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="container-max px-6 md:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            AI Voice Agent Pricing
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Content for this section is coming soon. In the meantime, see how our AI agents work or book a free strategy session.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
          <Link 
            href="/#how-it-works" 
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 text-white font-medium px-6 py-3 rounded-full border border-white/20 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            How It Works
          </Link>
          
          <Link 
            href="/#contact" 
            className="inline-flex items-center gap-3 bg-brand-cerise hover:bg-brand-cerise-dark text-white font-medium px-6 py-3 rounded-full transition-all duration-300"
          >
            Book Free Strategy Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Coming Soon Message */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Transparent Pricing Coming Soon</h2>
          <p className="text-white/70 mb-6">
            We're finalizing our pricing structure to ensure you get the best value for your AI voice agent needs. 
            Our pricing will be transparent, scalable, and designed for businesses of all sizes.
          </p>
          <p className="text-white/70">
            For immediate pricing information, please book a consultation call and we'll provide a custom quote based on your specific requirements.
          </p>
        </div>

      </div>
    </div>
  )
}