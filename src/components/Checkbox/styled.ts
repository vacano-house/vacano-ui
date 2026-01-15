import styled from '@emotion/styled'

import { getCheckboxVariantProps } from './helpers'
import { CheckboxVariant } from './types'

type StyledContainerProps = {
  $disabled: boolean
  $variant: CheckboxVariant
}

type StyledBoxProps = {
  $checked: boolean
  $indeterminate: boolean
  $variant: CheckboxVariant
}

type StyledIconProps = {
  $visible: boolean
  $variant: CheckboxVariant
}

type StyledLabelProps = {
  $variant: CheckboxVariant
}

export const StyledContainer = styled.label<StyledContainerProps>`
  display: inline-flex;
  align-items: flex-start;
  gap: 8px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
`

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
`

export const StyledBox = styled.span<StyledBoxProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 6px;
  border: 1.5px solid
    ${(props) =>
      props.$checked || props.$indeterminate
        ? getCheckboxVariantProps(props.$variant).box.borderChecked
        : getCheckboxVariantProps(props.$variant).box.border};
  background-color: ${(props) =>
    props.$checked || props.$indeterminate
      ? getCheckboxVariantProps(props.$variant).box.backgroundChecked
      : getCheckboxVariantProps(props.$variant).box.background};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
`

export const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => getCheckboxVariantProps(props.$variant).icon};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: ${(props) => (props.$visible ? 'scale(1)' : 'scale(0.5)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;

  & svg {
    width: 12px;
    height: 12px;
  }
`

export const StyledLabel = styled.span<StyledLabelProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${(props) => getCheckboxVariantProps(props.$variant).label};
  user-select: none;

  a {
    color: inherit;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      text-decoration: none;
    }
  }
`
