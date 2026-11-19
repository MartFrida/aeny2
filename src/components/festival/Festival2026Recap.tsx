import { Award, Newspaper } from "lucide-react";
import type { SVGProps } from "react";
import { Container } from "../common/Container";
import {
  festival2026AwardPhoto,
  festival2026Publications,
  festival2026Recap,
  festival2026Winners,
  type Festival2026Language,
} from "../../data/events/festival2026Recap";

type Festival2026RecapProps = {
  language: Festival2026Language;
};

// Keep the Instagram mark local: some lucide-react versions omit brand icons.
function InstagramIcon({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x={3} y={3} width={18} height={18} rx={5} />
      <circle cx={12} cy={12} r={4} />
      <circle cx={17.5} cy={6.5} r={1} fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Festival2026Results({ language }: Festival2026RecapProps) {
  const content = festival2026Recap[language];

  return (
    <section
      id="festival-winners"
      aria-labelledby="festival-winners-title"
      className="scroll-mt-24 border-b border-(--border) bg-(--background)"
    >
      <Container className="py-12 md:py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--primary)">
            {content.resultsLabel}
          </p>
          <h2
            id="festival-winners-title"
            className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl"
          >
            {content.resultsTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--muted) md:text-lg">
            {content.resultsIntro}
          </p>
        </div>

        <div className="mt-9 grid items-start gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.65fr)] lg:gap-10 xl:gap-14">
          <aside className="min-w-0 space-y-6">
            <figure className="mx-auto w-full max-w-sm">
              <img
                src={festival2026AwardPhoto.src}
                alt={content.photoAlt}
                width={festival2026AwardPhoto.width}
                height={festival2026AwardPhoto.height}
                loading="lazy"
                decoding="async"
                className="mx-auto h-auto w-full max-w-[19rem] rounded-xl lg:max-w-none"
              />
              <figcaption className="mt-3 text-center text-sm leading-6 text-(--muted) lg:text-left">
                {content.photoCaption}
              </figcaption>
            </figure>

            <div className="rounded-xl border border-(--accent)/40 bg-(--surface) p-5 sm:p-6">
              <div className="flex items-center gap-3 text-(--primary)">
                <Award size={24} aria-hidden="true" className="shrink-0" />
                <h3 className="font-display text-xl tracking-tight">
                  {content.awardName}
                </h3>
              </div>
              <p className="mt-3 text-base leading-7 text-(--muted)">
                {content.awardCopy}
              </p>
              <div className="mt-5 border-t border-(--border) pt-5">
                <h3 className="font-semibold text-(--foreground)">
                  {content.juryTitle}
                </h3>
                <p className="mt-2 text-base leading-7 text-(--muted)">
                  {content.juryCopy}
                </p>
              </div>
            </div>
          </aside>

          <ol role="list" className="grid min-w-0 list-none gap-x-7 sm:grid-cols-2">
            {festival2026Winners.map((award, index) => (
              <li
                key={award.id}
                className={
                  award.honorary
                    ? "mt-3 min-w-0 rounded-xl border border-(--accent)/50 bg-(--surface) p-5 sm:col-span-2 sm:p-6"
                    : "min-w-0 border-t border-(--border) py-5"
                }
              >
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 shrink-0 text-sm font-semibold tabular-nums text-(--primary)"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold leading-6 text-(--primary)">
                      {award.category[language]}
                    </p>
                    <h3 className="mt-2 break-words font-display text-xl leading-snug tracking-tight text-(--foreground) sm:text-2xl">
                      {award.winner}
                    </h3>
                    <p className="mt-2 whitespace-pre-line text-base leading-7 text-(--muted)">
                      {award.credits[language]}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <footer className="mt-10 border-t border-(--border) pt-7 md:mt-12">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-(--primary)">
            {content.signatoriesLabel}
          </p>
          <div className="mt-5 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="font-display text-xl text-(--foreground)">
                Amaruk Kayshapanta
              </p>
              <p className="mt-2 max-w-md text-base leading-7 text-(--muted)">
                {content.amarukRole}
              </p>
            </div>
            <div>
              <p className="font-display text-xl text-(--foreground)">
                Walther Sinche
              </p>
              <p className="mt-2 max-w-md text-base leading-7 text-(--muted)">
                {content.waltherRole}
              </p>
            </div>
          </div>
        </footer>
      </Container>
    </section>
  );
}

export function Festival2026Press({ language }: Festival2026RecapProps) {
  const content = festival2026Recap[language];
  const dateFormatter = new Intl.DateTimeFormat(language === "es" ? "es-ES" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <section
      id="festival-press"
      aria-labelledby="festival-press-title"
      className="scroll-mt-24 border-b border-(--border) bg-(--surface)"
    >
      <Container className="py-12 md:py-16">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-(--primary)">
            {content.pressLabel}
          </p>
          <h2
            id="festival-press-title"
            className="mt-3 font-display text-3xl leading-tight tracking-[-0.04em] text-(--foreground) md:text-5xl"
          >
            {content.pressTitle}
          </h2>
          <p className="mt-4 text-base leading-7 text-(--muted)">
            {content.pressIntro}
          </p>
        </div>

        <ul role="list" className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {festival2026Publications.map((publication) => {
            const isInstagram = publication.kind === "instagram";
            const Icon = isInstagram ? InstagramIcon : Newspaper;

            return (
              <li key={publication.id} className="min-w-0">
                <a
                  href={publication.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-(--border) bg-(--background) transition-colors hover:border-(--accent) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-4 focus-visible:ring-offset-(--surface)"
                >
                  <div className="relative aspect-[4/3] w-full border-b border-(--border) bg-(--surface)">
                    <img
                      src={publication.image.src}
                      alt={publication.image.alt[language]}
                      width={publication.image.width}
                      height={publication.image.height}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-contain p-3"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-sm font-semibold uppercase tracking-wide text-(--primary)">
                          {isInstagram ? content.socialType : content.articleType}
                        </p>
                        <p className="mt-2 font-semibold text-(--foreground)">
                          {publication.source}
                        </p>
                        {publication.account && (
                          <p className="mt-1 text-sm text-(--muted)">
                            {publication.account}
                          </p>
                        )}
                      </div>
                      <Icon size={24} aria-hidden="true" className="shrink-0 text-(--primary)" />
                    </div>
                    {publication.date && (
                      <time dateTime={publication.date} className="mt-3 text-sm text-(--muted)">
                        {dateFormatter.format(new Date(`${publication.date}T12:00:00Z`))}
                      </time>
                    )}
                    <h3 className="mt-4 break-words font-display text-2xl leading-snug tracking-tight text-(--foreground)">
                      {publication.title[language]}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-(--muted)">
                      {publication.summary[language]}
                    </p>
                    <span className="mt-auto pt-6 text-sm font-semibold text-(--primary) underline decoration-(--accent)/70 underline-offset-4 group-hover:decoration-(--primary)">
                      {isInstagram ? content.instagramCta : content.articleCta}
                    </span>
                    <span className="sr-only"> ({content.newTab})</span>
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
