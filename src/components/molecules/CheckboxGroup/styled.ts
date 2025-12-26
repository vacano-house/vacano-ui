import styled from '@emotion/styled'

export const StyledCheckboxGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: none;
  margin: 0;
  padding: 0;
`

export const StyledCheckboxGroupLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.5;
  line-height: 1.5;
  color: ${({ theme }) => theme.checkboxGroup.label.color};
  margin-bottom: 4px;
  padding: 0;
`

export const StyledCheckboxGroupOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`
