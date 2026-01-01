import { VacanoComponentProps } from '../../../types'

export type KeySymbolVariant = 'dark' | 'light'

export type KeySymbolProps = VacanoComponentProps<HTMLSpanElement> & {
  symbol: string
  variant?: KeySymbolVariant
}
