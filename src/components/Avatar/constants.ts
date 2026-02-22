import { AvatarColor, AvatarRadius, AvatarSize } from './types'
import { COLORS } from '../../lib'

export const AVATAR_SIZES: Record<AvatarSize, number> = {
  sm: 32,
  md: 40,
  lg: 56,
}

export const AVATAR_FONT_SIZES: Record<AvatarSize, number> = {
  sm: 12,
  md: 14,
  lg: 20,
}

export const AVATAR_ICON_SIZES: Record<AvatarSize, number> = {
  sm: 18,
  md: 22,
  lg: 30,
}

export const AVATAR_RADIUS: Record<AvatarRadius, string> = {
  sm: '6px',
  md: '10px',
  lg: '14px',
  full: '50%',
}

export const AVATAR_COLORS: Record<
  AvatarColor,
  { background: string; color: string; border: string }
> = {
  default: { background: COLORS.gray, color: COLORS.black, border: COLORS.gray },
  primary: {
    background: COLORS['baltic-blue'],
    color: COLORS.white,
    border: COLORS['baltic-blue'],
  },
  success: { background: COLORS.green, color: COLORS.white, border: COLORS.green },
  warning: { background: COLORS.yellow, color: COLORS.black, border: COLORS.yellow },
  danger: { background: COLORS.red, color: COLORS.white, border: COLORS.red },
}
