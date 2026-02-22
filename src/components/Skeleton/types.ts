import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../lib'

export type SkeletonAnimation = 'pulse' | 'wave' | 'none'

export type SkeletonRadius = 'none' | 'sm' | 'md' | 'lg' | 'full'

export type SkeletonProps = VacanoComponentProps<HTMLDivElement> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className'> & {
    width?: number | string
    height?: number | string
    radius?: SkeletonRadius
    animation?: SkeletonAnimation
    circle?: boolean
  }
