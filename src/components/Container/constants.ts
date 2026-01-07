import { BREAKPOINTS } from '../../lib'

export const CONTAINER_MAX_WIDTHS: Record<keyof typeof BREAKPOINTS, string> = {
  sm: `${BREAKPOINTS.sm}px`,
  md: `${BREAKPOINTS.md}px`,
  lg: `${BREAKPOINTS.lg}px`,
  xl: `${BREAKPOINTS.xl}px`,
  '2xl': `${BREAKPOINTS['2xl']}px`,
}
