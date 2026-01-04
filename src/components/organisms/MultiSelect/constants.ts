import { alpha, COLORS } from '../../../lib'

export const MULTI_SELECT_PROPS = {
  dropdown: {
    background: COLORS['white'],
    border: alpha(COLORS['black'], 10),
    shadow: `0 4px 16px ${alpha(COLORS['black'], 15)}`,
  },
}

export const MULTI_SELECT_OPTION_HEIGHT = 40
