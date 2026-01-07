import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const StyledPreview = styled.div<{ $size: number }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border-radius: 8px;
  border: 1px dashed ${COLORS.gray};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.white};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const StyledPlaceholder = styled.span`
  font-size: 12px;
  color: ${COLORS['iron-grey']};
`
