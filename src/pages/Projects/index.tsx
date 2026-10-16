import { ArrowUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../../components/common/Button'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'

const projectImages = [
  { file: 'parque-migrante-entrada.jpg', key: 'entrance' },
  { file: 'parque-migrante-museo.jpg', key: 'museum' },
  { file: 'parque-migrante-concha-acustica.jpg', key: 'acousticShell' },
  { file: 'parque-migrante-pileta.jpg', key: 'fountain' },
  { file: 'parque-migrante-guardiania.jpg', key: 'services' },
  { file: 'parque-migrante-vista-aerea.jpg', key: 'aerial' },
] as const

const projectPrinciples = ['recognition', 'memory', 'connection'] as const
const encuentroThemes = ['dialogue', 'opportunity', 'representation'] as const

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

      <section className="border-b border-(--border) bg-(--background) py-14 md:py-20 lg:py-24">
        <Container>
          <div className="max-w-4xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t('projects.heroEyebrow')}
            </p>
            <h1 className="mt-4 max-w-4xl font-display text-4xl leading-[1.05] tracking-[-0.05em] text-(--foreground) sm:text-5xl md:text-6xl lg:text-7xl">
              {t('projects.heroTitle')}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-7 text-(--muted) sm:text-lg sm:leading-8">
              {t('projects.heroDescription')}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-(--surface) py-12 md:py-16">
        <Container className="grid gap-6 border-l-2 border-(--accent) pl-5 sm:pl-8 md:grid-cols-[0.65fr_1.35fr] md:items-start md:gap-12 md:pl-10">
          <h2 className="font-display text-2xl tracking-[-0.03em] text-(--foreground) sm:text-3xl">
            {t('projects.introTitle')}
          </h2>
          <p className="max-w-3xl text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            {t('projects.introCopy')}
          </p>
        </Container>
      </section>

      <section className="bg-(--background) py-12 md:py-20">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <figure className="overflow-hidden border border-(--border) bg-white">
              <div className="flex aspect-[4/3] items-center justify-center p-3 sm:p-6">
                <img
                  src="/images/aeiny/projects/parque-migrante-entrada.jpg"
                  alt={t('projects.gallery.entrance')}
                  className="h-full w-full object-contain"
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
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                {t('projects.parqueEyebrow')}
              </p>
              <p className="mt-2 text-sm font-medium text-(--muted)">{t('projects.parqueLocation')}</p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
                {t('projects.parqueTitle')}
              </h2>
              <p className="mt-5 font-display text-xl leading-snug text-(--foreground) sm:text-2xl">
                {t('projects.parqueLead')}
              </p>
              <p className="mt-4 leading-7 text-(--muted)">{t('projects.parqueCopy1')}</p>
              <p className="mt-4 leading-7 text-(--muted)">{t('projects.parqueCopy2')}</p>
            </div>
          </div>

          <div className="mt-14 border-y border-(--border) py-8 md:mt-20 md:py-10">
            <h3 className="font-display text-2xl tracking-[-0.03em] text-(--foreground) md:text-3xl">
              {t('projects.visionTitle')}
            </h3>
            <div className="mt-6 grid gap-x-8 sm:grid-cols-3">
              {projectPrinciples.map((principle, index) => (
                <article key={principle} className="border-t border-(--border) py-5">
                  <span className="font-display text-sm text-(--accent)">0{index + 1}</span>
                  <h4 className="mt-2 font-semibold text-(--foreground)">
                    {t(`projects.principles.${principle}.title`)}
                  </h4>
                  <p className="mt-2 text-sm leading-6 text-(--muted)">
                    {t(`projects.principles.${principle}.copy`)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 md:mt-16">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3 border-b border-(--border) pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                  {t('projects.galleryEyebrow')}
                </p>
                <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] text-(--foreground) md:text-3xl">
                  {t('projects.galleryTitle')}
                </h3>
              </div>
              <p className="text-sm text-(--muted)">{t('projects.visualizationCaption')}</p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {projectImages.slice(1).map(({ file, key }) => (
                <figure key={key} className="overflow-hidden border border-(--border) bg-white">
                  <div className="flex aspect-[4/3] items-center justify-center p-3 sm:p-4">
                    <img
                      src={`/images/aeiny/projects/${file}`}
                      alt={t(`projects.gallery.${key}`)}
                      className="h-full w-full object-contain"
                      width="1080"
                      height="613"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <figcaption className="border-t border-(--border) px-4 py-3 text-sm font-medium text-(--foreground)">
                    {t(`projects.gallery.${key}`)}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-12 md:py-20">
        <Container className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('projects.encuentroEyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('projects.encuentroTitle')}
            </h2>
            <p className="mt-5 font-display text-xl leading-snug text-(--foreground) sm:text-2xl">
              {t('projects.encuentroLead')}
            </p>
            <p className="mt-4 leading-7 text-(--muted)">{t('projects.encuentroCopy1')}</p>
            <p className="mt-4 leading-7 text-(--muted)">{t('projects.encuentroCopy2')}</p>
            <ul className="mt-7 grid gap-x-5 gap-y-3 border-t border-(--border) pt-5 sm:grid-cols-3">
              {encuentroThemes.map((theme) => (
                <li key={theme} className="text-sm font-medium leading-6 text-(--foreground)">
                  {t(`projects.encuentroThemes.${theme}`)}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid items-start gap-5 sm:grid-cols-[1.1fr_0.9fr]">
            <figure className="overflow-hidden border border-(--border) bg-(--background)">
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
            <figure className="overflow-hidden border border-(--border) bg-(--background)">
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
        </Container>
      </section>

      <section className="bg-(--background) py-14 md:py-20">
        <Container className="grid gap-5 border-l-2 border-(--accent) pl-5 sm:pl-8 md:grid-cols-[0.7fr_1.3fr] md:items-center md:gap-12 md:pl-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('projects.impactEyebrow')}
            </p>
            <h2 className="mt-3 max-w-md font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t('projects.impactTitle')}
            </h2>
          </div>
          <p className="max-w-3xl text-base leading-7 text-(--muted) md:text-lg md:leading-8">
            {t('projects.impactCopy')}
          </p>
        </Container>
      </section>

      <section className="bg-(--surface) py-12 md:py-16">
        <Container>
          <div className="grid gap-7 bg-(--primary) px-6 py-9 text-white sm:px-9 md:grid-cols-[1fr_auto] md:items-end md:gap-10 md:px-12 md:py-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/75">
                {t('projects.finalEyebrow')}
              </p>
              <h2 className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl md:text-5xl">
                {t('projects.finalTitle')}
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-white/85">{t('projects.finalCopy')}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button
                to={`${prefix}/get-involved`}
                className="justify-center bg-(--accent)! text-(--surface-dark)! hover:bg-(--accent)/90!"
              >
                {t('projects.finalInvolved')}
              </Button>
              <Button
                to={`${prefix}/donate`}
                variant="secondary"
                className="justify-center border-white/30 bg-white/5 text-white hover:bg-white/10"
              >
                {t('projects.finalDonate')} <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
