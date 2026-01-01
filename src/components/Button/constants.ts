import { COLORS } from '../../constants'
import { VacanoComponentSize, VacanoInteractiveElementState } from '../../types'
import { ColorUtils } from '../../utils/colors'
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
      hover: ColorUtils.alpha(COLORS['steel-blue'], 90),
      active: ColorUtils.alpha(COLORS['steel-blue'], 80),
      disabled: ColorUtils.alpha(COLORS['steel-blue'], 50),
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
      hover: ColorUtils.alpha(COLORS['black'], 90),
      active: ColorUtils.alpha(COLORS['black'], 80),
      disabled: ColorUtils.alpha(COLORS['black'], 50),
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
      hover: ColorUtils.alpha(COLORS['red'], 90),
      active: ColorUtils.alpha(COLORS['red'], 80),
      disabled: ColorUtils.alpha(COLORS['red'], 50),
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
      static: ColorUtils.alpha(COLORS['iron-grey'], 5),
      hover: ColorUtils.alpha(COLORS['iron-grey'], 10),
      active: ColorUtils.alpha(COLORS['iron-grey'], 13),
      disabled: ColorUtils.alpha(COLORS['iron-grey'], 5),
    },
    color: {
      static: COLORS['black'],
      hover: COLORS['black'],
      active: COLORS['black'],
      disabled: ColorUtils.alpha(COLORS['black'], 30),
    },
  },
}
