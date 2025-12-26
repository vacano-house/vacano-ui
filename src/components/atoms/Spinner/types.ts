import type { HTMLAttributes } from 'react'

export type SpinnerClassnames = {
  container?: string
}

export type StyledSpinnerContainerProps = {
  $size: number
}

export type SpinnerProps = HTMLAttributes<HTMLSpanElement> & {
  'aria-label'?: string
  classnames?: SpinnerClassnames
  'data-test-id'?: string
  size?: number
}
