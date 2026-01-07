import { VacanoComponentProps } from '../../lib'

export type TabItem = {
  value: string
  label: string
  disabled?: boolean
}

export type TabsClassNames = {
  tab?: string
}

export type TabsProps = VacanoComponentProps<HTMLDivElement, TabsClassNames> & {
  value: string
  tabs: TabItem[]
  onChange: (value: string) => void
}
