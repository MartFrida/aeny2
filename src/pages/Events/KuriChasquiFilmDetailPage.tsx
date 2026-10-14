import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'
import { NotFoundPage } from '../NotFound'
import { kuriChasqui2026Films } from '../../data/events/kuriChasquiFilms2026'

const fieldLabels: Record<string, string> = {
  year: 'year',
  filmed: 'filmed',
  completed: 'completed',
  duration: 'duration',
  language: 'language',
  director: 'director',
  screenplay: 'screenplay',
  producer: 'producer',
  generalProducer: 'generalProducer',
  production: 'production',
  format: 'format',
  cinematography: 'cinematography',
  audience: 'audience',
  genre: 'genre',
  themes: 'themes',
}

export function KuriChasquiFilmDetailPage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const { slug } = useParams()
  const film = kuriChasqui2026Films.find((entry) => entry.slug === slug)

  if (!film) return <NotFoundPage />

  const pagePath = `/${language}/events/kuri-chasqui-2026/films/${film.slug}`
  const filmTitle = film.details?.fullTitle ?? film.title
  const synopsis = film.details?.synopsisKey ? t(film.details.synopsisKey) : undefined
  const metadataDescription = synopsis ?? t('festival2026.detailComingSoon')
  const detailFields = Object.entries(fieldLabels).filter(([key]) => {
    const value = film.details?.[key as keyof NonNullable<typeof film.details>]
    return typeof value === 'string' && value.length > 0
  })

  return (
    <>
      <PageMetadata
        language={language}
        title={`${filmTitle} | ${t('festival2026.selectionTitle')} | AEINY`}
        description={metadataDescription}
        canonicalPath={pagePath}
      />
      <section className="bg-(--surface-dark) text-white">
        <Container className="py-12 md:py-16">
          <Link
            to={`/${language}/events/kuri-chasqui-2026#official-selection`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t('festival2026.backToSelection')}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
            {t('festival2026.selectionLabel')}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {filmTitle}
          </h1>
          <p className="mt-4 text-lg text-white/65">{film.title}</p>
        </Container>
      </section>

      <section className="bg-(--background)">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[0.8fr_1.2fr]">
          {film.image ? (
            <img
              src={film.image}
              alt={t('festival2026.filmImageAlt', { title: film.title })}
              className="aspect-[3/4] w-full max-w-md object-contain"
            />
          ) : (
            <div className="flex aspect-[3/4] w-full max-w-md flex-col items-center justify-center gap-4 bg-[#e9dfd2] text-(--primary)">
              <ClapperboardIcon />
              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                {t('festival2026.officialSelection')}
              </p>
            </div>
          )}
          <div>
            {film.typeKey ? (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--primary)">
                {t(film.typeKey)}
              </p>
            ) : null}
            {detailFields.length > 0 ? (
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {detailFields.map(([key]) => (
                  <div key={key} className="border-b border-(--border) py-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-(--muted)">
                      {t(`festival2026.fields.${fieldLabels[key]}`)}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-(--foreground)">
                      {film.details?.[key as keyof NonNullable<typeof film.details>]}
                    </dd>
                  </div>
                ))}
                {film.details?.cast?.length ? (
                  <div className="border-b border-(--border) py-4 sm:col-span-2">
                    <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-(--muted)">
                      {t('festival2026.fields.cast')}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-(--foreground)">{film.details.cast.join(', ')}</dd>
                  </div>
                ) : null}
              </dl>
            ) : null}
            {synopsis ? (
              <div className="mt-8">
                <h2 className="font-display text-2xl text-(--foreground)">{t('festival2026.synopsis')}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-(--muted)">{synopsis}</p>
              </div>
            ) : (
              <p className="mt-8 text-sm text-(--muted)">{t('festival2026.detailComingSoon')}</p>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}

function ClapperboardIcon() {
  return <span aria-hidden="true" className="font-display text-3xl tracking-[0.08em]">AEINY</span>
}
