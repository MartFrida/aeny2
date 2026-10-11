import { ArrowRight, ArrowUpRight, CalendarRange, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { Section } from '../../components/common/Section'
import { kuriChasqui2026Event } from '../../data/events/kuriChasqui2026'
import { homeWorkAreas } from '../../data/home'

export function HomePage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  const festivalPath = `/${language}/events/kuri-chasqui-2026`
  const donatePath = `/${language}/donate`
  const aboutPath = `/${language}/about`
  const projectPath = `/${language}/projects/parque-del-migrante`
  const newsPath = `/${language}/news`

  return (
    <>
      <section className="relative overflow-hidden bg-(--surface-dark) text-white">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(201,154,92,0.16),transparent_28%)]" />
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <Container className="relative grid gap-10 py-10 md:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
          <div className="max-w-2xl py-4 md:py-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70">
              {t('home.eyebrow')}
            </p>
            <h1 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.06em] text-white md:text-7xl xl:text-[6.2rem]">
              <span className="block">{t('home.title').split('\n')[0]}</span>
              <span className="block">{t('home.title').split('\n')[1]}</span>
              <span className="block text-(--accent)">{t('home.title').split('\n')[2]}</span>
            </h1>

            <p className="mt-5 max-w-xl text-sm font-semibold uppercase tracking-[0.12em] text-(--accent) md:text-base">
              {kuriChasqui2026Event.officialName}
            </p>
            <p className="mt-3 max-w-xl text-lg text-white/80 md:text-xl">{t('home.subtitle')}</p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/70">{t('home.heroDescription')}</p>

            <div className="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">{t('home.dateLabel')}</span>
                <p className="mt-1 text-base text-white">{t('home.dateValue')}</p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">{t('home.timeLabel')}</span>
                <p className="mt-1 text-base text-white">{t('home.timeValue')}</p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm sm:col-span-2">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">{t('home.venueLabel')}</span>
                <p className="mt-1 text-base text-white">{kuriChasqui2026Event.venue} · {t('home.heroLocation')}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={festivalPath} className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!">
                {t('home.ctaPrimary')} <ArrowRight size={16} className="ml-2" />
              </Button>
              <a
                href={`mailto:${kuriChasqui2026Event.rsvpEmail}`}
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {t('home.rsvpCta')}
              </a>
              <Button to={donatePath} variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
                {t('home.ctaSecondary')}
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/70">
              {t('home.organizedBy')}: <span className="font-medium text-white">{kuriChasqui2026Event.organizer} &amp; {kuriChasqui2026Event.coOrganizer}</span>
            </p>
          </div>

          <div className="relative flex items-center justify-center py-4 md:py-8">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-(--accent)/60 md:block" />
            <div className="absolute -bottom-4 right-8 hidden h-24 w-24 rounded-full border border-white/10 md:block" />
            <div className="relative rounded-[1.4rem] bg-[#f3efe8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/20">
              <img
                src={kuriChasqui2026Event.poster}
                alt="Kuri Chasqui 2026 poster for The Andes International Film Fest New York"
                width={500}
                height={700}
                loading="eager"
                className="h-auto w-full max-w-105 rounded-[0.8rem] border border-[#d7d0c5] object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-(--border) bg-(--background)">
        <Container className="py-20 md:py-24">
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">{t('home.introLabel')}</p>
            <h2 className="mt-4 max-w-3xl font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('home.introHeading')}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-(--muted)">{t('home.introBody')}</p>
            <Link to={aboutPath} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-(--foreground) transition hover:text-(--primary)">
              {t('home.discoverLink')} <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      <Section className="bg-(--background)">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.ourWorkLabel')}</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('home.workTitle')}
              </h2>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {homeWorkAreas.map(({ icon: Icon, titleKey, descriptionKey }) => (
              <article key={titleKey} className="group border border-(--border) bg-(--surface) p-6 transition duration-200 hover:-translate-y-0.5 hover:border-(--primary)">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
                  <Icon size={18} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-(--foreground)">{t(titleKey)}</h3>
                <p className="mt-3 text-sm leading-6 text-(--muted)">{t(descriptionKey)}</p>
                <Link to={aboutPath} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)">
                  {t('common.learnMore')} <ArrowRight size={14} />
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <section className="bg-[#e9dfd2] py-20 md:py-24">
        <Container className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.festivalLabel')}</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('home.festivalHeading')}
            </h2>
            <p className="mt-4 max-w-xl text-lg leading-8 text-(--muted)">{t('home.festivalDescription')}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <div className="rounded-2xl border border-[rgba(26,30,38,0.08)] bg-[rgba(255,255,255,0.35)] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.festivalDatesLabel')}</p>
              <p className="mt-3 text-xl font-semibold text-(--foreground)">{t('home.festivalDatesValue')}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(26,30,38,0.08)] bg-[rgba(255,255,255,0.35)] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.festivalTimeLabel')}</p>
              <p className="mt-3 text-xl font-semibold text-(--foreground)">{t('home.timeValue')}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(26,30,38,0.08)] bg-[rgba(255,255,255,0.35)] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.festivalVenueLabel')}</p>
              <p className="mt-3 text-xl font-semibold text-(--foreground)">{kuriChasqui2026Event.venue}</p>
              <p className="mt-2 whitespace-pre-line text-sm leading-6 text-(--muted)">{kuriChasqui2026Event.address}</p>
            </div>
            <div className="rounded-2xl border border-[rgba(26,30,38,0.08)] bg-[rgba(255,255,255,0.35)] p-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.festivalOrganizerLabel')}</p>
              <p className="mt-3 text-lg font-semibold text-(--foreground)">{kuriChasqui2026Event.organizer}</p>
              <p className="mt-1 text-lg font-semibold text-(--foreground)">{kuriChasqui2026Event.coOrganizer}</p>
            </div>
          </div>
        </Container>

        <Container className="mt-10 flex flex-col gap-4 border-t border-[rgba(26,30,38,0.12)] pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3 text-(--foreground)">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-(--surface) text-(--primary)">
              <CalendarRange size={18} />
            </span>
            <div>
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.festivalPastEdition')}</p>
              <Link to={`/${language}/events/kuri-chasqui-2023`} className="text-lg font-semibold text-(--foreground) hover:text-(--primary)">
                Kuri Chasqui 2023
              </Link>
            </div>
          </div>

          <Button to={festivalPath} className="w-full md:w-auto">
            {t('home.festivalCta')}
          </Button>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface)">
        <Container className="grid gap-10 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.projectLabel')}</p>
            <h2 className="mt-4 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('home.projectTitle')}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-(--muted)">{t('home.projectDescription')}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to={projectPath}>{t('home.projectCta')}</Button>
              <Button to={donatePath} variant="secondary">{t('home.projectSupport')}</Button>
            </div>
          </div>

          <div className="relative min-h-75 overflow-hidden rounded-3xl border border-(--border) bg-[linear-gradient(135deg,#f6f3ee,#ece5db)] p-6">
            <div className="absolute inset-5 rounded-[1.2rem] border border-dashed border-[rgba(26,30,38,0.28)]" />
            <div className="relative flex h-full min-h-65 flex-col justify-between">
              <div className="flex justify-between text-(--muted)">
                <span className="text-xs uppercase tracking-[0.2em]">TODO</span>
                <Sparkles size={18} />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-(--muted)">Project placeholder</p>
                <p className="mt-3 max-w-sm text-lg text-(--foreground)">
                  Official project imagery will be added when it is confirmed and approved.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface-dark) text-white">
        <Container className="py-20 md:py-24">
          <div className="border-t border-white/10 pt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">{t('home.cultureLabel')}</p>
            <h2 className="mt-6 max-w-3xl font-display text-5xl leading-[0.92] tracking-[-0.04em] text-white md:text-6xl">
              {t('home.cultureStatement')}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">{t('home.cultureSupportingText')}</p>
            <div className="mt-8 max-w-2xl border-l border-(--accent) pl-5">
              <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-(--accent)">{t('home.awardLabel')}</p>
              <h3 className="mt-2 font-display text-2xl text-white">{t('home.awardTitle')}</h3>
              <p className="mt-2 text-sm leading-6 text-white/70">{t('home.awardDescription')}</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-(--border) bg-[#e9dfd2]">
        <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.rsvpTitle')}</p>
            <a
              href={`tel:${kuriChasqui2026Event.rsvpPhone.replace(/[^\d+]/g, '')}`}
              className="mt-1 inline-block text-lg font-semibold text-(--foreground) underline decoration-(--accent) underline-offset-4"
            >
              {kuriChasqui2026Event.rsvpPhone}
            </a>
          </div>
          <a
            href={`mailto:${kuriChasqui2026Event.rsvpEmail}`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) underline decoration-(--accent) underline-offset-4"
          >
            {kuriChasqui2026Event.rsvpEmail} <ArrowUpRight size={16} />
          </a>
        </Container>
      </section>

      <Section className="bg-(--background)">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">{t('home.supportLabel')}</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('home.supportHeading')}
              </h2>
            </div>
            <p className="max-w-xl text-lg text-(--muted)">{t('home.supportDescription')}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <Link to={`${donatePath}#aeiny`} className="rounded-3xl border border-(--border) bg-(--surface) p-6 transition hover:-translate-y-0.5 hover:border-(--primary)">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">AEINY</p>
              <h3 className="mt-4 text-2xl font-semibold text-(--foreground)">{t('common.supportAEINY')}</h3>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)">
                {t('common.supportAEINY')} <ArrowUpRight size={14} />
              </div>
            </Link>
            <Link to={`${donatePath}#kuri-chasqui`} className="rounded-3xl border border-(--border) bg-(--surface) p-6 transition hover:-translate-y-0.5 hover:border-(--primary)">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">Festival</p>
              <h3 className="mt-4 text-2xl font-semibold text-(--foreground)">{t('common.supportKuri')}</h3>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)">
                {t('common.supportKuri')} <ArrowUpRight size={14} />
              </div>
            </Link>
          </div>
        </Container>
      </Section>

      <Section className="bg-(--surface)">
        <Container>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">{t('home.newsLabel')}</p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('home.newsTitle')}
              </h2>
            </div>
            <Link to={newsPath} className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-(--primary)">
              {t('home.newsViewAll')} <ArrowRight size={16} />
            </Link>
          </div>

          <div className="mt-8 rounded-3xl border border-(--border) bg-(--background) p-8">
            <p className="max-w-2xl text-lg leading-8 text-(--muted)">{t('home.newsDescription')}</p>
          </div>
        </Container>
      </Section>

      <section className="bg-(--surface-dark) text-white">
        <Container className="flex flex-col gap-8 py-16 md:flex-row md:items-center md:justify-between md:py-20">
          <h2 className="max-w-xl font-display text-4xl leading-none tracking-tighter text-white md:text-5xl">
            {t('home.finalCtaHeading')}
          </h2>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to={donatePath} className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!">
              {t('home.finalCtaSupport')}
            </Button>
            <Button to={`/${language}/get-involved`} variant="secondary" className="border-white/20 bg-white/5 text-white hover:bg-white/10">
              {t('home.finalCtaGetInvolved')}
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
