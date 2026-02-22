import styled from '@emotion/styled'

import { BreadcrumbsSize, BreadcrumbsVariant } from './types'
import { COLORS } from '../../lib'

const SIZES: Record<BreadcrumbsSize, { fontSize: number; gap: number; padding: string }> = {
  sm: { fontSize: 12, gap: 4, padding: '4px 8px' },
  md: { fontSize: 14, gap: 6, padding: '6px 12px' },
  lg: { fontSize: 16, gap: 8, padding: '8px 16px' },
}

type StyledContainerProps = {
  $variant: BreadcrumbsVariant
  $size: BreadcrumbsSize
}

export const StyledContainer = styled.nav<StyledContainerProps>`
  display: inline-flex;
  align-items: center;
  ${({ $variant, $size }) => {
    const { padding } = SIZES[$size]

    switch ($variant) {
      case 'solid':
        return `
          background-color: ${COLORS.gray};
          border-radius: 10px;
          padding: ${padding};
        `
      case 'bordered':
        return `
          border: 1px solid ${COLORS.gray};
          border-radius: 10px;
          padding: ${padding};
        `
      default:
        return ''
    }
  }}
`

type StyledListProps = {
  $size: BreadcrumbsSize
}

export const StyledList = styled.ol<StyledListProps>`
  display: flex;
  align-items: center;
  gap: ${({ $size }) => SIZES[$size].gap}px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`

type StyledItemProps = {
  $size: BreadcrumbsSize
  $current: boolean
  $disabled: boolean
}

export const StyledItem = styled.li<StyledItemProps>`
  display: inline-flex;
  align-items: center;
  gap: ${({ $size }) => SIZES[$size].gap}px;
  font-size: ${({ $size }) => SIZES[$size].fontSize}px;
  line-height: 1.5;
  color: ${({ $current }) => ($current ? COLORS.black : COLORS['iron-grey'])};
  font-weight: ${({ $current }) => ($current ? 600 : 400)};
  ${({ $disabled, $current }) => $disabled && !$current && 'opacity: 0.5; pointer-events: none;'}
`

type StyledLinkProps = {
  $current: boolean
  $disabled: boolean
}

export const StyledLink = styled.a<StyledLinkProps>`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  color: inherit;
  cursor: ${({ $current, $disabled }) => ($current || $disabled ? 'default' : 'pointer')};
  transition: color 0.15s ease;

  & svg {
    width: 1em;
    height: 1em;
  }

  ${({ $current, $disabled }) =>
    !$current &&
    !$disabled &&
    `
    &:hover {
      color: ${COLORS.black};
    }
  `}
`

type StyledSeparatorProps = {
  $size: BreadcrumbsSize
}

export const StyledSeparator = styled.span<StyledSeparatorProps>`
  display: inline-flex;
  align-items: center;
  color: ${COLORS['iron-grey']};
  font-size: ${({ $size }) => SIZES[$size].fontSize}px;
  user-select: none;

  & svg {
    width: ${({ $size }) => SIZES[$size].fontSize - 2}px;
    height: ${({ $size }) => SIZES[$size].fontSize - 2}px;
  }
`

export const StyledEllipsis = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 4px;
  border: none;
  background: transparent;
  color: ${COLORS['iron-grey']};
  font-size: inherit;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${COLORS.gray};
    color: ${COLORS.black};
  }
`
