# Validation

Yup schema factories for common form validation patterns.

*Also known as: validators, schema helpers, yup presets, validation rules*

## When to use

- Use with [Form Wrappers](/components/form-wrappers) and `yupResolver` to validate form fields with pre-built rules.
- Each factory returns a Yup schema with a sensible default error message that can be overridden.

## Import

```tsx
import { validation } from '@vacano/ui/lib'

// Use in yup schema
const schema = yup.object({
  email: validation.email().required('Email is required'),
  phone: validation.phone(),
  website: validation.url(),
})
```

## email

Email address validation.

```tsx
validation.email()                        // 'Invalid email address'
validation.email('Введите email')         // custom message
```

**Pattern:** `^[^\s@]+@[^\s@]+\.[^\s@]+$`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid email address'` | Error message |

**Returns:** `yup.StringSchema`

## phone

International phone number validation.

```tsx
validation.phone()                        // 'Invalid phone number'
validation.phone('Неверный номер')        // custom message
```

**Pattern:** `^\+?[1-9]\d{6,14}$` — optional `+`, 7-15 digits, no leading zero.

**Examples:** `+79991234567`, `14155552671`, `+442071234567`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid phone number'` | Error message |

**Returns:** `yup.StringSchema`

## url

URL validation (http/https).

```tsx
validation.url()                          // 'Invalid URL'
validation.url('Введите ссылку')          // custom message
```

**Examples:** `https://example.com`, `http://sub.domain.io/path?q=1`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid URL'` | Error message |

**Returns:** `yup.StringSchema`

## password

Password strength validation — minimum 8 characters, at least one letter and one number.

```tsx
validation.password()                     // 'Must contain at least one letter and one number'
validation.password('Слабый пароль')      // custom message
```

**Examples:** `myPass123` (valid), `password` (invalid — no digits), `12345678` (invalid — no letters)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Must contain at least one letter and one number'` | Error message |

**Returns:** `yup.StringSchema` — also enforces `min(8)`.

## slug

URL-friendly slug validation — lowercase letters, numbers, hyphens.

```tsx
validation.slug()                         // 'Only lowercase letters, numbers, and hyphens'
validation.slug('Неверный slug')          // custom message
```

**Examples:** `my-post-title` (valid), `v2-release` (valid), `My Post` (invalid)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Only lowercase letters, numbers, and hyphens'` | Error message |

**Returns:** `yup.StringSchema`

## noSpaces

Validates that string contains no whitespace — useful for usernames, codes, tokens.

```tsx
validation.noSpaces()                     // 'Must not contain spaces'
validation.noSpaces('Без пробелов')       // custom message
```

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Must not contain spaces'` | Error message |

**Returns:** `yup.StringSchema`

## minAge

Date of birth validation — checks that date is at least N years ago.

```tsx
validation.minAge(18)                     // 'Must be at least 18 years old'
validation.minAge(21, 'Вам должно быть 21+') // custom message
```

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `years` | `number` | **required** | Minimum age in years |
| `message` | `string` | `'Must be at least {years} years old'` | Error message |

**Returns:** `yup.DateSchema`

## hexColor

HEX color validation — 3 or 6 character format with `#` prefix.

```tsx
validation.hexColor()                     // 'Invalid hex color'
validation.hexColor('Неверный цвет')      // custom message
```

**Examples:** `#fff` (valid), `#FF00AA` (valid), `red` (invalid), `#GGGG` (invalid)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid hex color'` | Error message |

**Returns:** `yup.StringSchema`

## ipv4

IPv4 address validation.

```tsx
validation.ipv4()                         // 'Invalid IPv4 address'
validation.ipv4('Неверный IP')            // custom message
```

**Examples:** `192.168.1.1` (valid), `10.0.0.255` (valid), `999.0.0.1` (invalid)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid IPv4 address'` | Error message |

**Returns:** `yup.StringSchema`

## creditCard

Credit card number validation using the Luhn algorithm.

```tsx
validation.creditCard()                   // 'Invalid card number'
validation.creditCard('Неверный номер')   // custom message
```

Accepts 13-19 digit numbers. Non-digit characters are stripped before validation.

**Examples:** `4111111111111111` (valid Visa test), `1234567890` (invalid)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid card number'` | Error message |

**Returns:** `yup.StringSchema`

## Full Example

```tsx
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { validation } from '@vacano/ui/lib'
import { FormInput, FormDatePicker } from '@vacano/ui/form'
import { Button } from '@vacano/ui'

const schema = yup.object({
  email: validation.email().required('Email is required'),
  password: validation.password().required('Password is required'),
  phone: validation.phone().required('Phone is required'),
  website: validation.url(),
  username: validation.noSpaces().required('Username is required'),
  birthday: validation.minAge(18).required('Date of birth is required'),
})

type FormValues = yup.InferType<typeof schema>

const SignUpForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormInput control={control} name="email" label="Email" />
      <FormInput control={control} name="password" label="Password" type="password" />
      <FormInput control={control} name="phone" label="Phone" />
      <FormInput control={control} name="website" label="Website" />
      <FormInput control={control} name="username" label="Username" />
      <FormDatePicker control={control} name="birthday" label="Date of Birth" />
      <Button type="submit">Sign Up</Button>
    </form>
  )
}
```

## Related

- [Form Wrappers](/components/form-wrappers) - react-hook-form integration
- [FieldMessage](/components/field-message) - Validation message display
