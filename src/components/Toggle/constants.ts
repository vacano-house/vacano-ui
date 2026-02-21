import { ToggleVariant } from './types'
import { alpha, COLORS } from '../../lib'

export const TOGGLE_VARIANT_PROPS: Record<
  ToggleVariant,
  {
    track: {
      background: string
      backgroundChecked: string
      border: string
      borderChecked: string
    }
    thumb: {
      background: string
      backgroundChecked: string
    }
    label: string
  }
> = {
  normal: {
    track: {
      background: alpha(COLORS['iron-grey'], 20),
      backgroundChecked: COLORS['black'],
      border: alpha(COLORS['iron-grey'], 30),
      borderChecked: COLORS['black'],
    },
    thumb: {
      background: COLORS['white'],
      backgroundChecked: COLORS['white'],
    },
    label: COLORS['black'],
  },
  error: {
    track: {
      background: alpha(COLORS['red'], 15),
      backgroundChecked: COLORS['red'],
      border: COLORS['red'],
      borderChecked: COLORS['red'],
    },
    thumb: {
      background: COLORS['white'],
      backgroundChecked: COLORS['white'],
    },
    label: COLORS['red'],
  },
}
