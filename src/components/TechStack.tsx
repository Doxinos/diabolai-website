'use client'

export default function TechStack() {
  const logos = ['ElevenLabs', 'GPT-4o', 'Claude', 'Make', 'n8n', 'Zapier', 'Apollo.io', 'Anymail Finder', 'HubSpot', 'Pipedrive', 'GoHighLevel', 'Calendly']
  return (
    <section id="tech" className="section-padding">
      <div className="container-max">
        <h2 className="text-center mb-10">Tech stack / Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center opacity-80">
          {logos.map((name) => (
            <div key={name} className="glass-effect py-4 px-3 text-center text-white/70 text-sm">{name}</div>
          ))}
        </div>
      </div>
    </section>
  )
}


