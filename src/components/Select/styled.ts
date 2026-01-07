import styled from '@emotion/styled'

import { SelectVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { alpha, COLORS, VacanoComponentSize } from '../../lib'

const SIZE_PROPS: Record<
  VacanoComponentSize,
  {
    height: string
    padding: string
    radius: string
  }
> = {
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
  SelectVariant,
  {
    border: { static: string; disabled: string }
    background: { static: string; disabled: string }
    color: { static: string; disabled: string }
    placeholder: string
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
    placeholder: alpha(COLORS['black'], 40),
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
    placeholder: alpha(COLORS['red'], 40),
    focus: alpha(COLORS['red'], 30),
  },
}

export const StyledContainer = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  display: grid;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  width: ${(props) => (props.$fullWidth ? '100%' : 'fit-content')};
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledTrigger = styled.button<{
  $size: VacanoComponentSize
  $variant: SelectVariant
  $disabled: boolean
  $hasValue: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  height: ${(props) => SIZE_PROPS[props.$size].height};
  padding: ${(props) => SIZE_PROPS[props.$size].padding};
  border-radius: ${(props) => SIZE_PROPS[props.$size].radius};

  color: ${(props) =>
    props.$hasValue
      ? props.$disabled
        ? VARIANT_PROPS[props.$variant].color.disabled
        : VARIANT_PROPS[props.$variant].color.static
      : VARIANT_PROPS[props.$variant].placeholder};
  border: 1px solid
    ${(props) =>
      props.$disabled
        ? VARIANT_PROPS[props.$variant].border.disabled
        : VARIANT_PROPS[props.$variant].border.static};
  background-color: ${(props) =>
    props.$disabled
      ? VARIANT_PROPS[props.$variant].background.disabled
      : VARIANT_PROPS[props.$variant].background.static};

  &:focus-visible {
    outline: 2px solid ${(props) => VARIANT_PROPS[props.$variant].focus};
  }
`

export const StyledTriggerText = styled.span`
  flex: 1;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledChevron = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.$open ? '180deg' : '0deg')});
`

export const StyledDropdown = styled.div`
  position: absolute;
  left: -4px;
  width: calc(100% + 8px);
  padding: 4px;
  background: ${COLORS.white};
  border: 1px solid ${alpha(COLORS.black, 10)};
  border-radius: 16px;
  box-shadow: 0 4px 20px ${alpha(COLORS.black, 15)};
  z-index: 1000;
`

export const StyledOption = styled.button<{ $selected: boolean; $disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  height: 40px;
  padding: 0 14px;
  border: none;
  background: ${(props) => (props.$selected ? alpha(COLORS.black, 6) : 'transparent')};
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  cursor: ${(props) => (props.$disabled ? 'not-allowed' : 'pointer')};
  color: ${(props) => (props.$disabled ? alpha(COLORS.black, 40) : COLORS.black)};
  transition: background-color 0.15s ease;

  &:hover:not(:disabled) {
    background: ${alpha(COLORS.black, 8)};
  }

  &:focus-visible {
    outline: none;
    background: ${alpha(COLORS.black, 8)};
  }
`

export const StyledCheckmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${COLORS.black};
`
