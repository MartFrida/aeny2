import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { CourseFacts } from "../../components/courses/CourseFacts";
import { CourseInquiry } from "../../components/courses/CourseInquiry";
import { Container } from "../../components/common/Container";
import { PageMetadata } from "../../components/common/PageMetadata";
import { NotFoundPage } from "../NotFound";
import { courses, getCourseBySlug } from "../../data/courses";

export function CourseDetailPage() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams<{ slug: string }>();
  const language = i18n.resolvedLanguage === "es" ? "es" : "en";
  const course = slug ? getCourseBySlug(slug) : undefined;

  if (!course) return <NotFoundPage />;

  const title = language === "es" ? course.titleEs : course.titleEn;
  const summary = language === "es" ? course.summaryEs : course.summaryEn;
  const description =
    language === "es" ? course.descriptionEs : course.descriptionEn;
  const topics = language === "es" ? course.topicsEs : course.topicsEn;
  const schedule = language === "es" ? course.scheduleEs : course.scheduleEn;
  const relatedCourses = courses
    .filter(
      (related) =>
        related.category === course.category && related.id !== course.id,
    )
    .slice(0, 3);

  return (
    <>
      <PageMetadata
        language={language}
        title={t("courses.detail.seoTitle", { course: title })}
        description={summary}
        canonicalPath={`/${language}/courses/${course.slug}`}
        alternateLanguagePaths={{
          en: `/en/courses/${course.slug}`,
          es: `/es/courses/${course.slug}`,
        }}
      />

      <section className="bg-(--background) py-8 md:py-12">
        <Container>
          <nav
            aria-label={t("courses.detail.breadcrumbLabel")}
            className="text-sm"
          >
            <ol className="flex flex-wrap items-center gap-2 text-(--muted)">
              <li>
                <Link
                  to={`/${language}/courses`}
                  className="transition-colors hover:text-(--foreground) focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
                >
                  {t("courses.detail.breadcrumb")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="font-medium text-(--foreground)"
              >
                {title}
              </li>
            </ol>
          </nav>
        </Container>
      </section>

      <section className="bg-(--surface-dark) py-12 text-white md:py-16 lg:py-20">
        <Container className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">
          <div className="max-w-2xl">
            <Link
              to={`/${language}/courses`}
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/75 transition-colors hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent)"
            >
              <ArrowLeft aria-hidden="true" size={16} />
              {t("courses.detail.backToCatalog")}
            </Link>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--accent)">
              {t(`courses.categories.${course.category}`)}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] tracking-[-0.05em] sm:text-5xl md:text-6xl">
              {title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">
              {summary}
            </p>
            <p className="mt-5 inline-flex border border-white/20 px-3 py-2 text-sm text-white/80">
              {t(`courses.availability.${course.availability}`)}
            </p>
          </div>
          {course.image ? (
            <div className="relative aspect-[4/5] overflow-hidden bg-(--surface-dark)">
              <img
                src={course.image}
                alt={t("courses.coursePhotoAlt", { course: title })}
                className="absolute inset-0 h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : null}
        </Container>
      </section>

      <section className="bg-(--background) py-12 md:py-16">
        <Container className="grid gap-9 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t("courses.detail.overviewEyebrow")}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t("courses.detail.overviewTitle")}
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-(--muted) md:text-lg md:leading-8">
              {description}
            </p>
            <div className="mt-8">
              <h3 className="font-display text-2xl text-(--foreground)">
                {t("courses.detail.learnTitle")}
              </h3>
              {topics.length > 0 ? (
                <ul className="mt-4 space-y-3">
                  {topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex gap-3 text-sm leading-6 text-(--muted) md:text-base"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-(--accent)"
                      />
                      {topic}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 leading-7 text-(--muted)">
                  {t("courses.detail.topicsUnconfirmed")}
                </p>
              )}
            </div>
          </div>
          <aside className="h-fit border border-(--border) bg-(--surface) p-5 sm:p-7">
            <h2 className="font-display text-2xl text-(--foreground)">
              {t("courses.detail.factsTitle")}
            </h2>
            <div className="mt-5">
              <CourseFacts course={course} />
            </div>
            <div className="mt-6">
              <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-(--muted)">
                {t("courses.detail.formats")}
              </h3>
              {course.formats.length > 0 ? (
                <ul className="mt-3 flex flex-wrap gap-2">
                  {course.formats.map((format) => (
                    <li
                      key={format}
                      className="border border-(--border) px-3 py-1.5 text-sm text-(--foreground)"
                    >
                      {t(`courses.formatLabels.${format}`)}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-3 text-sm leading-6 text-(--muted)">
                  {t("courses.detail.formatsContact")}
                </p>
              )}
            </div>
            <p className="mt-5 text-sm leading-6 text-(--muted)">
              {t(`courses.availability.${course.availability}`)}
            </p>
          </aside>
        </Container>
      </section>

      <section className="border-y border-(--border) bg-(--surface) py-12 md:py-16">
        <Container className="grid gap-6 md:grid-cols-[0.65fr_1.35fr] md:items-start md:gap-12">
          <h2 className="font-display text-2xl tracking-[-0.03em] text-(--foreground) sm:text-3xl">
            {t("courses.detail.upcomingTitle")}
          </h2>
          <div className="max-w-3xl">
            <p className="leading-7 text-(--muted)">
              {t("courses.detail.upcomingCopy")}
            </p>
            {schedule ? (
              <p className="mt-4 border-l-2 border-(--accent) pl-4 text-sm leading-6 text-(--muted)">
                {schedule}
              </p>
            ) : null}
            <a
              href={course.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition-colors hover:text-(--foreground) focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--primary)"
            >
              {t("courses.detail.sourceLink")}
              <ArrowUpRight aria-hidden="true" size={16} />
            </a>
          </div>
        </Container>
      </section>

      {relatedCourses.length > 0 ? (
        <section className="bg-(--background) py-12 md:py-16">
          <Container>
            <h2 className="font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl">
              {t("courses.detail.relatedTitle")}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCourses.map((related) => {
                const relatedTitle =
                  language === "es" ? related.titleEs : related.titleEn;
                const relatedSummary =
                  language === "es" ? related.summaryEs : related.summaryEn;
                return (
                  <Link
                    key={related.id}
                    to={`/${language}/courses/${related.slug}`}
                    className="border border-(--border) bg-(--surface) p-5 transition-colors hover:border-(--primary)/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary)"
                  >
                    <h3 className="font-display text-xl text-(--foreground)">
                      {relatedTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-(--muted)">
                      {relatedSummary}
                    </p>
                  </Link>
                );
              })}
            </div>
          </Container>
        </section>
      ) : null}

      <CourseInquiry courseTitle={title} />
    </>
  );
}
