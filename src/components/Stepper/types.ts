import { VacanoComponentProps } from '../../lib'

export type StepItem = {
  value: string
  label: string
}

export type StepperOrientation = 'horizontal' | 'vertical'

export type StepperClassNames = {
  step?: string
  circle?: string
  label?: string
  line?: string
}

export type StepperProps = VacanoComponentProps<HTMLDivElement, StepperClassNames> & {
  value: string
  steps: StepItem[]
  onChange?: (value: string) => void
  orientation?: StepperOrientation
}
