import { RadioVariant } from './types'
import { alpha, COLORS } from '../../lib'

export const RADIO_VARIANT_PROPS: Record<
  RadioVariant,
  {
    box: {
      border: string
      borderChecked: string
      background: string
      backgroundChecked: string
      focusShadow: string
    }
    dot: string
    label: string
  }
> = {
  normal: {
    box: {
      border: alpha(COLORS['iron-grey'], 30),
      borderChecked: COLORS['iron-grey'],
      background: COLORS['white'],
      backgroundChecked: COLORS['white'],
      focusShadow: alpha(COLORS['iron-grey'], 30),
    },
    dot: COLORS['black'],
    label: COLORS['black'],
  },
  error: {
    box: {
      border: COLORS['red'],
      borderChecked: COLORS['red'],
      background: COLORS['white'],
      backgroundChecked: COLORS['white'],
      focusShadow: alpha(COLORS['red'], 30),
    },
    dot: COLORS['red'],
    label: COLORS['red'],
  },
}
