import { BREAKPOINTS } from '../constants'

type Breakpoint = keyof typeof BREAKPOINTS

export const mediaUp = (bp: Breakpoint) => {
  return `@media (min-width: ${BREAKPOINTS[bp]}px)`
}

export const mediaDown = (bp: Breakpoint) => {
  return `@media (max-width: ${BREAKPOINTS[bp] - 1}px)`
}

export const mediaBetween = (min: Breakpoint, max: Breakpoint) => {
  return `@media (min-width: ${BREAKPOINTS[min]}px) and (max-width: ${BREAKPOINTS[max] - 1}px)`
}
