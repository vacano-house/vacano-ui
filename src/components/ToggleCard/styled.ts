import styled from '@emotion/styled'

import { getToggleCardVariantProps } from './helpers'
import { ToggleCardVariant } from './types'

type StyledContainerProps = {
  $checked: boolean
  $disabled: boolean
  $fullWidth: boolean
  $variant: ToggleCardVariant
}

type StyledLabelProps = {
  $variant: ToggleCardVariant
}

type StyledDescriptionProps = {
  $variant: ToggleCardVariant
}

export const StyledContainer = styled.label<StyledContainerProps>`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: start;
  gap: 8px;
  padding: 12px;
  background-color: ${(props) => {
    const variantProps = getToggleCardVariantProps(props.$variant)
    if (props.$disabled) return variantProps.background.disabled
    if (props.$checked) return variantProps.backgroundChecked
    return variantProps.background.static
  }};
  border: 1px solid
    ${(props) => {
      const variantProps = getToggleCardVariantProps(props.$variant)
      if (props.$disabled) return variantProps.border.disabled
      if (props.$checked) return variantProps.borderChecked
      return variantProps.border.static
    }};
  border-radius: 12px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  transition:
    border-color 0.15s ease,
    background-color 0.15s ease;
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
  min-width: 0;

  &:hover:not([data-disabled='true']) {
    border-color: ${(props) => {
      const variantProps = getToggleCardVariantProps(props.$variant)
      if (props.$checked) return variantProps.borderChecked
      return variantProps.border.hover
    }};
  }

  .vacano_toggle_container {
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
  color: ${(props) => getToggleCardVariantProps(props.$variant).label.static};

  label[data-disabled='true'] & {
    color: ${(props) => getToggleCardVariantProps(props.$variant).label.disabled};
  }
`

export const StyledDescription = styled.span<StyledDescriptionProps>`
  font-size: 12px;
  font-weight: 400;
  line-height: 1.4;
  color: ${(props) => getToggleCardVariantProps(props.$variant).description.static};

  label[data-disabled='true'] & {
    color: ${(props) => getToggleCardVariantProps(props.$variant).description.disabled};
  }
`
