import { type ReactNode } from 'react'

import { type VacanoComponentProps } from '../../lib'

export type AccordionVariant = 'outlined' | 'splitted'

export type AccordionClassNames = {
  item?: string
  trigger?: string
  content?: string
  icon?: string
}

export type AccordionItem = {
  value: string
  title: ReactNode
  content: ReactNode
  disabled?: boolean
}

export type AccordionProps = VacanoComponentProps<HTMLDivElement, AccordionClassNames> & {
  items: AccordionItem[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[]) => void
  multiple?: boolean
  variant?: AccordionVariant
}
