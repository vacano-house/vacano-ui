import { VacanoComponentProps } from '../../lib'

export type KeySymbolVariant = 'dark' | 'light'

export type KeySymbolProps = VacanoComponentProps<HTMLSpanElement> & {
  symbol: string
  variant?: KeySymbolVariant
}
