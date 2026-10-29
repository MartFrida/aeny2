import { chasquiMigrante2026, chasquiRegistrationFeeLabel } from '../../data/events/chasquiMigrante2026';
import {
  Award,
  BadgeCheck,
  Droplets,
  Shirt,
  Ticket,
  Timer,
  Trophy,
  Apple,
  ArrowUpRight,
  QrCode,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";


export function ChasquiMigrante2026Page() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const englishPath = "/en/events/chasqui-migrante-2026";
  const spanishPath = "/es/events/chasqui-migrante-2026";
  const path = language === "es" ? spanishPath : englishPath;
  const includedItems = [
    { key: "shirt", icon: Shirt },
    { key: "chip", icon: Timer },
    { key: "hydration", icon: Droplets },
    { key: "medal", icon: Award },
    { key: "bib", icon: Ticket },
    { key: "certificate", icon: BadgeCheck },
    { key: "fruit", icon: Apple },
    { key: "prizes", icon: Trophy },
  ] as const;

  return (
    <>
      <PageMetadata
        language={language}
        title={t("chasqui2026.seoTitle")}
        description={t("chasqui2026.seoDescription")}
        canonicalPath={path}
        alternateLanguagePaths={{ en: englishPath, es: spanishPath }}
      />

      {/* Registration Section */}
      <section
        id="registration"
        className="relative scroll-mt-20 overflow-hidden bg-(--surface-dark) text-white"
      >
        {/* Decorative background */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full border border-white/10" />
          <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border border-(--accent)/20" />
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-(--accent)/40 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
        </div>

        <Container className="relative grid gap-10 py-14 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          {/* Registration information */}
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {t("chasqui2026.registrationEyebrow")}
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              {t("chasqui2026.registration.title")}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg md:leading-8">
              {t("chasqui2026.registration.copy")}
            </p>

            {/* Event details */}
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm text-white/80">
              <span>{chasquiMigrante2026.dateLabel}</span>
              <span>{chasquiMigrante2026.time}</span>
              <span>{chasquiMigrante2026.distancesLabel}</span>
              <span>{t("chasqui2026.city")}</span>
            </div>

            {/* Price highlight */}
            <div className="mt-8 inline-flex items-center gap-4 rounded-xl border border-white/15 bg-white/5 px-5 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">
                  {t("chasqui2026.registration.feeLabel")}
                </p>
                <p className="mt-1 font-display text-3xl font-semibold text-(--accent)">
                  {chasquiRegistrationFeeLabel}
                </p>
              </div>
            </div>

            {/* Registration button */}
            <div className="mt-8">
              <a
                href={chasquiMigrante2026.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-md bg-(--accent) px-7 py-3.5 text-sm font-semibold text-(--surface-dark) transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d79d54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark) sm:w-auto"
              >
                {t("chasqui2026.registration.formCta")}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>

            <p className="mt-4 text-xs leading-6 text-white/50">
              {t("chasqui2026.registration.formNote")}
            </p>
          </div>

          {/* QR Code Card */}
          <aside className="relative mx-auto w-full max-w-md rounded-2xl border border-white/15 bg-white/5 p-6 text-center backdrop-blur-sm sm:p-8 lg:max-w-none">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-(--accent)/30 bg-(--accent)/10 text-(--accent)">
              <QrCode size={23} strokeWidth={1.7} aria-hidden="true" />
            </div>

            <h3 className="mt-5 font-display text-2xl tracking-[-0.03em] text-white sm:text-3xl">
              {t("chasqui2026.registration.qrTitle")}
            </h3>

            <p className="mx-auto mt-3 max-w-xs text-sm leading-6 text-white/65">
              {t("chasqui2026.registration.qrCopy")}
            </p>

            <a
              href={chasquiMigrante2026.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={
                t("chasqui2026.registration.qrLinkLabel")
              }
              className="mx-auto mt-7 block w-full max-w-64 rounded-xl bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-200 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--accent) focus-visible:ring-offset-4 focus-visible:ring-offset-(--surface-dark)"
            >
              <img
                src={chasquiMigrante2026.registrationQr}
                alt={
                  t("chasqui2026.registration.qrAlt")
                }
                width={1600}
                height={1600}
                loading="lazy"
                className="aspect-square w-full object-contain"
              />
            </a>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
              CHASQUI MIGRANTE 2026
            </p>

            <p className="mt-2 text-sm text-white/60">{chasquiMigrante2026.distancesLabel} · {chasquiMigrante2026.dateLabel}</p>
          </aside>
        </Container>
      </section>

      {/* Included Items Section */}
      <section className="bg-(--background) py-14 md:py-20">
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("chasqui2026.includedEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t("chasqui2026.includedTitle")}
            </h2>
            <p className="mt-5 text-base leading-7 text-(--muted)">
              {t("chasqui2026.description")}
            </p>
            <p className="mt-5 font-semibold text-(--foreground)">
              {t("chasqui2026.organizerLabel")}: {t("chasqui2026.organizer")}
            </p>
            <a
              href={chasquiMigrante2026.officialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex min-h-10 items-center rounded-md text-sm font-semibold text-(--primary) underline decoration-(--accent) underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
            >
              {t("chasqui2026.officialEventLink")}
            </a>
          </div>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {includedItems.map(({ key, icon: Icon }) => (
              <li
                key={key}
                className="flex min-h-20 items-center gap-4 rounded-xl border border-(--border) bg-(--surface) p-4 sm:p-5"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-(--primary)">
                  <Icon size={20} aria-hidden="true" />
                </span>
                <span className="font-medium text-(--foreground)">
                  {t(`chasqui2026.included.${key}`)}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
