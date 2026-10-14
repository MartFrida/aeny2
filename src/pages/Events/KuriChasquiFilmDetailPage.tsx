import { ArrowLeft } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link, useParams } from 'react-router-dom'
import { Container } from '../../components/common/Container'
import { PageMetadata } from '../../components/common/PageMetadata'
import { NotFoundPage } from '../NotFound'
import { getFilmTypeTranslationKey, kuriChasqui2026Films } from '../../data/events/kuriChasquiCatalog'

const publicFilmFields = [
  ['originalTitle', 'originalTitle'],
  ['year', 'year'],
  ['completionYear', 'completionYear'],
  ['duration', 'duration'],
  ['country', 'country'],
  ['location', 'location'],
  ['language', 'language'],
  ['subtitles', 'subtitles'],
  ['director', 'director'],
  ['screenplay', 'screenplay'],
  ['producer', 'producer'],
  ['production', 'production'],
  ['cast', 'cast'],
  ['cinematography', 'cinematography'],
  ['editor', 'editor'],
  ['music', 'music'],
  ['format', 'format'],
] as const

export function KuriChasquiFilmDetailPage() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const { slug } = useParams()
  const film = kuriChasqui2026Films.find((entry) => entry.slug === slug)

  if (!film) return <NotFoundPage />

  const englishPath = `/en/events/festival-internacional-de-cine-andino-2026/films/${film.slug}`
  const spanishPath = `/es/events/festival-internacional-de-cine-andino-2026/films/${film.slug}`
  const pagePath = language === 'es' ? spanishPath : englishPath
  const synopsis = language === 'es' ? film.synopsisEs : film.synopsisEn
  const filmTypeTranslation = getFilmTypeTranslationKey(film.type)
  const detailFields = publicFilmFields.flatMap(([key, labelKey]) => {
    const value = film[key]
    if (value === null || value === undefined || value === '') return []
    return [{ labelKey, value: Array.isArray(value) ? value.join(', ') : String(value) }]
  })

  return (
    <>
      <PageMetadata
        language={language}
        title={`${film.title} | ${t('festival2026.selectionTitle')} | AEINY`}
        description={synopsis ?? t('festival2026.seoDescription')}
        canonicalPath={pagePath}
        alternateLanguagePaths={{ en: englishPath, es: spanishPath }}
      />
      <section className="bg-(--surface-dark) text-white">
        <Container className="py-12 md:py-16">
          <Link
            to={`/${language}/events/festival-internacional-de-cine-andino-2026#official-selection`}
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
          >
            <ArrowLeft size={16} aria-hidden="true" />
            {t('festival2026.backToSelection')}
          </Link>
          <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
            {t('festival2026.selectionLabel')}
          </p>
          <h1 className="mt-3 max-w-4xl font-display text-4xl leading-tight tracking-[-0.04em] text-white md:text-6xl">
            {film.title}
          </h1>
        </Container>
      </section>

      <section className="bg-(--background)">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[0.8fr_1.2fr]">
          {typeof film.poster === 'string' &&
          film.poster.startsWith('/') &&
          !film.poster.startsWith('//') ? (
            <img
              src={film.poster}
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
            {filmTypeTranslation ? (
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.16em] text-(--primary)">
                {t(filmTypeTranslation)}
              </p>
            ) : null}
            {detailFields.length > 0 ? (
              <dl className="grid gap-x-8 sm:grid-cols-2">
                {detailFields.map(({ labelKey, value }) => (
                  <div key={labelKey} className="border-b border-(--border) py-4">
                    <dt className="text-xs font-semibold uppercase tracking-[0.13em] text-(--muted)">
                      {t(`festival2026.fields.${labelKey}`)}
                    </dt>
                    <dd className="mt-1 text-sm leading-6 text-(--foreground)">{value}</dd>
                  </div>
                ))}
              </dl>
            ) : null}
            {synopsis ? (
              <div className="mt-8">
                <h2 className="font-display text-2xl text-(--foreground)">{t('festival2026.synopsis')}</h2>
                <p className="mt-3 max-w-2xl text-base leading-7 text-(--muted)">{synopsis}</p>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  )
}

function ClapperboardIcon() {
  return <span aria-hidden="true" className="font-display text-3xl tracking-[0.08em]">AEINY</span>
}
