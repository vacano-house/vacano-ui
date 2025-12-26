import { DEFAULT_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const CircleParkingOff = ({
  className,
  size = DEFAULT_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('circle-parking-off', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12.656 7H13a3 3 0 0 1 2.984 3.307" />
      <path d="M13 13H9" />
      <path d="M19.071 19.071A1 1 0 0 1 4.93 4.93" />
      <path d="m2 2 20 20" />
      <path d="M8.357 2.687a10 10 0 0 1 12.956 12.956" />
      <path d="M9 17V9" />
    </svg>
  )
}
