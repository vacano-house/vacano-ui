import styled from '@emotion/styled'

import { AutocompleteVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { FieldMessage } from '../FieldMessage'
import { alpha, COLORS, VacanoComponentSize } from '../../lib'

const SIZE_PROPS: Record<VacanoComponentSize, { height: string; padding: string; radius: string }> =
  {
    compact: {
      height: '32px',
      padding: '0 10px',
      radius: '14px',
    },
    default: {
      height: '40px',
      padding: '0 14px',
      radius: '16px',
    },
  }

const VARIANT_PROPS: Record<
  AutocompleteVariant,
  {
    border: { static: string; disabled: string }
    background: { static: string; disabled: string }
    color: { static: string; disabled: string }
    placeholder: { static: string; disabled: string }
    focus: string
  }
> = {
  normal: {
    background: {
      static: alpha(COLORS['black'], 2),
      disabled: alpha(COLORS['black'], 10),
    },
    border: {
      static: alpha(COLORS['black'], 60),
      disabled: alpha(COLORS['black'], 10),
    },
    color: {
      static: COLORS['black'],
      disabled: alpha(COLORS['black'], 65),
    },
    placeholder: {
      static: alpha(COLORS['black'], 40),
      disabled: alpha(COLORS['black'], 65),
    },
    focus: alpha(COLORS['iron-grey'], 30),
  },
  error: {
    background: {
      static: alpha(COLORS['red'], 2),
      disabled: alpha(COLORS['red'], 10),
    },
    border: {
      static: alpha(COLORS['red'], 60),
      disabled: alpha(COLORS['red'], 10),
    },
    color: {
      static: COLORS['red'],
      disabled: alpha(COLORS['red'], 65),
    },
    placeholder: {
      static: alpha(COLORS['red'], 40),
      disabled: alpha(COLORS['red'], 65),
    },
    focus: alpha(COLORS['red'], 30),
  },
}

export const StyledContainer = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  display: grid;
  gap: 2px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledMessage = styled(FieldMessage)`
  margin-left: 6px;
`

export const StyledInputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

type StyledInputProps = {
  $size: VacanoComponentSize
  $variant: AutocompleteVariant
}

export const StyledInput = styled.input<StyledInputProps>`
  flex: 1;
  min-width: 0;
  width: 100%;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  height: ${(props) => SIZE_PROPS[props.$size].height};
  padding: ${(props) => SIZE_PROPS[props.$size].padding};
  padding-right: 40px;
  border-radius: ${(props) => SIZE_PROPS[props.$size].radius};

  color: ${(props) => VARIANT_PROPS[props.$variant].color.static};
  border: 1px solid ${(props) => VARIANT_PROPS[props.$variant].border.static};
  background-color: ${(props) => VARIANT_PROPS[props.$variant].background.static};

  &::placeholder {
    color: ${(props) => VARIANT_PROPS[props.$variant].placeholder.static};
  }

  &:disabled {
    cursor: not-allowed;
    color: ${(props) => VARIANT_PROPS[props.$variant].color.disabled};
    background-color: ${(props) => VARIANT_PROPS[props.$variant].background.disabled};
    border-color: ${(props) => VARIANT_PROPS[props.$variant].border.disabled};

    &::placeholder {
      color: ${(props) => VARIANT_PROPS[props.$variant].placeholder.disabled};
    }
  }
`

export const StyledSpinnerWrapper = styled.div`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const dropdownStyles = `
  z-index: 100;
  max-height: 240px;
  overflow-y: auto;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.gray};
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`

export const StyledDropdown = styled.div<{ $open: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  margin-top: 4px;
  ${dropdownStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
`

export const StyledPortalDropdown = styled.div<{ $open: boolean }>`
  position: fixed;
  ${dropdownStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
`

export const StyledItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.black};
  transition: background-color 0.1s ease;

  &:first-of-type {
    border-radius: 12px 12px 0 0;
  }

  &:last-of-type {
    border-radius: 0 0 12px 12px;
  }

  &:only-child {
    border-radius: 12px;
  }

  &:hover {
    background-color: ${alpha(COLORS.black, 5)};
  }
`

export const StyledItemImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 6px;
  object-fit: cover;
`

export const StyledItemText = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledEmpty = styled.div`
  padding: 12px 14px;
  font-size: 14px;
  color: ${alpha(COLORS.black, 50)};
  text-align: center;
`
