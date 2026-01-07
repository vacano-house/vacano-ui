/**
 * Go-style date formatting
 * Reference time: Mon Jan 2 15:04:05 MST 2006
 *
 * Tokens:
 * - 2006: 4-digit year
 * - 06: 2-digit year
 * - January: full month name
 * - Jan: short month name
 * - 01: zero-padded month (01-12)
 * - 1: month (1-12)
 * - Monday: full weekday name
 * - Mon: short weekday name
 * - 02: zero-padded day (01-31)
 * - 2: day (1-31)
 * - _2: space-padded day
 * - 15: 24-hour hour (00-23)
 * - 03: 12-hour hour zero-padded (01-12)
 * - 3: 12-hour hour (1-12)
 * - 04: minute (00-59)
 * - 05: second (00-59)
 * - PM: AM/PM uppercase
 * - pm: am/pm lowercase
 */
export const formatDateGo = (date: Date, format: string, locale: string = 'en'): string => {
  const year = date.getFullYear()
  const month = date.getMonth()
  const day = date.getDate()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  const hour12 = hours % 12 || 12
  const isPM = hours >= 12

  const monthLong = new Intl.DateTimeFormat(locale, { month: 'long' }).format(date)
  const monthShort = new Intl.DateTimeFormat(locale, { month: 'short' }).format(date)
  const weekdayLong = new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date)
  const weekdayShort = new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date)

  const pad = (n: number): string => n.toString().padStart(2, '0')
  const spacePad = (n: number): string => n.toString().padStart(2, ' ')

  // Use placeholder approach to avoid token collision
  // First replace tokens with unique placeholders, then replace placeholders with values
  // Placeholder IDs use only letters to avoid being matched by digit tokens
  const placeholder = (id: string) => `\x00${id}\x00`

  // Tokens ordered by length (longest first) to avoid partial matches
  // Each token maps to [placeholder_id, actual_value]
  const tokens: [string, string, string][] = [
    ['2006', 'YEARFOUR', year.toString()],
    ['January', 'MONTHLONG', monthLong],
    ['Monday', 'WEEKDAYLONG', weekdayLong],
    ['Jan', 'MONTHSHORT', monthShort],
    ['Mon', 'WEEKDAYSHORT', weekdayShort],
    ['06', 'YEARTWO', year.toString().slice(-2)],
    ['01', 'MONTHPAD', pad(month + 1)],
    ['_2', 'DAYSPACE', spacePad(day)],
    ['02', 'DAYPAD', pad(day)],
    ['15', 'HOURTWENTYFOUR', pad(hours)],
    ['03', 'HOURTWELVEPAD', pad(hour12)],
    ['04', 'MINUTE', pad(minutes)],
    ['05', 'SECOND', pad(seconds)],
    ['PM', 'AMPMUP', isPM ? 'PM' : 'AM'],
    ['pm', 'AMPMLOW', isPM ? 'pm' : 'am'],
    // Single character tokens must come last
    ['1', 'MONTH', (month + 1).toString()],
    ['2', 'DAY', day.toString()],
    ['3', 'HOURTWELVE', hour12.toString()],
  ]

  let result = format

  // First pass: replace all tokens with placeholders
  for (const [token, id] of tokens) {
    result = result.split(token).join(placeholder(id))
  }

  // Second pass: replace all placeholders with actual values
  for (const [, id, value] of tokens) {
    result = result.split(placeholder(id)).join(value)
  }

  return result
}

/**
 * Get days in a month
 */
export const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate()
}

/**
 * Get the first day of the month (0 = Sunday, 6 = Saturday)
 */
export const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay()
}

/**
 * Generate calendar grid for a month
 */
export const generateCalendarDays = (
  year: number,
  month: number,
  weekStartsOn: 0 | 1 = 1,
): (number | null)[] => {
  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  // Adjust for week start
  let leadingEmptyDays = firstDay - weekStartsOn
  if (leadingEmptyDays < 0) {
    leadingEmptyDays += 7
  }

  const days: (number | null)[] = []

  // Leading empty cells
  for (let i = 0; i < leadingEmptyDays; i++) {
    days.push(null)
  }

  // Days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    days.push(day)
  }

  // Trailing empty cells to complete the grid (6 rows × 7 days = 42)
  while (days.length < 42) {
    days.push(null)
  }

  return days
}

/**
 * Get localized weekday names
 */
export const getWeekdayNames = (locale: string, weekStartsOn: 0 | 1 = 1): string[] => {
  const weekdays: string[] = []

  for (let i = 0; i < 7; i++) {
    const dayIndex = (weekStartsOn + i) % 7
    const date = new Date(2024, 0, 7 + dayIndex)
    weekdays.push(new Intl.DateTimeFormat(locale, { weekday: 'short' }).format(date))
  }

  return weekdays
}

/**
 * Get localized month names
 */
export const getMonthNames = (locale: string): string[] => {
  const months: string[] = []
  for (let i = 0; i < 12; i++) {
    const date = new Date(2024, i, 1)
    months.push(new Intl.DateTimeFormat(locale, { month: 'long' }).format(date))
  }
  return months
}

/**
 * Get short month names
 */
export const getShortMonthNames = (locale: string): string[] => {
  const months: string[] = []
  for (let i = 0; i < 12; i++) {
    const date = new Date(2024, i, 1)
    months.push(new Intl.DateTimeFormat(locale, { month: 'short' }).format(date))
  }
  return months
}

/**
 * Check if two dates are the same day
 */
export const isSameDay = (a: Date, b: Date): boolean => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

/**
 * Check if two dates are in the same month
 */
export const isSameMonth = (a: Date, b: Date): boolean => {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()
}

/**
 * Check if two dates are in the same year
 */
export const isSameYear = (a: Date, b: Date): boolean => {
  return a.getFullYear() === b.getFullYear()
}

/**
 * Check if a date is within a range
 */
export const isDateInRange = (date: Date, minDate?: Date, maxDate?: Date): boolean => {
  if (minDate && date < minDate) return false
  if (maxDate && date > maxDate) return false
  return true
}

/**
 * Check if a day is disabled based on min/max dates
 */
export const isDayDisabled = (
  year: number,
  month: number,
  day: number,
  minDate?: Date,
  maxDate?: Date,
): boolean => {
  const date = new Date(year, month, day)

  if (minDate) {
    const minDay = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())
    if (date < minDay) return true
  }

  if (maxDate) {
    const maxDay = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())
    if (date > maxDay) return true
  }

  return false
}

/**
 * Check if a month is disabled based on min/max dates
 */
export const isMonthDisabled = (
  year: number,
  month: number,
  minDate?: Date,
  maxDate?: Date,
): boolean => {
  if (minDate) {
    const minYear = minDate.getFullYear()
    const minMonth = minDate.getMonth()
    if (year < minYear || (year === minYear && month < minMonth)) return true
  }

  if (maxDate) {
    const maxYear = maxDate.getFullYear()
    const maxMonth = maxDate.getMonth()
    if (year > maxYear || (year === maxYear && month > maxMonth)) return true
  }

  return false
}

/**
 * Check if a year is disabled based on min/max dates
 */
export const isYearDisabled = (year: number, minDate?: Date, maxDate?: Date): boolean => {
  if (minDate && year < minDate.getFullYear()) return true
  if (maxDate && year > maxDate.getFullYear()) return true
  return false
}

/**
 * Generate year range for year picker
 */
export const generateYearRange = (centerYear: number, range: number = 12): number[] => {
  const startYear = centerYear - Math.floor(range / 2)
  const years: number[] = []
  for (let i = 0; i < range; i++) {
    years.push(startYear + i)
  }
  return years
}

/**
 * Get default display format based on mode
 */
export const getDefaultDisplayFormat = (mode: 'date' | 'month' | 'year'): string => {
  switch (mode) {
    case 'date':
      return '02.01.2006'
    case 'month':
      return 'January 2006'
    case 'year':
      return '2006'
  }
}
