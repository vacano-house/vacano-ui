import { DatePickerVariant } from './types'
import { alpha, COLORS, VacanoComponentSize, VacanoInteractiveElementState } from '../../lib'

export const DATE_PICKER_SIZE_PROPS: Record<
  VacanoComponentSize,
  {
    height: string
    padding: string
    radius: string
    iconSize: number
  }
> = {
  compact: {
    height: '32px',
    padding: '0 10px',
    radius: '14px',
    iconSize: 16,
  },
  default: {
    height: '40px',
    padding: '0 14px',
    radius: '16px',
    iconSize: 20,
  },
}

export const DATE_PICKER_VARIANT_PROPS: Record<
  DatePickerVariant,
  {
    border: VacanoInteractiveElementState
    background: VacanoInteractiveElementState
    color: VacanoInteractiveElementState
    placeholder: VacanoInteractiveElementState
    focus: string
  }
> = {
  normal: {
    background: {
      static: alpha(COLORS['black'], 2),
      disabled: alpha(COLORS['black'], 10),
    },
    border: {
      static: alpha(COLORS['black'], 60),
      disabled: alpha(COLORS['black'], 10),
    },
    color: {
      static: COLORS['black'],
      disabled: alpha(COLORS['black'], 65),
    },
    placeholder: {
      static: alpha(COLORS['black'], 40),
      disabled: alpha(COLORS['black'], 65),
    },
    focus: alpha(COLORS['iron-grey'], 30),
  },
  error: {
    background: {
      static: alpha(COLORS['red'], 2),
      disabled: alpha(COLORS['red'], 10),
    },
    border: {
      static: alpha(COLORS['red'], 60),
      disabled: alpha(COLORS['red'], 10),
    },
    color: {
      static: COLORS['red'],
      disabled: alpha(COLORS['red'], 65),
    },
    placeholder: {
      static: alpha(COLORS['red'], 40),
      disabled: alpha(COLORS['red'], 65),
    },
    focus: alpha(COLORS['red'], 30),
  },
}

export const CALENDAR_CELL_SIZE = 36
export const CALENDAR_GAP = 2
export const CALENDAR_PADDING = 12
