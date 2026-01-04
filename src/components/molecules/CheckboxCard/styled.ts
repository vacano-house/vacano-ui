import styled from '@emotion/styled'

import { getCheckboxCardVariantProps } from './helpers'
import { CheckboxCardVariant } from './types'

type StyledContainerProps = {
  $checked: boolean
  $disabled: boolean
  $fullWidth: boolean
  $variant: CheckboxCardVariant
}

type StyledLabelProps = {
  $variant: CheckboxCardVariant
}

type StyledDescriptionProps = {
  $variant: CheckboxCardVariant
}

export const StyledContainer = styled.label<StyledContainerProps>`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: start;
  gap: 12px;
  padding: 12px;
  background-color: ${(props) => {
    const variantProps = getCheckboxCardVariantProps(props.$variant)
    if (props.$disabled) return variantProps.background.disabled
    if (props.$checked) return variantProps.backgroundChecked
    return variantProps.background.static
  }};
  border: 1px solid
    ${(props) => {
      const variantProps = getCheckboxCardVariantProps(props.$variant)
      if (props.$disabled) return variantProps.border.disabled
      if (props.$checked) return variantProps.borderChecked
      return variantProps.border.static
    }};
  border-radius: 12px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;
  width: ${(props) => (props.$fullWidth ? '100%' : 'auto')};
  min-width: 0;

  &:hover:not([data-disabled='true']) {
    border-color: ${(props) => {
      const variantProps = getCheckboxCardVariantProps(props.$variant)
      if (props.$checked) return variantProps.borderChecked
      return variantProps.border.hover
    }};
  }

  &:has(:focus-visible) {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => getCheckboxCardVariantProps(props.$variant).focusRing};
  }

  .vacano_checkbox_container {
    pointer-events: none;
  }
`

export const StyledInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

export const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
`

export const StyledLabel = styled.span<StyledLabelProps>`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  color: ${(props) => getCheckboxCardVariantProps(props.$variant).label.static};

  label[data-disabled='true'] & {
    color: ${(props) => getCheckboxCardVariantProps(props.$variant).label.disabled};
  }
`

export const StyledDescription = styled.span<StyledDescriptionProps>`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: ${(props) => getCheckboxCardVariantProps(props.$variant).description.static};

  label[data-disabled='true'] & {
    color: ${(props) => getCheckboxCardVariantProps(props.$variant).description.disabled};
  }
`
