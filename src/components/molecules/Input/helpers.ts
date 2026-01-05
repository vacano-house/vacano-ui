import { INPUT_SIZE_PROPS, INPUT_VARIANT_PROPS } from './constants'
import { InputVariant } from './types'
import { VacanoComponentSize } from '../../../lib'

export const getInputVariantProps = (variant: InputVariant) => {
  return INPUT_VARIANT_PROPS[variant] ?? INPUT_VARIANT_PROPS['normal']
}

export const getInputSizeProps = (size: VacanoComponentSize) => {
  return INPUT_SIZE_PROPS[size] ?? INPUT_SIZE_PROPS['default']
}
