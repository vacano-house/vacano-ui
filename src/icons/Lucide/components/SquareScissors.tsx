import { DEFAULT_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const SquareScissors = ({
  className,
  size = DEFAULT_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('square-scissors', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <line x1="9.56066" y1="9.56066" x2="12" y2="12" />
      <line x1="17" y1="17" x2="14.82" y2="14.82" />
      <circle cx="8.5" cy="15.5" r="1.5" />
      <line x1="9.56066" y1="14.43934" x2="17" y2="7" />
    </svg>
  )
}
