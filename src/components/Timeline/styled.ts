import styled from '@emotion/styled'

import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 0 12px;
`

export const StyledTrack = styled.div<{ $last: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 1 / -1;
`

export const StyledDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${COLORS.black};
  flex-shrink: 0;
  margin-top: 5px;
`

export const StyledLine = styled.div<{ $last: boolean }>`
  width: 2px;
  flex: 1;
  background-color: ${COLORS.gray};
  visibility: ${(props) => (props.$last ? 'hidden' : 'visible')};
`

export const StyledContent = styled.div<{ $last: boolean }>`
  padding-bottom: ${(props) => (props.$last ? '0' : '24px')};
  min-width: 0;
`

export const StyledHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 8px;
`

export const StyledTitle = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${COLORS.black};
  line-height: 20px;
  min-width: 0;
`

export const StyledActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`

export const StyledDescription = styled.div`
  font-size: 13px;
  color: ${COLORS['iron-grey']};
  margin-top: 2px;
  line-height: 1.4;
`

export const StyledBody = styled.div`
  font-size: 14px;
  color: ${COLORS['iron-grey']};
  margin-top: 8px;
  line-height: 1.5;
`
