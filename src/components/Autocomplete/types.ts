import type { InputHTMLAttributes } from 'react'

import { VacanoComponentProps, VacanoComponentSize } from '../../lib'

export type AutocompleteClassNames = {
  input?: string
  label?: string
  dropdown?: string
  item?: string
}

export type AutocompleteVariant = 'normal' | 'error'

export type AutocompleteSuggestion = {
  id: string
  value: string
  image_url: string | null
}

export type AutocompleteValue = {
  value: string
  image_url: string | null
}

export type AutocompleteProps = VacanoComponentProps<HTMLInputElement, AutocompleteClassNames> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'className' | 'size' | 'onChange' | 'value'> & {
    value?: AutocompleteValue
    onChange?: (value: AutocompleteValue) => void
    onSearch: (query: string) => Promise<AutocompleteSuggestion[]>
    debounceMs?: number
    minChars?: number
    fullWidth?: boolean
    label?: string
    size?: VacanoComponentSize
    variant?: AutocompleteVariant
    noResultsMessage?: string
  }
