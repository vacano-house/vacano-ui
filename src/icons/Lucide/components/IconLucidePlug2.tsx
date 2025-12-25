import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucidePlug2 = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('plug-2', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M12 17v5" />
      <path d="M5 8h14" />
      <path d="M6 11V8h12v3a6 6 0 1 1-12 0Z" />
    </svg>
  )
}
