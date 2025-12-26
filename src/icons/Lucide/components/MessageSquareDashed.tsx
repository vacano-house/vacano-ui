import { DEFAULT_LUCIDE_PROP_SIZE } from '../constants'
import { css } from '../helpers'
import { IconLucideProps } from '../types'

export const MessageSquareDashed = ({
  className,
  size = DEFAULT_LUCIDE_PROP_SIZE,
  ...rest
}: IconLucideProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={css('message-square-dashed', className)}
      {...rest}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 19h.01" />
      <path d="M12 3h.01" />
      <path d="M16 19h.01" />
      <path d="M16 3h.01" />
      <path d="M2 13h.01" />
      <path d="M2 17v4.286a.71.71 0 0 0 1.212.502l2.202-2.202A2 2 0 0 1 6.828 19H8" />
      <path d="M2 5a2 2 0 0 1 2-2" />
      <path d="M2 9h.01" />
      <path d="M20 3a2 2 0 0 1 2 2" />
      <path d="M22 13h.01" />
      <path d="M22 17a2 2 0 0 1-2 2" />
      <path d="M22 9h.01" />
      <path d="M8 3h.01" />
    </svg>
  )
}
