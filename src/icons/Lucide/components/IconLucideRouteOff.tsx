import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideRouteOff = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('route-off', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="6" cy="19" r="3" />
      <path d="M9 19h8.5c.4 0 .9-.1 1.3-.2" />
      <path d="M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12" />
      <path d="m2 2 20 20" />
      <path d="M21 15.3a3.5 3.5 0 0 0-3.3-3.3" />
      <path d="M15 5h-4.3" />
      <circle cx="18" cy="5" r="3" />
    </svg>
  )
}
