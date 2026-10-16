import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type DesktopNavigationProps = {
  language: 'en' | 'es'
}

export function DesktopNavigation({ language }: DesktopNavigationProps) {
  const { t } = useTranslation()

  const items = [
    { label: t('nav.about'), href: `/${language}/about` },
    { label: t('nav.ourWork'), href: `/${language}/our-work` },
    { label: t('nav.projects'), href: `/${language}/projects` },
    { label: t('nav.events'), href: `/${language}/events` },
    { label: t('nav.courses'), href: `/${language}/courses` },
    { label: t('nav.getInvolved'), href: `/${language}/get-involved` },
    { label: t('nav.contact'), href: `/${language}/contact` },
  ]

  return (
    <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
      {items.map((item) => (
        <Link key={item.href} to={item.href} className="text-sm font-medium text-white/75 transition hover:text-white">
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
