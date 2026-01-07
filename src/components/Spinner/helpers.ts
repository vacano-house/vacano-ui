import { SPINNER_SIZE_PROPS } from './constants'
import { SpinnerSize } from './types'

export const getSpinnerSizeProps = (size: SpinnerSize) => {
  return SPINNER_SIZE_PROPS[size] ?? SPINNER_SIZE_PROPS['md']
}
