import { useState } from 'react'

import { getInitials } from './helpers'
import { StyledContainer, StyledFallback, StyledImage, StyledInitials } from './styled'
import { AvatarProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('avatar')

export const Avatar = ({
  bordered = false,
  className,
  classnames,
  color = 'default',
  disabled = false,
  icon,
  name,
  radius = 'full',
  ref,
  size = 'md',
  src,
  ...rest
}: AvatarProps) => {
  const [imageError, setImageError] = useState(false)

  const showImage = src && !imageError

  return (
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $size={size}
      $radius={radius}
      $color={color}
      $bordered={bordered}
      $disabled={disabled}
    >
      {showImage ? (
        <StyledImage
          className={css('image', classnames?.image)}
          src={src}
          alt={name || ''}
          onError={() => setImageError(true)}
        />
      ) : icon ? (
        <StyledFallback className={css('fallback', classnames?.fallback)} $size={size}>
          {icon}
        </StyledFallback>
      ) : name ? (
        <StyledInitials className={css('initials', classnames?.initials)}>
          {getInitials(name)}
        </StyledInitials>
      ) : (
        <StyledFallback className={css('fallback', classnames?.fallback)} $size={size}>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
        </StyledFallback>
      )}
    </StyledContainer>
  )
}
