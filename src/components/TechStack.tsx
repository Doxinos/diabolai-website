'use client'

import { motion } from 'framer-motion'

const techStack = [
  // Core AI Voice Platforms
  { name: 'Vapi', category: 'AI Voice' },
  { name: 'Retell', category: 'AI Voice' },
  { name: 'ElevenLabs', category: 'AI Voice' },
  { name: 'OpenAI', category: 'AI' },
  
  // Supporting AI Tools
  { name: 'Claude', category: 'AI' },
  { name: 'Whisper', category: 'AI' },
  { name: 'Google', category: 'Cloud AI' },
  { name: 'Microsoft', category: 'Azure AI' },
  
  // Automation & Integration
  { name: 'Make', category: 'Automation' },
  { name: 'Zapier', category: 'Integration' },
  { name: 'n8n', category: 'Automation' },
  
  // CRM & Business Tools
  { name: 'HubSpot', category: 'CRM' },
  { name: 'ClickUp', category: 'Project Management' },
  { name: 'Calendly', category: 'Scheduling' },
  { name: 'GoHighLevel', category: 'All-in-One' },
  
  // Communication & Infrastructure
  { name: 'Twilio', category: 'Communication' }
]

// Duplicate the array for seamless loop
const duplicatedTechStack = [...techStack, ...techStack]

export default function TechStack() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="mb-6">
            <span className="block text-white">Powered by</span>
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Enterprise-Grade Tools
            </span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            We use the most advanced AI platforms and automation tools to deliver reliable, 
            scalable solutions for your business.
          </p>
        </motion.div>

        {/* Flowing Logo Animation */}
        <div className="relative">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-16 py-8"
              animate={{
                x: [0, -100 * techStack.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {duplicatedTechStack.map((tool, index) => (
                <motion.div
                  key={`${tool.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-24 h-24 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    {/* For now, using text. Replace with actual logo images when available */}
                    <div className="text-center">
                      <div className="text-white text-sm font-semibold leading-tight">
                        {tool.name}
                      </div>
                      <div className="text-white/50 text-xs mt-1">
                        {tool.category}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-white/60 text-sm">
            <span className="text-blue-400 font-semibold">15+ Years</span> of enterprise experience • 
            <span className="text-purple-400 font-semibold"> Cutting-edge AI</span> • 
            <span className="text-cyan-400 font-semibold"> Proven at scale</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
