import { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type FieldMessageVariant = 'normal' | 'error' | 'success' | 'warning'

export type FieldMessageProps = VacanoComponentProps<HTMLSpanElement> &
  Omit<HTMLAttributes<HTMLSpanElement>, 'className'> & {
    children?: ReactNode
    variant?: FieldMessageVariant
  }
