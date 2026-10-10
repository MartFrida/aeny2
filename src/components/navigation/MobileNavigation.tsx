import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../common/Button'

type MobileNavigationProps = {
  language: 'en' | 'es'
}

export function MobileNavigation({ language }: MobileNavigationProps) {
  const { t } = useTranslation()
  const location = useLocation()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const items = [
    { label: t('nav.about'), href: `/${language}/about` },
    { label: t('nav.ourWork'), href: `/${language}/our-work` },
    { label: t('nav.projects'), href: `/${language}/projects` },
    { label: t('nav.events'), href: `/${language}/events` },
    { label: t('nav.news'), href: `/${language}/news` },
    { label: t('nav.getInvolved'), href: `/${language}/get-involved` },
    { label: t('nav.contact'), href: `/${language}/contact` },
  ]

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[var(--border)] bg-white/60 text-[var(--foreground)]"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full border-b border-[var(--border)] bg-[var(--surface)] shadow-sm">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-md px-2 py-2 text-base font-medium text-[var(--foreground)] hover:bg-[var(--background)]"
              >
                {item.label}
              </Link>
            ))}
            <Button to={`/${language}/donate`} className="mt-2 w-full">
              {t('nav.donate')}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
