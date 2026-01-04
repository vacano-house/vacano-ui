import type { HTMLAttributes, ReactNode } from 'react'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'

export type TooltipClassNames = {
  container?: string
  trigger?: string
  content?: string
}

export type TooltipProps = Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'content'> & {
  children: ReactNode
  content: ReactNode
  classnames?: TooltipClassNames
  delay?: number
  disabled?: boolean
  placement?: TooltipPlacement
  'data-test-id'?: string
}
