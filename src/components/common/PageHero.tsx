import type { ReactNode } from 'react'
import { Container } from './Container'

type PageHeroProps = {
  eyebrow?: string
  title: string
  intro: string
  actions?: ReactNode
}

export function PageHero({ eyebrow, title, intro, actions }: PageHeroProps) {
  return (
    <section className="border-(--border) border-b bg-white/40 py-14 md:py-20">
      <Container>
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-(--muted)">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl font-semibold tracking-[-0.04em] text-(--foreground) md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-(--muted)">{intro}</p>
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </Container>
    </section>
  )
}
