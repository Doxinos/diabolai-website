import type { Metadata } from 'next'
import FAQClient from './FAQClient'

export const metadata: Metadata = {
  title: 'FAQ - AI Voice Agents | DiabolAI',
  description: 'Frequently asked questions about AI voice agents, implementation, costs, and capabilities. Get answers to common questions about voice AI technology.',
  openGraph: {
    title: 'AI Voice Agent FAQ | DiabolAI',
    description: 'Complete answers to your questions about AI voice agents and voice AI technology.',
    type: 'website',
  }
}

const faqData = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is an AI voice agent?",
        answer: "An AI voice agent is an intelligent conversational system that can understand, process, and respond to human speech in real-time. Unlike traditional chatbots, voice agents use advanced speech recognition, natural language processing, and text-to-speech technology to create natural, human-like conversations over phone calls or voice interfaces."
      },
      {
        question: "How do AI voice agents work?",
        answer: "AI voice agents combine several technologies: speech-to-text converts your voice to text, large language models process and understand the conversation, business logic handles specific tasks and integrations, and text-to-speech converts responses back to natural-sounding voice. This happens in real-time, typically with response times under 500ms."
      },
      {
        question: "What can AI voice agents do for my business?",
        answer: "AI voice agents can handle customer support calls, qualify sales leads, schedule appointments, process orders, provide product information, conduct surveys, follow up with customers, and integrate with your existing CRM and business systems. They work 24/7 without breaks or holidays."
      }
    ]
  },
  {
    category: "Implementation & Setup",
    questions: [
      {
        question: "How long does it take to set up an AI voice agent?",
        answer: "Basic setup typically takes 1-2 weeks, including voice training, script development, and system integration. More complex implementations with extensive CRM integrations or custom workflows may take 3-4 weeks. We provide full support throughout the process."
      },
      {
        question: "Do I need technical knowledge to use AI voice agents?",
        answer: "No technical knowledge is required. We handle all the technical setup, integration, and maintenance. You'll receive an easy-to-use dashboard to monitor calls, update scripts, and manage your voice agent's performance."
      },
      {
        question: "Can AI voice agents integrate with my existing systems?",
        answer: "Yes, our voice agents integrate with popular CRM systems (Salesforce, HubSpot, Pipedrive), calendaring tools (Calendly, Google Calendar), helpdesk software (Zendesk, Freshdesk), and most business applications via APIs or webhooks."
      },
      {
        question: "What phone numbers and systems are supported?",
        answer: "We support all phone number types including toll-free, local, and international numbers. Our system works with existing phone infrastructure and can handle both inbound and outbound calls through VOIP, traditional phone lines, and cloud telephony platforms."
      }
    ]
  },
  {
    category: "Capabilities & Performance",
    questions: [
      {
        question: "How natural do AI voice agents sound?",
        answer: "Our voice agents use advanced AI models that sound remarkably human-like. They can handle natural conversation flow, understand context, show empathy, and even adapt their tone based on the conversation. Most callers cannot distinguish them from human agents."
      },
      {
        question: "What languages do AI voice agents support?",
        answer: "We support over 25 languages including English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Chinese, Japanese, Korean, and many others. Voice agents can be configured to automatically detect language or switch languages during conversations."
      },
      {
        question: "Can AI voice agents handle complex conversations?",
        answer: "Yes, our voice agents use advanced AI models that can handle multi-turn conversations, understand context across the entire call, process complex requests, and even handle objections or difficult situations. They're trained on your specific business scenarios."
      },
      {
        question: "How accurate is speech recognition?",
        answer: "Our speech recognition achieves 95%+ accuracy in optimal conditions and maintains high accuracy even with accents, background noise, or poor connection quality. The system continuously learns and improves from interactions."
      }
    ]
  },
  {
    category: "Costs & ROI",
    questions: [
      {
        question: "How much do AI voice agents cost?",
        answer: "Pricing varies based on call volume, features, and integrations. Basic plans start at $297/month for up to 500 calls. Enterprise solutions are custom-priced. Most businesses see ROI within 2-3 months through reduced staffing costs and increased efficiency."
      },
      {
        question: "How do AI voice agents save money compared to human agents?",
        answer: "AI voice agents cost 70-90% less than human agents while working 24/7. They eliminate hiring, training, and management costs, reduce human error, and can handle unlimited concurrent calls. A single voice agent can replace 3-5 human agents."
      },
      {
        question: "What's the return on investment for AI voice agents?",
        answer: "Most businesses see 300-500% ROI within the first year. Benefits include reduced labor costs, increased lead conversion rates, 24/7 availability, consistent service quality, and the ability to scale without proportional cost increases."
      }
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "Are AI voice agents secure and compliant?",
        answer: "Yes, our voice agents are built with enterprise-grade security including data encryption, secure API connections, and compliance with GDPR, CCPA, and industry-specific regulations like HIPAA for healthcare applications."
      },
      {
        question: "How is customer data protected?",
        answer: "All voice data is encrypted in transit and at rest. We follow zero-trust security principles, implement regular security audits, and provide detailed logs for compliance. Customer data is never shared with third parties without explicit consent."
      },
      {
        question: "Can AI voice agents handle sensitive information?",
        answer: "Yes, with proper security measures. For sensitive industries like healthcare or finance, we implement additional security layers including voice biometrics, data masking, and specialized compliance protocols."
      }
    ]
  },
  {
    category: "Industry-Specific",
    questions: [
      {
        question: "Do AI voice agents work for healthcare practices?",
        answer: "Yes, healthcare voice agents can handle appointment scheduling, insurance verification, prescription refills, patient follow-ups, and basic triage while maintaining HIPAA compliance and patient privacy."
      },
      {
        question: "Can AI voice agents help with real estate?",
        answer: "Absolutely. Real estate voice agents can qualify leads, schedule property showings, provide property information, follow up with prospects, and integrate with MLS systems and real estate CRMs."
      },
      {
        question: "How do AI voice agents work for e-commerce?",
        answer: "E-commerce voice agents can handle order status inquiries, process returns, provide product recommendations, capture customer feedback, and manage customer support calls, integrating with platforms like Shopify, WooCommerce, and Magento."
      }
    ]
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqData.flatMap(category => 
    category.questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  )
}

export default function FAQPage() {
  return <FAQClient faqData={faqData} structuredData={structuredData} />
}