import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const projectImages = [
  { file: 'parque-migrante-entrada.jpg', key: 'entrance' },
  { file: 'parque-migrante-museo.jpg', key: 'museum' },
  { file: 'parque-migrante-concha-acustica.jpg', key: 'amphitheater' },
  { file: 'parque-migrante-pileta.jpg', key: 'fountain' },
  { file: 'parque-migrante-guardiania.jpg', key: 'services' },
  { file: 'parque-migrante-vista-aerea.jpg', key: 'aerial' },
] as const

const objectives = ['migrant', 'projects', 'representation'] as const

export function ProjectsPage() {
  const { t, i18n } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const prefix = `/${language}`

  return (
    <>
      <PageMetadata
        language={language}
        title={t('projects.seoTitle')}
        description={t('projects.seoDescription')}
        canonicalPath={`${prefix}/projects`}
        alternateLanguagePaths={{ en: '/en/projects', es: '/es/projects' }}
      />

      <section className="border-b border-(--border) bg-(--background) py-16 md:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('projects.eyebrow')}
            </p>
            <h1 className="mt-4 font-display text-5xl leading-[1.04] tracking-[-0.05em] text-(--foreground) md:text-6xl lg:text-7xl">
              {t('projects.heroTitle')}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-(--muted)">
              {t('projects.heroIntro')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface) py-14 md:py-20">
        <Container>
          <div className="grid gap-9 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <figure className="overflow-hidden rounded-2xl border border-(--border) bg-(--background)">
              <div className="flex aspect-[4/3] items-center justify-center bg-white p-3 sm:p-6">
                <img
                  src="/images/aeiny/projects/parque-migrante-entrada.jpg"
                  alt={t('projects.gallery.entrance')}
                  className="max-h-full w-full object-contain"
                  width="1078"
                  height="611"
                  fetchPriority="high"
                  decoding="async"
                />
              </div>
              <figcaption className="flex flex-wrap justify-between gap-2 border-t border-(--border) px-4 py-3 text-sm">
                <span className="font-medium text-(--foreground)">{t('projects.gallery.entrance')}</span>
                <span className="text-(--muted)">{t('projects.visualizationCaption')}</span>
              </figcaption>
            </figure>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {t('projects.parqueEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('projects.parqueTitle')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-(--muted)">
                {t('projects.parqueDescription')}
              </p>
            </div>
          </div>

          <div className="mt-14 md:mt-20">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-(--border) pb-4">
              <h3 className="font-display text-2xl tracking-[-0.03em] text-(--foreground) md:text-3xl">
                {t('projects.galleryTitle')}
              </h3>
              <p className="text-sm text-(--muted)">{t('projects.visualizationCaption')}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projectImages.slice(1).map(({ file, key }) => (
                <figure key={key} className="overflow-hidden rounded-xl border border-(--border) bg-(--background)">
                  <div className="flex aspect-[4/3] items-center justify-center bg-white p-3">
                    <img
                      src={`/images/aeiny/projects/${file}`}
                      alt={t(`projects.gallery.${key}`)}
                      className="max-h-full w-full object-contain"
                      width="1080"
                      height="613"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="flex flex-wrap justify-between gap-2 border-t border-(--border) px-4 py-3 text-sm">
                    <span className="font-medium text-(--foreground)">{t(`projects.gallery.${key}`)}</span>
                    <span className="text-(--muted)">{t('projects.visualizationCaption')}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-(--border) bg-(--background) p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="max-w-2xl">
              <h3 className="font-display text-2xl tracking-[-0.03em] text-(--foreground) md:text-3xl">
                {t('projects.supportTitle')}
              </h3>
              <p className="mt-3 leading-7 text-(--muted)">{t('projects.supportCopy')}</p>
            </div>
            <Button to={`${prefix}/get-involved`} className="shrink-0">
              {t('projects.supportCta')} <ArrowUpRight size={16} className="ml-2" />
            </Button>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--background) py-14 md:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start lg:gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {t('projects.encuentroEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t('projects.encuentroTitle')}
              </h2>
              <p className="mt-5 text-lg leading-8 text-(--muted)">
                {t('projects.encuentroDescription')}
              </p>
              <h3 className="mt-10 font-display text-2xl tracking-[-0.03em] text-(--foreground)">
                {t('projects.objectivesTitle')}
              </h3>
              <ol className="mt-3">
                {objectives.map((objective, index) => (
                  <li key={objective} className="grid grid-cols-[2.5rem_1fr] gap-4 border-t border-(--border) py-5">
                    <span className="font-display text-sm text-(--accent)">0{index + 1}</span>
                    <div>
                      <h4 className="font-semibold text-(--foreground)">
                        {t(`projects.objectives.${objective}Title`)}
                      </h4>
                      <p className="mt-1 text-sm leading-6 text-(--muted)">
                        {t(`projects.objectives.${objective}Copy`)}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
              <Link
                to={`${prefix}/events`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-(--foreground) focus-visible:rounded-sm"
              >
                {t('projects.eventsCta')} <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-[1.2fr_0.8fr] lg:grid-cols-1 xl:grid-cols-[1.1fr_0.9fr]">
              <figure className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
                <img
                  src="/images/aeiny/projects/encuentro-cuencano-photo.jpg"
                  alt={t('projects.eventPhotoAlt')}
                  className="aspect-[4/3] w-full object-cover"
                  width="1600"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-4 py-3 text-sm leading-6 text-(--muted)">
                  {t('projects.eventPhotoCaption')}
                </figcaption>
              </figure>
              <figure className="overflow-hidden rounded-2xl border border-(--border) bg-(--surface)">
                <img
                  src="/images/aeiny/projects/encuentro-cuencano-archival-poster.jpg"
                  alt={t('projects.archivalPosterAlt')}
                  className="mx-auto max-h-[34rem] w-full object-contain"
                  width="1414"
                  height="2000"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="px-4 py-3 text-center text-sm text-(--muted)">
                  {t('projects.archivalPosterCaption')}
                </figcaption>
              </figure>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface) py-14 md:py-20">
        <Container className="grid gap-6 border-l-2 border-(--accent) pl-6 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-12 md:pl-10">
          <h2 className="max-w-md font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-4xl">
            {t('projects.connectionTitle')}
          </h2>
          <p className="max-w-3xl text-lg leading-8 text-(--muted)">
            {t('projects.connectionCopy')}
          </p>
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container>
          <div className="rounded-[1.75rem] bg-(--surface-dark) px-6 py-10 text-white sm:px-10 md:px-14 md:py-14">
            <div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
                  {t('projects.finalEyebrow')}
                </p>
                <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] md:text-5xl">
                  {t('projects.finalTitle')}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-white/70">{t('projects.finalCopy')}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to={`${prefix}/get-involved`} className="bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!">
                  {t('projects.involvedCta')}
                </Button>
                <Button to={`${prefix}/contact`} variant="secondary" className="border-white/25 bg-white/5 text-white hover:bg-white/10">
                  {t('projects.contactCta')}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
