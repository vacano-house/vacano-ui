import { string } from 'yup'

export const creditCard = (message = 'Invalid card number') => {
  return string().test('luhn', message, (value) => {
    if (!value) return true
    const digits = value.replace(/\D/g, '')
    if (digits.length < 13 || digits.length > 19) return false

    let sum = 0
    let double = false
    for (let i = digits.length - 1; i >= 0; i--) {
      let digit = Number(digits[i])
      if (double) {
        digit *= 2
        if (digit > 9) digit -= 9
      }
      sum += digit
      double = !double
    }
    return sum % 10 === 0
  })
}
