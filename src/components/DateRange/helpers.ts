const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = MONTHS[date.getMonth()]
  return `${year}, ${month}`
}
