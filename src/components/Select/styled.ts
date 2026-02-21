import styled from '@emotion/styled'

import { getSelectSizeProps, getSelectVariantProps } from './helpers'
import { SelectVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { alpha, COLORS, VacanoComponentSize } from '../../lib'

export const StyledContainer = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  display: grid;
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
  height: ${(props) => getSelectSizeProps(props.$size).height};
  padding: ${(props) => getSelectSizeProps(props.$size).padding};
  border-radius: ${(props) => getSelectSizeProps(props.$size).radius};

  color: ${(props) =>
    props.$hasValue
      ? props.$disabled
        ? getSelectVariantProps(props.$variant).color.disabled
        : getSelectVariantProps(props.$variant).color.static
      : getSelectVariantProps(props.$variant).placeholder};
  border: 1px solid
    ${(props) =>
      props.$disabled
        ? getSelectVariantProps(props.$variant).border.disabled
        : getSelectVariantProps(props.$variant).border.static};
  background-color: ${(props) =>
    props.$disabled
      ? getSelectVariantProps(props.$variant).background.disabled
      : getSelectVariantProps(props.$variant).background.static};
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

const dropdownStyles = `
  display: grid;
  gap: 2px;
  padding: 4px;
  background: ${COLORS.white};
  border: 1px solid ${alpha(COLORS.black, 10)};
  border-radius: 16px;
  box-shadow: 0 4px 20px ${alpha(COLORS.black, 15)};
  z-index: 1000;
`

export const StyledDropdown = styled.div`
  position: absolute;
  left: -4px;
  width: calc(100% + 8px);
  ${dropdownStyles}
`

export const StyledPortalDropdown = styled.div`
  position: fixed;
  ${dropdownStyles}
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

  & > span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    min-width: 0;
  }
`

export const StyledCheckmark = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: ${COLORS.black};
`
