import { RadioCardVariant } from './types'
import { alpha, COLORS, VacanoInteractiveElementState } from '../../lib'

type RadioCardVariantProps = {
  border: VacanoInteractiveElementState
  borderChecked: string
  background: VacanoInteractiveElementState
  backgroundChecked: string
  focusRing: string
  label: VacanoInteractiveElementState
  description: VacanoInteractiveElementState
}

export const RADIO_CARD_VARIANT_PROPS: Record<RadioCardVariant, RadioCardVariantProps> = {
  normal: {
    border: {
      static: alpha(COLORS['black'], 20),
      hover: alpha(COLORS['black'], 40),
      active: alpha(COLORS['black'], 40),
      disabled: alpha(COLORS['black'], 10),
    },
    borderChecked: COLORS['black'],
    background: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: alpha(COLORS['black'], 5),
    },
    backgroundChecked: alpha(COLORS['black'], 5),
    focusRing: alpha(COLORS['black'], 20),
    label: {
      static: COLORS['black'],
      hover: COLORS['black'],
      active: COLORS['black'],
      disabled: alpha(COLORS['black'], 40),
    },
    description: {
      static: alpha(COLORS['black'], 60),
      hover: alpha(COLORS['black'], 60),
      active: alpha(COLORS['black'], 60),
      disabled: alpha(COLORS['black'], 30),
    },
  },
  error: {
    border: {
      static: COLORS['red'],
      hover: COLORS['red'],
      active: COLORS['red'],
      disabled: alpha(COLORS['red'], 30),
    },
    borderChecked: COLORS['red'],
    background: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: alpha(COLORS['red'], 5),
    },
    backgroundChecked: alpha(COLORS['red'], 5),
    focusRing: alpha(COLORS['red'], 20),
    label: {
      static: COLORS['red'],
      hover: COLORS['red'],
      active: COLORS['red'],
      disabled: alpha(COLORS['red'], 40),
    },
    description: {
      static: alpha(COLORS['red'], 70),
      hover: alpha(COLORS['red'], 70),
      active: alpha(COLORS['red'], 70),
      disabled: alpha(COLORS['red'], 40),
    },
  },
}
