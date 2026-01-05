import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right'
export type TooltipVariant = 'dark' | 'light' | 'success' | 'warning' | 'danger'

export type TooltipClassNames = {
  content?: string
}

export type TooltipProps = VacanoComponentProps<HTMLDivElement, TooltipClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'content'> & {
    children: ReactNode
    content: ReactNode
    delay?: number
    placement?: TooltipPlacement
    variant?: TooltipVariant
  }
