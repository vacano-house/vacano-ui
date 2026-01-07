import { CHECKBOX_CARD_VARIANT_PROPS } from './constants'
import { CheckboxCardVariant } from './types'

export const getCheckboxCardVariantProps = (variant: CheckboxCardVariant) => {
  return CHECKBOX_CARD_VARIANT_PROPS[variant] ?? CHECKBOX_CARD_VARIANT_PROPS['normal']
}
