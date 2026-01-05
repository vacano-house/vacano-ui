import styled from '@emotion/styled'

import { FieldLabelVariant } from './types'
import { COLORS } from '../../../lib'

export const StyledFieldLabel = styled.span<{ $variant: FieldLabelVariant }>`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.$variant === 'normal' ? COLORS['black'] : COLORS['red'])};
`
