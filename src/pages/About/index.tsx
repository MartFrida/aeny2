import { useEffect, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  BriefcaseBusiness,
  HeartHandshake,
  Landmark,
  Leaf,
  MessageCircleHeart,
  UsersRound,
} from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'

const values = [
  { key: 'solidarity', icon: HeartHandshake },
  { key: 'identity', icon: Leaf },
  { key: 'education', icon: BookOpen },
  { key: 'commitment', icon: UsersRound },
] as const

const programs = [
  { key: 'training', icon: BriefcaseBusiness },
  { key: 'guidance', icon: MessageCircleHeart },
  { key: 'culture', icon: Leaf },
  { key: 'projects', icon: Landmark },
] as const

function OrganizationMetadata({ language, title, description }: {
  language: string
  title: string
  description: string
}) {
  useEffect(() => {
    const canonicalUrl = 'https://www.aeiny.org/about'
    const previousTitle = document.title
    const previousLanguage = document.documentElement.lang
    const metaEntries = [
      { selector: 'meta[name="description"]', attribute: 'name', value: 'description', content: description },
      { selector: 'meta[property="og:title"]', attribute: 'property', value: 'og:title', content: title },
      { selector: 'meta[property="og:description"]', attribute: 'property', value: 'og:description', content: description },
    ]
    const previousMeta = metaEntries.map(({ selector, attribute, value, content }) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector)
      const previousContent = element?.content
      const meta = element ?? document.createElement('meta')

      meta.setAttribute(attribute, value)
      meta.content = content

      if (!element) document.head.append(meta)

      return { meta, previousContent, created: !element }
    })
    const canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const previousCanonical = canonical?.href
    const canonicalLink = canonical ?? document.createElement('link')
    canonicalLink.rel = 'canonical'
    canonicalLink.href = canonicalUrl
    if (!canonical) document.head.append(canonicalLink)

    const structuredData = document.createElement('script')
    structuredData.type = 'application/ld+json'
    structuredData.dataset.aboutOrganization = 'true'
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Alianza Ecuatoriana Internacional',
      url: 'https://www.aeiny.org/',
    })
    document.head.append(structuredData)

    document.title = title
    document.documentElement.lang = language

    return () => {
      document.title = previousTitle
      document.documentElement.lang = previousLanguage
      previousMeta.forEach(({ meta, previousContent, created }) => {
        if (created) {
          meta.remove()
        } else if (previousContent !== undefined) {
          meta.content = previousContent
        } else {
          meta.removeAttribute('content')
        }
      })
      if (canonical) {
        if (previousCanonical) canonical.href = previousCanonical
        else canonical.removeAttribute('href')
      } else {
        canonicalLink.remove()
      }
      structuredData.remove()
    }
  }, [description, language, title])

  return null
}

export function AboutPage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const [logoUnavailable, setLogoUnavailable] = useState(false)
  const prefix = `/${language}`

  return (
    <>
      <OrganizationMetadata
        language={language}
        title={t('about.seoTitle')}
        description={t('about.seoDescription')}
      />

      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-4 top-8 h-72 w-72 rounded-full border border-(--accent)/25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 right-[8%] h-44 w-44 rounded-full bg-(--accent)/10 blur-3xl" />
        </div>
        <Container className="relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--accent)">
              {t('about.eyebrow')}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              {t('about.heroTitle')}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              {t('about.heroDescription')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="#que-hacemos" className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!">
                {t('about.heroPrimary')} <ArrowDown size={16} className="ml-2" />
              </Button>
              <Button
                to={`${prefix}/get-involved`}
                variant="secondary"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                {t('about.heroSecondary')} <ArrowUpRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative min-h-80 overflow-hidden rounded-[2rem] border border-white/15 bg-[#172b35] p-6 sm:min-h-96 sm:p-8">
              <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_72%_25%,rgba(201,154,92,0.2),transparent_34%)]" />
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-2/5 bg-linear-to-t from-[#0b161d] to-transparent" />
              <div aria-hidden="true" className="absolute bottom-0 left-[8%] h-[36%] w-[19%] rounded-t-[45%] border border-white/10 bg-(--primary)/55" />
              <div aria-hidden="true" className="absolute bottom-0 left-[27%] h-[46%] w-[25%] rounded-t-[48%] border border-white/10 bg-[#79806a]/45" />
              <div aria-hidden="true" className="absolute bottom-0 right-[7%] h-[31%] w-[28%] rounded-t-[50%] border border-white/10 bg-[#a5794d]/45" />
              <div aria-hidden="true" className="absolute right-[13%] top-[17%] h-20 w-20 rounded-full border border-(--accent)/40 sm:h-28 sm:w-28" />
              <div className="absolute inset-x-6 bottom-6 flex items-end justify-between gap-4 sm:inset-x-8 sm:bottom-8">
                <div className="max-w-xs">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
                    {t('about.heroVisualEyebrow')}
                  </p>
                  <p className="mt-2 font-display text-2xl leading-tight text-white sm:text-3xl">
                    {t('about.heroVisualTitle')}
                  </p>
                </div>
                <span aria-hidden="true" className="mb-1 h-px w-12 shrink-0 bg-(--accent)" />
              </div>
            </div>
            <p className="mt-3 text-right text-xs uppercase tracking-[0.16em] text-white/55">
              {t('about.heroVisualCaption')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-[2rem] border-l border-t border-(--accent)/70" />
            <div className="relative flex min-h-72 items-center justify-center rounded-[1.75rem] border border-(--border) bg-(--surface) p-8">
              {!logoUnavailable ? (
                <img
                  src="/images/logo-aei.jpg"
                  alt={t('about.logoAlt')}
                  width={640}
                  height={640}
                  loading="lazy"
                  className="max-h-60 w-full object-contain"
                  onError={() => setLogoUnavailable(true)}
                />
              ) : (
                <div role="img" aria-label={t('about.logoPending')} className="text-center">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border border-(--accent)/70 bg-(--background) font-display text-4xl tracking-[0.12em] text-(--primary)">
                    AEI
                  </div>
                  <p className="mt-5 text-sm text-(--muted)">{t('about.logoPending')}</p>
                </div>
              )}
            </div>
            <div className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full border border-(--primary)/30 bg-(--accent-soft)" />
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.identityEyebrow')}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.identityTitle')}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
              <p>{t('about.identityCopy1')}</p>
              <p>{t('about.identityCopy2')}</p>
              <p>{t('about.identityCopy3')}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-16 md:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.missionEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.missionHeading')}
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {(['mission', 'vision'] as const).map((key, index) => (
              <article
                key={key}
                className={`rounded-[1.5rem] border p-7 md:p-9 ${index === 0 ? 'border-(--border) bg-(--background)' : 'border-(--primary)/25 bg-(--surface)'}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                  {t(`about.${key}Label`)}
                </p>
                <p className="mt-5 max-w-xl font-display text-2xl leading-relaxed tracking-[-0.02em] text-(--foreground) md:text-3xl">
                  {t(`about.${key}Copy`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.valuesEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.valuesTitle')}
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }, index) => (
              <article key={key} className="border-t border-(--border) pt-5">
                <div className="flex items-center justify-between">
                  <Icon aria-hidden="true" size={21} strokeWidth={1.6} className="text-(--primary)" />
                  <span className="font-display text-sm text-(--muted-foreground)">0{index + 1}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-(--foreground)">{t(`about.value.${key}Title`)}</h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">{t(`about.value.${key}Copy`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="que-hacemos" className="scroll-mt-24 border-y border-(--border) bg-(--surface) py-16 md:py-24">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.programsEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.programsTitle')}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-(--muted)">
              {t('about.programsIntro')}
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {programs.map(({ key, icon: Icon }) => (
              <article key={key} className="group rounded-2xl border border-(--border) bg-(--background) p-6 transition-colors hover:border-(--primary)/50 md:p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
                  <Icon aria-hidden="true" size={19} strokeWidth={1.7} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-(--foreground)">{t(`about.program.${key}Title`)}</h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">{t(`about.program.${key}Copy`)}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="overflow-hidden bg-(--surface-dark) py-16 text-white md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('about.centerEyebrow')}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] md:text-5xl">
              {t('about.centerTitle')}
            </h2>
            <p className="mt-5 font-display text-2xl leading-snug text-white/90">
              {t('about.centerLead')}
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">{t('about.centerCopy')}</p>
            <Link
              to={`${prefix}/our-work`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--accent) transition hover:text-white focus-visible:rounded-sm"
            >
              {t('about.centerCta')} <ArrowRight size={16} />
            </Link>
          </div>
          <div aria-hidden="true" className="relative min-h-64 overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#172b35] p-8 sm:min-h-80">
            <div className="absolute right-10 top-8 h-32 w-32 rounded-full border border-(--accent)/35" />
            <div className="absolute right-16 top-14 h-20 w-20 rounded-full bg-(--accent)/10" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-[#0a151c] to-transparent" />
            <div className="absolute bottom-0 left-[12%] h-[41%] w-[22%] rounded-t-full border border-white/10 bg-(--primary)/60" />
            <div className="absolute bottom-0 left-[37%] h-[54%] w-[29%] rounded-t-full border border-white/10 bg-[#79806a]/45" />
            <div className="absolute bottom-0 right-[8%] h-[34%] w-[24%] rounded-t-full border border-white/10 bg-[#a5794d]/45" />
            <div className="absolute bottom-7 left-7 flex items-center gap-3 text-white/80">
              <span className="h-px w-8 bg-(--accent)" />
              <span className="text-xs font-semibold uppercase tracking-[0.18em]">{t('about.centerVisualLabel')}</span>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <div className="order-2 lg:order-1">
            <div aria-hidden="true" className="relative min-h-72 overflow-hidden rounded-[1.75rem] border border-(--border) bg-[#e6dfd1] p-7 sm:min-h-80">
              <div className="absolute -left-12 bottom-0 h-52 w-[70%] rounded-[50%] bg-(--primary)/25" />
              <div className="absolute -right-10 bottom-0 h-64 w-[75%] rounded-[50%] bg-(--primary)/40" />
              <div className="absolute right-9 top-8 h-20 w-20 rounded-full bg-(--accent)/55" />
              <div className="absolute bottom-0 left-0 right-0 h-16 border-t border-(--foreground)/10 bg-[#53604e]/70" />
              <p className="absolute bottom-5 left-6 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                {t('about.parkVisualLabel')}
              </p>
            </div>
          </div>
          <div className="order-1 max-w-2xl lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('about.parkEyebrow')}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('about.parkTitle')}
            </h2>
            <div className="mt-5 space-y-4 leading-7 text-(--muted)">
              <p>{t('about.parkCopy1')}</p>
              <p>{t('about.parkCopy2')}</p>
            </div>
            <Link
              to={`${prefix}/projects/parque-del-migrante`}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground) focus-visible:rounded-sm"
            >
              {t('about.parkCta')} <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <section className="border-t border-(--border) bg-(--surface) py-16 md:py-20">
        <Container>
          <div className="rounded-[2rem] bg-(--primary) px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {t('about.finalEyebrow')}
                </p>
                <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                  {t('about.finalTitle')}
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                  {t('about.finalDescription')}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                <Button to={`${prefix}/get-involved`} className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!">
                  {t('about.finalParticipate')}
                </Button>
                <Button to={`${prefix}/donate`} variant="secondary" className="border-white/30 bg-white/5 text-white hover:bg-white/10">
                  {t('about.finalSupport')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
