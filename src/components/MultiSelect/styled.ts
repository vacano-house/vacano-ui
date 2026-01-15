import styled from '@emotion/styled'

import { VARIANT_PROPS } from './constants'
import { MultiSelectVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { COLORS } from '../../lib'

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const StyledLabel = styled(FieldLabel)<{ $variant: MultiSelectVariant }>`
  margin-left: 6px;
  color: ${(props) => VARIANT_PROPS[props.$variant].label};
`

export const StyledTrigger = styled.button<{ $variant: MultiSelectVariant; $disabled: boolean }>`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  min-height: 44px;
  padding: 8px 12px;
  border: 1px dashed ${(props) => VARIANT_PROPS[props.$variant].border};
  border-radius: 8px;
  background: ${COLORS.white};
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: border-color 0.15s ease;
  text-align: left;

  &:hover:not(:disabled) {
    border-color: ${(props) => (props.$variant === 'error' ? COLORS.red : COLORS.black)};
  }
`

export const StyledPlaceholder = styled.span`
  color: ${COLORS['iron-grey']};
  font-size: 14px;
`

export const StyledModalContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 16px;
`

export const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const StyledModalTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: ${COLORS.black};
`

export const StyledOptionsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-height: 200px;
  max-height: 300px;
  overflow-y: auto;
`

export const StyledOption = styled.label<{ $disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.$disabled ? 0.5 : 1)};
  transition: background-color 0.15s ease;

  &:hover {
    background-color: ${(props) => (props.$disabled ? 'transparent' : COLORS.gray)};
  }
`

export const StyledOptionLabel = styled.span`
  font-size: 14px;
  color: ${COLORS.black};
`

export const StyledEmpty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 16px;
  color: ${COLORS['iron-grey']};
  font-size: 14px;
  text-align: center;
`
