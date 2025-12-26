import type { HTMLAttributes } from 'react'

export type LoaderClassnames = {
  container?: string
}

export type StyledLoaderContainerProps = {
  $size: number
}

export type LoaderProps = HTMLAttributes<HTMLSpanElement> & {
  'aria-label'?: string
  'data-test-id'?: string
  classnames?: LoaderClassnames
  size?: number
}
