import { Film, MoveUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import {
  getFilmPrimaryImage,
  getFilmTypeTranslationKey,
  type FestivalFilm,
} from '../../data/events/kuriChasquiCatalog'

type FilmCardProps = {
  film: FestivalFilm
  to: string
}

export function FilmCard({ film, to }: FilmCardProps) {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  // const synopsis = language === 'es' ? film.synopsisEs : film.synopsisEn
  const typeTranslation = getFilmTypeTranslationKey(film.type)
  const poster = getFilmPrimaryImage(film)
  const countries = film.country?.filter(Boolean).join(', ')
  const genre = Array.isArray(film.genre)
    ? film.genre.join(', ')
    : film.genre || (typeTranslation ? t(typeTranslation) : undefined)
  const metadata = [
    [countries, film.year],
    [genre, film.duration],
  ]
    .map((items) => items.filter(Boolean).join(' · '))
    .filter(Boolean)

  return (
    <Link
      to={to}
      className="group flex min-h-full flex-col border border-(--border) bg-(--background) transition-colors hover:border-(--primary)/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
    >
      {poster ? (
        <img
          src={poster}
          alt={t('festival2026.filmImageAlt', { title: film.title })}
          className="aspect-[3/4] w-full bg-[#e9dfd2] object-contain p-2"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-[3/4] items-center justify-between bg-[#e9dfd2] px-6 py-5 text-(--primary)">
          <Film size={30} strokeWidth={1.25} aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em]">
            {t('festival2026.officialSelection')}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mt-2 font-display text-xl leading-snug text-(--foreground)">{film.title}</h3>
        {metadata.map((line) => (
          <p key={line} className="mt-2 text-xs leading-5 text-(--muted)">
            {line}
          </p>
        ))}
        {/* {synopsis ? (
          <div className="mt-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-(--foreground)">
              {t('festival2026.synopsis')}
            </h4>
            <p className="mt-1 line-clamp-3 text-sm leading-6 text-(--muted)">{synopsis}</p>
          </div>
        ) : null} */}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-(--primary)">
          {t('festival2026.viewFilm')}
          <MoveUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
