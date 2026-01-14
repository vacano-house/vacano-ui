import { OtpCodeVariant } from './types'
import { alpha, COLORS, VacanoComponentSize, VacanoInteractiveElementState } from '../../lib'

export const OTP_CODE_SIZE_PROPS: Record<
  VacanoComponentSize,
  {
    width: string
    height: string
    fontSize: string
    radius: string
    gap: string
  }
> = {
  compact: {
    width: '36px',
    height: '40px',
    fontSize: '16px',
    radius: '10px',
    gap: '8px',
  },
  default: {
    width: '44px',
    height: '52px',
    fontSize: '20px',
    radius: '12px',
    gap: '10px',
  },
}

export const OTP_CODE_VARIANT_PROPS: Record<
  OtpCodeVariant,
  {
    border: VacanoInteractiveElementState
    background: VacanoInteractiveElementState
    color: VacanoInteractiveElementState
    focus: string
  }
> = {
  normal: {
    background: {
      static: alpha(COLORS['black'], 2),
      disabled: alpha(COLORS['black'], 10),
    },
    border: {
      static: alpha(COLORS['black'], 60),
      disabled: alpha(COLORS['black'], 10),
    },
    color: {
      static: COLORS['black'],
      disabled: alpha(COLORS['black'], 65),
    },
    focus: alpha(COLORS['iron-grey'], 30),
  },
  error: {
    background: {
      static: alpha(COLORS['red'], 2),
      disabled: alpha(COLORS['red'], 10),
    },
    border: {
      static: alpha(COLORS['red'], 60),
      disabled: alpha(COLORS['red'], 10),
    },
    color: {
      static: COLORS['red'],
      disabled: alpha(COLORS['red'], 65),
    },
    focus: alpha(COLORS['red'], 30),
  },
}
