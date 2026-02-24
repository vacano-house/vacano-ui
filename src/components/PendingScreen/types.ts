import type { VacanoComponentProps } from '../../lib'

export type PendingScreenClassNames = {
  board?: string
  description?: string
  indicator?: string
}

export type PendingScreenProps = VacanoComponentProps<HTMLDivElement, PendingScreenClassNames> & {
  description?: string
  interval?: number
  phrases?: string[]
}
