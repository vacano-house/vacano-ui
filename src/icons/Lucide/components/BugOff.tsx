import { DEFAULT_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const BugOff = ({
  className,
  size = DEFAULT_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('bug-off', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20v-8" />
      <path d="M14.12 3.88 16 2" />
      <path d="M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
      <path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3" />
      <path d="m2 2 20 20" />
      <path d="M21 5a4 4 0 0 1-3.55 3.97" />
      <path d="M22 13h-3.34" />
      <path d="M3 21a4 4 0 0 1 3.81-4" />
      <path d="M6 13H2" />
      <path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
    </svg>
  )
}
