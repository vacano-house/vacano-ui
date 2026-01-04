import { alpha, COLORS } from '../../../lib'

export const VALUE_SELECTOR_PROPS = {
  option: {
    background: {
      static: 'transparent',
      hover: alpha(COLORS['black'], 5),
      focused: alpha(COLORS['black'], 8),
    },
    color: COLORS['black'],
    check: {
      static: alpha(COLORS['black'], 20),
      selected: COLORS['black'],
    },
  },
  search: {
    color: COLORS['black'],
    placeholder: alpha(COLORS['black'], 40),
  },
  border: alpha(COLORS['black'], 10),
}
