import type { FAQItem } from './mainFaq'

export const aiContentFaqData: FAQItem[] = [
  {
    question: "How do I keep AI content from sounding like every other AI-written post?",
    answer: "Feed the model a brand voice framework, not a generic prompt. A good framework includes vocabulary to use and avoid, sentence rhythm, tone examples from content you're proud of, and disallowed patterns. With that context loaded, AI writes like a skilled ghostwriter constrained to your voice — not like the average blog post on the internet. Generic prompts produce generic output; constrained prompts produce on-brand output."
  },
  {
    question: "Can AI create content beyond blog posts?",
    answer: "Yes — most AI content work at scale is multi-format. One piece of source material (a podcast episode, an interview, a product launch) gets turned into a blog post, a LinkedIn post, a newsletter section, an email sequence, and video scripts with minimal extra work. The reuse is where the ROI compounds — a single hour of real thinking becomes a week's worth of published content."
  },
  {
    question: "Will AI-generated content rank on Google?",
    answer: "Yes, when it's helpful content written for humans. Google stopped treating AI content as inherently penalizable in 2023; their current guideline is \"helpful, people-first content, regardless of how it's produced.\" Generic AI content doesn't rank because it's generic, not because it's AI. Good AI content — brand-voiced, well-structured, factually grounded — ranks as well as well-written human content."
  },
  {
    question: "How fast is AI content compared to hiring a writer?",
    answer: "Roughly 3–5× faster for first drafts, which is where most of a writer's time goes. Editing, fact-checking, and refinement still benefit from human judgment. The net effect: a team that used to publish monthly can publish weekly without adding headcount."
  },
  {
    question: "Can AI generate content in multiple languages?",
    answer: "Yes — modern models produce fluent content in dozens of languages. Best practice isn't direct translation (which loses nuance) but generating fresh content per target language using a brand voice framework adapted to each language's conventions. The result reads like a local wrote it, not like a machine-translated page."
  },
  {
    question: "What do you hand over at the end of a content engagement?",
    answer: "A content system, not just content. That includes the brand voice framework, prompts that actually work for your use cases, a publishing workflow, integrations with your CMS, and enough in-house familiarity that your team can keep running it without us. The goal is independence, not ongoing dependency."
  }
]
