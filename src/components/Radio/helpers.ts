import { RADIO_VARIANT_PROPS } from './constants'
import { RadioVariant } from './types'

export const getRadioVariantProps = (variant: RadioVariant) => {
  return RADIO_VARIANT_PROPS[variant] ?? RADIO_VARIANT_PROPS['normal']
}
