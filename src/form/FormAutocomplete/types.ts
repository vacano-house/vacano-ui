import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { AutocompleteProps } from '../../components'

export type FormAutocompleteProps<T extends FieldValues> = Omit<
  AutocompleteProps,
  'value' | 'onChange'
> & {
  name: FieldPath<T>
  control: Control<T>
}
