import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { translations } from './resources'

const resources = {
  en: { translation: translations.en },
  es: { translation: translations.es },
} as const

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'es'],
  interpolation: {
    escapeValue: false,
  },
  returnNull: false,
})

export const getLanguageFromPath = (pathname: string): 'en' | 'es' => {
  const firstSegment = pathname.split('/').filter(Boolean)[0]
  return firstSegment === 'es' ? 'es' : 'en'
}

export const getLocalizedPath = (pathname: string, language: 'en' | 'es') => {
  const segments = pathname.split('/').filter(Boolean)
  const withoutLocale = segments[0] === 'en' || segments[0] === 'es' ? segments.slice(1) : segments
  const route = withoutLocale.length > 0 ? `/${withoutLocale.join('/')}` : ''
  return `/${language}${route}`
}

export default i18n
