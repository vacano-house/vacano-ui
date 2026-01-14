import styled from '@emotion/styled'

import { getOtpCodeSizeProps, getOtpCodeVariantProps } from './helpers'
import { OtpCodeVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { VacanoComponentSize } from '../../lib'

type StyledInputProps = {
  $size: VacanoComponentSize
  $variant: OtpCodeVariant
}

export const StyledContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledInputsWrapper = styled.div<{ $size: VacanoComponentSize }>`
  display: flex;
  gap: ${(props) => getOtpCodeSizeProps(props.$size).gap};
`

export const StyledInput = styled.input<StyledInputProps>`
  width: ${(props) => getOtpCodeSizeProps(props.$size).width};
  height: ${(props) => getOtpCodeSizeProps(props.$size).height};
  border-radius: ${(props) => getOtpCodeSizeProps(props.$size).radius};
  font-size: ${(props) => getOtpCodeSizeProps(props.$size).fontSize};
  font-weight: 600;
  text-align: center;
  outline: none;
  border: 1px solid ${(props) => getOtpCodeVariantProps(props.$variant).border.static};
  background-color: ${(props) => getOtpCodeVariantProps(props.$variant).background.static};
  color: ${(props) => getOtpCodeVariantProps(props.$variant).color.static};
  transition:
    border-color 0.15s ease,
    box-shadow 0.15s ease;

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => getOtpCodeVariantProps(props.$variant).color.disabled};
    background-color: ${(props) => getOtpCodeVariantProps(props.$variant).background.disabled};
    border-color: ${(props) => getOtpCodeVariantProps(props.$variant).border.disabled};
  }

  &:focus-visible {
    outline: 2px solid ${(props) => getOtpCodeVariantProps(props.$variant).focus};
  }

  &::selection {
    background-color: transparent;
  }
`
