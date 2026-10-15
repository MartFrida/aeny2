import { ArrowRight, ArrowUpRight, Music2, Sparkles, UsersRound } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'
import { kuriChasqui2026Event } from '../../data/events/kuriChasqui2026'

const communityMoments = [
  { key: 'celebrations', icon: Sparkles, image: 'family-celebration.webp' },
  { key: 'gatherings', icon: UsersRound, image: 'community-gathering.webp' },
  { key: 'generations', icon: Music2, image: 'community-dinner.webp' },
] as const

export function EventsPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'

  return (
    <>
      <PageMetadata
        language={language}
        title={t('events.seoTitle')}
        description={t('events.seoDescription')}
        canonicalPath="/events"
      />

{/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-16 -top-24 h-96 w-96 rounded-full border border-(--accent)/25" />
          <div className="absolute right-14 top-12 h-64 w-64 rounded-full border border-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-(--accent)/55 to-transparent" />
        </div>
        <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('events.eyebrow')}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.03] tracking-[-0.05em] md:text-6xl lg:text-7xl">
              {t('events.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">{t('events.heroIntro')}</p>
          </div>
          <div className="relative mx-auto aspect-[16/10] w-full max-w-xl overflow-hidden rounded-[1.75rem] border border-white/15 bg-(--surface-dark)">
            <img
              src="/images/aeiny/cultural-parade.webp"
              alt={t('events.heroPhotoAlt')}
              className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
              width="960"
              height="600"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </Container>
      </section>

      {/* Film Section */}
<section className="overflow-hidden bg-(--background) py-14 md:py-20 lg:py-24">
  <Container>
    <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] lg:gap-16 xl:gap-20">

      {/* Content */}
      <div className="order-1 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
          {t('events.filmEyebrow')}
        </p>

        <h2 className="mt-3 max-w-2xl font-display text-3xl leading-[1.08] tracking-[-0.04em] text-(--foreground) sm:text-4xl lg:text-5xl">
          {t('events.filmTitle')}
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-7 text-(--muted) md:text-lg md:leading-8">
          {t('events.filmCopy')}
        </p>

        <p className="mt-5 text-sm font-semibold text-(--primary) md:text-base">
          {t('events.filmDate')}
        </p>

        <div className="mt-7">
          <Button
            to={`/${language}/events/festival-internacional-de-cine-andino-2026`}
            className="w-full justify-center bg-(--primary) text-white hover:bg-(--primary)/90 sm:w-auto"
          >
            {t('events.filmCta')}
            <ArrowRight
              aria-hidden="true"
              size={16}
              className="ml-2 shrink-0"
            />
          </Button>
        </div>
      </div>

      {/* Poster */}
      <div className="relative order-2 mx-auto flex w-full max-w-[320px] items-center justify-center sm:max-w-[360px] md:max-w-[390px] lg:max-w-[420px]">

        {/* Decorative circles */}
        <div
          aria-hidden="true"
          className="absolute -left-5 top-[12%] hidden h-24 w-24 rounded-full border border-(--accent)/50 sm:block md:h-28 md:w-28 lg:-left-8"
        />

        <div
          aria-hidden="true"
          className="absolute -bottom-5 -right-3 hidden h-20 w-20 rounded-full border border-(--primary)/15 sm:block md:h-24 md:w-24 lg:-right-6"
        />

        {/* Poster card */}
        <div className="relative w-full rounded-[1.5rem] bg-[#f3efe8] p-2.5 shadow-[0_24px_60px_rgba(0,0,0,0.18)] ring-1 ring-black/5 sm:p-3 md:rounded-[1.75rem]">
          <img
            src={kuriChasqui2026Event.poster}
            alt={t('home.posterAlt')}
            width={500}
            height={700}
            loading="lazy"
            decoding="async"
            className="h-auto w-full rounded-[1rem] border border-[#d7d0c5] object-cover"
          />
        </div>
      </div>

    </div>
  </Container>
</section>

{/* Feature Section */}
      <section className="bg-(--background) py-14 md:py-20">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
            <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--background) lg:order-1">
              <img
                src="/images/aeiny/international-parade.webp"
                alt={t('events.featurePhotoAlt')}
                className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {t('events.featureEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('events.featureTitle')}
              </h2>
              <div className="mt-5 space-y-4 leading-7 text-(--muted)">
                <p>{t('events.featureCopy1')}</p>
                <p>{t('events.featureCopy2')}</p>
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {(['music', 'folklore', 'dance', 'tradition', 'community'] as const).map((keyword) => (
                  <span key={keyword} className="rounded-full border border-(--border) bg-(--surface) px-3.5 py-1.5 text-xs text-(--muted)">
                    {t(`events.keyword.${keyword}`)}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

{/* Moments Section */}
      <section className="border-y border-(--border) bg-(--surface) py-14 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('events.momentsEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t('events.momentsTitle')}
            </h2>
          </div>
          <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communityMoments.map(({ key, icon: Icon, image }, index) => (
              <article key={key} className="overflow-hidden rounded-2xl border border-(--border) bg-(--background)">
                <div className="relative aspect-[4/3] overflow-hidden bg-(--accent-soft)">
                  <img
                    src={`/images/aeiny/${image}`}
                    alt={t(`events.moment.${key}PhotoAlt`)}
                    className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
                    width="960"
                    height="720"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <Icon aria-hidden="true" size={21} strokeWidth={1.5} className="text-(--primary)" />
                    <span className="font-display text-sm text-(--accent)">0{index + 1}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-(--foreground)">
                    {t(`events.moment.${key}Title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-(--muted)">
                    {t(`events.moment.${key}Copy`)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>



      <section className="bg-(--surface-dark) py-14 text-white md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('events.socialEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
              {t('events.socialTitle')}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/70">{t('events.socialCopy')}</p>
          </div>
          <a
            href="https://www.facebook.com/alianzaecuatorianaIntofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 justify-self-start rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) transition hover:bg-(--accent)/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent)"
          >
            {t('events.socialCta')}
            <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </Container>
      </section>
    </>
  )
}
