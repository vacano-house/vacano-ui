import { date } from 'yup'

export const minAge = (years: number, message?: string) => {
  return date().test('min-age', message ?? `Must be at least ${years} years old`, (value) => {
    if (!value) return true
    const cutoff = new Date()
    cutoff.setFullYear(cutoff.getFullYear() - years)
    return value <= cutoff
  })
}
