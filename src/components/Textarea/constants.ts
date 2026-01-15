import { TextareaVariant } from './types'
import { alpha, COLORS, VacanoInteractiveElementState } from '../../lib'

export const TEXTAREA_VARIANT_PROPS: Record<
  TextareaVariant,
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
