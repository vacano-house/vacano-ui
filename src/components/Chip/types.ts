import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type ChipVariant = 'gray' | 'red' | 'blue' | 'black'

export type ChipClassNames = {
  icon?: string
  delete?: string
  label?: string
}

export type ChipProps = VacanoComponentProps<HTMLSpanElement, ChipClassNames> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    children: ReactNode
    icon?: ReactNode
    variant?: ChipVariant
    deletable?: boolean
    onDelete?: () => void
  }
