import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { Container } from "../../components/common/Container";
import { contactInfo } from "../../data/contact";
import { kuriChasqui2026Event } from "../../data/events/kuriChasqui2026";

const homeImages = {
  migrantSupport: "/images/home/migrant-support.webp",
  education: "/images/home/education-training.webp",
  culture: "/images/home/culture-community.webp",
  health: "/images/home/comunity.webp",
  parque: "/images/home/parque-del-migrante-entrada.webp",
  encuentro: "/images/home/encuentro-cuencano.webp",
  allhome: "/images/home/home-all.webp",
} as const;

const copy = {
  es: {
    introLabel: "Alianza Ecuatoriana Internacional",
    introHeading: "Comunidad, cultura y oportunidades para migrantes.",
    introBody:
      "Trabajamos desde Nueva York conectando apoyo comunitario, educación, cultura y bienestar.",
    aboutCta: "Conoce AEINY",

    workLabel: "Nuestro trabajo",
    workTitle: "Lo que hacemos",
    workCta: "Ver nuestro trabajo",
    workAreas: [
      { title: "Apoyo migrante y derechos", image: homeImages.migrantSupport },
      { title: "Educación y capacitación", image: homeImages.education },
      { title: "Cultura y patrimonio", image: homeImages.culture },
      { title: "Salud y comunidad", image: homeImages.health },
    ],

    projectsLabel: "Proyectos destacados",
    projectsTitle: "De la comunidad, para la comunidad",
    parqueTitle: "Parque del Migrante",
    parqueText:
      "Un espacio en Cuenca en honor al esfuerzo y valentía de los migrantes ecuatorianos.",
    encuentroTitle: "Encuentro Cuencano en New York",
    encuentroText:
      "Un punto de encuentro para comunidad, oportunidades y conexión con Cuenca.",
    projectsCta: "Ver proyectos",

    communityLabel: "AEINY en acción",
    communityTitle: "Personas, cultura y comunidad",
    communityText:
      "Cada programa nace del encuentro entre migrantes, familias, voluntarios y organizaciones aliadas.",

    supportLabel: "Participa",
    supportTitle: "Tu apoyo hace posible el siguiente proyecto.",
    donateCta: "Donar",
    involvedCta: "Participar",
  },
  en: {
    introLabel: "Alianza Ecuatoriana Internacional",
    introHeading: "Community, culture and opportunities for migrants.",
    introBody:
      "From New York, we connect community support, education, culture and wellbeing.",
    aboutCta: "Discover AEINY",

    workLabel: "Our work",
    workTitle: "What we do",
    workCta: "Explore our work",
    workAreas: [
      { title: "Migrant support & rights", image: homeImages.migrantSupport },
      { title: "Education & training", image: homeImages.education },
      { title: "Culture & heritage", image: homeImages.culture },
      { title: "Community health", image: homeImages.health },
    ],

    projectsLabel: "Featured projects",
    projectsTitle: "Built by community, for community",
    parqueTitle: "Parque del Migrante",
    parqueText:
      "A space in Cuenca honoring the effort and courage of Ecuadorian migrants.",
    encuentroTitle: "Encuentro Cuencano in New York",
    encuentroText:
      "A meeting point for community, opportunity and connection with Cuenca.",
    projectsCta: "View projects",

    communityLabel: "AEINY in action",
    communityTitle: "People, culture and community",
    communityText:
      "Every program grows from the connection between migrants, families, volunteers and partner organizations.",

    supportLabel: "Get involved",
    supportTitle:
      "Your support helps make the next community project possible.",
    donateCta: "Donate",
    involvedCta: "Get involved",
  },
} as const;

export function HomePage() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const c = copy[language];

  const festivalPath = `/${language}/events/festival-internacional-de-cine-andino-2026`;
  const donatePath = `/${language}/donate`;
  const aboutPath = `/${language}/about`;
  const ourWorkPath = `/${language}/our-work`;
  const projectsPath = `/${language}/projects`;
  const getInvolvedPath = `/${language}/get-involved`;

  return (
    <>
      {/* Festival Hero — keep the festival information prominent */}
      <section className="relative overflow-hidden bg-(--surface-dark) text-white">
        <div className="absolute inset-0 opacity-80">
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(201,154,92,0.16),transparent_28%)]" />
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <Container className="relative grid gap-10 py-2 md:py-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-10">
          <div className="max-w-2xl py-4 md:py-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-white/70">
              {t("home.eyebrow")}
            </p>

            <h1 className="mt-6 font-display text-5xl leading-[0.9] tracking-[-0.06em] text-white md:text-7xl xl:text-[6.2rem]">
              <span className="block">{t("home.title").split("\n")[0]}</span>
              <span className="block">{t("home.title").split("\n")[1]}</span>
              <span className="block text-(--accent)">
                {t("home.title").split("\n")[2]}
              </span>
            </h1>

            <p className="mt-3 max-w-xl text-lg text-white/80 md:text-xl">
              {t("home.subtitle")}
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/70">
              {t("home.heroDescription")}
            </p>

            <div className="mt-7 grid gap-3 text-sm text-white/80 sm:grid-cols-2">
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t("home.dateLabel")}
                </span>
                <p className="mt-1 text-base text-white">
                  {t("home.dateValue")}
                </p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t("home.timeLabel")}
                </span>
                <p className="mt-1 text-base text-white">
                  {t("home.timeValue")}
                </p>
              </div>
              <div className="rounded-full border border-white/15 bg-white/5 px-4 py-2.5 backdrop-blur-sm sm:col-span-2">
                <span className="font-semibold uppercase tracking-[0.14em] text-white/60">
                  {t("home.venueLabel")}
                </span>
                <p className="mt-1 text-base text-white">
                  {kuriChasqui2026Event.venue} · {t("home.heroLocation")}
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to={festivalPath}
                className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!"
              >
                {t("home.ctaPrimary")} <ArrowRight size={16} className="ml-2" />
              </Button>
              <a
                href={contactInfo.emailHref}
                className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {t("home.rsvpCta")}
              </a>
              <Button
                to={donatePath}
                variant="secondary"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
              >
                {t("home.ctaSecondary")}
              </Button>
            </div>

            <p className="mt-6 text-sm text-white/70">
              {t("home.organizedBy")}:{" "}
              <span className="font-medium text-white">
                {kuriChasqui2026Event.organizer} &amp;{" "}
                {kuriChasqui2026Event.coOrganizer}
              </span>
            </p>
          </div>

          <div className="relative flex items-center justify-center py-4 md:py-8">
            <div className="absolute -left-6 top-10 hidden h-28 w-28 rounded-full border border-(--accent)/60 md:block" />
            <div className="absolute -bottom-4 right-8 hidden h-24 w-24 rounded-full border border-white/10 md:block" />

            <Link
              to={festivalPath}
              aria-label={t("home.ctaPrimary")}
              className="group relative block rounded-[1.4rem] bg-[#f3efe8] p-3 shadow-[0_30px_80px_rgba(0,0,0,0.28)] ring-1 ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_35px_90px_rgba(0,0,0,0.38)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
            >
              <img
                src={kuriChasqui2026Event.poster}
                alt={t("home.posterAlt")}
                width={500}
                height={700}
                loading="eager"
                className="h-auto w-full max-w-105 rounded-[0.8rem] border border-[#d7d0c5] object-cover"
              />

              <div className="pointer-events-none absolute bottom-6 right-6 flex h-11 w-11 items-center justify-center rounded-full bg-(--accent) text-(--surface-dark) shadow-lg transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight size={20} />
              </div>
            </Link>
          </div>
        </Container>
      </section>

      {/* Short AEINY introduction — 4:3 photography */}
      <section className="bg-(--background)">
        <Container className="py-14 md:py-20">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
                {c.introLabel}
              </p>

              <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {c.introHeading}
              </h2>

              <p className="mt-5 max-w-2xl text-base leading-7 text-(--muted) md:text-lg">
                {c.introBody}
              </p>
            </div>

            <Link
              to={aboutPath}
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-(--primary) transition hover:opacity-70"
            >
              {c.aboutCta}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Two clickable landscape images — link to About */}
          <div className="mt-9 grid gap-4 sm:grid-cols-2 md:gap-6">
            <Link
              to={aboutPath}
              aria-label={c.aboutCta}
              className="group relative block overflow-hidden rounded-2xl bg-[#e9dfd2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary) md:rounded-3xl"
            >
              <img
                src={homeImages.allhome}
                alt={
                  language === "es"
                    ? "Actividad comunitaria de AEINY"
                    : "AEINY community activity"
                }
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-(--foreground) shadow-md transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link
              to={aboutPath}
              aria-label={c.aboutCta}
              className="group relative block overflow-hidden rounded-2xl bg-[#e9dfd2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary) md:rounded-3xl"
            >
              <img
                src={homeImages.culture}
                alt={
                  language === "es"
                    ? "Actividad cultural de la comunidad AEINY"
                    : "AEINY community cultural activity"
                }
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-(--foreground) shadow-md transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Visual work areas — 4:3 landscape cards */}
      <section className="border-y border-(--border) bg-(--surface)">
        <Container className="py-14 md:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
                {c.workLabel}
              </p>

              <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
                {c.workTitle}
              </h2>
            </div>

            <Link
              to={ourWorkPath}
              className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:opacity-70"
            >
              {c.workCta}
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* 4:3 image gallery */}
          <div className="mt-9 grid gap-5 sm:grid-cols-2 md:gap-6">
            {c.workAreas.map((area) => (
              <Link
                key={area.title}
                to={ourWorkPath}
                className="group overflow-hidden rounded-2xl border border-(--border) bg-(--background) transition duration-300 hover:-translate-y-1 hover:shadow-lg md:rounded-3xl"
              >
                <div className="overflow-hidden bg-[#e9dfd2]">
                  <img
                    src={area.image}
                    alt={area.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
                  />
                </div>

                <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-6 md:py-5">
                  <h3 className="text-lg font-semibold leading-snug text-(--foreground) md:text-xl">
                    {area.title}
                  </h3>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-(--border) text-(--primary) transition group-hover:border-(--primary) group-hover:bg-(--primary) group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Featured projects — replaces the old placeholder */}
      <section className="bg-(--background)">
        <Container className="py-16 md:py-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {c.projectsLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {c.projectsTitle}
            </h2>
          </div>

          <div className="mt-9 grid gap-5 lg:grid-cols-2">
            <Link
              to={projectsPath}
              className="group overflow-hidden rounded-3xl border border-(--border) bg-(--surface)"
            >
              <div className="overflow-hidden bg-[#e9dfd2]">
                <img
                  src={homeImages.parque}
                  alt={c.parqueTitle}
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-(--foreground)">
                      {c.parqueTitle}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">
                      {c.parqueText}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 shrink-0 text-(--primary)"
                    size={18}
                  />
                </div>
              </div>
            </Link>

            <Link
              to={projectsPath}
              className="group overflow-hidden rounded-3xl border border-(--border) bg-(--surface)"
            >
              <div className="overflow-hidden bg-[#e9dfd2]">
                <img
                  src={homeImages.encuentro}
                  alt={c.encuentroTitle}
                  loading="lazy"
                  className="aspect-16/10 w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h3 className="text-2xl font-semibold text-(--foreground)">
                      {c.encuentroTitle}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-6 text-(--muted)">
                      {c.encuentroText}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="mt-1 shrink-0 text-(--primary)"
                    size={18}
                  />
                </div>
              </div>
            </Link>
          </div>

          <Link
            to={projectsPath}
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--primary)"
          >
            {c.projectsCta} <ArrowRight size={15} />
          </Link>
        </Container>
      </section>

      {/* Community image statement */}
      <section className="relative overflow-hidden bg-(--surface-dark) text-white">
        <div className="absolute inset-0">
          <img
            src={homeImages.migrantSupport}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,29,40,0.96)_0%,rgba(14,29,40,0.82)_55%,rgba(14,29,40,0.58)_100%)]" />
        </div>

        <Container className="relative py-20 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--accent)">
              {c.communityLabel}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.02] tracking-[-0.04em] text-white md:text-6xl">
              {c.communityTitle}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/75 md:text-lg">
              {c.communityText}
            </p>
            <Link
              to={aboutPath}
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-(--accent)"
            >
              {c.aboutCta} <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Festival RSVP — retained but compact */}
      <section className="border-b border-(--border) bg-[#e9dfd2]">
        <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {t("home.rsvpTitle")}
            </p>
            <a
              href={contactInfo.phoneHref}
              className="mt-1 inline-block text-lg font-semibold text-(--foreground) underline decoration-(--accent) underline-offset-4"
            >
              {contactInfo.phone}
            </a>
          </div>
          <a
            href={contactInfo.emailHref}
            className="inline-flex items-center gap-2 text-sm font-semibold text-(--primary) underline decoration-(--accent) underline-offset-4"
          >
            {contactInfo.email} <ArrowUpRight size={16} />
          </a>
        </Container>
      </section>

      <section className="bg-(--background)">
        <Container className="grid gap-8 py-16 md:py-20 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">
              {c.supportLabel}
            </p>
            <h2 className="mt-3 font-display text-4xl leading-[1.02] tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {c.supportTitle}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button to={donatePath}>{c.donateCta}</Button>
            <Button to={getInvolvedPath} variant="secondary">
              {c.involvedCta}
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
