import { describe, expect, it } from 'vitest'

import {
  formatDateGo,
  generateCalendarDays,
  generateYearRange,
  getDaysInMonth,
  getDefaultDisplayFormat,
  getFirstDayOfMonth,
  getMonthNames,
  getShortMonthNames,
  getWeekdayNames,
  isDayDisabled,
  isMonthDisabled,
  isSameDay,
  isSameMonth,
  isSameYear,
  isYearDisabled,
} from './helpers'

describe('formatDateGo', () => {
  // Test date: August 13, 2026, 15:04:05
  const testDate = new Date(2026, 7, 13, 15, 4, 5)

  it('formats DD.MM.YYYY correctly', () => {
    expect(formatDateGo(testDate, '02.01.2006')).toBe('13.08.2026')
  })

  it('formats MM/DD/YYYY correctly', () => {
    expect(formatDateGo(testDate, '01/02/2006')).toBe('08/13/2026')
  })

  it('formats YYYY-MM-DD correctly', () => {
    expect(formatDateGo(testDate, '2006-01-02')).toBe('2026-08-13')
  })

  it('formats with full month name', () => {
    expect(formatDateGo(testDate, 'January 2, 2006', 'en')).toBe('August 13, 2026')
  })

  it('formats with short month name', () => {
    expect(formatDateGo(testDate, 'Jan 2, 2006', 'en')).toBe('Aug 13, 2026')
  })

  it('formats with weekday', () => {
    const result = formatDateGo(testDate, 'Monday, January 2, 2006', 'en')
    expect(result).toBe('Thursday, August 13, 2026')
  })

  it('formats with short weekday', () => {
    const result = formatDateGo(testDate, 'Mon, Jan 2, 2006', 'en')
    expect(result).toBe('Thu, Aug 13, 2026')
  })

  it('formats 2-digit year', () => {
    expect(formatDateGo(testDate, '02/01/06')).toBe('13/08/26')
  })

  it('formats time 24-hour', () => {
    expect(formatDateGo(testDate, '15:04:05')).toBe('15:04:05')
  })

  it('formats time 12-hour with AM/PM', () => {
    expect(formatDateGo(testDate, '03:04:05 PM')).toBe('03:04:05 PM')
  })

  it('formats time 12-hour AM', () => {
    const morningDate = new Date(2026, 7, 13, 9, 30, 0)
    expect(formatDateGo(morningDate, '03:04 PM')).toBe('09:30 AM')
  })

  it('formats with locale ru', () => {
    const result = formatDateGo(testDate, '02 January 2006', 'ru')
    // Russian month name will vary by environment, just check structure
    expect(result).toMatch(/^\d{2} \S+ \d{4}$/)
  })

  it('handles single digit day without padding', () => {
    const date = new Date(2026, 0, 5)
    expect(formatDateGo(date, '2 Jan 2006', 'en')).toBe('5 Jan 2026')
  })

  it('handles single digit month without padding', () => {
    const date = new Date(2026, 0, 15)
    expect(formatDateGo(date, '02/1/2006')).toBe('15/1/2026')
  })

  it('handles space-padded day', () => {
    const date = new Date(2026, 0, 5)
    expect(formatDateGo(date, '_2 Jan 2006', 'en')).toBe(' 5 Jan 2026')
  })
})

describe('getDaysInMonth', () => {
  it('returns 31 for January', () => {
    expect(getDaysInMonth(2024, 0)).toBe(31)
  })

  it('returns 28 for February in non-leap year', () => {
    expect(getDaysInMonth(2023, 1)).toBe(28)
  })

  it('returns 29 for February in leap year', () => {
    expect(getDaysInMonth(2024, 1)).toBe(29)
  })

  it('returns 30 for April', () => {
    expect(getDaysInMonth(2024, 3)).toBe(30)
  })
})

describe('getFirstDayOfMonth', () => {
  it('returns correct day for January 2024 (Monday)', () => {
    expect(getFirstDayOfMonth(2024, 0)).toBe(1) // Monday
  })

  it('returns correct day for August 2026 (Saturday)', () => {
    expect(getFirstDayOfMonth(2026, 7)).toBe(6) // Saturday
  })
})

describe('generateCalendarDays', () => {
  it('generates 42 cells', () => {
    const days = generateCalendarDays(2024, 0, 1)
    expect(days.length).toBe(42)
  })

  it('starts with correct day when week starts Monday', () => {
    // January 2024 starts on Monday
    const days = generateCalendarDays(2024, 0, 1)
    expect(days[0]).toBe(1) // First cell should be day 1
  })

  it('has leading nulls when month starts mid-week', () => {
    // August 2026 starts on Saturday (weekStartsOn=1 means Mon first)
    const days = generateCalendarDays(2026, 7, 1)
    // Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5 -> 5 leading nulls
    expect(days[0]).toBe(null)
    expect(days[4]).toBe(null)
    expect(days[5]).toBe(1) // Saturday
  })

  it('contains all days of the month', () => {
    const days = generateCalendarDays(2024, 0, 1) // January 2024
    const actualDays = days.filter((d) => d !== null)
    expect(actualDays.length).toBe(31)
    expect(actualDays).toContain(1)
    expect(actualDays).toContain(31)
  })
})

describe('getWeekdayNames', () => {
  it('returns 7 weekday names', () => {
    const names = getWeekdayNames('en', 1)
    expect(names.length).toBe(7)
  })

  it('starts with Monday when weekStartsOn=1', () => {
    const names = getWeekdayNames('en', 1)
    expect(names[0]).toBe('Mon')
  })

  it('starts with Sunday when weekStartsOn=0', () => {
    const names = getWeekdayNames('en', 0)
    expect(names[0]).toBe('Sun')
  })
})

describe('getMonthNames', () => {
  it('returns 12 month names', () => {
    const names = getMonthNames('en')
    expect(names.length).toBe(12)
  })

  it('returns January as first month', () => {
    const names = getMonthNames('en')
    expect(names[0]).toBe('January')
  })

  it('returns December as last month', () => {
    const names = getMonthNames('en')
    expect(names[11]).toBe('December')
  })
})

describe('getShortMonthNames', () => {
  it('returns 12 short month names', () => {
    const names = getShortMonthNames('en')
    expect(names.length).toBe(12)
  })

  it('returns Jan as first month', () => {
    const names = getShortMonthNames('en')
    expect(names[0]).toBe('Jan')
  })
})

describe('isSameDay', () => {
  it('returns true for same day', () => {
    const a = new Date(2024, 5, 15, 10, 30)
    const b = new Date(2024, 5, 15, 20, 45)
    expect(isSameDay(a, b)).toBe(true)
  })

  it('returns false for different day', () => {
    const a = new Date(2024, 5, 15)
    const b = new Date(2024, 5, 16)
    expect(isSameDay(a, b)).toBe(false)
  })
})

describe('isSameMonth', () => {
  it('returns true for same month', () => {
    const a = new Date(2024, 5, 1)
    const b = new Date(2024, 5, 30)
    expect(isSameMonth(a, b)).toBe(true)
  })

  it('returns false for different month', () => {
    const a = new Date(2024, 5, 15)
    const b = new Date(2024, 6, 15)
    expect(isSameMonth(a, b)).toBe(false)
  })
})

describe('isSameYear', () => {
  it('returns true for same year', () => {
    const a = new Date(2024, 0, 1)
    const b = new Date(2024, 11, 31)
    expect(isSameYear(a, b)).toBe(true)
  })

  it('returns false for different year', () => {
    const a = new Date(2024, 5, 15)
    const b = new Date(2025, 5, 15)
    expect(isSameYear(a, b)).toBe(false)
  })
})

describe('isDayDisabled', () => {
  it('returns false when no constraints', () => {
    expect(isDayDisabled(2024, 5, 15)).toBe(false)
  })

  it('returns true when before minDate', () => {
    const minDate = new Date(2024, 5, 15)
    expect(isDayDisabled(2024, 5, 14, minDate)).toBe(true)
  })

  it('returns false when equal to minDate', () => {
    const minDate = new Date(2024, 5, 15)
    expect(isDayDisabled(2024, 5, 15, minDate)).toBe(false)
  })

  it('returns true when after maxDate', () => {
    const maxDate = new Date(2024, 5, 15)
    expect(isDayDisabled(2024, 5, 16, undefined, maxDate)).toBe(true)
  })

  it('returns false when equal to maxDate', () => {
    const maxDate = new Date(2024, 5, 15)
    expect(isDayDisabled(2024, 5, 15, undefined, maxDate)).toBe(false)
  })
})

describe('isMonthDisabled', () => {
  it('returns false when no constraints', () => {
    expect(isMonthDisabled(2024, 5)).toBe(false)
  })

  it('returns true when year is before minDate year', () => {
    const minDate = new Date(2024, 5, 1)
    expect(isMonthDisabled(2023, 5, minDate)).toBe(true)
  })

  it('returns true when same year but month before minDate month', () => {
    const minDate = new Date(2024, 5, 1)
    expect(isMonthDisabled(2024, 4, minDate)).toBe(true)
  })

  it('returns false when equal to minDate month', () => {
    const minDate = new Date(2024, 5, 1)
    expect(isMonthDisabled(2024, 5, minDate)).toBe(false)
  })
})

describe('isYearDisabled', () => {
  it('returns false when no constraints', () => {
    expect(isYearDisabled(2024)).toBe(false)
  })

  it('returns true when before minDate year', () => {
    const minDate = new Date(2024, 0, 1)
    expect(isYearDisabled(2023, minDate)).toBe(true)
  })

  it('returns true when after maxDate year', () => {
    const maxDate = new Date(2024, 11, 31)
    expect(isYearDisabled(2025, undefined, maxDate)).toBe(true)
  })
})

describe('generateYearRange', () => {
  it('generates correct number of years', () => {
    const years = generateYearRange(2024, 12)
    expect(years.length).toBe(12)
  })

  it('centers around the given year', () => {
    const years = generateYearRange(2024, 12)
    expect(years).toContain(2024)
    expect(years[0]).toBe(2018)
    expect(years[11]).toBe(2029)
  })
})

describe('getDefaultDisplayFormat', () => {
  it('returns date format for date mode', () => {
    expect(getDefaultDisplayFormat('date')).toBe('02.01.2006')
  })

  it('returns month format for month mode', () => {
    expect(getDefaultDisplayFormat('month')).toBe('January 2006')
  })

  it('returns year format for year mode', () => {
    expect(getDefaultDisplayFormat('year')).toBe('2006')
  })
})
