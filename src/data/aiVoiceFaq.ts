import type { FAQItem } from './mainFaq'

export const aiVoiceFaqData: FAQItem[] = [
  {
    question: "What does an AI voice agent workflow look like once it's live?",
    answer: "An AI voice agent answers calls 24/7, follows the flow you design, and takes real actions (booking, lookup, routing) mid-call. Every call is logged with transcripts, summaries, and sentiment data. You review a handful of calls per week, spot things to refine, and update scripts without involving engineers. Most teams check the dashboard for 15 minutes a day and the agent handles the rest."
  },
  {
    question: "What's the difference between an AI voice agent and an AI receptionist?",
    answer: "They're the same underlying technology with different configurations. \"AI voice agent\" is the general category — anything from inbound reception to outbound sales calls. \"AI receptionist\" is a specific deployment: front-desk work, call routing, appointment booking, handling FAQs. The receptionist framing makes it easier to scope a first project because the use case is tightly bounded."
  },
  {
    question: "How do AI voice agents handle calls they can't answer?",
    answer: "Clean handoff to a human. When a caller asks something outside the agent's scope, the agent gathers context (name, reason for the call, callback number), summarizes it, and either transfers the call live or drops a briefing into your inbox or CRM. No \"sorry, I don't understand\" loops."
  },
  {
    question: "Can I listen back to calls and improve the agent?",
    answer: "Yes — every call gets a transcript, summary, and searchable history. You review calls that went poorly, identify the pattern, and update the script or fallback logic. The agent improves in days, not months, because you're updating configuration rather than retraining a model."
  },
  {
    question: "Will callers know they're talking to AI?",
    answer: "Only if you tell them. Modern voice models are realistic enough that callers rarely suspect AI on their own. Some regions and call types legally require disclosure — we configure that during deployment. Beyond legal requirements, most businesses don't disclose because it adds friction without adding trust."
  },
  {
    question: "How much does an AI voice agent cost?",
    answer: "Pricing depends on call volume, languages, and integrations, so we don't publish a public price. Most engagements save meaningful money compared to hiring or outsourcing the same call volume to humans, because voice agents scale without payroll. The fastest way to get a real number is a free 30-minute audit where we map your call patterns to a fit."
  }
]
