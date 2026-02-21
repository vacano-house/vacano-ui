import { string } from 'yup'

export const email = (options = 'Invalid email address') => {
  return string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, options)
}
