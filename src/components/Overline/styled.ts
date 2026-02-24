import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const StyledLabel = styled.span`
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: ${COLORS['iron-grey']};
`

export const StyledDescription = styled.span`
  font-size: 14px;
  color: ${COLORS['iron-grey']};
`
