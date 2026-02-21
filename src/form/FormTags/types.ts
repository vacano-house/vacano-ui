import type { Control, FieldPath, FieldValues } from 'react-hook-form'

import type { TagsProps } from '../../components'

export type FormTagsProps<T extends FieldValues> = Omit<TagsProps, 'value' | 'onChange'> & {
  name: FieldPath<T>
  control: Control<T>
}
