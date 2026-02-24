import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type TimelineItem = {
  title: ReactNode
  description?: ReactNode
  content?: ReactNode
  actions?: ReactNode
}

export type TimelineClassNames = {
  item?: string
  dot?: string
  line?: string
  content?: string
  title?: string
  description?: string
  body?: string
  actions?: string
}

export type TimelineProps = VacanoComponentProps<HTMLDivElement, TimelineClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    items: TimelineItem[]
  }
