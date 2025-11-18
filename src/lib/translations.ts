const translationData = {
  nav: {
    home: { en: 'Home', sv: 'Hem' },
    services: { en: 'Services', sv: 'Tjänster' },
    about: { en: 'About', sv: 'Om oss' },
    contact: { en: 'Contact', sv: 'Kontakt' },
    blog: { en: 'Blog', sv: 'Blogg' }
  },
  hero: {
    title: {
      en: 'AI Voice Agents That Transform Business',
      sv: 'AI-röstassistenter som transformerar din verksamhet'
    },
    subtitle: {
      en: '24/7 Automated Booking & Lead Qualification',
      sv: 'Automatisk bokning & leadkvalificering 24/7'
    },
    cta: { en: 'Try Live Demo', sv: 'Prova live-demo' },
    secondary: { en: 'Learn More', sv: 'Läs mer' }
  },
  footer: {
    copyright: {
      en: '© 2025 Diabol AI. All rights reserved.',
      sv: '© 2025 Diabol AI. Alla rättigheter förbehållna.'
    },
    privacy: { en: 'Privacy Policy', sv: 'Integritetspolicy' },
    terms: { en: 'Terms of Service', sv: 'Användarvillkor' }
  }
} as const

export type Language = 'en' | 'sv'

type TranslationSection<T> = {
  [K in keyof T]: T[K] extends { en: string; sv: string }
    ? string
    : T[K] extends Record<string, any>
    ? TranslationSection<T[K]>
    : never
}

export type TranslationKeys = TranslationSection<typeof translationData>

function createTranslations<T extends Record<string, any>>(
  data: T,
  lang: Language
): TranslationSection<T> {
  const result: any = {}

  for (const key in data) {
    const value = data[key]
    if (value && typeof value === 'object') {
      if ('en' in value && 'sv' in value) {
        result[key] = value[lang]
      } else {
        result[key] = createTranslations(value, lang)
      }
    }
  }

  return result
}

export const translations = {
  en: createTranslations(translationData, 'en'),
  sv: createTranslations(translationData, 'sv')
}
