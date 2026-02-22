import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type HashtagClassNames = {
  hash?: string
  label?: string
}

export type HashtagProps = VacanoComponentProps<HTMLSpanElement, HashtagClassNames> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    children: ReactNode
    href?: string
  }
