import { ArrowRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Button } from '../common/Button'
import { Container } from '../common/Container'
import { chasquiMigrante2026, chasquiRegistrationFeeLabel } from '../../data/events/chasquiMigrante2026'

export function ChasquiMigranteCard() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  return (
      <section className="bg-(--surface) py-12 md:py-16">
        <Container>
          <article className="grid overflow-hidden rounded-2xl border border-(--border) bg-(--background) md:grid-cols-[0.8fr_1.2fr]">
            <div className="relative min-h-56 bg-(--surface-dark) text-white md:min-h-full">
              <div className="flex h-full min-h-56 flex-col justify-between p-6 sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
                  {t("chasqui2026.eyebrow")}
                </p>
                <h2 className="mt-6 max-w-md font-display text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                  {t("chasqui2026.title")}
                </h2>
                <p className="mt-4 text-sm font-medium text-white/75">
                  {chasquiMigrante2026.distancesLabel}
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between gap-6 p-5 sm:p-7">
              <div>
                <p className="text-sm font-semibold text-(--primary)">
                  {t("chasqui2026.date")} · {chasquiMigrante2026.time}
                </p>
                <p className="mt-3 leading-7 text-(--muted)">
                  {t("chasqui2026.shortLocation")}
                </p>
                <p className="mt-3 text-sm leading-6 text-(--muted)">
                  {t("chasqui2026.organizer")}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-(--foreground)">{chasquiRegistrationFeeLabel}</p>
                <Button
                  to={`/${language}/events/chasqui-migrante-2026`}
                  className="w-full justify-center bg-(--primary) text-white hover:bg-(--primary)/90 sm:w-auto"
                >
                  {t("chasqui2026.cardCta")}
                  <ArrowRight
                    aria-hidden="true"
                    size={16}
                    className="ml-2 shrink-0"
                  />
                </Button>
              </div>
            </div>
          </article>
        </Container>
      </section>
  )
}
