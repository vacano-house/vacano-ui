import type { RadioVariant } from '../Radio'
import { VacanoComponentProps } from '../../lib'

export type RadioGroupOption<T extends string = string> = {
  label: string
  value: T
}

export type RadioGroupClassNames = {
  label?: string
  options?: string
  radio?: string
}

export type RadioGroupProps<T extends string = string> = VacanoComponentProps<
  HTMLDivElement,
  RadioGroupClassNames
> & {
  options: RadioGroupOption<T>[]
  value: T | null
  onChange: (value: T) => void
  label?: string
  name?: string
  disabled?: boolean
  variant?: RadioVariant
}
