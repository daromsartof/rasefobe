import { defineManifest } from '@daroms/lib/manifest-schema'

// Configuration de l'app : lue par app.config.ts (build) et getManifest() (runtime).
// Réécrit par la CLI daroms (module add, g screen...) : garder des valeurs littérales.
export default defineManifest({
  name: 'resefobe',
  slug: 'rasefobe',
  bundleId: 'com.daroms.rasefobe',
  version: '1.0.0',
  variant: 'ai-chat',
  locales: ['fr', 'en'],
  defaultLocale: 'fr',
  orientation: 'portrait',
  screens: ['home'],
  tabs: [
    {
      name: 'index',
      icon: 'House',
      titleKey: 'tabs.home',
    },
    {
      name: 'chat',
      icon: 'Sparkles',
      titleKey: 'aiChat:title',
    },
    {
      name: 'settings',
      icon: 'Settings',
      titleKey: 'settings:title',
    },
  ],
  modules: {
    onboarding: {
      version: 1,
      pages: [
        {
          icon: 'Sparkles',
          titleKey: 'onboarding.page1Title',
          descriptionKey: 'onboarding.page1Description',
        },
        {
          icon: 'Zap',
          titleKey: 'onboarding.page2Title',
          descriptionKey: 'onboarding.page2Description',
        },
        {
          icon: 'Heart',
          titleKey: 'onboarding.page3Title',
          descriptionKey: 'onboarding.page3Description',
        },
      ],
    },
    auth: {
      providers: ['email', 'apple', 'google'],
      requireAuth: true,
    },
    'ai-chat': {
      suggestions: ['aiChat.suggestion1', 'aiChat.suggestion2'],
    },
    payments: {
      entitlement: 'pro',
      mode: 'soft',
      features: ['paywall.feature1', 'paywall.feature2', 'paywall.feature3'],
    },
    settings: {},
    crash: {
      organization: '',
      project: '',
      tracesSampleRate: 0.1,
      sendDefaultPii: false,
      enableInDev: false,
    },
    analytics: {
      sink: 'supabase',
      flushIntervalMs: 15000,
      screens: true,
    },
    push: {
      askOnLaunch: false,
    },
  },
  monetization: {
    model: 'free',
    entitlement: 'pro',
    trialDays: 0,
  },
  supabase: {},
  eas: {},
  store: {},
})
