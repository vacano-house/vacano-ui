import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type ChipVariant = 'gray' | 'red' | 'blue' | 'black'

export type ChipClassNames = {
  delete?: string
}

export type ChipProps = VacanoComponentProps<HTMLSpanElement, ChipClassNames> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    children: ReactNode
    variant?: ChipVariant
    deletable?: boolean
    onDelete?: () => void
  }
