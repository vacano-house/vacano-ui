import type { HTMLAttributes } from 'react'

import { VacanoComponentProps } from '../../../lib'

export type MultiValueVariant = 'normal' | 'error'

export type MultiValueItem = {
  value: string
  label: string
  deletable?: boolean
}

export type MultiValueClassNames = {
  label?: string
  chips?: string
  chip?: string
  more?: string
}

export type MultiValueProps = VacanoComponentProps<HTMLDivElement, MultiValueClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> & {
    items: MultiValueItem[]
    onChange?: (items: MultiValueItem[]) => void
    count?: number
    disabled?: boolean
    label?: string
    variant?: MultiValueVariant
  }
