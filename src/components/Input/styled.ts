import styled from '@emotion/styled'

import { getInputSizeProps, getInputVariantProps } from './helpers'
import { InputVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { FieldMessage } from '../FieldMessage'
import { alpha, COLORS, VacanoComponentSize } from '../../lib'

type StyledInputProps = {
  $size: VacanoComponentSize
  $variant: InputVariant
  $hasPrefix: boolean
}

export const StyledInputContainer = styled.div<{ $fullWidth: boolean }>`
  display: grid;
  flex-direction: column;
  gap: 2px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledMessage = styled(FieldMessage)`
  margin-left: 6px;
`

export const StyledInputWrapper = styled.div<{
  $size: VacanoComponentSize
  $variant: InputVariant
  $disabled: boolean
}>`
  display: flex;
  align-items: stretch;
  border: 1px solid
    ${(props) =>
      getInputVariantProps(props.$variant).border[props.$disabled ? 'disabled' : 'static']};
  border-radius: ${(props) => getInputSizeProps(props.$size).radius};
  overflow: hidden;
`

export const StyledPrefix = styled.span<{
  $size: VacanoComponentSize
  $variant: InputVariant
  $disabled: boolean
}>`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  padding: ${(props) => getInputSizeProps(props.$size).padding};
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  user-select: none;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'default')};
  color: ${(props) =>
    getInputVariantProps(props.$variant).color[props.$disabled ? 'disabled' : 'static']};
  background-color: ${(props) =>
    props.$variant === 'error' ? alpha(COLORS.red, 8) : alpha(COLORS.black, 6)};
  border-right: 1px solid
    ${(props) =>
      getInputVariantProps(props.$variant).border[props.$disabled ? 'disabled' : 'static']};
`

export const StyledInput = styled.input<StyledInputProps>`
  flex: 1;
  min-width: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  height: ${(props) => getInputSizeProps(props.$size).height};
  padding: ${(props) => getInputSizeProps(props.$size).padding};
  border-radius: ${(props) => (props.$hasPrefix ? '0' : getInputSizeProps(props.$size).radius)};

  color: ${(props) => getInputVariantProps(props.$variant).color.static};
  border: ${(props) =>
    props.$hasPrefix ? 'none' : `1px solid ${getInputVariantProps(props.$variant).border.static}`};
  background-color: ${(props) => getInputVariantProps(props.$variant).background.static};

  &::placeholder {
    color: ${(props) => getInputVariantProps(props.$variant).placeholder.static};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => getInputVariantProps(props.$variant).color.disabled};
    background-color: ${(props) => getInputVariantProps(props.$variant).background.disabled};
    border-color: ${(props) =>
      props.$hasPrefix ? 'transparent' : getInputVariantProps(props.$variant).border.disabled};

    &::placeholder {
      color: ${(props) => getInputVariantProps(props.$variant).placeholder.disabled};
    }
  }
`
