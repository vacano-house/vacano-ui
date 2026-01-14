import { OTP_CODE_SIZE_PROPS, OTP_CODE_VARIANT_PROPS } from './constants'
import { OtpCodeVariant } from './types'
import { VacanoComponentSize } from '../../lib'

export const getOtpCodeSizeProps = (size: VacanoComponentSize) => {
  return OTP_CODE_SIZE_PROPS[size] ?? OTP_CODE_SIZE_PROPS['default']
}

export const getOtpCodeVariantProps = (variant: OtpCodeVariant) => {
  return OTP_CODE_VARIANT_PROPS[variant] ?? OTP_CODE_VARIANT_PROPS['normal']
}
