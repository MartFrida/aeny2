import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { navigationItems } from '../../data/navigation'
import { contactInfo } from '../../data/contact'
import { Container } from '../common/Container'

const focusClass =
  'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)'
const headingClass =
  'text-xs font-semibold uppercase tracking-[0.16em] text-(--muted)'
const iconLinkClass =
  `inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-(--muted) transition-colors hover:bg-(--primary)/8 hover:text-(--foreground) ${focusClass}`
const textLinkClass =
  `inline-flex min-h-11 items-center rounded-md text-sm leading-5 text-(--muted) transition-colors hover:text-(--foreground) ${focusClass}`

const socialIconPaths = {
  facebook:
    'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.026 4.388 11.02 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97H15.83c-1.491 0-1.956.93-1.956 1.885v2.266h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.1 24 12.073Z',
  tiktok:
    'M19.589 6.686a4.793 4.793 0 0 1-3.77-4.245V2h-3.445v13.672a2.878 2.878 0 0 1-2.874 2.477 2.88 2.88 0 0 1-2.879-2.88A2.879 2.879 0 0 1 9.5 12.39c.283 0 .556.041.819.121V9.01a6.361 6.361 0 0 0-.819-.052c-3.508 0-6.353 2.845-6.353 6.353s2.845 6.353 6.353 6.353 6.353-2.845 6.353-6.353V8.665a8.23 8.23 0 0 0 4.811 1.537V6.78a4.831 4.831 0 0 1-1.075-.094Z',
  whatsapp:
    'M20.52 3.48A11.81 11.81 0 0 0 12.11 0C5.56 0 .23 5.33.23 11.89c0 2.1.55 4.15 1.59 5.95L.13 24l6.3-1.65a11.87 11.87 0 0 0 5.68 1.45h.01C18.67 23.8 24 18.47 24 11.91c0-3.18-1.24-6.17-3.48-8.43ZM12.12 21.8h-.01a9.84 9.84 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.64-.24-.38a9.86 9.86 0 0 1-1.51-5.28C2.23 6.44 6.67 2 12.12 2a9.83 9.83 0 0 1 7 2.9 9.86 9.86 0 0 1 2.89 7.01c0 5.45-4.44 9.89-9.89 9.89Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.21 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.88.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35Z',
}

type SocialIconName = keyof typeof socialIconPaths | 'instagram'

function SocialIcon({ name }: { name: SocialIconName }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false" className="h-5 w-5">
      {name === 'instagram' ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="17.5" cy="6.5" r="1.1" />
        </>
      ) : (
        <path d={socialIconPaths[name]} />
      )}
    </svg>
  )
}

export function Footer() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  const navigation = navigationItems.map(({ labelKey, path }) => ({
    label: t(labelKey),
    href: `/${language}/${path}`,
  }))

  const socialLinks = [
    { icon: 'facebook', label: 'Facebook', href: contactInfo.facebook },
    { icon: 'instagram', label: 'Instagram', href: contactInfo.instagram },
    { icon: 'tiktok', label: 'TikTok', href: contactInfo.tiktok },
    { icon: 'whatsapp', label: t('contact.whatsapp'), href: contactInfo.whatsappHref },
  ] as const

  const navigationList = (
    <ul className="mt-2 grid grid-cols-2 gap-x-4 text-sm">
      {navigation.map((item) => (
        <li key={item.href} className="min-w-0">
          <Link to={item.href} className={`${textLinkClass} w-full py-2`}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )

  return (
    <footer className="border-t border-(--border) bg-[#f7f1ea]">
      <Container className="py-6 sm:py-7 lg:py-8">
        <div className="grid gap-4 sm:grid-cols-[1.1fr_1fr] sm:gap-x-8 lg:grid-cols-[1.15fr_1fr_1.05fr] lg:gap-8">
          <div className="min-w-0 space-y-3 lg:contents lg:space-y-0">
            <div className="grid min-w-0 grid-cols-[auto_minmax(0,1fr)] content-start gap-x-3 gap-y-1">
              <Link
                to={`/${language}`}
                aria-label="Alianza Ecuatoriana Internacional"
                className={`row-span-2 inline-flex self-start rounded-md ${focusClass}`}
              >
                <img
                  src="/images/logo-aeiny.webp"
                  alt="Alianza Ecuatoriana Internacional"
                  className="h-14 w-14 object-contain lg:h-16 lg:w-16"
                />
              </Link>
              <p className="text-xl font-semibold tracking-[0.14em] text-(--foreground)">AEINY</p>
              <p className="max-w-md text-sm leading-6 text-(--muted)">{t('footer.tagline')}</p>
            </div>

            <div className="min-w-0">
              <h2 className={`hidden lg:block ${headingClass}`}>{t('nav.contact')}</h2>
              <address className="text-sm not-italic leading-6 text-(--muted) lg:mt-2">
                <p>{contactInfo.addressLine1}</p>
                <p>{contactInfo.addressLine2}</p>
                <div className="flex min-w-0 flex-wrap items-center gap-x-4">
                  <a href={contactInfo.phoneHref} className={`${textLinkClass} max-w-full`}>
                    {contactInfo.phone}
                  </a>
                  <a href={contactInfo.emailHref} className={`${textLinkClass} max-w-full break-all`}>
                    {contactInfo.email}
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="min-w-0">
            <details className="group border-y border-(--border) sm:hidden">
              <summary className={`flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-sm [&::-webkit-details-marker]:hidden ${headingClass} ${focusClass}`}>
                {t('footer.navigation')}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  focusable="false"
                  className="h-4 w-4 shrink-0 transition-transform motion-reduce:transition-none group-open:rotate-180"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </summary>
              <nav aria-label={t('footer.navigation')} className="pb-2">
                {navigationList}
              </nav>
            </details>

            <nav aria-label={t('footer.navigation')} className="hidden sm:block">
              <h2 className={headingClass}>{t('footer.navigation')}</h2>
              {navigationList}
            </nav>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 pt-3 sm:mt-5">
          <div className="flex shrink-0 items-center sm:gap-1">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={icon}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                title={label}
                className={iconLinkClass}
              >
                <SocialIcon name={icon} />
              </a>
            ))}
          </div>

          <Link
            to={`/${language}/donate`}
            className={`ml-auto inline-flex min-h-11 max-w-full items-center justify-center rounded-md bg-(--primary) px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-[#4d4d3d] ${focusClass}`}
          >
            {t('nav.donate')}
          </Link>
        </div>
      </Container>
    </footer>
  )
}
