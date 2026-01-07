import { SelectVariant } from './types'
import { alpha, COLORS, VacanoComponentSize, VacanoInteractiveElementState } from '../../lib'

export const OPTION_HEIGHT = 40
export const DROPDOWN_PADDING = 4

export const SELECT_SIZE_PROPS: Record<
  VacanoComponentSize,
  {
    height: string
    padding: string
    radius: string
  }
> = {
  compact: {
    height: '32px',
    padding: '0 10px',
    radius: '14px',
  },
  default: {
    height: '40px',
    padding: '0 14px',
    radius: '16px',
  },
}

export const SELECT_VARIANT_PROPS: Record<
  SelectVariant,
  {
    border: VacanoInteractiveElementState
    background: VacanoInteractiveElementState
    color: VacanoInteractiveElementState
    placeholder: string
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
    placeholder: alpha(COLORS['black'], 40),
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
    placeholder: alpha(COLORS['red'], 40),
    focus: alpha(COLORS['red'], 30),
  },
}
