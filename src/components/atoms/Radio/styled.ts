import styled from '@emotion/styled'

import { getRadioVariantProps } from './helpers'
import { RadioVariant } from './types'

type StyledContainerProps = {
  $disabled: boolean
  $variant: RadioVariant
}

type StyledBoxProps = {
  $checked: boolean
  $variant: RadioVariant
}

type StyledDotProps = {
  $visible: boolean
  $variant: RadioVariant
}

type StyledLabelProps = {
  $variant: RadioVariant
}

export const StyledContainer = styled.label<StyledContainerProps>`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};

  &:has(input:focus-visible) > span:first-of-type {
    box-shadow: 0 0 0 2px ${(props) => getRadioVariantProps(props.$variant).box.focusShadow};
  }
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
  border-radius: 50%;
  border: 1.5px solid
    ${(props) =>
      props.$checked
        ? getRadioVariantProps(props.$variant).box.borderChecked
        : getRadioVariantProps(props.$variant).box.border};
  background-color: ${(props) =>
    props.$checked
      ? getRadioVariantProps(props.$variant).box.backgroundChecked
      : getRadioVariantProps(props.$variant).box.background};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease,
    box-shadow 0.15s ease;
`

export const StyledDot = styled.span<StyledDotProps>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${(props) => getRadioVariantProps(props.$variant).dot};
  opacity: ${(props) => (props.$visible ? 1 : 0)};
  transform: ${(props) => (props.$visible ? 'scale(1)' : 'scale(0.5)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease;
`

export const StyledLabel = styled.span<StyledLabelProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  color: ${(props) => getRadioVariantProps(props.$variant).label};
  user-select: none;
`
