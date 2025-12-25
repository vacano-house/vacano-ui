import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideBirdhouse = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('birdhouse', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 18v4" />
      <path d="m17 18 1.956-11.468" />
      <path d="m3 8 7.82-5.615a2 2 0 0 1 2.36 0L21 8" />
      <path d="M4 18h16" />
      <path d="M7 18 5.044 6.532" />
      <circle cx="12" cy="10" r="2" />
    </svg>
  )
}
