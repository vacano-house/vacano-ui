import { ButtonVariant } from './types'
import { alpha, COLORS, VacanoComponentSize, VacanoInteractiveElementState } from '../../../lib'

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
  {
    color: VacanoInteractiveElementState
    background: VacanoInteractiveElementState
    borderColor: VacanoInteractiveElementState
  }
> = {
  normal: {
    background: {
      static: COLORS['steel-blue'],
      hover: alpha(COLORS['steel-blue'], 90),
      active: alpha(COLORS['steel-blue'], 80),
      disabled: alpha(COLORS['steel-blue'], 50),
    },
    color: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: COLORS['white'],
    },
    borderColor: {
      static: 'transparent',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
    },
  },
  system: {
    background: {
      static: COLORS['black'],
      hover: alpha(COLORS['black'], 90),
      active: alpha(COLORS['black'], 80),
      disabled: alpha(COLORS['black'], 50),
    },
    color: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: COLORS['white'],
    },
    borderColor: {
      static: 'transparent',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
    },
  },
  danger: {
    background: {
      static: COLORS['red'],
      hover: alpha(COLORS['red'], 90),
      active: alpha(COLORS['red'], 80),
      disabled: alpha(COLORS['red'], 50),
    },
    color: {
      static: COLORS['white'],
      hover: COLORS['white'],
      active: COLORS['white'],
      disabled: COLORS['white'],
    },
    borderColor: {
      static: 'transparent',
      hover: 'transparent',
      active: 'transparent',
      disabled: 'transparent',
    },
  },
  transparent: {
    background: {
      static: alpha(COLORS['iron-grey'], 1),
      hover: alpha(COLORS['iron-grey'], 5),
      active: alpha(COLORS['iron-grey'], 10),
      disabled: alpha(COLORS['iron-grey'], 5),
    },
    color: {
      static: COLORS['black'],
      hover: COLORS['black'],
      active: COLORS['black'],
      disabled: alpha(COLORS['black'], 30),
    },
    borderColor: {
      static: alpha(COLORS['iron-grey'], 20),
      hover: alpha(COLORS['iron-grey'], 20),
      active: alpha(COLORS['iron-grey'], 20),
      disabled: alpha(COLORS['iron-grey'], 10),
    },
  },
}
