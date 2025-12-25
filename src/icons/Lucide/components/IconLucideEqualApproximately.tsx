import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideEqualApproximately = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('equal-approximately', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 15a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
      <path d="M5 9a6.5 6.5 0 0 1 7 0 6.5 6.5 0 0 0 7 0" />
    </svg>
  )
}
