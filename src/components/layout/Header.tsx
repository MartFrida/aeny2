import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'
import { Button } from '../common/Button'
import { DesktopNavigation } from '../navigation/DesktopNavigation'
import { LanguageSwitcher } from '../navigation/LanguageSwitcher'
import { MobileNavigation } from '../navigation/MobileNavigation'

export function Header() {
  const { pathname } = useLocation()
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(12,19,25,0.88)] text-white backdrop-blur-md">
      <Container className="relative flex items-center justify-between gap-4 py-2.5">
        <Link to="/" className="flex shrink-0 items-center" aria-label="Alianza Ecuatoriana Internacional — Home">
          <img
            src="/images/logo-aeiny.webp"
            alt="Alianza Ecuatoriana Internacional"
            className="h-12 w-auto object-contain sm:h-[54px] md:h-[68px]"
            loading="eager"
          />
        </Link>

        <DesktopNavigation language={language} />

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <div className="hidden lg:block">
            <Button to={`/${language}/donate`} variant="primary" className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!">
              {t('nav.donate')}
            </Button>
          </div>
          <MobileNavigation key={pathname} language={language} />
        </div>
      </Container>
    </header>
  )
}
