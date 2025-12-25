import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideRadical = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('radical', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21" />
    </svg>
  )
}
