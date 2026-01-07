import styled from '@emotion/styled'

import {
  CALENDAR_CELL_SIZE,
  CALENDAR_GAP,
  CALENDAR_PADDING,
  DATE_PICKER_SIZE_PROPS,
  DATE_PICKER_VARIANT_PROPS,
} from './constants'
import { DatePickerVariant } from './types'
import { FieldLabel } from '../FieldLabel'
import { alpha, COLORS, VacanoComponentSize } from '../../lib'

export const StyledContainer = styled.div<{ $fullWidth: boolean }>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  gap: 2px;
  min-width: 180px;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'fit-content')};
`

export const StyledLabel = styled(FieldLabel)`
  margin-left: 6px;
`

export const StyledTrigger = styled.button<{
  $size: VacanoComponentSize
  $variant: DatePickerVariant
  $disabled: boolean
  $open: boolean
  $hasValue: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  outline: none;
  font-size: 14px;
  font-weight: 500;
  text-align: left;
  height: ${({ $size }) => DATE_PICKER_SIZE_PROPS[$size].height};
  padding: ${({ $size }) => DATE_PICKER_SIZE_PROPS[$size].padding};
  border-radius: ${({ $size }) => DATE_PICKER_SIZE_PROPS[$size].radius};
  color: ${({ $variant, $disabled, $hasValue }) =>
    $hasValue
      ? DATE_PICKER_VARIANT_PROPS[$variant].color[$disabled ? 'disabled' : 'static']
      : DATE_PICKER_VARIANT_PROPS[$variant].placeholder[$disabled ? 'disabled' : 'static']};
  border: 1px solid
    ${({ $variant, $disabled }) =>
      DATE_PICKER_VARIANT_PROPS[$variant].border[$disabled ? 'disabled' : 'static']};
  background-color: ${({ $variant, $disabled }) =>
    DATE_PICKER_VARIANT_PROPS[$variant].background[$disabled ? 'disabled' : 'static']};

  &:focus-visible {
    outline: 2px solid ${({ $variant }) => DATE_PICKER_VARIANT_PROPS[$variant].focus};
  }

  ${({ $open, $variant }) =>
    $open &&
    `
    outline: 2px solid ${DATE_PICKER_VARIANT_PROPS[$variant].focus};
  `}
`

export const StyledTriggerText = styled.span`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

export const StyledTriggerIcon = styled.span<{ $open: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: transform 0.15s ease;
  transform: ${({ $open }) => ($open ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const calendarStyles = `
  z-index: 100;
  background-color: ${COLORS.white};
  border: 1px solid ${alpha(COLORS.black, 15)};
  border-radius: 12px;
  box-shadow: 0 4px 16px ${alpha(COLORS.black, 12)};
  padding: ${CALENDAR_PADDING}px;
`

export const StyledCalendar = styled.div<{ $open: boolean }>`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  ${calendarStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`

export const StyledPortalCalendar = styled.div<{ $open: boolean }>`
  position: fixed;
  ${calendarStyles}
  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'translateY(0)' : 'translateY(-8px)')};
  transition:
    opacity 0.15s ease,
    transform 0.15s ease,
    visibility 0.15s;
`

export const StyledCalendarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`

export const StyledCalendarTitle = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: none;
  background: transparent;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  color: ${COLORS.black};
  cursor: pointer;

  &:hover {
    background-color: ${alpha(COLORS.black, 5)};
  }

  &:focus-visible {
    outline: 2px solid ${alpha(COLORS.black, 20)};
  }
`

export const StyledNavButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: none;
  background: transparent;
  border-radius: 6px;
  color: ${COLORS.black};
  cursor: pointer;

  &:hover {
    background-color: ${alpha(COLORS.black, 5)};
  }

  &:focus-visible {
    outline: 2px solid ${alpha(COLORS.black, 20)};
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;

    &:hover {
      background: transparent;
    }
  }
`

export const StyledNavButtons = styled.div`
  display: flex;
  gap: 4px;
`

export const StyledWeekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${CALENDAR_CELL_SIZE}px);
  gap: ${CALENDAR_GAP}px;
  margin-bottom: 4px;
`

export const StyledWeekday = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${CALENDAR_CELL_SIZE}px;
  font-size: 12px;
  font-weight: 500;
  color: ${alpha(COLORS.black, 50)};
  text-transform: uppercase;
`

export const StyledDaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, ${CALENDAR_CELL_SIZE}px);
  gap: ${CALENDAR_GAP}px;
`

export const StyledDayCell = styled.button<{
  $selected: boolean
  $today: boolean
  $disabled: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${CALENDAR_CELL_SIZE}px;
  height: ${CALENDAR_CELL_SIZE}px;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: ${({ $selected, $today }) => ($selected || $today ? 600 : 500)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $selected }) => ($selected ? COLORS.black : 'transparent')};
  color: ${({ $selected, $disabled }) =>
    $selected ? COLORS.white : $disabled ? alpha(COLORS.black, 30) : COLORS.black};

  ${({ $today, $selected }) =>
    $today &&
    !$selected &&
    `
    box-shadow: inset 0 0 0 1px ${COLORS.black};
  `}

  &:hover:not(:disabled) {
    background-color: ${({ $selected }) => ($selected ? COLORS.black : alpha(COLORS.black, 8))};
  }

  &:focus-visible {
    outline: 2px solid ${alpha(COLORS.black, 30)};
    outline-offset: 1px;
  }

  &:disabled {
    cursor: not-allowed;
  }
`

export const StyledMonthsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: ${7 * CALENDAR_CELL_SIZE + 6 * CALENDAR_GAP}px;
`

export const StyledMonthCell = styled.button<{
  $selected: boolean
  $current: boolean
  $disabled: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${({ $selected, $current }) => ($selected || $current ? 600 : 400)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $selected }) => ($selected ? COLORS.black : 'transparent')};
  color: ${({ $selected, $disabled }) =>
    $selected ? COLORS.white : $disabled ? alpha(COLORS.black, 30) : COLORS.black};

  ${({ $current, $selected }) =>
    $current &&
    !$selected &&
    `
    box-shadow: inset 0 0 0 1px ${COLORS.black};
  `}

  &:hover:not(:disabled) {
    background-color: ${({ $selected }) => ($selected ? COLORS.black : alpha(COLORS.black, 8))};
  }

  &:focus-visible {
    outline: 2px solid ${alpha(COLORS.black, 30)};
    outline-offset: 1px;
  }
`

export const StyledYearsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  width: ${7 * CALENDAR_CELL_SIZE + 6 * CALENDAR_GAP}px;
`

export const StyledYearCell = styled.button<{
  $selected: boolean
  $current: boolean
  $disabled: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${({ $selected, $current }) => ($selected || $current ? 600 : 400)};
  cursor: ${({ $disabled }) => ($disabled ? 'not-allowed' : 'pointer')};
  background-color: ${({ $selected }) => ($selected ? COLORS.black : 'transparent')};
  color: ${({ $selected, $disabled }) =>
    $selected ? COLORS.white : $disabled ? alpha(COLORS.black, 30) : COLORS.black};

  ${({ $current, $selected }) =>
    $current &&
    !$selected &&
    `
    box-shadow: inset 0 0 0 1px ${COLORS.black};
  `}

  &:hover:not(:disabled) {
    background-color: ${({ $selected }) => ($selected ? COLORS.black : alpha(COLORS.black, 8))};
  }

  &:focus-visible {
    outline: 2px solid ${alpha(COLORS.black, 30)};
    outline-offset: 1px;
  }
`

export const StyledEmptyCell = styled.div`
  width: ${CALENDAR_CELL_SIZE}px;
  height: ${CALENDAR_CELL_SIZE}px;
`
