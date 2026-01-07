import { CheckboxVariant } from './types'
import { alpha, COLORS } from '../../lib'

export const CHECKBOX_VARIANT_PROPS: Record<
  CheckboxVariant,
  {
    box: {
      border: string
      borderChecked: string
      background: string
      backgroundChecked: string
      focusShadow: string
    }
    label: string
    icon: string
  }
> = {
  normal: {
    box: {
      border: alpha(COLORS['iron-grey'], 30),
      borderChecked: COLORS['iron-grey'],
      background: COLORS['white'],
      backgroundChecked: COLORS['black'],
      focusShadow: alpha(COLORS['iron-grey'], 30),
    },
    label: COLORS['black'],
    icon: COLORS['white'],
  },
  error: {
    box: {
      border: COLORS['red'],
      borderChecked: COLORS['red'],
      background: COLORS['white'],
      backgroundChecked: COLORS['red'],
      focusShadow: alpha(COLORS['red'], 30),
    },
    label: COLORS['red'],
    icon: COLORS['white'],
  },
}
