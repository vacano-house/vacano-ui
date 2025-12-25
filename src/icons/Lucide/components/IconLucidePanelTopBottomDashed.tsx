import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucidePanelTopBottomDashed = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('panel-top-bottom-dashed', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 15h1" />
      <path d="M14 9h1" />
      <path d="M19 15h2" />
      <path d="M19 9h2" />
      <path d="M3 15h2" />
      <path d="M3 9h2" />
      <path d="M9 15h1" />
      <path d="M9 9h1" />
      <rect x="3" y="3" width="18" height="18" rx="2" />
    </svg>
  )
}
