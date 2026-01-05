import styled from '@emotion/styled'

import { alpha, COLORS } from '../../../lib'

type StyledCardProps = {
  $border: boolean
  $shadow: boolean
}

export const StyledCard = styled.div<StyledCardProps>`
  background-color: ${COLORS['white']};
  border-radius: 16px;
  border: ${(props) => (props.$border ? `1px solid ${alpha(COLORS['iron-grey'], 15)}` : 'none')};
  box-shadow: ${(props) => (props.$shadow ? `0 2px 8px ${alpha(COLORS['black'], 10)}` : 'none')};
`
