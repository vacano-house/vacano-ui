import { type ReactNode } from 'react'

import { type VacanoComponentProps } from '../../lib'

export type StepLogStatus = 'success' | 'error' | 'running' | 'pending'

export type StepLogLine = {
  line: number
  text: string
}

export type StepLogItem = {
  value: string
  title: ReactNode
  status?: StepLogStatus
  duration?: string
  lines?: StepLogLine[]
}

export type StepLogClassNames = {
  step?: string
  header?: string
  log?: string
}

export type StepLogProps = VacanoComponentProps<HTMLDivElement, StepLogClassNames> & {
  steps: StepLogItem[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
}
