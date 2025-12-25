import styled from '@emotion/styled'

import { StyledExampleContainerProps } from './types'

const getExampleContainerTemplateColumns = (variant: StyledExampleContainerProps['$variant']) => {
  switch (variant) {
    case 'one':
      return '1fr'

    case 'two':
      return '1fr 1fr'

    default:
      return '1fr'
  }
}

export const StyledExampleContainer = styled.div<StyledExampleContainerProps>`
  display: grid;
  font-size: ${(props) => props.$fontSize};
  grid-template-columns: ${(props) => getExampleContainerTemplateColumns(props.$variant)};
`

export const StyledExampleTItle = styled.span`
  font-weight: 600;
`
