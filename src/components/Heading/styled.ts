import styled from '@emotion/styled'

import { HeadingLevel } from './types'
import { COLORS } from '../../lib'

const SIZE_MAP: Record<HeadingLevel, { fontSize: number; lineHeight: number }> = {
  1: { fontSize: 32, lineHeight: 1.2 },
  2: { fontSize: 24, lineHeight: 1.25 },
  3: { fontSize: 18, lineHeight: 1.3 },
  4: { fontSize: 16, lineHeight: 1.4 },
  5: { fontSize: 14, lineHeight: 1.4 },
  6: { fontSize: 12, lineHeight: 1.5 },
}

type StyledHeadingProps = {
  $level: HeadingLevel
}

export const StyledHeading = styled.h1<StyledHeadingProps>`
  margin: 0;
  font-weight: 700;
  color: ${COLORS.black};
  font-size: ${({ $level }) => SIZE_MAP[$level].fontSize}px;
  line-height: ${({ $level }) => SIZE_MAP[$level].lineHeight};
`
