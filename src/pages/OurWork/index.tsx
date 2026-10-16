import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const areas = [
  {
    key: 'support',
    id: 'migrant-support',
    image: '/images/aeiny/community-aid.webp',
    position: 'object-[center_45%]',
    highlights: ['rights', 'guidance', 'discrimination', 'participation'],
  },
  {
    key: 'education',
    id: 'education-training',
    image: '/images/aeiny/workforce-classroom.webp',
    position: 'object-[center_40%]',
    highlights: ['construction', 'osha', 'workplace', 'learning'],
  },
  {
    key: 'culture',
    id: 'culture-heritage',
    image: '/images/aeiny/cultural-parade.webp',
    position: 'object-[center_45%]',
    highlights: ['heritage', 'arts', 'participation', 'generations'],
  },
  {
    key: 'wellbeing',
    id: 'community-wellbeing',
    image: '/images/home/community-health.webp',
    position: 'object-center',
    highlights: ['healthyLiving', 'activity', 'families', 'connection'],
  },
] as const

const approachSteps = ['listen', 'connect', 'strengthen'] as const

export function OurWorkPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const prefix = `/${language}`

  return (
    <>
      <PageMetadata
        language={language}
        title={t('ourWork.seoTitle')}
        description={t('ourWork.seoDescription')}
        canonicalPath={`${prefix}/our-work`}
        alternateLanguagePaths={{ en: '/en/our-work', es: '/es/our-work' }}
      />

      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute right-16 top-16 h-64 w-64 rounded-full border border-(--accent)/25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/25 to-transparent" />
        </div>
        <Container className="relative grid gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('ourWork.heroEyebrow')}
            </p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl leading-[1.05] tracking-[-0.05em] text-white sm:text-5xl md:text-6xl lg:text-7xl">
              {t('ourWork.heroTitle')}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
              {t('ourWork.heroDescription')}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="#areas-of-work"
                className="justify-center bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!"
              >
                {t('ourWork.heroPrimary')} <ArrowDown aria-hidden="true" size={16} className="ml-2" />
              </Button>
              <Button
                to={`${prefix}/contact`}
                variant="secondary"
                className="justify-center border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                {t('ourWork.heroSecondary')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/5">
              <img
                src="/images/aeiny/community-gathering.webp"
                alt={t('ourWork.heroPhotoAlt')}
                className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
                width="960"
                height="720"
                fetchPriority="high"
                decoding="async"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-start md:gap-12">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('ourWork.approachEyebrow')}
            </p>
            <h2 className="mt-3 max-w-md font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('ourWork.approachTitle')}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            {t('ourWork.approachCopy')}
          </p>
        </Container>
      </section>

      <section id="areas-of-work" className="scroll-mt-24 border-y border-(--border) bg-(--surface)">
        <Container className="py-12 md:py-16">
          <div className="mb-8 max-w-2xl md:mb-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('ourWork.areasEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('ourWork.areasTitle')}
            </h2>
          </div>
        </Container>
        {areas.map(({ key, id, image, position, highlights }, index) => (
          <section
            key={key}
            id={id}
            className={`border-t border-(--border) py-12 md:py-16 ${index % 2 === 0 ? 'bg-(--background)' : 'bg-(--surface)'}`}
          >
            <Container className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                  <span className="font-display text-base text-(--accent)">0{index + 1}</span>
                  <span aria-hidden="true">/</span>
                  <span>{t(`ourWork.area.${key}.eyebrow`)}</span>
                </div>
                <h2 className="mt-4 max-w-xl font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
                  {t(`ourWork.area.${key}.title`)}
                </h2>
                <p className="mt-5 max-w-xl font-display text-xl leading-snug text-(--foreground) sm:text-2xl">
                  {t(`ourWork.area.${key}.lead`)}
                </p>
                <p className="mt-4 max-w-xl text-base leading-7 text-(--muted)">
                  {t(`ourWork.area.${key}.copy`)}
                </p>
                <ul className="mt-6 grid gap-x-6 gap-y-3 border-t border-(--border) pt-5 sm:grid-cols-2">
                  {highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-(--foreground)">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)" />
                      {t(`ourWork.area.${key}.highlights.${highlight}`)}
                    </li>
                  ))}
                </ul>
                {key === 'culture' && (
                  <Link
                    to={`${prefix}/events`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition-colors hover:text-(--foreground) focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
                  >
                    {t('ourWork.eventsLink')} <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                )}
              </div>
              <div className={`relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-(--border) bg-(--accent-soft) ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img
                  src={image}
                  alt={t(`ourWork.area.${key}.photoAlt`)}
                  className={`absolute inset-0 h-full w-full object-cover ${position}`}
                  width="960"
                  height="720"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </Container>
          </section>
        ))}
      </section>

      <section className="overflow-hidden bg-(--surface-dark) py-14 text-white md:py-20">
        <Container className="grid items-center gap-9 lg:grid-cols-[1fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t('ourWork.centerEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] sm:text-4xl md:text-5xl">
              {t('ourWork.centerTitle')}
            </h2>
            <p className="mt-5 font-display text-xl leading-snug text-white/90 sm:text-2xl">
              {t('ourWork.centerLead')}
            </p>
            <p className="mt-4 leading-7 text-white/75">{t('ourWork.centerCopy')}</p>
            <Button
              to={`${prefix}/contact`}
              className="mt-7 justify-center bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!"
            >
              {t('ourWork.centerCta')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
            </Button>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] border border-white/15 bg-white/5">
            <img
              src="/images/aeiny/original/12safety-classroom_11zon.webp"
              alt={t('ourWork.centerPhotoAlt')}
              className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
              width="960"
              height="720"
              loading="lazy"
              decoding="async"
            />
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('ourWork.howEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('ourWork.howTitle')}
            </h2>
          </div>
          <ol className="mt-8 grid border-t border-(--border) sm:grid-cols-3">
            {approachSteps.map((step, index) => (
              <li key={step} className="border-b border-(--border) py-6 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0 sm:last:pr-0">
                <span className="font-display text-sm text-(--accent)">0{index + 1}</span>
                <h3 className="mt-3 font-display text-2xl text-(--foreground)">
                  {t(`ourWork.how.${step}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">
                  {t(`ourWork.how.${step}.copy`)}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section className="bg-(--surface) py-12 md:py-16">
        <Container>
          <div className="grid gap-7 bg-(--primary) px-6 py-9 text-white sm:px-9 md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:px-12 md:py-12">
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
                {t('ourWork.finalTitle')}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/85">{t('ourWork.finalCopy')}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                to={`${prefix}/contact`}
                className="justify-center bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!"
              >
                {t('ourWork.finalContact')}
              </Button>
              <Button
                to={`${prefix}/get-involved`}
                variant="secondary"
                className="justify-center border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                {t('ourWork.finalInvolved')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
