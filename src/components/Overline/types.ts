import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type OverlineClassNames = {
  label?: string
  description?: string
}

export type OverlineProps = VacanoComponentProps<HTMLDivElement, OverlineClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    children: ReactNode
    description?: ReactNode
  }
