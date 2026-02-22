import { Children, cloneElement, isValidElement } from 'react'

import { StyledCount, StyledGroup } from './styled'
import { AvatarGroupProps } from './types'
import { AvatarProps } from '../Avatar/types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('avatar-group')

export const AvatarGroup = ({
  children,
  className,
  classnames,
  max = 5,
  ref,
  size = 'md',
  ...rest
}: AvatarGroupProps) => {
  const avatars = Children.toArray(children).filter(isValidElement)
  const visible = avatars.slice(0, max)
  const remaining = avatars.length - max

  return (
    <StyledGroup {...rest} ref={ref} className={css('container', className)} $size={size}>
      {visible.map((child) =>
        isValidElement<AvatarProps>(child) ? cloneElement(child, { size }) : child,
      )}
      {remaining > 0 && (
        <StyledCount className={css('count', classnames?.count)} $size={size}>
          +{remaining}
        </StyledCount>
      )}
    </StyledGroup>
  )
}
