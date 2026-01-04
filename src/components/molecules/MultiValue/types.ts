import type { HTMLAttributes } from 'react'

import { VacanoComponentProps, VacanoValueItem } from '../../../lib'

export type MultiValueVariant = 'normal' | 'error'

export type MultiValueItem = VacanoValueItem

export type MultiValueClassNames = {
  label?: string
  chips?: string
  chip?: string
  more?: string
  placeholder?: string
}

export type MultiValueProps = VacanoComponentProps<HTMLDivElement, MultiValueClassNames> &
  Omit<HTMLAttributes<HTMLDivElement>, 'className' | 'onChange'> & {
    items: MultiValueItem[]
    onChange?: (items: MultiValueItem[]) => void
    count?: number
    disabled?: boolean
    focused?: boolean
    label?: string
    placeholder?: string
    variant?: MultiValueVariant
  }
