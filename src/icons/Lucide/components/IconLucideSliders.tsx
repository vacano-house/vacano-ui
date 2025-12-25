import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideSliders = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('sliders', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 8h4" />
      <path d="M12 21v-9" />
      <path d="M12 8V3" />
      <path d="M17 16h4" />
      <path d="M19 12V3" />
      <path d="M19 21v-5" />
      <path d="M3 14h4" />
      <path d="M5 10V3" />
      <path d="M5 21v-7" />
    </svg>
  )
}
