import type { Ref } from 'react'
import { useImperativeHandle, useRef } from 'react'

import type { Player } from '@lordicon/react'

import { icons } from './icons'
import type { AnimatedIconName, AnimatedIconRef } from './types'

export const useAnimatedIcon = (
  name: AnimatedIconName,
  disableOnHover: boolean,
  ref?: Ref<AnimatedIconRef>,
) => {
  const playerRef = useRef<Player>(null)

  const icon = icons[name]

  useImperativeHandle(ref, () => ({
    play: () => {
      playerRef.current?.playFromBeginning()
    },
  }))

  const handleMouseEnter = () => {
    if (!disableOnHover) {
      playerRef.current?.playFromBeginning()
    }
  }

  return {
    icon,
    playerRef,
    handleMouseEnter,
  }
}
