import styled from '@emotion/styled'

import {
  AVATAR_COLORS,
  AVATAR_FONT_SIZES,
  AVATAR_ICON_SIZES,
  AVATAR_RADIUS,
  AVATAR_SIZES,
} from './constants'
import { AvatarColor, AvatarRadius, AvatarSize } from './types'

type StyledContainerProps = {
  $size: AvatarSize
  $radius: AvatarRadius
  $color: AvatarColor
  $bordered: boolean
  $disabled: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: ${({ $size }) => AVATAR_SIZES[$size]}px;
  height: ${({ $size }) => AVATAR_SIZES[$size]}px;
  border-radius: ${({ $radius }) => AVATAR_RADIUS[$radius]};
  background-color: ${({ $color }) => AVATAR_COLORS[$color].background};
  color: ${({ $color }) => AVATAR_COLORS[$color].color};
  font-size: ${({ $size }) => AVATAR_FONT_SIZES[$size]}px;
  font-weight: 600;
  line-height: 1;
  flex-shrink: 0;
  user-select: none;
  box-sizing: border-box;
  ${({ $bordered, $color }) =>
    $bordered && `box-shadow: 0 0 0 2px #fff, 0 0 0 4px ${AVATAR_COLORS[$color].border};`}
  ${({ $disabled }) => $disabled && 'opacity: 0.5; pointer-events: none;'}
`

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

type StyledFallbackProps = {
  $size: AvatarSize
}

export const StyledFallback = styled.span<StyledFallbackProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: ${({ $size }) => AVATAR_ICON_SIZES[$size]}px;
    height: ${({ $size }) => AVATAR_ICON_SIZES[$size]}px;
  }
`

export const StyledInitials = styled.span`
  letter-spacing: 0.5px;
`
