import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

const languages = ['en', 'es'] as const

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const switchLanguage = (nextLanguage: 'en' | 'es') => {
    const segments = location.pathname.split('/').filter(Boolean)
    const hasLocale = segments[0] === 'en' || segments[0] === 'es'

    if (hasLocale) {
      segments.shift()
    }

    const nextPath = segments.length > 0 ? `/${nextLanguage}/${segments.join('/')}` : `/${nextLanguage}`

    i18n.changeLanguage(nextLanguage)
    navigate(nextPath, { replace: true })
  }

  const currentLanguage = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-(--border) bg-white/40 p-1 text-sm">
      {languages.map((language) => {
        const active = language === currentLanguage

        return (
          <button
            key={language}
            type="button"
            aria-label={`Switch language to ${language.toUpperCase()}`}
            aria-pressed={active}
            onClick={() => switchLanguage(language)}
            className={`rounded-full px-2.5 py-1.5 font-medium transition-colors ${
              active ? 'bg-(--foreground) text-white' : 'text-(--muted) hover:text-(--foreground)'
            }`}
          >
            {language.toUpperCase()}
          </button>
        )
      })}
    </div>
  )
}
