import type { HTMLAttributes, ReactNode } from 'react'

export type DropdownPlacement = 'top' | 'bottom'
export type DropdownAlign = 'start' | 'end'

export type DropdownClassnames = {
  container?: string
  trigger?: string
  content?: string
}

export type StyledDropdownContainerProps = {
  $fullWidth?: boolean
}

export type StyledDropdownTriggerProps = {
  $fullWidth?: boolean
}

export type StyledDropdownContentProps = {
  $isOpen: boolean
}

export type DropdownProps = Omit<HTMLAttributes<HTMLDivElement>, 'children'> & {
  trigger: ReactNode
  children: ReactNode
  placement?: DropdownPlacement
  align?: DropdownAlign
  offset?: number
  open?: boolean
  onOpenChange?: (open: boolean) => void
  portalRenderNode?: HTMLElement | null
  classnames?: DropdownClassnames
  fullWidth?: boolean
  'data-test-id'?: string
}
