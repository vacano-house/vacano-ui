import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type StatClassNames = {
  value?: string
  label?: string
}

export type StatProps = VacanoComponentProps<HTMLSpanElement, StatClassNames> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    value: ReactNode
    label: string
  }
