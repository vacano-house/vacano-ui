import { SingleSelectVariant } from './types'
import { alpha, COLORS } from '../../../lib'

export const SINGLE_SELECT_OPTION_HEIGHT = 40

export const SINGLE_SELECT_PROPS = {
  dropdown: {
    background: COLORS['white'],
    border: alpha(COLORS['black'], 10),
    shadow: `0 4px 16px ${alpha(COLORS['black'], 15)}`,
  },
}

export const SINGLE_SELECT_VARIANT_PROPS: Record<
  SingleSelectVariant,
  {
    border: string
    borderFocused: string
    background: string
    placeholder: string
    value: string
    focusRing: string
  }
> = {
  normal: {
    border: alpha(COLORS['black'], 60),
    borderFocused: COLORS['black'],
    background: alpha(COLORS['black'], 2),
    placeholder: alpha(COLORS['black'], 40),
    value: COLORS['black'],
    focusRing: alpha(COLORS['black'], 20),
  },
  error: {
    border: alpha(COLORS['red'], 60),
    borderFocused: COLORS['red'],
    background: alpha(COLORS['red'], 2),
    placeholder: alpha(COLORS['red'], 40),
    value: COLORS['red'],
    focusRing: alpha(COLORS['red'], 20),
  },
}
