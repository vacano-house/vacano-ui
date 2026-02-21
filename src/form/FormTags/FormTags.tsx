import { Controller, type FieldValues } from 'react-hook-form'

import type { FormTagsProps } from './types'
import { Tags, type TagsVariant } from '../../components'

export const FormTags = <T extends FieldValues = FieldValues>({
  control,
  name,
  ...props
}: FormTagsProps<T>) => {
  return (
    <Controller<T>
      name={name}
      control={control}
      render={({ formState, field }) => {
        const message = formState.errors[name]?.message as string
        const variant: TagsVariant = message ? 'error' : 'normal'

        return (
          <Tags
            {...props}
            value={field.value ?? []}
            onChange={field.onChange}
            variant={variant}
            message={message}
          />
        )
      }}
    />
  )
}
