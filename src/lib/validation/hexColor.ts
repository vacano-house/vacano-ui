import { string } from 'yup'

export const hexColor = (message = 'Invalid hex color') => {
  return string().matches(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, message)
}
