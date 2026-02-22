import styled from '@emotion/styled'

import { AVATAR_FONT_SIZES, AVATAR_SIZES } from '../Avatar/constants'
import { AvatarSize } from '../Avatar/types'

type StyledGroupProps = {
  $size: AvatarSize
}

export const StyledGroup = styled.div<StyledGroupProps>`
  display: inline-flex;
  align-items: center;

  & > * + * {
    margin-left: -${({ $size }) => Math.round(AVATAR_SIZES[$size] * 0.25)}px;
  }
`

type StyledCountProps = {
  $size: AvatarSize
}

export const StyledCount = styled.div<StyledCountProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ $size }) => AVATAR_SIZES[$size]}px;
  height: ${({ $size }) => AVATAR_SIZES[$size]}px;
  border-radius: 50%;
  background-color: #e4e4e7;
  color: #71717a;
  font-size: ${({ $size }) => AVATAR_FONT_SIZES[$size]}px;
  font-weight: 600;
  line-height: 1;
  flex-shrink: 0;
`
