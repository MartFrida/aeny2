import type { HTMLAttributes, ReactNode } from 'react'

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode
}

export function Section({ children, className = '', ...props }: SectionProps) {
  return (
    <section className={`py-12 md:py-16 ${className}`} {...props}>
      {children}
    </section>
  )
}
