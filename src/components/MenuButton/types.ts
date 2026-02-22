import { type VacanoComponentProps, type VacanoComponentSize } from '../../lib'

export type MenuButtonClassNames = {
  line?: string
}

export type MenuButtonProps = VacanoComponentProps<HTMLButtonElement, MenuButtonClassNames> &
  Omit<React.HTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & {
    open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
    size?: VacanoComponentSize
    disabled?: boolean
  }
