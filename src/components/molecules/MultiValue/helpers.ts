import { MULTI_VALUE_CHIP_VARIANT, MULTI_VALUE_VARIANT_PROPS } from './constants'
import { MultiValueVariant } from './types'

export const getMultiValueChipVariant = (variant: MultiValueVariant) => {
  return MULTI_VALUE_CHIP_VARIANT[variant] ?? MULTI_VALUE_CHIP_VARIANT['normal']
}

export const getMultiValueVariantProps = (variant: MultiValueVariant) => {
  return MULTI_VALUE_VARIANT_PROPS[variant] ?? MULTI_VALUE_VARIANT_PROPS['normal']
}
