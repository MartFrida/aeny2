import { navigationItems } from '../../data/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Button } from '../common/Button'

type MobileNavigationProps = {
  language: 'en' | 'es'
}

export function MobileNavigation({ language }: MobileNavigationProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)


  const items = navigationItems.map(({ labelKey, path }) => ({
    label: t(labelKey),
    href: `/${language}/${path}`,
  }))

  return (
    <div className="lg:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/20 bg-white/5 text-white"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={18} /> : <Menu size={18} />}
      </button>

      {open ? (
        <div className="absolute left-0 right-0 top-full border-b border-white/10 bg-(--surface-dark) shadow-lg">
          <nav className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4">
            {items.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="rounded-md px-2 py-2 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Button to={`/${language}/donate`} className="mt-2 w-full bg-(--accent)! text-(--surface-dark)!">
              {t('nav.donate')}
            </Button>
          </nav>
        </div>
      ) : null}
    </div>
  )
}
