import type { VacanoComponentProps } from '../../lib'

export type SplitFlapTextClassNames = Record<string, never>

export type SplitFlapTextProps = VacanoComponentProps<HTMLDivElement, SplitFlapTextClassNames> & {
  text: string
}
