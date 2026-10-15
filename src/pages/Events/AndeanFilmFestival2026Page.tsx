import { ArrowDown, ArrowRight, Clapperboard } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";
import { FestivalSchedule } from "../../components/festival/FestivalSchedule";
import { kuriChasqui2026Films } from "../../data/events/kuriChasquiCatalog";
import { kuriChasqui2026Founders } from "../../data/events/kuriChasquiFounders2026";
import { FilmCard } from "./FilmCard";
import { ArrowUpRight, ChevronDown } from "lucide-react";

export function AndeanFilmFestival2026Page() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const englishPath = "/en/events/festival-internacional-de-cine-andino-2026";
  const spanishPath = "/es/events/festival-internacional-de-cine-andino-2026";
  const path = language === "es" ? spanishPath : englishPath;

  return (
    <>
      <PageMetadata
        language={language}
        title={t("festival2026.seoTitle")}
        description={t("festival2026.seoDescription")}
        canonicalPath={path}
        alternateLanguagePaths={{ en: englishPath, es: spanishPath }}
      />

      {/* Hero Section */}
      <section className="overflow-hidden bg-(--surface-dark) text-white">
        <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/65">
              {t("festival2026.eyebrow")}
            </p>
            <h1 className="mt-5 font-display text-4xl leading-[1.02] tracking-[-0.045em] text-white sm:text-5xl md:text-6xl">
              {t("festival2026.title")}
            </h1>
            <p className="mt-4 font-display text-2xl text-(--accent) md:text-3xl">
              {t("festival2026.awardsTitle")}
            </p>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.14em] text-white/65">
              {t("festival2026.location")}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              {t("festival2026.heroIntro")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#official-selection"
                className="inline-flex items-center justify-center rounded-md bg-(--accent) px-5 py-2.5 text-sm font-semibold text-(--surface-dark) transition-colors hover:bg-[#d79d54] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {t("festival2026.exploreSelection")}
                <ArrowDown size={16} className="ml-2" />
              </a>
              <a
                href="#kuri-chasqui-awards"
                className="inline-flex items-center justify-center rounded-md border border-white/25 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {t("festival2026.aboutAwards")}
              </a>
              <a
                href="#festival-program"
                className="inline-flex items-center justify-center rounded-md border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {t("festivalSchedule2026.viewSchedule")}
                <ArrowDown size={16} className="ml-2" />
              </a>
            </div>
          </div>

          <figure className="relative">
            <div
              className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-(--accent)/70"
              aria-hidden="true"
            />
            <img
              src="/images/events/festival-andino-2026/kuri-chasqui-2026-poster.webp"
              alt={t("home.posterAlt")}
              width={500}
              height={700}
              loading="eager"
              className="h-auto w-full max-w-105 rounded-[0.8rem] border border-[#d7d0c5] object-cover"
            />

            <figcaption className="mt-3 text-xs tracking-wide text-white/55">
              {t("festival2026.heroImageCaption")}
            </figcaption>
          </figure>
        </Container>
      </section>

      <FestivalSchedule />

      {/* Official Selection Films */}
      <section id="official-selection" className="bg-(--surface) scroll-mt-24">
        <Container className="py-14 md:py-20">
          <div className="flex flex-col justify-between gap-5 border-b border-(--border) pb-7 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                {t("festival2026.selectionLabel")}
              </p>
              <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {t("festival2026.selectionTitle")}
              </h2>
            </div>
            <p className="text-sm text-(--muted)">
              <span className="font-semibold text-(--foreground)">
                {kuriChasqui2026Films.length}
              </span>{" "}
              {t("festival2026.selectedWorks")}
            </p>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {kuriChasqui2026Films.map((film) => (
              <FilmCard
                key={film.slug}
                film={film}
                to={`${path}/films/${film.slug}`}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section
        id="festival-about"
        className="border-b border-(--border) bg-(--background) scroll-mt-24"
      >
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("festival2026.aboutLabel")}
            </p>
            <div className="mt-5 h-px w-16 bg-(--accent)" />
            <p className="mt-5 max-w-xs text-sm leading-6 text-(--muted)">
              {t("festival2026.aboutAside")}
            </p>
          </div>
          <div>
            <h2 className="max-w-3xl font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("festival2026.aboutTitle")}
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-(--muted)">
              {t("festival2026.aboutCopy")}
            </p>
          </div>
        </Container>
      </section>

      {/* Founders Section */}
      <section id="festival-founders" className="bg-(--surface) scroll-mt-24">
        <Container className="py-14 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("festival2026.foundersLabel")}
            </p>

            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("festival2026.foundersTitle")}
            </h2>
          </div>

          <div className="mt-9 grid items-start gap-6 lg:grid-cols-2">
            {kuriChasqui2026Founders.map((founder) => {
              const content = founder.content[language];

              return (
                <article
                  key={founder.id}
                  className="min-w-0 overflow-hidden rounded-xl border border-(--border) bg-(--background)"
                >
                  {/* Portrait */}
                  <div className="relative aspect-square w-full overflow-hidden bg-[#e9dfd2]">
                    <img
                      src={founder.image}
                      alt={founder.name}
                      loading="lazy"
                      width={800}
                      height={800}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  {/* Biography */}
                  <div className="p-5 sm:p-7 md:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--primary)">
                      {content.role}
                    </p>

                    <h3 className="mt-3 font-display text-2xl tracking-tight text-(--foreground) sm:text-3xl">
                      {founder.name}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-(--primary)">
                      {content.subtitle}
                    </p>

                    <div className="my-6 h-px w-full bg-(--border)" />

                    <p className="text-sm leading-7 text-(--muted) sm:text-base">
                      {content.bio}
                    </p>

                    {/* Expandable details */}
                    <details className="group mt-6 border-t border-(--border) pt-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-(--primary) [&::-webkit-details-marker]:hidden">
                        <span>
                          {language === "es"
                            ? "Trayectoria y reconocimientos"
                            : "Experience and Recognition"}
                        </span>

                        <ChevronDown
                          size={18}
                          aria-hidden="true"
                          className="shrink-0 transition-transform duration-200 group-open:rotate-180"
                        />
                      </summary>

                      <div className="space-y-5 pt-6">
                        {content.sections.map((section) => (
                          <div key={section.title}>
                            <h4 className="font-semibold text-(--foreground)">
                              {section.title}
                            </h4>

                            <p className="mt-2 whitespace-pre-line text-sm leading-7 text-(--muted)">
                              {section.text}
                            </p>
                          </div>
                        ))}
                      </div>
                    </details>

                    {/* Wikipedia */}
                    {founder.wikipedia && (
                      <a
                        href={founder.wikipedia[language]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-7 inline-flex items-center gap-2 rounded-md border border-(--primary) px-5 py-3 text-sm font-semibold text-(--primary) transition-colors hover:bg-(--primary) hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
                      >
                        {language === "es"
                          ? "Biografía en Wikipedia"
                          : "Read on Wikipedia"}

                        <ArrowUpRight size={16} aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Awards Section */}
      <section id="kuri-chasqui-awards" className="bg-[#e9dfd2] scroll-mt-24">
        <Container className="grid gap-8 py-14 md:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("festival2026.awardsLabel")}
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("festival2026.awardsTitle")}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-(--muted)">
              {t("festival2026.awardsCopy")}
            </p>
            <p className="mt-4 max-w-2xl leading-7 text-(--muted)">
              {t("festival2026.awardsContext")}
            </p>
          </div>
          <aside className="border border-(--border) bg-(--background)/70 p-7 md:p-9">
            <p className="font-display text-3xl tracking-[0.06em] text-(--primary)">
              KURI CHASQUI
            </p>
            <p className="mt-2 text-sm uppercase tracking-[0.16em] text-(--muted)">
              {t("festival2026.goldenMessenger")}
            </p>
            <div className="my-6 h-px w-full bg-(--accent)/60" />
            <p className="text-sm leading-6 text-(--muted)">
              {t("festival2026.awardRecognition")}
            </p>
          </aside>
        </Container>
      </section>

      {/* Categories Awards */}
      <section className="border-y border-(--border) bg-(--background)">
        <Container className="py-14 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t("festival2026.categoriesLabel")}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("festival2026.categoriesTitle")}
            </h2>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 13 }, (_, index) => (
              <li
                key={index}
                className="flex items-center gap-3 border-t border-(--border) py-4 text-sm font-medium text-(--foreground)"
              >
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)"
                  aria-hidden="true"
                />
                {t(`festival2026.categories.${index}`)}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Organizer Section */}
      <section className="border-t border-(--border) bg-(--background)">
        <Container className="grid gap-8 py-12 md:grid-cols-[1fr_auto] md:items-center md:py-14">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t("festival2026.organizerLabel")}
            </p>
            <p className="mt-2 font-display text-2xl text-(--foreground)">
              Alianza Ecuatoriana Internacional
            </p>
            <Link
              to={`/${language}/about`}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) underline decoration-(--accent) underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring)"
            >
              {t("festival2026.cultureHeritageLink")}
              <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm text-(--muted)">
            <Clapperboard
              size={20}
              className="shrink-0 text-(--primary)"
              aria-hidden="true"
            />
            <span>{t("festival2026.presentedBy")}</span>
          </div>
        </Container>
      </section>

      {/* Call to Action */}
      <section className="bg-(--surface-dark) text-white">
        <Container className="grid gap-7 py-14 md:grid-cols-[1fr_auto] md:items-center md:py-20">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl leading-tight tracking-[-0.04em] text-white md:text-5xl">
              {t("festival2026.ctaTitle")}
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-white/70 md:text-lg">
              {t("festival2026.ctaCopy")}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button
              to={`/${language}/donate`}
              className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!"
            >
              {t("festival2026.donateCta")}
            </Button>
            <Button
              to={`/${language}/contact`}
              variant="secondary"
              className="border-white/25 text-white hover:bg-white/10"
            >
              {t("festival2026.contactCta")}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
