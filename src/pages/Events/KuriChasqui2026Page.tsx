import { useEffect } from 'react'
import { ArrowDown, ArrowRight, ArrowUpRight, CalendarDays, Clapperboard, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import {
  kuriChasqui2026Event,
  kuriChasquiCeremony,
  kuriChasquiPillars,
  kuriChasquiSponsorshipLevels,
} from '../../data/events/kuriChasqui2026'

export function KuriChasqui2026Page() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  useEffect(() => {
    const previousTitle = document.title
    const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]')
    const previousDescription = descriptionMeta?.content
    const meta = descriptionMeta ?? document.createElement('meta')

    document.title = t('kuri2026Page.seoTitle')
    meta.name = 'description'
    meta.content = t('kuri2026Page.seoDescription')

    if (!descriptionMeta) {
      document.head.append(meta)
    }

    return () => {
      document.title = previousTitle

      if (descriptionMeta) {
        if (previousDescription) {
          descriptionMeta.content = previousDescription
        } else {
          descriptionMeta.removeAttribute('content')
        }
      } else {
        meta.remove()
      }
    }
  }, [i18n.resolvedLanguage, t])

  const sponsorPath = `/${language}/get-involved`
  const donatePath = `/${language}/donate#kuri-chasqui`
  const rsvpHref = `mailto:${kuriChasqui2026Event.rsvpEmail}`
  const telHref = `tel:${kuriChasqui2026Event.rsvpPhone.replace(/[^\d+]/g, '')}`

  return (
    <>
      <section className="relative overflow-hidden bg-(--surface-dark) text-white">
        <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
          <div className="absolute -left-32 top-12 h-80 w-80 rounded-full border border-white/10" />
          <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full border border-(--accent)/20" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              {t('kuri2026Page.eyebrow')}
            </p>
            <h1 className="mt-5 font-display text-5xl leading-[0.9] tracking-tighter text-white sm:text-6xl md:text-7xl xl:text-8xl">
              <span className="block">KURI</span>
              <span className="block">CHASQUI</span>
              <span className="block text-(--accent)">2026</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm font-semibold uppercase tracking-[0.12em] text-(--accent) md:text-base">
              {kuriChasqui2026Event.officialName}
            </p>
            <p className="mt-2 max-w-xl text-lg text-white/85 md:text-xl">
              {t('kuri2026Page.heroSubtitle')}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
              {t('kuri2026Page.heroSupporting')}
            </p>

            <div className="mt-7 grid gap-3 text-sm sm:grid-cols-2">
              <div className="border-l border-(--accent) pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  {t('kuri2026Page.dateLabel')}
                </p>
                <p className="mt-1 text-base text-white">{t('eventKuri2026.dates')}</p>
              </div>
              <div className="border-l border-(--accent) pl-4">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
                  {t('kuri2026Page.locationLabel')}
                </p>
                <p className="mt-1 text-base text-white">
                  {kuriChasqui2026Event.venue} · {t('eventKuri2026.locationValue')}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={rsvpHref}
                className="inline-flex items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) transition-colors hover:bg-[#d79d54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {t('kuri2026Page.confirmAttendance')}
                <ArrowRight size={16} className="ml-2" />
              </a>
              <Button to={donatePath} variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                {t('kuri2026Page.supportFestival')}
              </Button>
              <Link
                to={sponsorPath}
                className="inline-flex items-center justify-center gap-2 px-2 py-2.5 text-sm font-semibold text-white/75 transition hover:text-white"
              >
                {t('kuri2026Page.becomeSponsor')}
                <ArrowUpRight size={15} />
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -left-5 top-12 hidden h-24 w-24 rounded-full border border-(--accent)/50 md:block" aria-hidden="true" />
            <div className="relative max-w-md rounded-2xl bg-[#f3efe8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/20">
              <img
                src={kuriChasqui2026Event.poster}
                alt={t('kuri2026Page.posterAlt')}
                width={500}
                height={700}
                loading="eager"
                className="h-auto w-full rounded-xl border border-[#d7d0c5] object-contain"
              />
            </div>
          </div>
          <a
            href="#festival-about"
            className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/55 transition hover:text-white lg:inline-flex"
          >
            <ArrowDown size={14} />
            {t('kuri2026Page.discoverMore')}
          </a>
        </Container>
      </section>

      <section id="festival-about" className="border-b border-(--border) bg-(--background)">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.aboutLabel')}
            </p>
            <div className="mt-6 h-px w-16 bg-(--accent)" />
            <p className="mt-5 text-sm text-(--muted)">{t('kuri2026Page.foundersLabel')}</p>
            <p className="mt-2 font-medium text-(--foreground)">Walter Sinche</p>
            <p className="font-medium text-(--foreground)">Amaruk Kayshapanta</p>
          </div>
          <div>
            <h2 className="max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('kuri2026Page.aboutTitle')}
            </h2>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-(--muted)">
              {t('kuri2026Page.aboutCopy')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#e9dfd2]">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.whyLabel')}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('kuri2026Page.whyTitle')}
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-(--muted)">
            <p>{t('kuri2026Page.whyCopyOne')}</p>
            <p>{t('kuri2026Page.whyCopyTwo')}</p>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface)">
        <Container className="py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.pillarsLabel')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('kuri2026Page.pillarsTitle')}
            </h2>
          </div>
          <div className="mt-10 grid gap-x-10 md:grid-cols-2">
            {kuriChasquiPillars.map((pillar, index) => (
              <article
                key={pillar.titleKey}
                className={`border-t border-(--border) py-6 ${index >= 2 ? 'md:border-b' : ''}`}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  0{index + 1}
                </p>
                <h3 className="mt-3 font-display text-3xl text-(--foreground)">
                  {t(`kuri2026Page.${pillar.titleKey}`)}
                </h3>
                <p className="mt-2 max-w-md text-(--muted)">
                  {t(`kuri2026Page.${pillar.descriptionKey}`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--background)">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.editionLabel')}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('kuri2026Page.editionTitle')}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-(--muted)">
              {t('kuri2026Page.editionCopy')}
            </p>
          </div>
          <div className="grid gap-5 border-l border-(--border) pl-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <CalendarDays className="mt-1 shrink-0 text-(--primary)" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted)">
                  {t('kuri2026Page.dateLabel')}
                </p>
                <p className="mt-1 font-semibold text-(--foreground)">{t('eventKuri2026.dates')}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin className="mt-1 shrink-0 text-(--primary)" size={18} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--muted)">
                  {t('kuri2026Page.venueLabel')}
                </p>
                <p className="mt-1 font-semibold text-(--foreground)">{kuriChasqui2026Event.venue}</p>
                <p className="mt-1 whitespace-pre-line text-sm leading-6 text-(--muted)">
                  {kuriChasqui2026Event.address}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface-dark) text-white">
        <Container className="py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
                {t('kuri2026Page.programLabel')}
              </p>
              <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-white md:text-5xl">
                {t('kuri2026Page.programTitle')}
              </h2>
              <p className="mt-5 text-sm leading-6 text-white/65">{t('kuri2026Page.programComingSoon')}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <article className="border border-white/15 p-5 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  {t('kuri2026Page.festivalWeek')}
                </p>
                <p className="mt-2 font-display text-3xl text-white">NOV 8–15</p>
                <p className="mt-1 text-sm text-white/65">{t('eventKuri2026.dates')}</p>
              </article>
              <article className="border border-white/15 p-5 sm:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  NOV 14
                </p>
                <p className="mt-2 font-display text-2xl text-white">{t('kuri2026Page.awardsDate')}</p>
                <a href="#awards-ceremony" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white">
                  {t('kuri2026Page.viewCeremony')}
                  <ArrowRight size={14} />
                </a>
              </article>
              {[
                'officialSelection',
                'dailyScreenings',
                'culturalActivities',
                'guestsAndJury',
              ].map((item) => (
                <article key={item} className="border-t border-white/15 py-4">
                  <p className="font-semibold text-white">{t(`kuri2026Page.${item}`)}</p>
                  <p className="mt-1 text-sm text-white/60">
                    {item === 'officialSelection' || item === 'guestsAndJury'
                      ? t('kuri2026Page.comingSoon')
                      : t('kuri2026Page.programComingSoon')}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#e9dfd2]">
        <Container className="grid gap-10 py-16 md:py-20 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.awardLabel')}
            </p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('kuri2026Page.awardTitle')}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-(--muted)">
              {t('kuri2026Page.awardCopy')}
            </p>
          </div>
          <div className="relative flex min-h-64 items-center justify-center overflow-hidden border border-(--border) bg-(--surface) p-8">
            {/* TODO: Replace this typographic placeholder with an approved statuette image when available. */}
            <div className="absolute inset-5 border border-(--accent)/40" aria-hidden="true" />
            <div className="relative text-center">
              <Clapperboard className="mx-auto text-(--primary)" size={32} strokeWidth={1.3} />
              <p className="mt-4 font-display text-2xl tracking-[0.12em] text-(--foreground)">KURI CHASQUI</p>
              <p className="mt-2 max-w-xs text-sm text-(--muted)">
                {t('kuri2026Page.awardImagePlaceholder')}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="awards-ceremony" className="bg-(--surface)">
        <Container className="py-16 md:py-20">
          <div className="flex flex-col gap-4 border-b border-(--border) pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
                {t('kuri2026Page.ceremonyLabel')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('kuri2026Page.ceremonyTitle')}
              </h2>
            </div>
            <p className="max-w-md text-(--muted)">{t('kuri2026Page.ceremonyIntro')}</p>
          </div>
          <div className="mt-2">
            {kuriChasquiCeremony.map((segment) => (
              <article key={segment.time} className="grid gap-3 border-b border-(--border) py-6 sm:grid-cols-[8rem_1fr] sm:gap-6">
                <p className="font-display text-3xl text-(--primary)">{segment.time}</p>
                <div>
                  <h3 className="text-xl font-semibold text-(--foreground)">
                    {t(`kuri2026Page.${segment.titleKey}`)}
                  </h3>
                  <p className="mt-2 max-w-3xl leading-7 text-(--muted)">
                    {t(`kuri2026Page.${segment.descriptionKey}`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--background)">
        <Container className="py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.sponsorLabel')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('kuri2026Page.sponsorTitle')}
            </h2>
            <p className="mt-4 text-lg leading-7 text-(--muted)">{t('kuri2026Page.sponsorIntro')}</p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {kuriChasquiSponsorshipLevels.map((level) => (
              <article key={level.name} className="flex flex-col border border-(--border) bg-(--surface) p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
                  {t(`kuri2026Page.${level.levelKey}`)}
                </p>
                <h3 className="mt-2 font-display text-3xl text-(--foreground)">{level.name}</h3>
                <p className="mt-1 font-medium text-(--muted)">{t(`kuri2026Page.${level.roleKey}`)}</p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-(--border) pt-5 text-sm leading-6 text-(--muted)">
                  {level.benefitKeys.map((benefitKey) => (
                    <li key={benefitKey} className="flex gap-3">
                      <span className="mt-[0.65rem] h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" aria-hidden="true" />
                      <span>{t(`kuri2026Page.${benefitKey}`)}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Button to={sponsorPath}>{t('kuri2026Page.sponsorCta')}</Button>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface-dark) text-white">
        <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
              {t('kuri2026Page.attendLabel')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-white md:text-5xl">
              {t('kuri2026Page.attendTitle')}
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-7 text-white/70">
              {t('kuri2026Page.attendCopy')}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <a
              href={rsvpHref}
              className="inline-flex items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) transition hover:bg-[#d79d54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
            >
              {t('kuri2026Page.confirmAttendance')}
            </a>
            <a href={telHref} className="text-center text-sm font-semibold text-white/80 underline decoration-white/25 underline-offset-4">
              {kuriChasqui2026Event.rsvpPhone}
            </a>
          </div>
        </Container>
      </section>

      <section className="bg-(--background)">
        <Container className="grid gap-8 py-14 md:grid-cols-2 md:gap-14 md:py-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.supportFestival')}
            </p>
            <h2 className="mt-3 font-display text-3xl leading-tight text-(--foreground) md:text-4xl">
              {t('kuri2026Page.supportTitle')}
            </h2>
            <p className="mt-4 max-w-xl leading-7 text-(--muted)">{t('kuri2026Page.supportCopy')}</p>
            <Link to={donatePath} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)">
              {t('kuri2026Page.supportFestival')} <ArrowRight size={15} />
            </Link>
          </div>
          <div className="border-l border-(--border) pl-6 md:pl-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t('kuri2026Page.organizerLabel')}
            </p>
            <p className="mt-3 text-lg leading-7 text-(--foreground)">{t('kuri2026Page.organizerCopy')}</p>
            <Link to={`/${language}/about`} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)">
              {t('kuri2026Page.aeinyLink')} <ArrowUpRight size={15} />
            </Link>
            <div className="mt-7 border-t border-(--border) pt-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
                {t('kuri2026Page.contactLabel')}
              </p>
              <p className="mt-2 text-sm text-(--muted)">{t('kuri2026Page.contactCopy')}</p>
              <a href={rsvpHref} className="mt-3 inline-block font-semibold text-(--primary) underline decoration-(--accent) underline-offset-4">
                {kuriChasqui2026Event.rsvpEmail}
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
