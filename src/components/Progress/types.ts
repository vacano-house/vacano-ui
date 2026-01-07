import { VacanoComponentProps, VacanoComponentSize } from '../../lib'

export type ProgressClassNames = {
  track?: string
  bar?: string
}

export type ProgressProps = VacanoComponentProps<HTMLDivElement, ProgressClassNames> & {
  /** Progress value from 0 to 100 */
  value: number
  /** Size variant */
  size?: VacanoComponentSize
}
