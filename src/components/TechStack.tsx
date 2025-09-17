'use client'

import { motion } from 'framer-motion'

const techStack = [
  // Core AI Voice Platforms (custom text for specialty platforms)
  { name: 'Vapi', category: 'AI Voice', logo: null, color: 'from-blue-500 to-blue-600' },
  { name: 'Retell', category: 'AI Voice', logo: null, color: 'from-purple-500 to-purple-600' },
  { name: 'ElevenLabs', category: 'AI Voice', logo: null, color: 'from-green-500 to-green-600' },
  { name: 'OpenAI', category: 'AI', logo: '/logos/tech/openai.svg', color: 'from-emerald-500 to-emerald-600' },

  // Supporting AI Tools
  { name: 'Claude', category: 'AI', logo: '/logos/tech/anthropic.svg', color: 'from-orange-500 to-orange-600' },
  { name: 'Whisper', category: 'AI', logo: null, color: 'from-indigo-500 to-indigo-600' },
  { name: 'Google', category: 'Cloud AI', logo: '/logos/tech/google.svg', color: 'from-blue-500 to-red-500' },
  { name: 'Microsoft', category: 'Azure AI', logo: '/logos/tech/microsoft.svg', color: 'from-blue-600 to-blue-700' },

  // Automation & Integration
  { name: 'Make', category: 'Automation', logo: '/logos/tech/make.svg', color: 'from-purple-600 to-purple-700' },
  { name: 'Zapier', category: 'Integration', logo: '/logos/tech/zapier.svg', color: 'from-orange-500 to-orange-600' },
  { name: 'n8n', category: 'Automation', logo: null, color: 'from-pink-500 to-pink-600' },

  // CRM & Business Tools
  { name: 'HubSpot', category: 'CRM', logo: '/logos/tech/hubspot.svg', color: 'from-orange-500 to-red-500' },
  { name: 'ClickUp', category: 'Project Management', logo: null, color: 'from-pink-500 to-purple-500' },
  { name: 'Calendly', category: 'Scheduling', logo: '/logos/tech/calendly.svg', color: 'from-blue-500 to-blue-600' },
  { name: 'GoHighLevel', category: 'All-in-One', logo: null, color: 'from-green-500 to-blue-500' },

  // Communication & Infrastructure
  { name: 'Twilio', category: 'Communication', logo: '/logos/tech/twilio.svg', color: 'from-red-500 to-red-600' },

  // Development & Infrastructure
  { name: 'GitHub', category: 'Development', logo: '/logos/tech/github.svg', color: 'from-gray-700 to-gray-800' }
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

                {/* Flowing Logo Animation - Two Rows */}
        <div className="relative space-y-8">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* First Row - Moving Left to Right */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-16 py-4"
              animate={{
                x: [-100 * (techStack.length / 2), 0]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
              {[...techStack.slice(0, Math.ceil(techStack.length / 2)), ...techStack.slice(0, Math.ceil(techStack.length / 2))].map((tool, index) => (
                <motion.div
                  key={`row1-${tool.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    {/* Colored gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                    {tool.logo ? (
                      /* Real SVG Logo with color styling */
                      <div className="text-center relative z-10">
                        <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${tool.color} p-1.5 flex items-center justify-center`}>
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="w-full h-full filter brightness-0 invert"
                          />
                        </div>
                        <div className="text-white/70 text-xs mt-1 font-medium">
                          {tool.name}
                        </div>
                      </div>
                    ) : (
                      /* Styled text for specialty platforms with gradient background */
                      <div className="text-center relative z-10">
                        <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-1`}>
                          <div className="text-white text-xs font-bold">
                            {tool.name.substring(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <div className="text-white text-xs font-medium leading-tight">
                          {tool.name}
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Second Row - Moving Right to Left */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex space-x-16 py-4"
              animate={{
                x: [0, -100 * (techStack.length / 2)]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 25,
                  ease: "linear",
                },
              }}
            >
                            {[...techStack.slice(Math.ceil(techStack.length / 2)), ...techStack.slice(Math.ceil(techStack.length / 2))].map((tool, index) => (
                <motion.div
                  key={`row2-${tool.name}-${index}`}
                  className="flex-shrink-0 group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-20 h-20 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center group-hover:scale-105 transition-all duration-300 relative overflow-hidden">
                    {/* Colored gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>

                    {tool.logo ? (
                      /* Real SVG Logo with color styling */
                      <div className="text-center relative z-10">
                        <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${tool.color} p-1.5 flex items-center justify-center`}>
                          <img
                            src={tool.logo}
                            alt={`${tool.name} logo`}
                            className="w-full h-full filter brightness-0 invert"
                          />
                        </div>
                        <div className="text-white/70 text-xs mt-1 font-medium">
                          {tool.name}
                        </div>
                      </div>
                    ) : (
                      /* Styled text for specialty platforms with gradient background */
                      <div className="text-center relative z-10">
                        <div className={`w-10 h-10 mx-auto rounded-lg bg-gradient-to-br ${tool.color} flex items-center justify-center mb-1`}>
                          <div className="text-white text-xs font-bold">
                            {tool.name.substring(0, 2).toUpperCase()}
                          </div>
                        </div>
                        <div className="text-white text-xs font-medium leading-tight">
                          {tool.name}
                        </div>
                      </div>
                    )}
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
