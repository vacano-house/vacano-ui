import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type ProgressClassNames = {
  track?: string
  fill?: string
}

export type ProgressProps = VacanoComponentProps<HTMLDivElement, ProgressClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    value: number
    animated?: boolean
  }
