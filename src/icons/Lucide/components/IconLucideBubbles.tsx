import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideBubbles = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('bubbles', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.001 15.085A1.5 1.5 0 0 1 9 16.5" />
      <circle cx="18.5" cy="8.5" r="3.5" />
      <circle cx="7.5" cy="16.5" r="5.5" />
      <circle cx="7.5" cy="4.5" r="2.5" />
    </svg>
  )
}
