import styled from '@emotion/styled'

import { getInputSizeProps, getInputVariantProps } from './helpers'
import { InputVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { FieldMessage } from '../FieldMessage'
import { VacanoComponentSize } from '../../lib'

type StyledInputContainerProps = {
  $size: VacanoComponentSize
  $variant: InputVariant
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

export const StyledInput = styled.input<StyledInputContainerProps>`
  flex: 1;
  min-width: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  height: ${(props) => getInputSizeProps(props.$size).height};
  padding: ${(props) => getInputSizeProps(props.$size).padding};
  border-radius: ${(props) => getInputSizeProps(props.$size).radius};

  color: ${(props) => getInputVariantProps(props.$variant).color.static};
  border: 1px solid ${(props) => getInputVariantProps(props.$variant).border.static};
  background-color: ${(props) => getInputVariantProps(props.$variant).background.static};

  &::placeholder {
    color: ${(props) => getInputVariantProps(props.$variant).placeholder.static};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => getInputVariantProps(props.$variant).color.disabled};
    background-color: ${(props) => getInputVariantProps(props.$variant).background.disabled};
    border-color: ${(props) => getInputVariantProps(props.$variant).border.disabled};

    &::placeholder {
      color: ${(props) => getInputVariantProps(props.$variant).placeholder.disabled};
    }
  }
`
