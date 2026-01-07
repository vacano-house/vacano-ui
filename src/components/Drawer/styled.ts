import styled from '@emotion/styled'

import { DrawerPosition } from './types'
import { alpha, COLORS, KEYFRAMES } from '../../lib'

const slideIn = {
  left: KEYFRAMES.slideInLeft,
  right: KEYFRAMES.slideInRight,
  top: KEYFRAMES.slideInTop,
  bottom: KEYFRAMES.slideInBottom,
}

type StyledContainerProps = {
  $animated: boolean
  $position: DrawerPosition
  $size: string
}

const getPositionStyles = (position: DrawerPosition, size: string) => {
  switch (position) {
    case 'left':
      return `
        top: 0;
        left: 0;
        height: 100%;
        width: ${size};
      `
    case 'right':
      return `
        top: 0;
        right: 0;
        height: 100%;
        width: ${size};
      `
    case 'top':
      return `
        top: 0;
        left: 0;
        width: 100%;
        height: ${size};
      `
    case 'bottom':
      return `
        bottom: 0;
        left: 0;
        width: 100%;
        height: ${size};
      `
  }
}

export const StyledContainer = styled.div<StyledContainerProps>`
  position: fixed;
  z-index: 1001;
  background-color: ${COLORS['white']};
  box-shadow: 0 4px 24px ${alpha(COLORS['black'], 20)};
  ${(props) => getPositionStyles(props.$position, props.$size)}
  animation: ${(props) => slideIn[props.$position]} ${(props) =>
    props.$animated ? '0.05s' : '0s'} ease-out forwards;
`
