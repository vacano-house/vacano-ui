import styled from '@emotion/styled'

export const StyledRadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: none;
  margin: 0;
  padding: 0;
`

export const StyledRadioGroupLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  color: ${({ theme }) => theme.radioGroup.label.color};
  margin-bottom: 4px;
  padding: 0;
`

export const StyledRadioGroupOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
