import { string } from 'yup'

export const phone = (message = 'Invalid phone number') => {
  return string().matches(/^\+?[1-9]\d{6,14}$/, message)
}
