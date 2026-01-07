import { VacanoComponentProps, VacanoComponentSize } from '../../lib'

export type DatePickerMode = 'date' | 'month' | 'year'

export type DatePickerVariant = 'normal' | 'error'

export type DatePickerClassNames = {
  trigger?: string
  calendar?: string
  header?: string
  grid?: string
  cell?: string
}

export type DatePickerProps = VacanoComponentProps<HTMLDivElement, DatePickerClassNames> & {
  /** Selected date value */
  value?: Date | null
  /** Callback when date changes */
  onChange?: (date: Date | null) => void
  /** Selection mode */
  mode?: DatePickerMode
  /** Display format using Go-style date formatting (e.g., "02.01.2006", "January 2006") */
  displayFormat?: string
  /** Placeholder text when no date selected */
  placeholder?: string
  /** Locale for month/weekday names (e.g., "en-US", "ru", "de") */
  locale?: string
  /** First day of week: 0 = Sunday, 1 = Monday */
  weekStartsOn?: 0 | 1
  /** Minimum selectable date */
  minDate?: Date
  /** Maximum selectable date */
  maxDate?: Date
  /** Input size variant */
  size?: VacanoComponentSize
  /** Input style variant */
  variant?: DatePickerVariant
  /** Whether the picker is disabled */
  disabled?: boolean
  /** Full width mode */
  fullWidth?: boolean
  /** Label text */
  label?: string
  /** Portal render node for dropdown (for overflow hidden containers) */
  portalRenderNode?: HTMLElement | null
  /** Controlled open state */
  open?: boolean
  /** Callback when dropdown opens */
  onOpen?: () => void
  /** Callback when dropdown closes */
  onClose?: () => void
}

export type CalendarView = 'days' | 'months' | 'years'
