import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../lib'

export type TimelineItem = {
  title: string
  description?: ReactNode
  children?: ReactNode
}

export type TimelineClassNames = {
  item?: string
  dot?: string
  line?: string
  content?: string
  title?: string
  description?: string
  body?: string
}

export type TimelineProps = VacanoComponentProps<HTMLDivElement, TimelineClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    items: TimelineItem[]
  }
