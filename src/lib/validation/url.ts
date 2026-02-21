import { string } from 'yup'

export const url = (message = 'Invalid URL') => {
  return string().matches(
    /^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w\-.~:/?#[\]@!$&'()*+,;=%]*)?$/,
    message,
  )
}
