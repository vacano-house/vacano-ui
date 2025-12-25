import { DEFAULT_ICON_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const IconLucideTrainFrontTunnel = ({
  className,
  size = DEFAULT_ICON_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('train-front-tunnel', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 22V12a10 10 0 1 1 20 0v10" />
      <path d="M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8" />
      <path d="M10 15h.01" />
      <path d="M14 15h.01" />
      <path d="M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z" />
      <path d="m9 19-2 3" />
      <path d="m15 19 2 3" />
    </svg>
  )
}
