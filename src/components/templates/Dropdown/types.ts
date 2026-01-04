import type { HTMLAttributes, ReactNode } from 'react'

export type DropdownPlacement = 'top' | 'bottom'

export type DropdownAlign = 'start' | 'end'

export type DropdownClassNames = {
  container?: string
  trigger?: string
  content?: string
}

export type DropdownProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  trigger: ReactNode
  children: ReactNode
  align?: DropdownAlign
  classnames?: DropdownClassNames
  fullWidth?: boolean
  offset?: number
  onOpenChange?: (open: boolean) => void
  open?: boolean
  placement?: DropdownPlacement
  portalRenderNode?: HTMLElement | null
  'data-test-id'?: string
}
