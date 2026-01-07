import { InputVariant } from './types'
import { alpha, COLORS, VacanoComponentSize, VacanoInteractiveElementState } from '../../lib'

export const INPUT_SIZE_PROPS: Record<
  VacanoComponentSize,
  {
    height: string
    padding: string
    radius: string
    prefixSize: string
  }
> = {
  compact: {
    height: '32px',
    padding: '0 10px',
    radius: '14px',
    prefixSize: '16px',
  },
  default: {
    height: '40px',
    padding: '0 14px',
    radius: '16px',
    prefixSize: '20px',
  },
}

export const INPUT_VARIANT_PROPS: Record<
  InputVariant,
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
