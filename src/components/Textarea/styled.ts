import styled from '@emotion/styled'

import { getTextareaVariantProps } from './helpers'
import { TextareaVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { FieldMessage } from '../FieldMessage'
import { COLORS } from '../../lib'

type StyledTextareaProps = {
  $variant: TextareaVariant
}

export const StyledContainer = styled.div<{ $fullWidth: boolean }>`
  display: grid;
  flex-direction: column;
  gap: 2px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  flex: 1;
  min-width: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  font-family: inherit;
  padding: 10px 14px;
  border-radius: 16px;
  resize: vertical;

  color: ${(props) => getTextareaVariantProps(props.$variant).color.static};
  border: 1px solid ${(props) => getTextareaVariantProps(props.$variant).border.static};
  background-color: ${(props) => getTextareaVariantProps(props.$variant).background.static};

  &::placeholder {
    color: ${(props) => getTextareaVariantProps(props.$variant).placeholder.static};
  }

  &:disabled {
    cursor: not-allowed;
    resize: none;
    color: ${(props) => getTextareaVariantProps(props.$variant).color.disabled};
    background-color: ${(props) => getTextareaVariantProps(props.$variant).background.disabled};
    border-color: ${(props) => getTextareaVariantProps(props.$variant).border.disabled};

    &::placeholder {
      color: ${(props) => getTextareaVariantProps(props.$variant).placeholder.disabled};
    }
  }
`

export const StyledFooter = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 0 6px;
`

export const StyledMessage = styled(FieldMessage)`
  flex: 1;
  min-width: 0;
`

export const StyledCounter = styled.span<{ $variant: TextareaVariant }>`
  flex-shrink: 0;
  margin-left: auto;
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.$variant === 'error' ? COLORS.red : COLORS['iron-grey'])};
`
