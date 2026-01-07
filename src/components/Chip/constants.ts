import { ChipVariant } from './types'
import { alpha, COLORS } from '../../lib'

export const CHIP_VARIANT_PROPS: Record<
  ChipVariant,
  {
    background: string
    color: string
    deleteHover: string
  }
> = {
  gray: {
    background: alpha(COLORS['iron-grey'], 10),
    color: COLORS['iron-grey'],
    deleteHover: alpha(COLORS['iron-grey'], 20),
  },
  red: {
    background: alpha(COLORS['red'], 10),
    color: COLORS['red'],
    deleteHover: alpha(COLORS['red'], 20),
  },
  blue: {
    background: alpha(COLORS['steel-blue'], 10),
    color: COLORS['steel-blue'],
    deleteHover: alpha(COLORS['steel-blue'], 20),
  },
  black: {
    background: COLORS['black'],
    color: COLORS['white'],
    deleteHover: alpha(COLORS['white'], 20),
  },
}
