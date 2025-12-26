import { Player } from '@lordicon/react'

import { classNameGetter } from '../../lib/utils'
import {
  DEFAULT_ANIMATED_ICON_PROP_DISABLE_ON_HOVER,
  DEFAULT_ANIMATED_ICON_PROP_SIZE,
} from './constants'
import { StyledAnimatedIconContainer } from './styled'
import type { AnimatedIconProps } from './types'
import { useAnimatedIcon } from './useAnimatedIcon'

const css = classNameGetter('animated-icon')

export const AnimatedIcon = ({
  className,
  classnames,
  color,
  disableOnHover = DEFAULT_ANIMATED_ICON_PROP_DISABLE_ON_HOVER,
  name,
  ref,
  size = DEFAULT_ANIMATED_ICON_PROP_SIZE,
  ...rest
}: AnimatedIconProps) => {
  const { icon, playerRef, handleMouseEnter } = useAnimatedIcon(name, disableOnHover, ref)

  return (
    <StyledAnimatedIconContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      onMouseEnter={handleMouseEnter}
    >
      <Player ref={playerRef} icon={icon} size={size} colorize={color} />
    </StyledAnimatedIconContainer>
  )
}
