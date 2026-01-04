import styled from '@emotion/styled'

import { PROGRESS_PROPS } from './constants'

export const StyledTrack = styled.div`
  width: 100%;
  height: 6px;
  border-radius: 3px;
  background-color: ${PROGRESS_PROPS.track};
  overflow: hidden;
`

type StyledFillProps = {
  $value: number
  $animated: boolean
}

export const StyledFill = styled.div<StyledFillProps>`
  height: 100%;
  width: ${(props) => Math.min(100, Math.max(0, props.$value))}%;
  border-radius: 3px;
  background-color: ${PROGRESS_PROPS.fill};
  transition: ${(props) => (props.$animated ? 'width 0.3s ease' : 'none')};
`
