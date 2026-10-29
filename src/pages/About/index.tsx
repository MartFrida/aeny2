import { aboutMedia } from '../../data/about';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  HeartHandshake,
  Leaf,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/common/Button";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";

const values = [
  { key: "solidarity", icon: HeartHandshake },
  { key: "identity", icon: Leaf },
  { key: "education", icon: BookOpen },
  { key: "commitment", icon: UsersRound },
] as const;

const alternateLanguagePaths = { en: "/en/about", es: "/es/about" };

type AboutContent = typeof import('../../i18n/en/about.json')['about']['content'];

export function AboutPage() {
  const { i18n, t } = useTranslation();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const prefix = `/${language}`;
  const c = t("about.content", { returnObjects: true }) as AboutContent;
  const ourWorkPath = `/${language}/our-work`;
  const homePath = `/${language}`;

  return (
    <>
      <PageMetadata
        language={language}
        title={t("about.seoTitle")}
        description={t("about.seoDescription")}
        canonicalPath={`${prefix}/about`}
        alternateLanguagePaths={alternateLanguagePaths}
        includeOrganizationData
      />
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-(--surface-dark) text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 overflow-hidden"
        >
          <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" />
          <div className="absolute -right-4 top-8 h-72 w-72 rounded-full border border-(--accent)/25" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
          <div className="absolute bottom-0 right-[8%] h-44 w-44 rounded-full bg-(--accent)/10 blur-3xl" />
        </div>
        <Container className="relative grid gap-12 py-16 md:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-(--accent)">
              {t("about.eyebrow")}
            </p>
            <h1 className="mt-5 max-w-3xl font-display text-5xl leading-[1.04] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
              {t("about.heroTitle")}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75 md:text-xl">
              {t("about.heroDescription")}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                to="#identity"
                className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!"
              >
                {t("about.heroPrimary")}{" "}
                <ArrowDown aria-hidden="true" size={16} className="ml-2" />
              </Button>
              <Button
                to={`${prefix}/get-involved`}
                variant="secondary"
                className="border-white/25 bg-white/5 text-white hover:bg-white/10"
              >
                {t("about.heroSecondary")}{" "}
                <ArrowUpRight aria-hidden="true" size={16} className="ml-2" />
              </Button>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-xl">
            <div className="relative aspect-square overflow-hidden rounded-4xl border border-white/15 bg-[#172b35]">
              <img
                src="/images/aeiny/about/aeiny-team.webp"
                alt={t("about.teamPhotoAlt")}
                width="960"
                height="960"
                fetchPriority="high"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-right text-xs uppercase tracking-[0.16em] text-white/55">
              {t("about.teamPhotoCaption")}
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Identity Section */}
      <section
        id="identity"
        className="scroll-mt-24 bg-(--background) py-16 md:py-24"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-20">
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -left-3 -top-3 h-24 w-24 rounded-tl-2rem border-l border-t border-(--accent)/70" />
            <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--surface)">
              <img
                src="/images/aeiny/about/our-story.webp"
                alt={t("about.storyPhotoAlt")}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_45%]"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 h-16 w-16 rounded-full border border-(--primary)/30 bg-(--accent-soft)"
            />
          </div>

          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t("about.identityEyebrow")}
            </p>
            <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("about.identityTitle")}
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-(--muted)">
              <p>{t("about.identityCopy1")}</p>
              <p>{t("about.identityCopy2")}</p>
              <p>{t("about.identityCopy3")}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Organization structure */}
      <section
        aria-labelledby="organization-heading"
        className="bg-(--background) pb-16 md:pb-24"
      >
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {c.organizationLabel}
            </p>
            <h2
              id="organization-heading"
              className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl"
            >
              {c.organizationTitle}
            </h2>
            <p className="mt-6 text-base leading-8 text-(--muted)">
              {c.organizationIntro}
            </p>
          </div>

          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {c.organizationUnits.map((content, index) => {
              const unit = { ...content, ...aboutMedia.organizationUnits[index] };
              return (
              <article
                key={unit.href}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-(--border) bg-(--surface)"
              >
                <Link
                  to={`${prefix}${unit.href}`}
                  aria-label={unit.cta}
                  className={`block overflow-hidden ${unit.href === "/contact" ? "bg-white" : "bg-(--accent-soft)"}`}
                >
                  <img
                    src={unit.image}
                    alt={unit.imageAlt}
                    width="960"
                    height="720"
                    loading="lazy"
                    decoding="async"
                    className={`aspect-4/3 w-full transition-transform duration-500 ${unit.href === "/contact" ? "object-contain p-6 sm:p-8" : "object-cover group-hover:scale-[1.035]"}`}
                  />
                </Link>
                <div className="flex flex-1 flex-col p-7 md:p-9">
                  <h3 className="font-display text-2xl tracking-[-0.02em] text-(--foreground) md:text-3xl">
                    {unit.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-(--muted)">
                    {unit.description}
                  </p>
                  <Link
                    to={`${prefix}${unit.href}`}
                    className="mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold text-(--primary) transition hover:opacity-70"
                  >
                    {unit.cta}
                    <ArrowUpRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            );
            })}
          </div>

          <p className="mt-8 max-w-4xl text-base leading-8 text-(--muted)">
            {c.organizationScope}
          </p>
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
                {c.areaIntro}
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
            {c.workAreas.map((content, index) => {
              const area = { ...content, ...aboutMedia.workAreas[index] };
              return (
              <Link
                key={area.title}
                to={`${homePath}${area.href}`}
                className="group overflow-hidden rounded-2xl border border-(--border) bg-(--background) transition duration-300 hover:-translate-y-1 hover:shadow-lg md:rounded-3xl"
              >
                <div className="overflow-hidden bg-[#e9dfd2]">
                  <img
                    src={area.image}
                    alt={area.title}
                    loading="lazy"
                    className="aspect-4/3 w-full object-cover transition-transform duration-500 group-hover:scale-[1.035]"
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
            );
            })}
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="border-y border-(--border) bg-(--surface) py-16 md:py-24">
        <Container>
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t("about.missionEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("about.missionHeading")}
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl border border-(--border) bg-(--background)">
              <img
                src="/images/aeiny/about/our-mission.webp"
                alt={t("about.missionPhotoAlt")}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
              />
            </div>
            <div className="grid gap-6">
              {(["mission"] as const).map((key, index) => (
                <article
                  key={key}
                  className={`rounded-3xl border p-7 md:p-9 ${index === 0 ? "border-(--border) bg-(--background)" : "border-(--primary)/25 bg-(--surface)"}`}
                >
                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
                    {t(`about.${key}Label`)}
                  </h3>
                  <p className="mt-5 max-w-xl font-display text-2xl leading-relaxed tracking-[-0.02em] text-(--foreground) md:text-3xl">
                    {t(`about.${key}Copy`)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-(--background) py-16 md:py-24">
        <Container>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t("about.valuesEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("about.valuesTitle")}
            </h2>
          </div>
          <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ key, icon: Icon }) => (
              <article key={key} className="border-t border-(--border) pt-5">
                <Icon
                  aria-hidden="true"
                  size={21}
                  strokeWidth={1.6}
                  className="text-(--primary)"
                />
                <h3 className="mt-5 text-lg font-semibold text-(--foreground)">
                  {t(`about.value.${key}Title`)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--muted)">
                  {t(`about.value.${key}Copy`)}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-12 md:py-16">
        <Container>
          <figure className="overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--background)">
            <h2 className="sr-only">{t("about.rootsTitle")}</h2>
            <div className="relative aspect-4/3 overflow-hidden bg-(--accent-soft)">
              <img
                src="/images/aeiny/about/our-roots.webp"
                alt={t("about.rootsPhotoAlt")}
                width="960"
                height="720"
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center"
              />
            </div>
            <figcaption className="px-5 py-4 text-sm leading-6 text-(--muted) sm:px-7">
              {t("about.rootsPhotoCaption")}
            </figcaption>
          </figure>
        </Container>
      </section>

      {/* Community Section */}
      <section className="bg-(--background) py-16 md:py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">
              {t("about.communityEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-4xl tracking-[-0.04em] text-(--foreground) md:text-5xl">
              {t("about.communityTitle")}
            </h2>
            <p className="mt-5 text-base leading-8 text-(--muted)">
              {t("about.communityCopy")}
            </p>
          </div>
          <div className="relative aspect-4/3 overflow-hidden rounded-[1.75rem] border border-(--border) bg-(--surface)">
            <img
              src="/images/aeiny/community-dinner.webp"
              alt={t("about.communityPhotoAlt")}
              width="960"
              height="720"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
            />
          </div>
        </Container>
      </section>

      {/* Build with us */}
      <section className="border-t border-(--border) bg-(--surface) py-16 md:py-20">
        <Container>
          <div className="rounded-4xl bg-(--primary) px-6 py-12 text-white sm:px-10 md:px-14 md:py-16">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                {t("about.finalEyebrow")}
              </p>
              <h2 className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] md:text-5xl">
                {t("about.finalTitle")}
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 md:text-lg">
                {t("about.finalDescription")}
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  to={`${prefix}/get-involved`}
                  className="bg-(--accent)! text-(--surface-dark)! hover:bg-[#d79d54]!"
                >
                  {t("about.finalParticipate")}
                </Button>
                <Button
                  to={`${prefix}/donate`}
                  variant="secondary"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10"
                >
                  {t("about.finalSupport")}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
