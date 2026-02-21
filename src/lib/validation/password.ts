import { string } from 'yup'

export const password = (message = 'Must contain at least one letter and one number') => {
  return string()
    .min(8, 'Must be at least 8 characters')
    .matches(/(?=.*[a-zA-Z])(?=.*\d)/, message)
}
