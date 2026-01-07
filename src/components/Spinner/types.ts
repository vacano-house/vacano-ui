import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type SpinnerSize = 'xs' | 'sm' | 'md' | 'lg'

export type SpinnerClassNames = Record<string, never>

export type SpinnerProps = VacanoComponentProps<HTMLDivElement, SpinnerClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'children'> & {
    size?: SpinnerSize
    'aria-label'?: string
  }
