import styled from '@emotion/styled'

import { COLORS } from '../../lib'

const base = `
  display: inline-flex;
  font-size: 14px;
  gap: 3px;
  color: ${COLORS['iron-grey']};
  transition: color 0.15s ease;
  text-decoration: none;
`

const clickable = `
  cursor: pointer;
  &:hover {
    color: ${COLORS['steel-blue']};
  }
`

export const StyledContainer = styled.span<{ $clickable: boolean }>`
  ${base}
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
  ${({ $clickable }) => $clickable && clickable}
`

export const StyledLink = styled.a`
  ${base}
  ${clickable}
`

export const StyledHash = styled.span``

export const StyledLabel = styled.span``
