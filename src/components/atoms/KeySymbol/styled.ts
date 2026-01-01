import styled from '@emotion/styled'

import { COLORS } from '../../../constants'
import { ColorUtils } from '../../../lib/utils'
import { KeySymbolVariant } from './types'

export const StyledKeySymbol = styled.span<{ $variant: KeySymbolVariant }>`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  height: 18px;
  min-width: 18px;
  line-height: 1.6;
  padding: 2px 4px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.$variant === 'light'
      ? ColorUtils.alpha(COLORS['white'], 25)
      : ColorUtils.alpha(COLORS['black'], 25)};
`
