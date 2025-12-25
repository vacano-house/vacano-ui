import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideMicrochip = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('microchip', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 12h4" />
      <path d="M10 17h4" />
      <path d="M10 7h4" />
      <path d="M18 12h2" />
      <path d="M18 18h2" />
      <path d="M18 6h2" />
      <path d="M4 12h2" />
      <path d="M4 18h2" />
      <path d="M4 6h2" />
      <rect x="6" y="2" width="12" height="20" rx="2" />
    </svg>
  )
}
