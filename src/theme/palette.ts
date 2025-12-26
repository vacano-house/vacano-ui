export const colors = {
  // base
  black: '#000000',
  white: '#ffffff',
  onyx: '#111111',
  carbonBlack: '#232323',
  graphite: '#343434',
  slate: '#484848',
  ash: '#6b6b6b',
  silver: '#8c8c8c',
  mist: '#b0b0b0',
  cloud: '#d4d4d4',
  snow: '#ebebeb',
  icyBlue: '#bde0fe',

  // status - solid
  blue: '#0050c8',
  green: '#009650',
  amber: '#b48200',
  red: '#c83232',
  grey: '#646464',

  // status - background (with alpha)
  blueBg: '#0064ff1a',
  greenBg: '#00c8641a',
  amberBg: '#ffb4001a',
  redBg: '#ff50501a',
  greyBg: '#0000000d',

  // interactive (with alpha)
  hoverLight: '#00000008',
  activeLight: '#00000012',
  hoverDark: '#ffffff12',
  activeDark: '#ffffff20',

  // danger variants
  redLight: '#c8323214',
  redMedium: '#c8323228',

  // focus rings
  focusRingDark: '#00000080',
  focusRingDarkSubtle: '#00000040',
  focusRingLight: '#ffffff80',
  focusRingLightSubtle: '#ffffff40',
  focusRingDanger: '#c8323280',
} as const

export const shadows = {
  none: 'none', // no shadow
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)', // subtle
  md: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)', // default
  lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)', // elevated
  xl: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)', // modal, dropdown
  xl2: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)', // floating
  xl3: '0 25px 50px -12px rgb(0 0 0 / 0.25)', // heavy overlay
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)', // inset for inputs
} as const

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  xl2: 1536,
} as const

export const media = {
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,
  xl2: `@media (min-width: ${breakpoints.xl2}px)`,
} as const
