import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  white-space: pre;
  font-family: 'SF Mono', 'Fira Code', 'Cascadia Code', 'JetBrains Mono', monospace;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.6;
  color: ${COLORS['black']};
  min-height: 1.6em;
`

export const StyledChar = styled.span`
  display: inline-block;
  width: 0.65em;
  text-align: center;
`
