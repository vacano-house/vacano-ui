import { TOGGLE_CARD_VARIANT_PROPS } from './constants'
import { ToggleCardVariant } from './types'

export const getToggleCardVariantProps = (variant: ToggleCardVariant) => {
  return TOGGLE_CARD_VARIANT_PROPS[variant] ?? TOGGLE_CARD_VARIANT_PROPS['normal']
}
