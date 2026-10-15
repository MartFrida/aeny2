import { useRef, useState } from 'react'
import { Award, Film, MessageCircle, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Container } from '../common/Container'
import { festivalSchedule2026 } from '../../data/festivalSchedule2026'

const dayFormatterOptions = {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
}

const fullDateFormatterOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
}

const typeStyles = {
  film: {
    icon: Film,
    badge: 'border-(--primary)/20 bg-(--primary)/8 text-(--primary)',
    card: 'border-(--border) bg-(--surface)',
  },
  forum: {
    icon: MessageCircle,
    badge: 'border-(--accent)/35 bg-(--accent-soft) text-(--foreground)',
    card: 'border-(--accent)/25 bg-[#fbf7ef]',
  },
  discussion: {
    icon: MessageCircle,
    badge: 'border-(--accent)/35 bg-(--accent-soft) text-(--foreground)',
    card: 'border-(--accent)/25 bg-[#fbf7ef]',
  },
  opening: {
    icon: Sparkles,
    badge: 'border-(--accent)/40 bg-(--accent-soft) text-(--primary)',
    card: 'border-(--accent)/40 bg-[#fbf7ef]',
  },
  ceremony: {
    icon: Award,
    badge: 'border-(--primary) bg-(--primary) text-white',
    card: 'border-(--primary) bg-[#f1eee4] ring-1 ring-(--primary)/15',
  },
  closing: {
    icon: Sparkles,
    badge: 'border-(--border) bg-(--background) text-(--muted)',
    card: 'border-(--border) bg-(--background)',
  },
}

function formatDate(date, language, options) {
  return new Intl.DateTimeFormat(language, options).format(new Date(`${date}T12:00:00Z`))
}

export function FestivalSchedule() {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const [activeDay, setActiveDay] = useState(0)
  const tabRefs = useRef([])
  const selectedDay = festivalSchedule2026[activeDay]

  const selectDay = (index, focusTab = false) => {
    const nextIndex = (index + festivalSchedule2026.length) % festivalSchedule2026.length
    setActiveDay(nextIndex)
    if (focusTab) tabRefs.current[nextIndex]?.focus()
  }

  const handleTabKeyDown = (event, index) => {
    if (event.key === 'ArrowRight') {
      event.preventDefault()
      selectDay(index + 1, true)
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault()
      selectDay(index - 1, true)
    } else if (event.key === 'Home') {
      event.preventDefault()
      selectDay(0, true)
    } else if (event.key === 'End') {
      event.preventDefault()
      selectDay(festivalSchedule2026.length - 1, true)
    }
  }

  return (
    <section id="festival-program" className="scroll-mt-24 bg-(--background)">
      <Container className="py-14 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--primary)">
              {t('festivalSchedule2026.eyebrow')}
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] text-(--foreground) sm:text-4xl md:text-5xl">
              {t('festivalSchedule2026.title')}
            </h2>
            <p className="mt-3 text-sm font-medium text-(--muted) sm:text-base">
              {t('festivalSchedule2026.dateRange')}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={t('festivalSchedule2026.dayTabsLabel')}
            className="-mx-4 mt-8 flex min-w-0 snap-x gap-2 overflow-x-auto px-4 pb-3 sm:mx-0 sm:gap-3 sm:px-0"
          >
            {festivalSchedule2026.map((day, index) => {
              const selected = activeDay === index
              const dayNumber = formatDate(day.date, language, dayFormatterOptions)
              const dateLabel = t(day.dayLabelKey)

              return (
                <button
                  key={day.date}
                  ref={(element) => {
                    tabRefs.current[index] = element
                  }}
                  id={`festival-program-tab-${index}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="festival-program-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => selectDay(index)}
                  onKeyDown={(event) => handleTabKeyDown(event, index)}
                  className={`min-w-22 shrink-0 snap-start rounded-xl border px-3 py-2.5 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2 sm:min-w-25 sm:px-4 ${
                    selected
                      ? 'border-(--primary) bg-(--primary) text-white'
                      : 'border-(--border) bg-(--surface) text-(--foreground) hover:border-(--primary)/50'
                  }`}
                >
                  <span className="block text-sm font-bold">{dayNumber}</span>
                  <span className={`mt-0.5 block text-xs ${selected ? 'text-white/80' : 'text-(--muted)'}`}>
                    {dateLabel}
                  </span>
                </button>
              )
            })}
          </div>

          <div
            id="festival-program-panel"
            role="tabpanel"
            aria-labelledby={`festival-program-tab-${activeDay}`}
            tabIndex={0}
            className="mt-3 rounded-2xl border border-(--border) bg-(--surface) p-3 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) sm:p-5 md:p-7"
          >
            <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-(--border) pb-4">
              <h3 className="font-display text-xl text-(--foreground) sm:text-2xl">
                {t(selectedDay.dayLabelKey)}
              </h3>
              <p className="text-sm text-(--muted)">
                {formatDate(selectedDay.date, language, fullDateFormatterOptions)}
              </p>
            </div>

            <ol className="space-y-3">
              {selectedDay.items.map((item, index) => {
                const style = typeStyles[item.type] ?? typeStyles.film
                const Icon = style.icon
                const timeLabel = item.endTime
                  ? `${item.startTime}–${item.endTime}`
                  : item.startTime
                const title = item.type === 'film' ? item.title : t(item.title)
                const entry = (
                  <span className="flex min-w-0 flex-col sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <span className="flex min-w-0 items-start gap-3">
                      <Icon
                        size={17}
                        className={`mt-0.5 shrink-0 ${item.type === 'ceremony' ? 'text-(--primary)' : 'text-(--muted)'}`}
                        aria-hidden="true"
                      />
                      <span className="min-w-0 break-words font-semibold leading-snug text-(--foreground) [overflow-wrap:anywhere]">
                        {title}
                      </span>
                    </span>
                    <span
                      className={`mt-2 inline-flex max-w-full self-start rounded-full border px-2.5 py-1 text-[0.68rem] font-semibold leading-snug sm:mt-0 sm:text-xs ${style.badge}`}
                    >
                      {item.specialKey ? t(item.specialKey) : t(`festivalSchedule2026.types.${item.type}`)}
                    </span>
                  </span>
                )

                return (
                  <li key={`${selectedDay.date}-${item.startTime}-${index}`}>
                    <article className={`grid min-w-0 gap-2 rounded-xl border p-3 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center sm:gap-4 sm:p-4 ${style.card}`}>
                      <time
                        dateTime={`${selectedDay.date}T${item.startTime}`}
                        className="font-mono text-sm font-bold tabular-nums text-(--primary) sm:text-base"
                      >
                        {timeLabel}
                      </time>
                      {item.filmId ? (
                        <a
                          href={`#festival-film-${item.filmId}`}
                          aria-label={t('festivalSchedule2026.viewFilmCard', { title })}
                          className="block min-w-0 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
                        >
                          {entry}
                        </a>
                      ) : (
                        <div className="min-w-0">{entry}</div>
                      )}
                    </article>
                  </li>
                )
              })}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  )
}
