import { CHECKBOX_VARIANT_PROPS } from './constants'
import { CheckboxVariant } from './types'

export const getCheckboxVariantProps = (variant: CheckboxVariant) => {
  return CHECKBOX_VARIANT_PROPS[variant] ?? CHECKBOX_VARIANT_PROPS['normal']
}
