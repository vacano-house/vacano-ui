import styled from '@emotion/styled'

import { FieldMessageVariant } from './types'
import { COLORS } from '../../lib'

const VARIANT_COLORS: Record<FieldMessageVariant, string> = {
  normal: COLORS['iron-grey'],
  error: COLORS['red'],
  success: COLORS['green'],
  warning: COLORS['yellow'],
}

export const StyledFieldMessage = styled.span<{ $variant: FieldMessageVariant }>`
  display: block;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.4;
  color: ${(props) => VARIANT_COLORS[props.$variant]};
`
