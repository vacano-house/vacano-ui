import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideDrone = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('drone', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 10 7 7" />
      <path d="m10 14-3 3" />
      <path d="m14 10 3-3" />
      <path d="m14 14 3 3" />
      <path d="M14.205 4.139a4 4 0 1 1 5.439 5.863" />
      <path d="M19.637 14a4 4 0 1 1-5.432 5.868" />
      <path d="M4.367 10a4 4 0 1 1 5.438-5.862" />
      <path d="M9.795 19.862a4 4 0 1 1-5.429-5.873" />
      <rect x="10" y="8" width="4" height="8" rx="1" />
    </svg>
  )
}
