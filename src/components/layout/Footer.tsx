import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'

export function Footer() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xl font-semibold tracking-[0.1em] text-[var(--foreground)]">AEINY</p>
          <p className="mt-2 max-w-md text-sm text-[var(--muted)]">{t('footer.tagline')}</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
          <Link to={`/${language}/about`} className="hover:text-[var(--foreground)]">{t('nav.about')}</Link>
          <Link to={`/${language}/events`} className="hover:text-[var(--foreground)]">{t('nav.events')}</Link>
          <Link to={`/${language}/get-involved`} className="hover:text-[var(--foreground)]">{t('nav.getInvolved')}</Link>
          <Link to={`/${language}/contact`} className="hover:text-[var(--foreground)]">{t('nav.contact')}</Link>
        </div>
      </Container>
    </footer>
  )
}
