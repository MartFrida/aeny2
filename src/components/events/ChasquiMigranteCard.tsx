import { ArrowRight, CalendarDays, Clock3, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { chasquiMigrante2026, chasquiRegistrationFeeLabel } from '../../data/events/chasquiMigrante2026'

const posterPath = '/images/events/chasqui-migrante-2026/chasqui-migrante-2026-poster.jpeg'

export function ChasquiMigranteCard() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const eventPath = `/${language}/events/chasqui-migrante-2026`
  const posterAlt = language === 'es'
    ? 'Cartel oficial de Chasqui Migrante 2026: carrera 5K y 10K en Cuenca, Ecuador'
    : 'Official Chasqui Migrante 2026 poster: 5K and 10K race in Cuenca, Ecuador'
  const posterLinkLabel = language === 'es'
    ? 'Ver información e inscripción de Chasqui Migrante 2026'
    : 'View Chasqui Migrante 2026 event details and registration'

  return (
    <section
      aria-labelledby="chasqui-migrante-card-title"
      className="bg-(--surface) py-12 md:py-16"
    >
      <Container>
        <article className="grid overflow-hidden rounded-2xl border border-(--border) bg-(--background) md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="flex items-center justify-center border-b border-(--border) bg-(--surface) p-3 sm:p-5 md:border-r md:border-b-0 md:p-6">
            <Link
              to={eventPath}
              aria-label={posterLinkLabel}
              className="block w-full max-w-sm rounded-xl transition-shadow hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
            >
              <img
                src={posterPath}
                alt={posterAlt}
                width={896}
                height={1183}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full rounded-xl bg-white object-contain shadow-sm"
              />
            </Link>
          </div>

          <div className="flex min-w-0 flex-col justify-center gap-7 p-5 sm:gap-8 sm:p-8 lg:p-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                {t('chasqui2026.eyebrow')}
              </p>
              <h2
                id="chasqui-migrante-card-title"
                className="mt-3 max-w-xl font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) sm:text-4xl lg:text-5xl"
              >
                {t('chasqui2026.title')}
              </h2>
              <p className="mt-5 inline-flex rounded-full border border-(--accent)/25 bg-(--accent)/10 px-4 py-2 text-sm font-semibold text-(--primary)">
                {chasquiMigrante2026.distancesLabel}
              </p>
            </div>

            <div className="space-y-4">
              <p className="flex items-start gap-3 text-sm font-semibold leading-6 text-(--foreground) sm:text-base">
                <CalendarDays
                  aria-hidden="true"
                  size={20}
                  className="mt-0.5 shrink-0 text-(--primary)"
                />
                <span>{t('chasqui2026.date')}</span>
              </p>
              <p className="flex items-start gap-3 text-sm font-medium leading-6 text-(--foreground) sm:text-base">
                <Clock3
                  aria-hidden="true"
                  size={20}
                  className="mt-0.5 shrink-0 text-(--primary)"
                />
                <span>{chasquiMigrante2026.time}</span>
              </p>
              <p className="flex items-start gap-3 text-sm leading-6 text-(--muted) sm:text-base">
                <MapPin
                  aria-hidden="true"
                  size={20}
                  className="mt-0.5 shrink-0 text-(--primary)"
                />
                <span>{t('chasqui2026.shortLocation')}</span>
              </p>
            </div>

            <div className="border-t border-(--border) pt-6">
              <p className="text-sm leading-6 text-(--muted)">
                {t('chasqui2026.organizer')}
              </p>
              <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
                <p className="text-lg font-semibold text-(--foreground)">
                  {chasquiRegistrationFeeLabel}
                </p>
                <Button
                  to={eventPath}
                  className="w-full justify-center bg-(--primary) text-white hover:bg-(--primary)/90 xl:w-auto"
                >
                  {t('chasqui2026.cardCta')}
                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    className="ml-2 shrink-0"
                  />
                </Button>
              </div>
            </div>
          </div>
        </article>
      </Container>
    </section>
  )
}
