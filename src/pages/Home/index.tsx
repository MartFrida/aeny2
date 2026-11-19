import { homeImages } from '../../data/home';
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "../../components/common/Button";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";
import { contactInfo } from "../../data/contact";
import { chasquiMigrante2026, chasquiRegistrationFeeLabel } from "../../data/events/chasquiMigrante2026";

type HomeContent = typeof import('../../i18n/en/home.json')['home']['content'];

const facebookReelUrl = "https://www.facebook.com/reel/1878955266429563";
const facebookEmbedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(facebookReelUrl)}&show_text=false&width=360&height=640&autoplay=1&mute=1`;
const chasquiPosterPath = "/images/events/chasqui-migrante-2026/chasqui-migrante-2026-poster.jpg";
const posterIntroDurationMs = 2000;

const chasquiHeroContent = {
  es: {
    eyebrow: "Deporte y comunidad",
    intro: "Corre con nuestra comunidad. Un encuentro para compartir nuestras raíces y celebrar los vínculos que nos unen.",
    dateLabel: "Fecha",
    timeLabel: "Salida",
    venueLabel: "Lugar",
    registerCta: "Inscríbete",
    videoCta: "Ver video",
    videoTitle: "Video de Chasqui Migrante 5K & 10K 2026 en Facebook",
    posterAlt: "Cartel de Chasqui Migrante 5K & 10K 2026",
    videoCaption: "Chasqui Migrante · Video",
    facebookCta: "Ver en Facebook",
    contactLabel: "Contacto",
  },
  en: {
    eyebrow: "Sport and community",
    intro: "Run with our community. Come together to share our roots and celebrate the connections that unite us.",
    dateLabel: "Date",
    timeLabel: "Start",
    venueLabel: "Location",
    registerCta: "Register",
    videoCta: "Watch video",
    videoTitle: "Chasqui Migrante 5K & 10K 2026 video on Facebook",
    posterAlt: "Chasqui Migrante 5K & 10K 2026 event poster",
    videoCaption: "Chasqui Migrante · Video",
    facebookCta: "Watch on Facebook",
    contactLabel: "Contact",
  },
} as const;

export function HomePage() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const c = t("home.content", { returnObjects: true }) as HomeContent;
  const homePath = `/${language}`;

  const chasquiPath = `/${language}/events/chasqui-migrante-2026`;
  const hero = chasquiHeroContent[language];
  const donatePath = `/${language}/donate`;
  const aboutPath = `/${language}/about`;
  const culturaPath = `/${language}/events`;
  const projectsPath = `/${language}/projects`;
  const getInvolvedPath = `/${language}/get-involved`;
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const [posterReady, setPosterReady] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const [isPlayerLoaded, setIsPlayerLoaded] = useState(false);

  useEffect(() => {
    if (!posterReady || shouldLoadVideo) return;

    let timer: ReturnType<typeof window.setTimeout> | undefined;
    const clearTimer = () => {
      if (timer !== undefined) window.clearTimeout(timer);
      timer = undefined;
    };
    const startTimer = () => {
      if (timer !== undefined) return;
      timer = window.setTimeout(() => setShouldLoadVideo(true), posterIntroDurationMs);
    };

    // Start the two-second intro when the poster can actually be seen.
    // This keeps the intro visible on phones, where the video sits below the text.
    const container = videoContainerRef.current;
    if (!container || !("IntersectionObserver" in window)) {
      startTimer();
      return clearTimer;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.25) startTimer();
      else clearTimer();
    }, { threshold: 0.25 });
    observer.observe(container);

    return () => {
      clearTimer();
      observer.disconnect();
    };
  }, [posterReady, shouldLoadVideo]);

  return (
    <>
      <PageMetadata
        language={language}
        title={t("home.seoTitle")}
        description={t("home.seoDescription")}
        canonicalPath={homePath}
        alternateLanguagePaths={{ en: "/en", es: "/es" }}
      />
      {/* Chasqui Migrante hero */}
      <section
        aria-labelledby="home-chasqui-title"
        className="relative overflow-hidden bg-(--surface-dark) text-white"
      >
        <div className="absolute inset-0 opacity-80" aria-hidden="true">
          <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,rgba(201,154,92,0.16),transparent_28%)]" />
          <div className="absolute -left-16 bottom-0 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute right-10 top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
        </div>

        <Container className="relative grid items-center gap-8 py-8 sm:py-10 lg:grid-cols-[minmax(0,1.12fr)_minmax(0,0.88fr)] lg:gap-12 lg:py-12">
          <div className="min-w-0 max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
              {hero.eyebrow}
            </p>
            <h1
              id="home-chasqui-title"
              className="mt-5 break-words font-display text-5xl leading-[1.02] tracking-[-0.05em] text-white sm:text-6xl xl:text-7xl"
            >
              <span className="block">Chasqui Migrante</span>{" "}
              <span className="mt-2 block text-(--accent)">5K &amp; 10K 2026</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-white/80 md:text-lg">
              {hero.intro}
            </p>

            <dl className="mt-7 grid gap-3 sm:grid-cols-2">
              <div className="min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-white/65">
                  {hero.dateLabel}
                </dt>
                <dd className="mt-1 text-base font-medium leading-7 text-white">
                  {t("chasqui2026.date")}
                </dd>
              </div>
              <div className="min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-white/65">
                  {hero.timeLabel}
                </dt>
                <dd className="mt-1 text-base font-medium leading-7 text-white">
                  {chasquiMigrante2026.time}
                </dd>
              </div>
              <div className="min-w-0 rounded-xl border border-white/15 bg-white/5 px-4 py-3 sm:col-span-2">
                <dt className="text-sm font-semibold uppercase tracking-[0.12em] text-white/65">
                  {hero.venueLabel}
                </dt>
                <dd className="mt-1 text-base font-medium leading-7 text-white">
                  {t("chasqui2026.shortLocation")}
                </dd>
              </div>
            </dl>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button
                to={chasquiPath}
                className="min-h-11 justify-center bg-(--accent)! px-6! py-3! text-(--surface-dark)! hover:bg-[#d79d54]!"
              >
                {hero.registerCta} · {chasquiRegistrationFeeLabel}
              </Button>
              <a
                href="#home-chasqui-video"
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/25 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {hero.videoCta}
              </a>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/70">
              {t("chasqui2026.organizer")}
            </p>
          </div>

          <figure
            id="home-chasqui-video"
            aria-labelledby="home-chasqui-video-caption"
            className="relative mx-auto w-full max-w-[360px] scroll-mt-24 lg:justify-self-end"
          >
            <div
              ref={videoContainerRef}
              className="relative aspect-[9/16] overflow-hidden rounded-2xl border border-white/20 bg-black shadow-[0_24px_60px_rgba(0,0,0,0.28)]"
            >
              {shouldLoadVideo && (
                <iframe
                  src={facebookEmbedUrl}
                  title={hero.videoTitle}
                  width={360}
                  height={640}
                  onLoad={() => setIsPlayerLoaded(true)}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0 h-full w-full border-0"
                />
              )}
              <img
                src={chasquiPosterPath}
                alt={hero.posterAlt}
                width={1867}
                height={2464}
                loading="eager"
                onLoad={() => setPosterReady(true)}
                onError={() => setPosterReady(true)}
                aria-hidden={isPlayerLoaded}
                className={`pointer-events-none absolute inset-0 z-10 h-full w-full object-contain transition-opacity duration-300 motion-reduce:transition-none ${isPlayerLoaded ? "opacity-0" : "opacity-100"}`}
              />
            </div>
            <figcaption
              id="home-chasqui-video-caption"
              className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-sm leading-6 text-white/70"
            >
              <span>{hero.videoCaption}</span>
              <a
                href={facebookReelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm font-semibold text-(--accent) underline underline-offset-4 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 focus-visible:ring-offset-(--surface-dark)"
              >
                {hero.facebookCta}
              </a>
            </figcaption>
          </figure>
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
                  t("home.activityPhotoAlt")
                }
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-(--foreground) shadow-md transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link
              to={culturaPath}
              aria-label={c.aboutCta}
              className="group relative block overflow-hidden rounded-2xl bg-[#e9dfd2] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary) md:rounded-3xl"
            >
              <img
                src={homeImages.culture}
                alt={
                  t("home.culturePhotoAlt")
                }
                loading="lazy"
                className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
              />

              <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-(--foreground) shadow-md transition-transform duration-300 group-hover:scale-110">
                <ArrowUpRight size={18} />
              </span>
            </Link>
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

      {/* Community contact */}
      <section className="border-b border-(--border) bg-[#e9dfd2]">
        <Container className="flex flex-col gap-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--muted)">
              {hero.contactLabel}
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
