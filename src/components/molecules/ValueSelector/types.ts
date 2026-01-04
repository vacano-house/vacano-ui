import type { HTMLAttributes } from 'react'

import { VacanoComponentProps, VacanoValueItem } from '../../../lib'

export type ValueSelectorClassNames = {
  search?: string
  list?: string
  option?: string
}

export type ValueSelectorProps = VacanoComponentProps<HTMLDivElement, ValueSelectorClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> & {
    options: VacanoValueItem[]
    value: VacanoValueItem[]
    onChange: (value: VacanoValueItem[]) => void
    height?: number | string
    multiple?: boolean
    searchable?: boolean
  }
