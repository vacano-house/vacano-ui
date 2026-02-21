import { string } from 'yup'

export const ipv4 = (message = 'Invalid IPv4 address') => {
  return string().matches(
    /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/,
    message,
  )
}
