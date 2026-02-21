import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { DATE_PICKER_SIZE_PROPS } from './constants'
import {
  formatDateGo,
  generateCalendarDays,
  generateYearRange,
  getDefaultDisplayFormat,
  getShortMonthNames,
  getWeekdayNames,
  isDayDisabled,
  isMonthDisabled,
  isSameDay,
  isSameMonth,
  isSameYear,
  isYearDisabled,
} from './helpers'
import {
  StyledCalendar,
  StyledCalendarHeader,
  StyledCalendarTitle,
  StyledContainer,
  StyledDayCell,
  StyledDaysGrid,
  StyledEmptyCell,
  StyledLabel,
  StyledMessage,
  StyledMonthCell,
  StyledMonthsGrid,
  StyledNavButton,
  StyledNavButtons,
  StyledPortalCalendar,
  StyledTrigger,
  StyledTriggerIcon,
  StyledTriggerText,
  StyledWeekday,
  StyledWeekdays,
  StyledYearCell,
  StyledYearsGrid,
} from './styled'
import { CalendarView, DatePickerPosition, DatePickerProps } from './types'
import { ChevronDown, ChevronLeft, ChevronRight } from '../../icons/Lucide'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('date-picker')

const CALENDAR_GAP = 4
const CALENDAR_MIN_HEIGHT = 300

type PortalPosition = {
  top: number
  left: number
}

export const DatePicker = ({
  value,
  onChange,
  mode = 'date',
  displayFormat,
  placeholder,
  locale = 'en',
  weekStartsOn = 1,
  minDate,
  maxDate,
  size = 'default',
  variant = 'normal',
  disabled = false,
  fullWidth = false,
  label,
  message,
  portalRenderNode,
  open: controlledOpen,
  onOpen,
  onClose,
  className,
  classnames,
  ref,
  ...rest
}: DatePickerProps) => {
  const today = useMemo(() => new Date(), [])
  const [internalOpen, setInternalOpen] = useState(false)
  const [portalPosition, setPortalPosition] = useState<PortalPosition>({ top: 0, left: 0 })
  const [position, setPosition] = useState<DatePickerPosition>('bottom')
  const [view, setView] = useState<CalendarView>(() => {
    if (mode === 'year') return 'years'
    if (mode === 'month') return 'months'
    return 'days'
  })

  const [viewDate, setViewDate] = useState<Date>(() => value ?? today)
  const [yearRangeStart, setYearRangeStart] = useState(() => {
    const year = value?.getFullYear() ?? today.getFullYear()
    return year - 6
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const format = displayFormat ?? getDefaultDisplayFormat(mode)
  const weekdays = useMemo(() => getWeekdayNames(locale, weekStartsOn), [locale, weekStartsOn])
  const monthNames = useMemo(() => getShortMonthNames(locale), [locale])

  const calendarDays = useMemo(
    () => generateCalendarDays(viewDate.getFullYear(), viewDate.getMonth(), weekStartsOn),
    [viewDate, weekStartsOn],
  )

  const yearRange = useMemo(() => generateYearRange(yearRangeStart + 6, 12), [yearRangeStart])

  const displayValue = useMemo(() => {
    if (!value) return null
    return formatDateGo(value, format, locale)
  }, [value, format, locale])

  const placeholderText = placeholder ?? format.replace(/2006|06|January|Jan|01|02/g, '__')

  const updatePosition = useCallback(() => {
    if (!triggerRef.current) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const calendarHeight = calendarRef.current?.offsetHeight ?? CALENDAR_MIN_HEIGHT

    const spaceBelow = window.innerHeight - triggerRect.bottom - CALENDAR_GAP
    const spaceAbove = triggerRect.top - CALENDAR_GAP

    const newPosition: DatePickerPosition =
      spaceBelow < calendarHeight && spaceAbove > spaceBelow ? 'top' : 'bottom'
    setPosition(newPosition)

    if (portalRenderNode) {
      const top =
        newPosition === 'bottom'
          ? triggerRect.bottom + CALENDAR_GAP
          : triggerRect.top - calendarHeight - CALENDAR_GAP

      setPortalPosition({
        top,
        left: triggerRect.left,
      })
    }
  }, [portalRenderNode])

  const handleOpen = useCallback(() => {
    if (disabled) return

    if (isControlled) {
      onOpen?.()
    } else {
      setInternalOpen(true)
      onOpen?.()
    }

    // Reset view based on mode
    if (mode === 'year') {
      setView('years')
    } else if (mode === 'month') {
      setView('months')
    } else {
      setView('days')
    }

    // Reset view date to value or today
    const newViewDate = value ?? today
    setViewDate(newViewDate)
    setYearRangeStart(newViewDate.getFullYear() - 6)
  }, [disabled, isControlled, onOpen, mode, value, today])

  const handleClose = useCallback(() => {
    if (isControlled) {
      onClose?.()
    } else {
      setInternalOpen(false)
      onClose?.()
    }
  }, [isControlled, onClose])

  const handleToggle = useCallback(() => {
    if (open) {
      handleClose()
    } else {
      handleOpen()
    }
  }, [open, handleClose, handleOpen])

  const handleSelectDay = useCallback(
    (day: number) => {
      const newDate = new Date(viewDate.getFullYear(), viewDate.getMonth(), day)
      onChange?.(newDate)
      handleClose()
    },
    [viewDate, onChange, handleClose],
  )

  const handleSelectMonth = useCallback(
    (month: number) => {
      if (mode === 'month') {
        const newDate = new Date(viewDate.getFullYear(), month, 1)
        onChange?.(newDate)
        handleClose()
      } else {
        setViewDate(new Date(viewDate.getFullYear(), month, 1))
        setView('days')
      }
    },
    [mode, viewDate, onChange, handleClose],
  )

  const handleSelectYear = useCallback(
    (year: number) => {
      if (mode === 'year') {
        const newDate = new Date(year, 0, 1)
        onChange?.(newDate)
        handleClose()
      } else if (mode === 'month') {
        setViewDate(new Date(year, viewDate.getMonth(), 1))
        setView('months')
      } else {
        setViewDate(new Date(year, viewDate.getMonth(), 1))
        setView('months')
      }
    },
    [mode, viewDate, onChange, handleClose],
  )

  const handlePrevMonth = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() - 1, 1))
  }, [])

  const handleNextMonth = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + 1, 1))
  }, [])

  const handlePrevYear = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear() - 1, prev.getMonth(), 1))
  }, [])

  const handleNextYear = useCallback(() => {
    setViewDate((prev) => new Date(prev.getFullYear() + 1, prev.getMonth(), 1))
  }, [])

  const handlePrevYearRange = useCallback(() => {
    setYearRangeStart((prev) => prev - 12)
  }, [])

  const handleNextYearRange = useCallback(() => {
    setYearRangeStart((prev) => prev + 12)
  }, [])

  const handleTitleClick = useCallback(() => {
    if (view === 'days') {
      setView('months')
    } else if (view === 'months') {
      setView('years')
    }
  }, [view])

  useLayoutEffect(() => {
    if (open) {
      updatePosition()
    }
  }, [open, updatePosition])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node
      const isOutsideContainer = containerRef.current && !containerRef.current.contains(target)
      const isOutsideCalendar = calendarRef.current && !calendarRef.current.contains(target)

      if (portalRenderNode) {
        if (isOutsideContainer && isOutsideCalendar) {
          handleClose()
        }
      } else {
        if (isOutsideContainer) {
          handleClose()
        }
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose()
      }
    }

    const handleScroll = () => {
      if (open && portalRenderNode) {
        updatePosition()
      }
    }

    const handleResize = () => {
      if (open && portalRenderNode) {
        updatePosition()
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
      document.addEventListener('keydown', handleEscape)

      if (portalRenderNode) {
        window.addEventListener('scroll', handleScroll, true)
        window.addEventListener('resize', handleResize)
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [open, handleClose, portalRenderNode, updatePosition])

  const iconSize = DATE_PICKER_SIZE_PROPS[size].iconSize

  const renderDaysView = () => (
    <>
      <StyledCalendarHeader className={css('header', classnames?.header)}>
        <StyledCalendarTitle onClick={handleTitleClick} type="button">
          {new Intl.DateTimeFormat(locale, { month: 'long', year: 'numeric' }).format(viewDate)}
        </StyledCalendarTitle>
        <StyledNavButtons>
          <StyledNavButton onClick={handlePrevMonth} type="button" aria-label="Previous month">
            <ChevronLeft size={16} />
          </StyledNavButton>
          <StyledNavButton onClick={handleNextMonth} type="button" aria-label="Next month">
            <ChevronRight size={16} />
          </StyledNavButton>
        </StyledNavButtons>
      </StyledCalendarHeader>
      <StyledWeekdays>
        {weekdays.map((day, i) => (
          <StyledWeekday key={i}>{day}</StyledWeekday>
        ))}
      </StyledWeekdays>
      <StyledDaysGrid className={css('grid', classnames?.grid)}>
        {calendarDays.map((day, i) =>
          day === null ? (
            <StyledEmptyCell key={i} />
          ) : (
            <StyledDayCell
              key={i}
              type="button"
              className={css('cell', classnames?.cell)}
              $selected={
                value
                  ? isSameDay(value, new Date(viewDate.getFullYear(), viewDate.getMonth(), day))
                  : false
              }
              $today={isSameDay(today, new Date(viewDate.getFullYear(), viewDate.getMonth(), day))}
              $disabled={isDayDisabled(
                viewDate.getFullYear(),
                viewDate.getMonth(),
                day,
                minDate,
                maxDate,
              )}
              disabled={isDayDisabled(
                viewDate.getFullYear(),
                viewDate.getMonth(),
                day,
                minDate,
                maxDate,
              )}
              onClick={() => handleSelectDay(day)}
            >
              {day}
            </StyledDayCell>
          ),
        )}
      </StyledDaysGrid>
    </>
  )

  const renderMonthsView = () => (
    <>
      <StyledCalendarHeader className={css('header', classnames?.header)}>
        <StyledCalendarTitle onClick={handleTitleClick} type="button">
          {viewDate.getFullYear()}
        </StyledCalendarTitle>
        <StyledNavButtons>
          <StyledNavButton onClick={handlePrevYear} type="button" aria-label="Previous year">
            <ChevronLeft size={16} />
          </StyledNavButton>
          <StyledNavButton onClick={handleNextYear} type="button" aria-label="Next year">
            <ChevronRight size={16} />
          </StyledNavButton>
        </StyledNavButtons>
      </StyledCalendarHeader>
      <StyledMonthsGrid className={css('grid', classnames?.grid)}>
        {monthNames.map((month, i) => (
          <StyledMonthCell
            key={i}
            type="button"
            className={css('cell', classnames?.cell)}
            $selected={value ? isSameMonth(value, new Date(viewDate.getFullYear(), i, 1)) : false}
            $current={isSameMonth(today, new Date(viewDate.getFullYear(), i, 1))}
            $disabled={isMonthDisabled(viewDate.getFullYear(), i, minDate, maxDate)}
            disabled={isMonthDisabled(viewDate.getFullYear(), i, minDate, maxDate)}
            onClick={() => handleSelectMonth(i)}
          >
            {month}
          </StyledMonthCell>
        ))}
      </StyledMonthsGrid>
    </>
  )

  const renderYearsView = () => (
    <>
      <StyledCalendarHeader className={css('header', classnames?.header)}>
        <StyledCalendarTitle type="button" style={{ cursor: 'default' }}>
          {yearRange[0]} - {yearRange[yearRange.length - 1]}
        </StyledCalendarTitle>
        <StyledNavButtons>
          <StyledNavButton onClick={handlePrevYearRange} type="button" aria-label="Previous years">
            <ChevronLeft size={16} />
          </StyledNavButton>
          <StyledNavButton onClick={handleNextYearRange} type="button" aria-label="Next years">
            <ChevronRight size={16} />
          </StyledNavButton>
        </StyledNavButtons>
      </StyledCalendarHeader>
      <StyledYearsGrid className={css('grid', classnames?.grid)}>
        {yearRange.map((year) => (
          <StyledYearCell
            key={year}
            type="button"
            className={css('cell', classnames?.cell)}
            $selected={value ? isSameYear(value, new Date(year, 0, 1)) : false}
            $current={today.getFullYear() === year}
            $disabled={isYearDisabled(year, minDate, maxDate)}
            disabled={isYearDisabled(year, minDate, maxDate)}
            onClick={() => handleSelectYear(year)}
          >
            {year}
          </StyledYearCell>
        ))}
      </StyledYearsGrid>
    </>
  )

  const renderCalendarContent = () => {
    switch (view) {
      case 'days':
        return renderDaysView()
      case 'months':
        return renderMonthsView()
      case 'years':
        return renderYearsView()
    }
  }

  const calendar = portalRenderNode ? (
    createPortal(
      <StyledPortalCalendar
        ref={calendarRef}
        $open={open}
        $position={position}
        className={css('calendar', classnames?.calendar)}
        style={{ top: portalPosition.top, left: portalPosition.left }}
      >
        {renderCalendarContent()}
      </StyledPortalCalendar>,
      portalRenderNode,
    )
  ) : (
    <StyledCalendar
      ref={calendarRef}
      $open={open}
      $position={position}
      className={css('calendar', classnames?.calendar)}
    >
      {renderCalendarContent()}
    </StyledCalendar>
  )

  return (
    <StyledContainer
      {...rest}
      ref={ref ?? containerRef}
      $fullWidth={fullWidth}
      className={css('container', className)}
    >
      {label && <StyledLabel variant={variant}>{label}</StyledLabel>}
      <StyledTrigger
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        disabled={disabled}
        $size={size}
        $variant={variant}
        $disabled={disabled}
        $open={open}
        $hasValue={!!displayValue}
        className={css('trigger', classnames?.trigger)}
      >
        <StyledTriggerText>{displayValue ?? placeholderText}</StyledTriggerText>
        <StyledTriggerIcon $open={open}>
          <ChevronDown size={iconSize} />
        </StyledTriggerIcon>
      </StyledTrigger>
      {calendar}
      {message && <StyledMessage variant={variant}>{message}</StyledMessage>}
    </StyledContainer>
  )
}
