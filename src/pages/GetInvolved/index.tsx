import { ArrowDown, ArrowRight, Download, ExternalLink, HandHeart, Handshake, Heart, Landmark, Mail, MessageCircle, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'
import { PageHero } from '../../components/common/PageHero'
import { Section } from '../../components/common/Section'
import { contactInfo } from '../../data/contact'
import { getInvolvedContent, getInvolvedDonationQr } from '../../data/getInvolved'

const options = [
  { id: 'donate', icon: Heart },
  { id: 'volunteer', icon: HandHeart },
  { id: 'partner', icon: Handshake },
  { id: 'sponsor', icon: Sparkles },
] as const

const opportunities = [
  { id: 'volunteer', icon: HandHeart },
  { id: 'partner', icon: Handshake },
  { id: 'sponsor', icon: Sparkles },
] as const

const sectionPhotoAlt = {
  donate: {
    es: 'Integrantes de la comunidad junto a bolsas y alimentos en una actividad de apoyo de AEINY.',
    en: 'Community members with bags and food at an AEINY community aid activity.',
  },
  volunteer: {
    es: 'El equipo de AEINY entrega materiales a visitantes en un encuentro comunitario.',
    en: 'The AEINY team shares materials with visitors at a community outreach event.',
  },
  partner: {
    es: 'Dos integrantes de AEINY colaboran en una mesa de información comunitaria.',
    en: 'Two AEINY team members work together at a community information table.',
  },
  sponsor: {
    es: 'Un equipo reunido con raciones de comida frente al estandarte de Alianza Ecuatoriana Internacional.',
    en: 'A team gathered with prepared meals behind the Alianza Ecuatoriana Internacional banner.',
  },
} as const

type SectionPhotoProps = {
  id: keyof typeof sectionPhotoAlt
  language: 'en' | 'es'
  sizes: string
}

function SectionPhoto({ id, language, sizes }: SectionPhotoProps) {
  const imagePath = `/images/get-involved/${id}`

  return (
    <img
      src={`${imagePath}.webp`}
      srcSet={`${imagePath}-640.webp 640w, ${imagePath}-960.webp 960w, ${imagePath}.webp 1280w`}
      sizes={sizes}
      alt={sectionPhotoAlt[id][language]}
      width={1280}
      height={960}
      loading="lazy"
      decoding="async"
      className="block h-full w-full object-cover"
    />
  )
}

const focusClass = 'focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)'
const buttonClass = `inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-center text-sm font-semibold transition-colors ${focusClass}`
const primaryButtonClass = `${buttonClass} bg-(--primary) text-(--primary-foreground) hover:bg-(--primary)/90`
const secondaryButtonClass = `${buttonClass} border border-(--border) bg-(--surface) text-(--foreground) hover:bg-(--background)`

const whatsappLink = (message: string) => `${contactInfo.whatsappHref}?text=${encodeURIComponent(message)}`
const emailLink = (subject: string, message: string) =>
  `${contactInfo.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

export function GetInvolvedPage() {
  const { i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const content = getInvolvedContent[language]

  return (
    <>
      <PageMetadata
        language={language}
        title={content.seoTitle}
        description={content.seoDescription}
        canonicalPath={`/${language}/get-involved`}
        alternateLanguagePaths={{ en: '/en/get-involved', es: '/es/get-involved' }}
      />
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />

      <div className="border-b border-(--border) bg-(--surface) py-5 sm:py-6">
        <Container>
          <nav aria-label={content.navigationLabel} className="grid grid-cols-2 gap-3 lg:grid-cols-4">
            {options.map(({ id, icon: Icon }) => (
              <a
                key={id}
                href={`#${id}`}
                className={`group flex min-w-0 flex-col items-start gap-3 rounded-xl border border-(--border) p-3 transition-colors hover:border-(--primary)/50 hover:bg-(--background) sm:flex-row sm:items-center sm:p-4 ${focusClass}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
                  <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold text-(--foreground) sm:text-base">{content.navigation[id].title}</span>
                  <span className="mt-0.5 hidden text-xs text-(--muted) sm:block">{content.navigation[id].copy}</span>
                </span>
                <ArrowDown size={16} className="hidden shrink-0 text-(--primary) sm:block" aria-hidden="true" />
              </a>
            ))}
          </nav>
        </Container>
      </div>

      <Section id="donate" aria-labelledby="donate-title" className="scroll-mt-24 border-b border-(--border) bg-(--background)">
        <Container className="grid gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start lg:gap-16">
          <div className="min-w-0 max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">{content.donation.eyebrow}</p>
            <h2 id="donate-title" className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {content.donation.title}
            </h2>
            <p className="mt-5 leading-7 text-(--muted)">{content.donation.copy}</p>
            <figure className="mt-6 aspect-[4/3] overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
              <SectionPhoto
                id="donate"
                language={language}
                sizes="(min-width: 1280px) 576px, (min-width: 1024px) calc(57.5vw - 74px), (min-width: 640px) 576px, calc(100vw - 32px)"
              />
            </figure>
            <p className="mt-6 text-sm font-semibold text-(--foreground)">{content.donation.supportTitle}</p>
            <ul className="mt-4 space-y-3">
              {content.donation.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-6 text-(--muted)">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <Link to={`/${language}/our-work`} className={`mt-5 inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-(--primary) underline underline-offset-4 ${focusClass}`}>
              {content.donation.workCta}<ArrowRight size={16} aria-hidden="true" />
            </Link>
            <div className="mt-6 border-t border-(--border) pt-5">
              <p className="text-sm leading-6 text-(--muted)">{content.donation.question}</p>
              <a href={whatsappLink(content.donation.message)} target="_blank" rel="noopener noreferrer" className={`${secondaryButtonClass} mt-4 w-full sm:w-auto`}>
                <MessageCircle size={18} className="shrink-0" aria-hidden="true" />{content.donation.cta}
              </a>
            </div>
          </div>

          <aside aria-labelledby="donation-qr-title" className="w-full min-w-0 max-w-md justify-self-center rounded-2xl border border-(--primary)/20 bg-(--surface) p-6 text-center sm:p-8 lg:justify-self-end">
            <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
              <Landmark size={23} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <h3 id="donation-qr-title" className="mt-4 font-display text-2xl text-(--foreground)">{content.donation.qrTitle}</h3>
            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-(--muted)">{content.donation.qrCopy}</p>
            <a
              href={getInvolvedDonationQr}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.donation.qrOpenLabel}
              className={`mx-auto mt-6 block w-full max-w-64 rounded-xl border border-(--border) bg-white p-3 ${focusClass}`}
            >
              <img
                src={getInvolvedDonationQr}
                alt={content.donation.qrAlt}
                width={342}
                height={352}
                loading="lazy"
                decoding="async"
                className="h-auto w-full object-contain"
              />
            </a>
            <p className="mt-4 text-sm font-semibold text-(--foreground)">{content.donation.amountNote}</p>
            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <a href={getInvolvedDonationQr} target="_blank" rel="noopener noreferrer" aria-label={content.donation.qrOpenLabel} className={secondaryButtonClass}>
                {content.donation.qrOpen}<ExternalLink size={16} className="shrink-0" aria-hidden="true" />
              </a>
              <a href={getInvolvedDonationQr} download="AEINY-Cooperativa-Yuyay-QR.jpeg" className={primaryButtonClass}>
                <Download size={16} className="shrink-0" aria-hidden="true" />{content.donation.qrDownload}
              </a>
            </div>
            <p className="mt-4 text-xs leading-5 text-(--muted)">{content.donation.mobileHint}</p>
          </aside>
        </Container>
      </Section>

      <Section aria-labelledby="opportunities-title" className="bg-(--background)">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">{content.opportunitiesEyebrow}</p>
            <h2 id="opportunities-title" className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl">{content.opportunitiesTitle}</h2>
            <p className="mt-4 leading-7 text-(--muted)">{content.opportunitiesCopy}</p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map(({ id, icon: Icon }) => {
              const item = content.opportunities[id]
              return (
                <article key={id} id={id} aria-labelledby={`${id}-title`} className="flex min-w-0 scroll-mt-24 flex-col overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-(--accent-soft)">
                    <SectionPhoto
                      id={id}
                      language={language}
                      sizes="(min-width: 1280px) 392px, (min-width: 1024px) calc(33.333vw - 35px), (min-width: 768px) calc(50vw - 35px), (min-width: 640px) calc(100vw - 50px), calc(100vw - 34px)"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
                        <Icon size={20} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--primary)">{item.eyebrow}</p>
                    </div>
                    <h3 id={`${id}-title`} className="mt-4 font-display text-2xl leading-tight tracking-[-0.02em] text-(--foreground)">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-(--muted)">{item.copy}</p>
                    <ul className="mb-6 mt-5 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-(--muted)">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--primary)" aria-hidden="true" /><span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-auto border-t border-(--border) pt-5">
                      <p className="text-sm leading-6 text-(--muted)">{item.nextStep}</p>
                      {id === 'volunteer' ? (
                        <a href={whatsappLink(item.message)} target="_blank" rel="noopener noreferrer" className={`${primaryButtonClass} mt-5 w-full`}>
                          <MessageCircle size={18} className="shrink-0" aria-hidden="true" />{item.cta}
                        </a>
                      ) : (
                        <a href={emailLink(item.subject, item.message)} className={`${primaryButtonClass} mt-5 w-full`}>
                          <Mail size={18} className="shrink-0" aria-hidden="true" />{item.cta}
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="involvement-contact-title" className="border-t border-(--border) bg-(--surface-dark) text-white">
        <Container className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">{content.contact.eyebrow}</p>
            <h2 id="involvement-contact-title" className="mt-3 font-display text-3xl leading-tight tracking-[-0.03em] sm:text-4xl">{content.contact.title}</h2>
            <p className="mt-4 leading-7 text-white/80">{content.contact.copy}</p>
            <a href={contactInfo.emailHref} className="mt-4 inline-flex min-h-11 max-w-full items-center gap-2 rounded-sm text-sm text-white underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              <Mail size={17} className="shrink-0" aria-hidden="true" /><span className="break-all">{contactInfo.email}</span>
            </a>
          </div>
          <div className="flex flex-col items-start gap-3 lg:items-end">
            <a href={whatsappLink(content.contact.message)} target="_blank" rel="noopener noreferrer" className={`${buttonClass} w-full bg-(--accent) text-(--surface-dark) hover:bg-(--accent)/90 focus-visible:outline-white sm:w-auto`}>
              <MessageCircle size={18} className="shrink-0" aria-hidden="true" />{content.contact.cta}
            </a>
            <Link to={`/${language}/contact`} className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-white underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
              {content.contact.contactPage}<ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  )
}
