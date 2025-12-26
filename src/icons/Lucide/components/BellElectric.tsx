import { DEFAULT_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const BellElectric = ({
  className,
  size = DEFAULT_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('bell-electric', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.518 17.347A7 7 0 0 1 14 19" />
      <path d="M18.8 4A11 11 0 0 1 20 9" />
      <path d="M9 9h.01" />
      <circle cx="20" cy="16" r="2" />
      <circle cx="9" cy="9" r="7" />
      <rect x="4" y="16" width="10" height="6" rx="2" />
    </svg>
  )
}
