import { string } from 'yup'

export const slug = (message = 'Only lowercase letters, numbers, and hyphens') => {
  return string().matches(/^[a-z0-9]+(-[a-z0-9]+)*$/, message)
}
