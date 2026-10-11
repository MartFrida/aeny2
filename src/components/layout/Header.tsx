import { HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { DesktopNavigation } from '../navigation/DesktopNavigation'
import { LanguageSwitcher } from '../navigation/LanguageSwitcher'
import { MobileNavigation } from '../navigation/MobileNavigation'

export function Header() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(12,19,25,0.88)] text-white backdrop-blur-md">
      <Container className="relative flex items-center justify-between gap-4 py-3.5">
        <div className="flex items-center gap-3">
          <Link to={`/${language}`} className="flex items-center gap-2 text-white" aria-label="AEINY home">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--accent)] text-[var(--surface-dark)] shadow-sm">
              <HeartHandshake size={18} />
            </span>
            <span className="text-[0.8rem] font-semibold tracking-[0.18em] text-white">AEINY</span>
          </Link>
        </div>

        <DesktopNavigation language={language} />

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <Button to={`/${language}/donate`} variant="primary" className="!bg-[var(--accent)] !text-[var(--surface-dark)] hover:!bg-[#d79d54]">
              {t('nav.donate')}
            </Button>
          </div>
          <MobileNavigation language={language} />
        </div>
      </Container>
    </header>
  )
}
