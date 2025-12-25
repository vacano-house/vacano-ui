import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideRockingChair = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('rocking-chair', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="3.5 2 6.5 12.5 18 12.5" />
      <line x1="9.5" x2="5.5" y1="12.5" y2="20" />
      <line x1="15" x2="18.5" y1="12.5" y2="20" />
      <path d="M2.75 18a13 13 0 0 0 18.5 0" />
    </svg>
  )
}
