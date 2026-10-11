import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { getLanguageFromPath } from '../i18n'

export function AppLayout() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    const nextLanguage = getLanguageFromPath(location.pathname)

    if (i18n.resolvedLanguage !== nextLanguage) {
      i18n.changeLanguage(nextLanguage)
    }
  }, [i18n, location.pathname])

  return (
    <div className="min-h-screen bg-(--background) text-(--foreground)">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
