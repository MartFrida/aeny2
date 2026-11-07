import { useState } from "react";
import { ArrowUpRight, ChevronDown, ChevronUp, FileText, Landmark, Newspaper, Play, UsersRound } from "lucide-react";
import { Container } from "../common/Container";
import { aboutCoverage, aboutCoverageCopy, type CoverageKind, type CoverageLanguage, type CoverageSource } from "../../data/aboutCoverage.ts";

type CoverageFilter = "all" | CoverageKind;
const filters: CoverageFilter[] = ["all", "video", "press", "official", "community"];
const icons = { video: Play, press: Newspaper, official: Landmark, community: UsersRound };
const INITIAL_COUNT = 8;

function PublicationDate({ source, language }: { source: CoverageSource; language: CoverageLanguage }) {
  if (source.date) {
    return (
      <time dateTime={source.date}>
        {new Intl.DateTimeFormat(language === "es" ? "es" : "en", {
          day: "numeric", month: "short", year: "numeric", timeZone: "UTC",
        }).format(new Date(`${source.date}T12:00:00Z`))}
      </time>
    );
  }
  return source.year ? <time dateTime={String(source.year)}>{source.year}</time> : null;
}

function CoveragePreview({ source, language, featured }: { source: CoverageSource; language: CoverageLanguage; featured: boolean }) {
  const [failed, setFailed] = useState(false);
  const image = source.image;
  const hasImage = Boolean(image && !failed);
  const Icon = icons[source.kind];
  const copy = aboutCoverageCopy[language];

  return (
    <div aria-hidden="true" className={`relative isolate w-full shrink-0 overflow-hidden bg-(--surface-dark) ${featured ? "aspect-video sm:aspect-[2/1]" : "aspect-video"}`}>
      {hasImage && image ? (
        <img
          src={image.src} alt="" width={image.width} height={image.height}
          loading="lazy" decoding="async" onError={() => setFailed(true)}
          style={{ objectPosition: image.position ?? "center 35%" }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.035] motion-reduce:transform-none motion-reduce:transition-none"
        />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between bg-linear-to-br from-(--surface-dark) to-(--primary) p-6 sm:p-7">
          <div className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-12 right-4 h-40 w-40 rounded-full border border-(--accent)/20" />
          <span className="relative text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
            {source.kind === "official" ? copy.documentPreview : copy.originalSource}
          </span>
          <div className="relative flex items-end justify-between gap-4">
            <span className="max-w-[80%] font-display text-xl leading-tight tracking-[-0.025em] text-white sm:text-2xl">{source.publisher}</span>
            {source.kind !== "video" && <Icon size={29} strokeWidth={1.3} className="shrink-0 text-(--accent)" />}
          </div>
        </div>
      )}
      {hasImage && <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />}
      {source.kind === "video" && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/60 bg-(--surface-dark)/75 text-white shadow-lg backdrop-blur-sm transition-colors group-hover:bg-(--primary) sm:h-16 sm:w-16">
            <Play size={25} fill="currentColor" className="ml-1" />
          </span>
        </span>
      )}
      {source.duration && <span className="absolute bottom-3 right-3 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold tabular-nums text-white">{source.duration}</span>}
    </div>
  );
}

export function AboutCoverage({ language }: { language: CoverageLanguage }) {
  const copy = aboutCoverageCopy[language];
  const [filter, setFilter] = useState<CoverageFilter>("all");
  const [expanded, setExpanded] = useState(false);
  const selected = aboutCoverage.filter((source) => filter === "all" || source.kind === filter);
  const visible = expanded ? selected : selected.slice(0, INITIAL_COUNT);

  function selectFilter(next: CoverageFilter) {
    setFilter(next);
    setExpanded(false);
  }

  return (
    <section id="in-the-news" aria-labelledby="about-coverage-title" className="scroll-mt-24 border-t border-(--border) bg-(--background) py-16 md:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-(--primary)">{copy.eyebrow}</p>
            <h2 id="about-coverage-title" className="mt-4 font-display text-4xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl">{copy.title}</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-(--muted)">{copy.intro}</p>
          </div>
          <p className="inline-flex items-center gap-3 self-start rounded-full border border-(--border) bg-(--surface) px-4 py-2 text-sm text-(--muted) lg:shrink-0">
            <Newspaper aria-hidden="true" size={17} className="text-(--primary)" />
            <span><strong className="font-semibold text-(--foreground)">{aboutCoverage.length}</strong> {copy.count}</span>
          </p>
        </div>

        <div className="mt-10 border-t border-(--border) pt-6 md:mt-12">
          <h3 className="sr-only">{copy.archive}</h3>
          <div role="group" aria-label={copy.archive} className="flex flex-wrap gap-2">
            {filters.map((value) => (
              <button
                key={value} type="button" aria-pressed={filter === value} aria-controls="about-coverage-results"
                onClick={() => selectFilter(value)}
                className={`min-h-11 rounded-full border px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 ${filter === value ? "border-(--primary) bg-(--primary) text-white" : "border-(--border) bg-(--background) text-(--muted) hover:border-(--primary)/50 hover:text-(--primary)"}`}
              >{copy.filters[value]}</button>
            ))}
          </div>

          <p role="status" aria-live="polite" aria-atomic="true" className="mt-5 text-sm text-(--muted)">
            {copy.showing} {visible.length} {copy.of} {selected.length} {copy.results}
          </p>

          <div id="about-coverage-results" className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {visible.map((source) => {
              const Icon = icons[source.kind];
              const featured = source.id === "univision-angel-2020";
              const action = source.kind === "video" ? copy.watch : source.kind === "official" ? copy.document : copy.read;
              return (
                <article key={source.id} className={`min-w-0 overflow-hidden rounded-3xl border transition-colors ${featured ? "border-(--surface-dark) bg-(--surface-dark) text-white sm:col-span-2" : "border-(--border) bg-(--surface) hover:border-(--primary)/45"}`}>
                  <a
                    href={source.url} target="_blank" rel="noopener noreferrer"
                    aria-label={`${source.title} — ${source.publisher} (${copy.newTab})`}
                    className="group flex h-full flex-col outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-(--ring)"
                  >
                    <CoveragePreview source={source} language={language} featured={featured} />
                    <div className="flex flex-1 flex-col p-6 sm:p-7 md:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold ${featured ? "border-white/20 bg-white/5 text-(--accent)" : "border-(--border) bg-(--background) text-(--primary)"}`}>
                        <Icon size={14} aria-hidden="true" />{copy.kinds[source.kind]}
                      </span>
                      {(source.date || source.year || source.duration) && (
                        <span className={`flex flex-wrap items-center gap-x-3 text-xs ${featured ? "text-white/65" : "text-(--muted)"}`}>
                          <PublicationDate source={source} language={language} />
                          {source.duration && <span>{source.duration}</span>}
                        </span>
                      )}
                    </div>
                    <p className={`mt-6 text-xs font-semibold uppercase leading-5 tracking-[0.12em] ${featured ? "text-white/70" : "text-(--primary)"}`}>{source.publisher}</p>
                    {featured && <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-(--accent)">{copy.featured}</p>}
                    <h3 className={`mt-3 font-display leading-snug tracking-[-0.025em] [overflow-wrap:anywhere] ${featured ? "max-w-2xl text-2xl sm:text-3xl md:text-4xl" : "text-xl text-(--foreground) md:text-2xl"}`}>{source.title}</h3>
                    <p className={`mt-4 text-sm leading-7 ${featured ? "max-w-2xl text-white/75 md:text-base" : "text-(--muted)"}`}>{source.summary[language]}</p>
                    {source.note && <p className={`mt-3 text-xs leading-5 ${featured ? "text-white/60" : "text-(--muted)"}`}>{source.note[language]}</p>}
                    <div className={`mt-auto flex items-center justify-between gap-4 pt-7 text-sm font-semibold ${featured ? "text-(--accent)" : "text-(--primary)"}`}>
                      <span className="inline-flex items-center gap-2">{source.kind === "official" && <FileText size={15} aria-hidden="true" />}{action}</span>
                      <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors ${featured ? "border-white/20 group-hover:bg-white/10" : "border-(--border) group-hover:border-(--primary) group-hover:bg-(--primary) group-hover:text-white"}`}><ArrowUpRight size={18} aria-hidden="true" /></span>
                    </div>
                    </div>
                  </a>
                </article>
              );
            })}
          </div>

          {selected.length > INITIAL_COUNT && (
            <div className="mt-8 flex justify-center">
              <button
                type="button" aria-expanded={expanded} aria-controls="about-coverage-results" onClick={() => setExpanded(!expanded)}
                className="inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-(--primary)/30 px-6 py-3 text-sm font-semibold text-(--primary) transition-colors hover:bg-(--surface) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
              >
                {expanded ? copy.showLess : `${copy.showAll} (${selected.length})`}
                {expanded ? <ChevronUp size={17} aria-hidden="true" /> : <ChevronDown size={17} aria-hidden="true" />}
              </button>
            </div>
          )}
          <p className="mt-8 max-w-3xl border-t border-(--border) pt-5 text-xs leading-6 text-(--muted)">{copy.note}</p>
        </div>
      </Container>
    </section>
  );
}
