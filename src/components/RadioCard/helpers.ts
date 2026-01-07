import { RADIO_CARD_VARIANT_PROPS } from './constants'
import { RadioCardVariant } from './types'

export const getRadioCardVariantProps = (variant: RadioCardVariant) => {
  return RADIO_CARD_VARIANT_PROPS[variant] ?? RADIO_CARD_VARIANT_PROPS['normal']
}
