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

// Files are served from public/images/events/festival-andino-2026/sponsors/.
const festival2026SponsorLogos = [
  { name: "ACINPECG", file: "acinpecg.webp" },
  { name: "Alianza", file: "alianza.webp" },
  { name: "Andes Film Fest 2026", file: "andes-film-fest-2026.webp" },
  { name: "Aya", file: "aya_vector.webp" },
  { name: "Crónica Roja", file: "cronica-roja.webp" },
  { name: "DC", file: "dc.webp" },
  {
    name: "Ecuadorian American Cultural Center",
    file: "ecuadorian-american-cultural-center.webp",
  },
  { name: "Fundación Alianza", file: "fundacion-alianza.webp" },
  { name: "La Hueca Manabita", file: "la-hueca-manabita.webp" },
  { name: "Producciones Pachamama", file: "produciones-pachamama.webp" },
  { name: "Raíz", file: "raiz_vector.webp" },
  { name: "Sisa Pakari", file: "sisa-pakari.webp" },
  { name: "Sonidero", file: "sonidero_vector.webp" },
];

const festival2026AwardContent = {
  es: {
    label: "Galardón",
    title: "El Kury Chasqui",
    subtitle: "El galardón que honra la grandeza andina en Nueva York",
    paragraphs: [
      "El Kury Chasqui —cuyo nombre proviene de la lengua milenaria kichwa y significa «Mensajero de Oro»— es el trofeo oficial de The Andean International Film Fest New York 2026.",
      "Creado por Amaruk Kayshapanta y Walter Sinche, fundadores y organizadores del festival, este diseño simboliza la grandeza, la historia y la profunda cosmovisión de las culturas originarias de los Andes. Su potente simbología está presente en cada detalle y rinde homenaje al legado ancestral que cruza fronteras: tradiciones, filosofía, ciencias, espiritualidad y arte integral andino.",
      "Esta prestigiosa estatuilla reconocerá, año tras año, el talento y la excelencia de creadores cinematográficos, productores y actores, así como de toda una industria identitaria que cuenta sus historias desde su propia filosofía de vida. Un reconocimiento a los artistas audiovisuales de todos los géneros y formatos del cine andino.",
    ],
    supportIntro:
      "El éxito de este festival para el arte y la cultura es posible gracias al valioso respaldo de las organizaciones humanitarias y de apoyo a la cultura de la comunidad latinoamericana inmigrante en los Estados Unidos y Europa.",
    supporters: [
      "Alianza Ecuatoriana Internacional",
      "Centro Comunitario Andino",
      "Fundación Alianza Ecuatoriana Internacional NY",
      "Producciones Pachamama (Europa)",
    ],
    imageAlt: "Estatuillas doradas del Kury Chasqui, el trofeo oficial del festival.",
    imageCaption: "Kury Chasqui · Mensajero de Oro",
  },
  en: {
    label: "The award",
    title: "The Kury Chasqui",
    subtitle: "The award honoring Andean greatness in New York",
    paragraphs: [
      "The Kury Chasqui —whose name comes from the ancient Kichwa language and means “Golden Messenger”— is the official trophy of The Andean International Film Fest New York 2026.",
      "Created by Amaruk Kayshapanta and Walter Sinche, the festival’s founders and organizers, the design embodies the greatness, history, and profound worldview of the Indigenous cultures of the Andes. Every detail carries powerful symbolism, honoring an ancestral legacy that crosses borders: traditions, philosophy, science, spirituality, and holistic Andean art.",
      "Year after year, this prestigious statuette will honor the talent and excellence of filmmakers, producers, and actors, as well as an entire industry rooted in cultural identity that tells its stories through its own philosophy of life. It celebrates audiovisual artists across all genres and formats of Andean cinema.",
    ],
    supportIntro:
      "The festival’s success in promoting art and culture is made possible by the valued support of humanitarian organizations and those dedicated to the culture of Latin American immigrant communities in the United States and Europe.",
    supporters: [
      "Alianza Ecuatoriana Internacional",
      "Centro Comunitario Andino",
      "Fundación Alianza Ecuatoriana Internacional NY",
      "Producciones Pachamama (Europe)",
    ],
    imageAlt: "Golden Kury Chasqui statuettes, the festival’s official trophy.",
    imageCaption: "Kury Chasqui · Golden Messenger",
  },
};

export function AndeanFilmFestival2026Page() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const englishPath = "/en/events/festival-internacional-de-cine-andino-2026";
  const spanishPath = "/es/events/festival-internacional-de-cine-andino-2026";
  const path = language === "es" ? spanishPath : englishPath;
  const awardContent = festival2026AwardContent[language];

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
              src="/images/events/festival-andino-2026/kuri-chasqui-2026-poster-1.jpeg"
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
      <section
        id="kuri-chasqui-awards"
        aria-labelledby="kury-chasqui-title"
        className="scroll-mt-24 bg-[#e9dfd2]"
      >
        <Container className="py-12 md:py-16">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {awardContent.label}
            </p>
            <h2
              id="kury-chasqui-title"
              className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl"
            >
              {awardContent.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-(--primary) md:text-xl">
              {awardContent.subtitle}
            </p>
          </div>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-12">
            <figure className="mx-auto w-full max-w-sm lg:max-w-none">
              <img
                src="/images/events/festival-andino-2026/premios-9x16.webp"
                alt={awardContent.imageAlt}
                width={1143}
                height={2048}
                loading="lazy"
                decoding="async"
                className="h-auto w-full rounded-lg"
              />
              <figcaption className="mt-3 text-xs tracking-wide text-(--muted)">
                {awardContent.imageCaption}
              </figcaption>
            </figure>

            <div className="min-w-0">
              <div className="space-y-5 text-base leading-7 text-(--muted) md:leading-8">
                {awardContent.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-7 border-t border-(--accent)/50 pt-6">
                <p className="text-sm leading-7 text-(--muted)">
                  {awardContent.supportIntro}
                </p>
                <ul className="mt-4 space-y-2">
                  {awardContent.supporters.map((organization) => (
                    <li
                      key={organization}
                      className="flex items-start gap-3 text-sm leading-6 text-(--foreground)"
                    >
                      <span
                        className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-(--primary)"
                        aria-hidden="true"
                      />
                      <span>{organization}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
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

      {/* Sponsors and Partners */}
      <section
        id="festival-sponsors"
        aria-labelledby="festival-sponsors-title"
        className="scroll-mt-24 border-t border-(--border) bg-(--surface)"
      >
        <Container className="py-8 md:py-10">
          <h2
            id="festival-sponsors-title"
            className="font-display text-xl tracking-tight text-(--foreground) md:text-2xl"
          >
            {language === "es"
              ? "Patrocinadores y colaboradores"
              : "Sponsors & Partners"}
          </h2>

          <ul className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 md:mt-6 md:gap-y-4">
            {festival2026SponsorLogos.map((logo) => (
              <li
                key={logo.file}
                className="flex h-24 min-w-0 w-[calc((100%_-_1rem)/2)] items-center justify-center sm:w-[calc((100%_-_3rem)/4)] lg:w-[calc((100%_-_6rem)/7)]"
              >
                <img
                  src={`/images/events/festival-andino-2026/sponsors/${logo.file}`}
                  alt={logo.name}
                  width={360}
                  height={220}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
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
