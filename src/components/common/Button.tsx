import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { Link } from 'react-router-dom'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  to?: string
  className?: string
}

export function Button({
  children,
  variant = 'primary',
  to,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ring) focus-visible:ring-offset-2'

  const variantClasses =
    variant === 'primary'
      ? 'bg-(--primary) text-(--primary-foreground) hover:bg-[#633427]'
      : 'border border-(--border) bg-transparent text-(--foreground) hover:bg-white/60'

  if (to) {
    return (
      <Link to={to} className={`${baseClasses} ${variantClasses} ${className}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  )
}
