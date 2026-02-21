import styled from '@emotion/styled'

import { getTooltipVariantColors } from './helpers'
import { TooltipPlacement, TooltipVariant } from './types'

type StyledContentProps = {
  $placement: TooltipPlacement
  $variant: TooltipVariant
  $visible: boolean
}

const getArrowStyles = ($placement: TooltipPlacement, $variant: TooltipVariant) => {
  const arrowColor = getTooltipVariantColors($variant).background
  switch ($placement) {
    case 'top':
      return `
        bottom: -12px;
        left: 50%;
        margin-left: -6px;
        border-top-color: ${arrowColor};
      `
    case 'bottom':
      return `
        top: -12px;
        left: 50%;
        margin-left: -6px;
        border-bottom-color: ${arrowColor};
      `
    case 'left':
      return `
        right: -12px;
        top: 50%;
        margin-top: -6px;
        border-left-color: ${arrowColor};
      `
    case 'right':
      return `
        left: -12px;
        top: 50%;
        margin-top: -6px;
        border-right-color: ${arrowColor};
      `
    default:
      return ''
  }
}

const getLightArrowStyles = ($placement: TooltipPlacement, $variant: TooltipVariant) => {
  if ($variant !== 'light') return ''
  const borderColor = getTooltipVariantColors($variant).border
  switch ($placement) {
    case 'top':
      return `
        &::after {
          bottom: -14px;
          left: 50%;
          margin-left: -7px;
          border-top-color: ${borderColor};
        }
      `
    case 'bottom':
      return `
        &::after {
          top: -14px;
          left: 50%;
          margin-left: -7px;
          border-bottom-color: ${borderColor};
        }
      `
    case 'left':
      return `
        &::after {
          right: -14px;
          top: 50%;
          margin-top: -7px;
          border-left-color: ${borderColor};
        }
      `
    case 'right':
      return `
        &::after {
          left: -14px;
          top: 50%;
          margin-top: -7px;
          border-right-color: ${borderColor};
        }
      `
    default:
      return ''
  }
}

const contentBaseStyles = (props: StyledContentProps) => `
  z-index: 1000;
  padding: 6px 12px;
  background-color: ${getTooltipVariantColors(props.$variant).background};
  color: ${getTooltipVariantColors(props.$variant).text};
  font-size: 13px;
  line-height: 1.4;
  border-radius: 6px;
  width: max-content;
  max-width: 300px;
  white-space: normal;
  word-wrap: break-word;
  pointer-events: none;
  opacity: ${props.$visible ? 1 : 0};
  visibility: ${props.$visible ? 'visible' : 'hidden'};
  transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  ${props.$variant === 'light' ? `border: 1px solid ${getTooltipVariantColors(props.$variant).border};` : ''}

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 6px solid transparent;
    ${getArrowStyles(props.$placement, props.$variant)}
  }

  ${
    props.$variant === 'light'
      ? `
    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      border: 7px solid transparent;
    }
  `
      : ''
  }

  ${getLightArrowStyles(props.$placement, props.$variant)}
`

export const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: fit-content;
`

const getPlacementStyles = ($placement: TooltipPlacement) => {
  switch ($placement) {
    case 'top':
      return `
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      `
    case 'bottom':
      return `
        top: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
      `
    case 'left':
      return `
        right: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      `
    case 'right':
      return `
        left: calc(100% + 8px);
        top: 50%;
        transform: translateY(-50%);
      `
    default:
      return ''
  }
}

export const StyledContent = styled.div<StyledContentProps>`
  position: absolute;
  ${(props) => contentBaseStyles(props)}
  ${({ $placement }) => getPlacementStyles($placement)}
`

export const StyledPortalContent = styled.div<StyledContentProps>`
  position: fixed;
  ${(props) => contentBaseStyles(props)}
`
