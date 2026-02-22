import styled from '@emotion/styled'

import { PaginationVariant } from './types'
import { COLORS } from '../../lib'

export const StyledContainer = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 2px;
  position: relative;
`

type StyledItemProps = {
  $active: boolean
  $variant: PaginationVariant
  $disabled: boolean
}

const getItemStyles = (variant: PaginationVariant, active: boolean) => {
  if (!active) {
    switch (variant) {
      case 'bordered':
        return `
          background-color: transparent;
          border: 1px solid ${COLORS.gray};
          color: ${COLORS['iron-grey']};
          &:hover { background-color: ${COLORS.gray}; }
        `
      case 'light':
        return `
          background-color: transparent;
          color: ${COLORS['iron-grey']};
          &:hover { background-color: ${COLORS.gray}; }
        `
      default:
        return `
          background-color: transparent;
          color: ${COLORS['iron-grey']};
          &:hover { background-color: ${COLORS.gray}; }
        `
    }
  }

  return `
    color: ${COLORS.white};
    position: relative;
    z-index: 1;
  `
}

export const StyledItem = styled.button<StyledItemProps>`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  cursor: pointer;
  user-select: none;
  transition:
    background-color 0.15s ease,
    color 0.15s ease;
  ${({ $variant, $active }) => getItemStyles($variant, $active)}
  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.4;
    pointer-events: none;
    cursor: default;
  `}
`

export const StyledCursor = styled.span`
  position: absolute;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background-color: ${COLORS.black};
  z-index: 0;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
`

export const StyledEllipsis = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  user-select: none;
`

type StyledControlProps = {
  $disabled: boolean
}

export const StyledControl = styled.button<StyledControlProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: none;
  border-radius: 10px;
  background-color: transparent;
  color: ${COLORS['iron-grey']};
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${COLORS.gray};
  }

  ${({ $disabled }) =>
    $disabled &&
    `
    opacity: 0.4;
    pointer-events: none;
    cursor: default;
  `}
`
