import styled from '@emotion/styled'

import { VALUE_SELECTOR_PROPS } from './constants'

type StyledContainerProps = {
  $height?: number | string
}

type StyledOptionProps = {
  $selected: boolean
  $disabled: boolean
  $focused: boolean
}

export const StyledContainer = styled.div<StyledContainerProps>`
  display: flex;
  flex-direction: column;
  height: ${(props) =>
    props.$height
      ? typeof props.$height === 'number'
        ? `${props.$height}px`
        : props.$height
      : '100%'};
  max-height: ${(props) =>
    props.$height
      ? typeof props.$height === 'number'
        ? `${props.$height}px`
        : props.$height
      : '100%'};
`

export const StyledSearch = styled.div`
  padding: 8px;
  border-bottom: 1px solid ${VALUE_SELECTOR_PROPS.border};
`

export const StyledSearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: none;
  outline: none;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: ${VALUE_SELECTOR_PROPS.search.color};

  &::placeholder {
    color: ${VALUE_SELECTOR_PROPS.search.placeholder};
  }
`

export const StyledList = styled.div`
  flex: 1;
  overflow-y: auto;
`

export const StyledOption = styled.div<StyledOptionProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 500;
  color: ${VALUE_SELECTOR_PROPS.option.color};
  background-color: ${(props) =>
    props.$focused
      ? VALUE_SELECTOR_PROPS.option.background.focused
      : VALUE_SELECTOR_PROPS.option.background.static};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${(props) =>
      props.$disabled
        ? VALUE_SELECTOR_PROPS.option.background.static
        : VALUE_SELECTOR_PROPS.option.background.hover};
  }
`

export const StyledCheck = styled.span<{ $selected: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$selected
      ? VALUE_SELECTOR_PROPS.option.check.selected
      : VALUE_SELECTOR_PROPS.option.check.static};
  transition: color 0.15s ease;

  & svg {
    width: 16px;
    height: 16px;
  }
`
