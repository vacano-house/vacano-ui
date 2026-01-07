import { VacanoComponentProps } from '../../lib'

export type RadioGroupOption = {
  label: string
  value: string
}

export type RadioGroupClassNames = {
  label?: string
  options?: string
  radio?: string
}

export type RadioGroupProps = VacanoComponentProps<HTMLDivElement, RadioGroupClassNames> & {
  options: RadioGroupOption[]
  value: string | null
  onChange: (value: string) => void
  label?: string
  name?: string
  disabled?: boolean
}
