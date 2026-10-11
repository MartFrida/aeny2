import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'

export function Footer() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  const navigation = [
    { label: t('nav.about'), href: `/${language}/about` },
    { label: t('nav.ourWork'), href: `/${language}/our-work` },
    { label: t('nav.projects'), href: `/${language}/projects` },
    { label: t('nav.events'), href: `/${language}/events` },
    { label: t('nav.news'), href: `/${language}/news` },
    { label: t('nav.getInvolved'), href: `/${language}/get-involved` },
    { label: t('nav.contact'), href: `/${language}/contact` },
  ]

  const currentPath = window.location.pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/'
  const englishPath = `/en${currentPath === '/' ? '' : currentPath}`
  const spanishPath = `/es${currentPath === '/' ? '' : currentPath}`

  return (
    <footer className="border-t border-[var(--border)] bg-[#f7f1ea]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div>
          <p className="text-xl font-semibold tracking-[0.14em] text-[var(--foreground)]">AEINY</p>
          <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">{t('footer.tagline')}</p>
          <div className="mt-6 flex items-center gap-4 text-sm text-[var(--muted)]">
            <a href="https://www.facebook.com/alianzaecuatorianaIntofficial" target="_blank" rel="noreferrer" className="transition hover:text-[var(--foreground)]">
              Facebook
            </a>
            <a href="https://www.instagram.com/alianzaecuatorianaint/?hl=es" target="_blank" rel="noreferrer" className="transition hover:text-[var(--foreground)]">
              Instagram
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Navigation</p>
          <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-[var(--foreground)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Featured</p>
          <div className="mt-4 space-y-4 text-sm text-[var(--muted)]">
            <Link to={`/${language}/events/kuri-chasqui-2026`} className="block font-medium text-[var(--foreground)] hover:text-[var(--primary)]">
              Kuri Chasqui 2026
            </Link>
            <Link to={`/${language}/donate`} className="inline-flex rounded-md bg-[var(--primary)] px-4 py-2.5 text-sm font-semibold text-[var(--primary-foreground)] transition hover:bg-[#4d4d3d]">
              {t('nav.donate')}
            </Link>
            <div className="pt-3 border-t border-[var(--border)]">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">Languages</p>
              <div className="mt-3 flex gap-4 text-sm text-[var(--muted)]">
                <Link to={englishPath} className="hover:text-[var(--foreground)]">{t('common.english')}</Link>
                <Link to={spanishPath} className="hover:text-[var(--foreground)]">{t('common.spanish')}</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
