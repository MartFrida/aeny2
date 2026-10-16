import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'
import { contactInfo } from '../../data/contact'

export function Footer() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  const navigation = [
    { label: t('nav.about'), href: `/${language}/about` },
    { label: t('nav.ourWork'), href: `/${language}/our-work` },
    { label: t('nav.projects'), href: `/${language}/projects` },
    { label: t('nav.events'), href: `/${language}/events` },
    { label: t('nav.courses'), href: `/${language}/courses` },
    { label: t('nav.getInvolved'), href: `/${language}/get-involved` },
    { label: t('nav.contact'), href: `/${language}/contact` },
  ]

  const currentPath = window.location.pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/'
  const englishPath = `/en${currentPath === '/' ? '' : currentPath}`
  const spanishPath = `/es${currentPath === '/' ? '' : currentPath}`

  return (
    <footer className="border-t border-(--border) bg-[#f7f1ea]">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr_0.8fr]">
        <div className="flex items-start gap-4">
          <Link to="/" className="flex shrink-0 items-center" aria-label="Alianza Ecuatoriana Internacional — Home">
            <img
              src="/images/logo-aeiny.webp"
              alt="Alianza Ecuatoriana Internacional"
              className="h-[76px] w-auto object-contain sm:h-20 md:h-24"
            />
          </Link>
          <div>
            <p className="text-xl font-semibold tracking-[0.14em] text-(--foreground)">AEINY</p>
            <p className="mt-4 max-w-md text-sm leading-6 text-(--muted)">{t('footer.tagline')}</p>
            <address className="mt-4 space-y-1 text-sm not-italic leading-6 text-(--muted)">
              <p>{contactInfo.addressLine1}</p>
              <p>{contactInfo.addressLine2}</p>
              <p>
                <a href={contactInfo.phoneHref} className="transition hover:text-(--foreground)">{contactInfo.phone}</a>
                {' · '}
                <a href={contactInfo.whatsappHref} target="_blank" rel="noreferrer" className="transition hover:text-(--foreground)">{t('contact.whatsapp')}</a>
              </p>
              <p><a href={contactInfo.emailHref} className="transition hover:text-(--foreground)">{contactInfo.email}</a></p>
            </address>
            <div className="mt-6 flex items-center gap-4 text-sm text-(--muted)">
              <a href="https://www.facebook.com/alianzaecuatorianaIntofficial" target="_blank" rel="noreferrer" className="transition hover:text-(--foreground)">
                Facebook
              </a>
              <a href="https://www.instagram.com/alianzaecuatorianaint/?hl=es" target="_blank" rel="noreferrer" className="transition hover:text-(--foreground)">
                Instagram
              </a>
              <a href={contactInfo.tiktok} target="_blank" rel="noreferrer" className="transition hover:text-(--foreground)">
                TikTok
              </a>
            </div>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">Navigation</p>
          <ul className="mt-4 space-y-3 text-sm text-(--muted)">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link to={item.href} className="transition hover:text-(--foreground)">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">Featured</p>
          <div className="mt-4 space-y-4 text-sm text-(--muted)">
            <Link to={`/${language}/events/festival-internacional-de-cine-andino-2026`} className="block font-medium text-(--foreground) hover:text-(--primary)">
              {t('festival2026.title')}
            </Link>
            <Link to={`/${language}/donate`} className="inline-flex rounded-md bg-(--primary) px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4d4d3d]">
              {t('nav.donate')}
            </Link>
            <div className="pt-3 border-t border-(--border)">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">Languages</p>
              <div className="mt-3 flex gap-4 text-sm text-(--muted)">
                <Link to={englishPath} className="hover:text-(--foreground)">{t('common.english')}</Link>
                <Link to={spanishPath} className="hover:text-(--foreground)">{t('common.spanish')}</Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
