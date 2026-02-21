import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type DividerClassNames = {
  line?: string
  label?: string
}

export type DividerProps = VacanoComponentProps<HTMLDivElement, DividerClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> & {
    children?: string
    spacing?: number
  }
