import type { HTMLAttributes, Ref } from 'react'

import type { icons } from './icons'

export type AnimatedIconName = keyof typeof icons

export type AnimatedIconClassnames = {
  container?: string
}

export type AnimatedIconRef = {
  play: () => void
}

export type AnimatedIconProps = HTMLAttributes<HTMLDivElement> & {
  classnames?: AnimatedIconClassnames
  color?: string
  'data-test-id'?: string
  disableOnHover?: boolean
  name: AnimatedIconName
  ref?: Ref<AnimatedIconRef>
  size?: number
}
