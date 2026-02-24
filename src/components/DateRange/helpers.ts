export const formatDate = (date: Date, locale: string): string => {
  return new Intl.DateTimeFormat(locale, { year: 'numeric', month: 'long' }).format(date)
}
