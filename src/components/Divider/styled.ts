import styled from '@emotion/styled'

import { COLORS } from '../../lib'

type StyledContainerProps = {
  $spacing: number
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  margin-top: ${(props) => props.$spacing}px;
  margin-bottom: ${(props) => props.$spacing}px;
`

export const StyledLine = styled.div`
  flex: 1;
  height: 1px;
  background-color: ${COLORS.gray};
`

export const StyledLabel = styled.span`
  font-size: 12px;
  color: ${COLORS['iron-grey']};
  white-space: nowrap;
`
