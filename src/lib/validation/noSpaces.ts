import { string } from 'yup'

export const noSpaces = (message = 'Must not contain spaces') => {
  return string().matches(/^\S+$/, message)
}
