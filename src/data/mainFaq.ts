export interface FAQItem {
  question: string
  answer: string
}

export interface RelatedLink {
  text: string
  href: string
}

export interface FAQCategory {
  category: string
  questions: FAQItem[]
  relatedLinks?: RelatedLink[]
}

export const mainFaqData: FAQCategory[] = [
  {
    category: "AI Voice Agents",
    questions: [
      {
        question: "What is an AI voice agent?",
        answer: "An AI voice agent is a system that answers phone calls and talks with callers in real time using speech recognition, large language models, and realistic text-to-speech. Unlike a chatbot, it works over the phone — no app, no typing, no wait. It handles multi-turn conversations, understands context, and takes real actions like booking meetings or updating your CRM. Most businesses use AI voice agents to cover inbound calls, qualify leads, and free their team from routine phone work."
      },
      {
        question: "What is an AI receptionist?",
        answer: "An AI receptionist is an AI voice agent trained specifically for front-desk work — answering calls, greeting callers, routing to the right person, booking appointments, and collecting contact details. It works 24/7, never goes on break, and speaks naturally in multiple languages. For small businesses that lose calls to voicemail or pay for after-hours answering services, an AI receptionist captures every caller without adding payroll."
      },
      {
        question: "How is an AI receptionist different from an answering service?",
        answer: "A traditional answering service uses human operators who read from a script, take a message, and send it to you later — usually by email or text. An AI receptionist is conversational: it can answer actual questions about your business, check calendar availability, and book meetings directly during the call. Because it runs on software, it scales instantly to handle dozens of simultaneous calls without ever sounding rushed or putting anyone on hold."
      },
      {
        question: "How do AI voice agents work?",
        answer: "AI voice agents combine four layers: speech-to-text turns your voice into words, a large language model decides what to say, your business logic handles specific tasks (book this meeting, look up that order), and text-to-speech speaks the response. The whole round-trip happens in about a second — fast enough that most callers don't notice they're not talking to a human."
      },
      {
        question: "Do AI voice agents sound human?",
        answer: "Yes — today's voice agents sound strikingly natural, and most callers don't realize they're talking to AI. Modern voice models match the pacing, tone, and filler words of real conversation, and they adapt their style (warmer for customer support, crisper for B2B) based on your brand. The rare caller who suspects AI usually says so only after a long call, and even then they report the experience as better than a typical hold queue."
      },
      {
        question: "Can AI voice agents handle complex conversations?",
        answer: "Yes — AI voice agents handle multi-turn conversations, follow context across an entire call, process unexpected questions, and manage objections or difficult situations. They're configured with your specific business scenarios, so they stay on-script where you need them to and improvise where flexibility helps. When something falls outside what they're trained for, they transfer cleanly to a human rather than guess."
      },
      {
        question: "How much does an AI receptionist cost?",
        answer: "It depends on call volume, languages, integrations, and whether you need 24/7 coverage — so we don't publish a public price. Most small businesses save money compared to hiring a full-time receptionist or paying per-minute for a traditional answering service, because AI scales without payroll. The fastest way to get a real number is to book a free 30-minute audit where we look at your call volume and map out a fit."
      },
      {
        question: "How do AI voice agents compare to hiring human staff?",
        answer: "AI voice agents work 24/7 with no breaks, no holidays, and no sick days, and they handle unlimited concurrent calls at consistent quality. They're best at repetitive, high-volume tasks like appointment booking, lead qualification, and FAQ responses — the work that burns out human staff fastest. Most teams don't replace humans with AI; they let AI catch overflow and after-hours calls so humans can focus on complex or high-value conversations."
      }
    ],
    relatedLinks: [
      { text: "AI Voice service", href: "/ai-voice" },
      { text: "AI Content", href: "/ai-content" },
      { text: "AI Avatars", href: "/ai-avatars" }
    ]
  },
  {
    category: "AI Content",
    questions: [
      {
        question: "Can AI generate content for my business?",
        answer: "Yes — AI can draft blog posts, product descriptions, email sequences, social media posts, video scripts, and ad copy at scale, in your brand voice. The lift isn't about replacing writers but about compressing the time between idea and published piece. Most businesses using AI content go from publishing monthly to publishing weekly without adding headcount, while keeping quality consistent."
      },
      {
        question: "What types of content can AI create?",
        answer: "AI content creation covers written formats (blog posts, newsletters, product descriptions, ad copy, LinkedIn posts), video scripts and outlines, podcast show notes, social media captions, email sequences, and internal documentation. Modern models also generate images, short-form video, and AI avatars that deliver scripts on camera. The question is usually less \"can AI create it\" and more \"which formats matter for your audience.\""
      },
      {
        question: "Will AI content sound like my brand?",
        answer: "Yes, if you give the AI a brand voice to work from. We build a brand voice framework — vocabulary, tone, sentence rhythm, things to avoid — and feed it into every content generation step. The output sounds like your company because it's constrained to your company's voice, not generic \"AI assistant\" tone. Without that framework, AI content sounds generic; with it, readers can't tell the difference."
      },
      {
        question: "How do I keep AI content from sounding generic?",
        answer: "Generic AI content is usually a prompting problem, not an AI problem. Feeding a model a one-line prompt like \"write a blog post about X\" produces the average of everything ever written about X. Good AI content workflows start with a brand voice guide, a specific angle, a target reader, and examples of content you're proud of — then the AI acts like a skilled ghostwriter, not a random assistant."
      }
    ],
    relatedLinks: [
      { text: "AI Content service", href: "/ai-content" },
      { text: "AI Voice", href: "/ai-voice" },
      { text: "AI Avatars", href: "/ai-avatars" }
    ]
  },
  {
    category: "AI Avatars",
    questions: [
      {
        question: "What is an AI avatar?",
        answer: "An AI avatar is a digital version of a real person — or a fictional character — that can deliver any script on camera, in any language, without the person ever recording the video themselves. You record a few minutes of base footage once, then generate unlimited videos from text. Businesses use AI avatars for sales outreach, onboarding, training, product explainers, and localized marketing at scale."
      },
      {
        question: "Can I use an AI avatar of myself for marketing videos?",
        answer: "Yes — you can create an AI avatar of yourself from about 2–5 minutes of training footage, then generate videos of \"you\" delivering any script. It speaks dozens of languages while keeping your face, voice, and mannerisms. Solo founders and consultants use this to show up on camera daily without actually being on camera daily; sales teams use it to personalize outreach at volume."
      },
      {
        question: "How realistic do AI avatars look?",
        answer: "Close enough that untrained viewers rarely notice — if the avatar is built correctly. The best results come from high-quality training footage, a natural-sounding voice clone, and scripts written for spoken delivery rather than pasted from a blog post. Cheap-looking AI avatars almost always trace back to shortcuts at one of those three steps."
      },
      {
        question: "Do viewers know they're watching an AI avatar?",
        answer: "Most don't — but ethical use means disclosing when it matters. For marketing videos and outreach where the audience expects a brand communication, disclosure isn't always expected. For anything involving personal claims, testimonials, or sensitive topics, we recommend explicit disclosure — and in some jurisdictions it's legally required. We help clients set a disclosure policy that matches their industry and audience."
      }
    ],
    relatedLinks: [
      { text: "AI Avatars service", href: "/ai-avatars" },
      { text: "AI Voice", href: "/ai-voice" },
      { text: "AI Content", href: "/ai-content" }
    ]
  },
  {
    category: "Implementation & Integration",
    questions: [
      {
        question: "How do I know if my business is ready for AI?",
        answer: "You're ready if you have at least three of these: repetitive processes that eat team time, customer interactions that follow predictable patterns, data already stored digitally (CRM, spreadsheets, inbox), a goal to grow without proportional hiring, and a team willing to change how work gets done. Most SMBs with 10+ people have 3–5 processes worth automating within the first year. A 30-minute audit usually surfaces them in under an hour."
      },
      {
        question: "What business processes can AI automate?",
        answer: "The highest-ROI candidates are: customer-facing (answering calls, qualifying leads, booking meetings, basic support), operational (email triage, invoice processing, data entry, report generation), and content (writing, personalizing at scale, translating). Most businesses can automate 30–50% of routine tasks within six months without disrupting the work that actually needs human judgment."
      },
      {
        question: "How long does it take to set up an AI voice agent?",
        answer: "A basic voice agent with a single use case — inbound reception, appointment booking, FAQ handling — typically launches in 1–2 weeks. More complex implementations with CRM integrations, multiple call flows, or custom logic take 3–4 weeks. The bottleneck is usually clarifying exactly what the agent should say and do, not the technology itself."
      },
      {
        question: "Do I need technical knowledge to use an AI voice agent?",
        answer: "No — we handle the setup, integrations, and ongoing maintenance. You get a dashboard on the voice platform we build on (such as Vapi) where you can monitor calls, read transcripts, update scripts, and adjust settings. Most clients operate the agent day-to-day without involving a developer."
      },
      {
        question: "What languages do AI voice agents support?",
        answer: "AI voice agents speak dozens of languages — English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Swedish, Mandarin, Japanese, Korean, and most other common business languages. Agents can be configured to auto-detect the caller's language and switch mid-conversation, or stick to a single language by design."
      },
      {
        question: "Can AI voice agents integrate with my CRM and other systems?",
        answer: "Yes — voice agents integrate with Salesforce, HubSpot, Pipedrive, and most other CRMs, with calendaring tools (Google Calendar, Calendly), helpdesk software (Zendesk, Freshdesk), and almost any business system exposing an API or webhook. If your current tool can be reached programmatically, the agent can read from it and write back to it in real time."
      },
      {
        question: "What phone numbers and phone systems are supported?",
        answer: "We support toll-free, local, and international numbers, and the agent works with existing phone infrastructure: VOIP, cloud telephony (Twilio, Telnyx), and traditional landlines with some additional setup. Both inbound and outbound calling are supported."
      }
    ],
    relatedLinks: [
      { text: "AI Voice service", href: "/ai-voice" },
      { text: "AI Content service", href: "/ai-content" },
      { text: "AI Avatars service", href: "/ai-avatars" }
    ]
  },
  {
    category: "Security & Compliance",
    questions: [
      {
        question: "Are AI voice agents secure and GDPR/HIPAA compliant?",
        answer: "Yes — our deployments use enterprise-grade security by default: encrypted transport, encrypted storage, role-based access, and full audit logging. For regulated industries we configure GDPR-compliant deployments for EU clients, HIPAA-aligned deployments for U.S. healthcare, and CCPA-compliant handling for California residents. Specific compliance requirements are scoped during the audit."
      },
      {
        question: "How is customer data protected?",
        answer: "Voice data is encrypted in transit and at rest, access is role-based and audited, and no customer data is shared with third parties outside the integrations you explicitly set up. We follow zero-trust principles: every system that touches caller data is logged, and transcripts are retained only as long as your compliance policy requires."
      },
      {
        question: "Can AI voice agents handle sensitive information?",
        answer: "Yes — with the right configuration. For regulated industries like healthcare, finance, and legal, we deploy agents with encrypted storage, strict access controls, full audit trails, and clean handoff to a human when a conversation moves beyond what the agent should handle. The specific configuration depends on which regulations apply to your business; we scope it during the audit."
      }
    ],
    relatedLinks: [
      { text: "AI Voice", href: "/ai-voice" },
      { text: "AI Content", href: "/ai-content" },
      { text: "AI Avatars", href: "/ai-avatars" }
    ]
  },
  {
    category: "Industries We Serve",
    questions: [
      {
        question: "Do AI voice agents work for healthcare practices?",
        answer: "Yes — healthcare voice agents handle appointment scheduling, insurance verification, prescription refill requests, patient callbacks, and basic triage, all with HIPAA-aligned infrastructure and patient privacy protections. Most clinics use voice AI to catch the after-hours and overflow calls that would otherwise go to voicemail, and to take routine scheduling work off the front desk."
      },
      {
        question: "Can AI voice agents help real estate agents?",
        answer: "Yes — real estate voice agents qualify inbound leads, schedule showings, answer listing questions, and keep following up with prospects who haven't responded, all while syncing to your CRM. Agents and teams using voice AI typically respond to new inquiries within seconds instead of hours, which alone meaningfully improves conversion."
      },
      {
        question: "Do AI voice agents work for plumbers, HVAC, and home service businesses?",
        answer: "Yes — AI voice agents are a strong fit for home services because calls are often time-sensitive (burst pipe, no heat, lockout) and crews are usually out on jobs instead of at a desk. The agent qualifies the emergency, books the appointment, quotes standard service fees, and integrates with dispatch and CRM tools like Jobber, Housecall Pro, or ServiceTitan. No more missed calls when the phone rings during an install."
      }
    ],
    relatedLinks: [
      { text: "AI Voice", href: "/ai-voice" },
      { text: "AI Content", href: "/ai-content" },
      { text: "AI Avatars", href: "/ai-avatars" }
    ]
  }
]

export const mainFaqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": mainFaqData.flatMap(category =>
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
