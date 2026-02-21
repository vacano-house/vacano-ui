import { TOGGLE_VARIANT_PROPS } from './constants'
import { ToggleVariant } from './types'

export const getToggleVariantProps = (variant: ToggleVariant) => {
  return TOGGLE_VARIANT_PROPS[variant] ?? TOGGLE_VARIANT_PROPS['normal']
}
