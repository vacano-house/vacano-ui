import { COLORS } from '../../../constants'
import { Colors } from '../../../lib/utils'
import { VacanoComponentSize, VacanoInteractiveElementState } from '../../../types'
import { ButtonVariant } from './types'

export const BUTTON_SIZE_PROPS: Record<
  VacanoComponentSize,
  {
    height: string
    padding: string
    radius: string
    iconSize: string
  }
> = {
  compact: {
    height: '32px',
    padding: '0 8px',
    radius: '12px',
    iconSize: '16px',
  },
  default: {
    height: '40px',
    padding: '0 12px',
    radius: '16px',
    iconSize: '20px',
  },
}

export const BUTTON_VARIANT_PROPS: Record<
  ButtonVariant,
  { color: VacanoInteractiveElementState; background: VacanoInteractiveElementState }
> = {
  normal: {
    background: {
      static: COLORS['steel-blue'],
      hover: Colors.alpha(COLORS['steel-blue'], 90),
      active: Colors.alpha(COLORS['steel-blue'], 80),
      disabled: Colors.alpha(COLORS['steel-blue'], 50),
    },
    color: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: COLORS['white'],
    },
  },
  system: {
    background: {
      static: COLORS['black'],
      hover: Colors.alpha(COLORS['black'], 90),
      active: Colors.alpha(COLORS['black'], 80),
      disabled: Colors.alpha(COLORS['black'], 50),
    },
    color: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: COLORS['white'],
    },
  },
  danger: {
    background: {
      static: COLORS['red'],
      hover: Colors.alpha(COLORS['red'], 90),
      active: Colors.alpha(COLORS['red'], 80),
      disabled: Colors.alpha(COLORS['red'], 50),
    },
    color: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: COLORS['white'],
    },
  },
  transparent: {
    background: {
      static: Colors.alpha(COLORS['iron-grey'], 5),
      hover: Colors.alpha(COLORS['iron-grey'], 10),
      active: Colors.alpha(COLORS['iron-grey'], 13),
      disabled: Colors.alpha(COLORS['iron-grey'], 5),
    },
    color: {
      static: COLORS['black'],
      hover: COLORS['black'],
      active: COLORS['black'],
      disabled: Colors.alpha(COLORS['black'], 30),
    },
  },
}
