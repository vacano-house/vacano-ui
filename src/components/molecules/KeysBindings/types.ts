import { KeyboardEventKey, VacanoComponentProps } from '../../../types'

export type KeysBindingsClassNames = {
  item?: string
}

export type KeysBindingsVariant = 'dark' | 'light'

export type KeysBindingsProps = VacanoComponentProps<HTMLDivElement, KeysBindingsClassNames> & {
  keys?: KeyboardEventKey[]
  variant?: KeysBindingsVariant
}
