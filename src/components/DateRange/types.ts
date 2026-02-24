import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type DateRangeClassNames = {
  hash?: string
  from?: string
  separator?: string
  to?: string
}

export type DateRangeProps = VacanoComponentProps<HTMLSpanElement, DateRangeClassNames> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    from: Date
    to?: Date
    locale?: string
    presentLabel?: string
  }
