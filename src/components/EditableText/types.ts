import type { VacanoComponentProps } from '../../lib'

export type EditableTextClassNames = {
  text?: string
  button?: string
}

export type EditableTextProps = VacanoComponentProps<HTMLDivElement, EditableTextClassNames> & {
  value: string
  onChange: (value: string) => void
  disabled?: boolean
  placeholder?: string
}
