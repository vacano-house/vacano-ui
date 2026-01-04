import { SINGLE_SELECT_VARIANT_PROPS } from './constants'
import { SingleSelectVariant } from './types'

export const getSingleSelectVariantProps = (variant: SingleSelectVariant) => {
  return SINGLE_SELECT_VARIANT_PROPS[variant] ?? SINGLE_SELECT_VARIANT_PROPS['normal']
}
