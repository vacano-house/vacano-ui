import { type ReactNode } from 'react'

import { type VacanoComponentProps } from '../../lib'

export type EmptyStateClassNames = {
  icon?: string
  title?: string
  description?: string
  actions?: string
}

export type EmptyStateProps = VacanoComponentProps<HTMLDivElement, EmptyStateClassNames> & {
  icon?: ReactNode
  title: ReactNode
  description?: ReactNode
  actions?: ReactNode
}
