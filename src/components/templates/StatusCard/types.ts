import type { HTMLAttributes, ReactNode } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type StatusCardTrend = 'positive' | 'negative' | 'neutral'

export type StatusCardClassNames = {
  label?: string
  value?: string
  trend?: string
}

export type StatusCardProps = VacanoComponentProps<HTMLDivElement, StatusCardClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    border?: boolean
    icon?: ReactNode
    label: string
    shadow?: boolean
    trend?: string
    trendVariant?: StatusCardTrend
    value: string
  }
