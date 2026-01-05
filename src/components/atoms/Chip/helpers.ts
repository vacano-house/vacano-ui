import { CHIP_VARIANT_PROPS } from './constants'
import { ChipVariant } from './types'

export const getChipVariantProps = (variant: ChipVariant) => {
  return CHIP_VARIANT_PROPS[variant] ?? CHIP_VARIANT_PROPS['gray']
}
