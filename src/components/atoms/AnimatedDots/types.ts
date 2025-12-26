import type { HTMLAttributes } from 'react'

export type AnimatedDotsClassnames = {
  container?: string
}

export type StyledAnimatedDotsContainerProps = {
  $size: number
}

export type AnimatedDotsProps = HTMLAttributes<HTMLSpanElement> & {
  'aria-label'?: string
  'data-test-id'?: string
  classnames?: AnimatedDotsClassnames
  size?: number
}
