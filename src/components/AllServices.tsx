'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Phone, Mail, Workflow, Database, Target, Zap, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: Phone,
    title: 'AI Voice Agents',
    description: 'Smart phone agents that book meetings, qualify leads, and handle customer service calls 24/7.',
    features: ['Booking & Scheduling', 'Lead Qualification', 'Customer Support', 'Follow-up Calls'],
    badge: 'Most Popular',
    badgeVariant: 'default' as const,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Mail,
    title: 'Sales Outreach Automation',
    description: 'Personalized cold email sequences that warm up leads and book qualified meetings.',
    features: ['Cold Email Campaigns', 'Personalized Messaging', 'A/B Testing', 'Response Handling'],
    badge: 'High ROI',
    badgeVariant: 'secondary' as const,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Connect your tools and automate repetitive tasks to free up your team for strategic work.',
    features: ['Process Automation', 'Tool Integration', 'Task Routing', 'Notification Systems'],
    badge: 'Time Saver',
    badgeVariant: 'outline' as const,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    icon: Database,
    title: 'CRM Integration & Sync',
    description: 'Seamless data flow between your CRM, calendar, and communication tools.',
    features: ['Data Synchronization', 'Real-time Updates', 'Custom Fields', 'Reporting Dashboard'],
    badge: 'Essential',
    badgeVariant: 'secondary' as const,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    icon: Target,
    title: 'Lead Nurturing Sequences',
    description: 'Automated follow-up sequences that guide prospects through your sales funnel.',
    features: ['Email Sequences', 'Behavioral Triggers', 'Scoring System', 'Conversion Tracking'],
    badge: 'Converts',
    badgeVariant: 'outline' as const,
    gradient: 'from-indigo-500 to-purple-500'
  },
  {
    icon: Zap,
    title: 'Custom AI Solutions',
    description: 'Tailored AI automations designed specifically for your unique business processes.',
    features: ['Custom Development', 'API Integrations', 'Advanced Logic', 'Ongoing Support'],
    badge: 'Enterprise',
    badgeVariant: 'secondary' as const,
    gradient: 'from-yellow-500 to-orange-500'
  }
]

export default function AllServices() {
  const openCalendly = () => {
    if (typeof window !== 'undefined' && (window as any).Calendly) {
      (window as any).Calendly.initPopupWidget({
        url: 'https://calendly.com/peter-diabol/30min'
      })
    }
  }

  return (
    <section className="section-padding relative bg-gradient-to-b from-black to-gray-900">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container-max relative z-10">
        <div className="grid-container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-12 text-center mb-16"
          >
            <h2 className="mb-6">
              <span className="block text-white">Beyond Voice —</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Complete AI Automation
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Start with AI Voice Agents, then scale with our full suite of automation services. 
              One team, complete solution.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all duration-300 group">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant={service.badgeVariant} className="text-xs">
                          {service.badge}
                        </Badge>
                      </div>
                      <div>
                        <CardTitle className="text-xl text-white group-hover:text-blue-300 transition-colors">
                          {service.title}
                        </CardTitle>
                        <CardDescription className="text-white/70 mt-2">
                          {service.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-2 text-sm text-white/60">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="col-span-12 mt-16 text-center"
          >
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl p-8 md:p-12 border border-white/10">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Automate Your Entire Business?
              </h3>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Start with AI Voice Agents and discover how we can transform every aspect of your operations.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-primary"
                onClick={openCalendly}
              >
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
