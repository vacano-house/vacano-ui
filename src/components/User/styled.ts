import styled from '@emotion/styled'

type StyledContainerProps = {
  $reverse: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  flex-direction: ${({ $reverse }) => ($reverse ? 'row-reverse' : 'row')};
`

export const StyledInfo = styled.div<{ $align: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  text-align: ${({ $align }) => $align};
`

export const StyledName = styled.span`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.4;
`

export const StyledDescription = styled.span`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
`
