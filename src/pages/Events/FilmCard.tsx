import { Film, MoveUpRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { getFilmTypeTranslationKey, type FestivalFilm } from '../../data/events/kuriChasquiCatalog'

type FilmCardProps = {
  film: FestivalFilm
  to: string
}

export function FilmCard({ film, to }: FilmCardProps) {
  const { i18n, t } = useTranslation()
  const language = i18n.resolvedLanguage === 'es' ? 'es' : 'en'
  const synopsis = language === 'es' ? film.synopsisEs : film.synopsisEn
  const typeTranslation = getFilmTypeTranslationKey(film.type)
  const poster =
    typeof film.poster === 'string' && film.poster.startsWith('/') && !film.poster.startsWith('//')
      ? film.poster
      : undefined

  return (
    <Link
      to={to}
      className="group flex min-h-full flex-col border border-(--border) bg-(--background) transition-colors hover:border-(--primary)/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2"
    >
      {poster ? (
        <img
          src={poster}
          alt={t('festival2026.filmImageAlt', { title: film.title })}
          className="aspect-[16/9] w-full bg-[#e9dfd2] object-contain"
          loading="lazy"
        />
      ) : (
        <div className="flex aspect-[16/9] items-center justify-between bg-[#e9dfd2] px-6 py-5 text-(--primary)">
          <Film size={30} strokeWidth={1.25} aria-hidden="true" />
          <span className="text-xs font-semibold uppercase tracking-[0.15em]">
            {t('festival2026.officialSelection')}
          </span>
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        {typeTranslation ? (
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-(--primary)">
            {t(typeTranslation)}
          </p>
        ) : null}
        <h3 className="mt-2 font-display text-xl leading-snug text-(--foreground)">{film.title}</h3>
        {synopsis ? (
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-(--muted)">{synopsis}</p>
        ) : null}
        <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-(--primary)">
          {t('festival2026.filmDetails')}
          <MoveUpRight size={15} aria-hidden="true" />
        </span>
      </div>
    </Link>
  )
}
