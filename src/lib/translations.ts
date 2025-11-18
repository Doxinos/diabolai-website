export const translations = {
  en: {
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      contact: 'Contact',
      blog: 'Blog'
    },
    hero: {
      title: 'AI Voice Agents That Transform Business',
      subtitle: '24/7 Automated Booking & Lead Qualification',
      cta: 'Try Live Demo',
      secondary: 'Learn More'
    },
    footer: {
      copyright: '© 2025 Diabol AI. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service'
    }
  },
  sv: {
    nav: {
      home: 'Hem',
      services: 'Tjänster',
      about: 'Om oss',
      contact: 'Kontakt',
      blog: 'Blogg'
    },
    hero: {
      title: 'AI-röstassistenter som transformerar din verksamhet',
      subtitle: 'Automatisk bokning & leadkvalificering 24/7',
      cta: 'Prova live-demo',
      secondary: 'Läs mer'
    },
    footer: {
      copyright: '© 2025 Diabol AI. Alla rättigheter förbehållna.',
      privacy: 'Integritetspolicy',
      terms: 'Användarvillkor'
    }
  }
} as const

export type Language = keyof typeof translations
export type TranslationKeys = typeof translations.en
