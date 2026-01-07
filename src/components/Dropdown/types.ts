import type { ReactElement, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type DropdownAlign = 'left' | 'right'

export type DropdownPosition = 'top' | 'bottom'

export type DropdownClassNames = {
  trigger?: string
  content?: string
}

export type DropdownProps = VacanoComponentProps<HTMLDivElement, DropdownClassNames> & {
  align?: DropdownAlign
  children?: ReactNode
  onClose?: () => void
  onOpen?: () => void
  open?: boolean
  portalRenderNode?: HTMLElement | null
  trigger: ReactElement
}
