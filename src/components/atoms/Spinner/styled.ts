import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'

import { SPINNER_COLORS } from './constants'
import { getSpinnerSizeProps } from './helpers'
import { SpinnerSize } from './types'

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

type StyledSpinnerProps = {
  $size: SpinnerSize
}

export const StyledSpinner = styled.div<StyledSpinnerProps>`
  display: inline-block;
  width: ${(props) => getSpinnerSizeProps(props.$size).size};
  height: ${(props) => getSpinnerSizeProps(props.$size).size};
  border: ${(props) => getSpinnerSizeProps(props.$size).borderWidth} solid ${SPINNER_COLORS.track};
  border-top-color: ${SPINNER_COLORS.indicator};
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`
