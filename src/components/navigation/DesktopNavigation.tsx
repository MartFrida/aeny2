import { navigationItems } from '../../data/navigation'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

type DesktopNavigationProps = {
  language: 'en' | 'es'
}

export function DesktopNavigation({ language }: DesktopNavigationProps) {
  const { t } = useTranslation()

  const items = navigationItems.map(({ labelKey, path }) => ({
    label: t(labelKey),
    href: `/${language}/${path}`,
  }))

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
