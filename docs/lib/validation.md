# Validation

Yup schema factories for common form validation patterns. Requires `yup` as a peer dependency.

*Also known as: validators, schema helpers, yup presets, validation rules*

## When to use

- Use with [Form Wrappers](/components/form-wrappers) and `yupResolver` to validate form fields with pre-built rules.
- Each factory returns a Yup schema with a sensible default error message that can be overridden.
- All factories return chainable Yup schemas, so you can append `.required()`, `.nullable()`, `.optional()`, etc.

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

Email address validation using `string().matches()`.

```tsx
validation.email()                        // default: 'Invalid email address'
validation.email('Custom error')          // custom message
```

**Pattern:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

**Implementation:** `string().matches(pattern, message)`

Note: The parameter is named `options` in the source code but functions as a message string.

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `options` | `string` | `'Invalid email address'` | Error message passed to `matches()` |

**Returns:** `yup.StringSchema`

## phone

International phone number validation using `string().matches()`.

```tsx
validation.phone()                        // default: 'Invalid phone number'
validation.phone('Custom error')          // custom message
```

**Pattern:** `/^\+?[1-9]\d{6,14}$/` -- optional `+`, first digit 1-9, then 6-14 more digits (total 7-15 digits).

**Implementation:** `string().matches(pattern, message)`

**Valid examples:** `+79991234567`, `14155552671`, `+442071234567`

**Invalid examples:** `+0123456789` (leading zero), `123456` (too short), `+1234567890123456` (too long)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid phone number'` | Error message |

**Returns:** `yup.StringSchema`

## url

URL validation (http/https) using `string().matches()`.

```tsx
validation.url()                          // default: 'Invalid URL'
validation.url('Custom error')            // custom message
```

**Pattern:** `/^https?:\/\/([\w-]+\.)+[\w-]+(\/[\w\-.~:/?#[\]@!$&'()*+,;=%]*)?$/`

**Implementation:** `string().matches(pattern, message)`

**Valid examples:** `https://example.com`, `http://sub.domain.io/path?q=1`

**Invalid examples:** `ftp://example.com` (wrong protocol), `example.com` (no protocol)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid URL'` | Error message |

**Returns:** `yup.StringSchema`

## password

Password strength validation -- minimum 8 characters, at least one letter and one number. Uses both `string().min()` and `string().matches()`.

```tsx
validation.password()                     // default: 'Must contain at least one letter and one number'
validation.password('Custom error')       // custom message (only overrides the matches() message)
```

**Pattern:** `/(?=.*[a-zA-Z])(?=.*\d)/` -- positive lookahead for at least one letter and one digit.

**Implementation:** `string().min(8, 'Must be at least 8 characters').matches(pattern, message)`

Note: The `min(8)` error message is hardcoded as `'Must be at least 8 characters'` and cannot be overridden via the `message` parameter. Only the `matches()` error is customizable.

**Valid examples:** `myPass123`, `a1234567`

**Invalid examples:** `password` (no digits), `12345678` (no letters), `aB1` (too short)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Must contain at least one letter and one number'` | Error message for the pattern match (not the min length) |

**Returns:** `yup.StringSchema` -- enforces both `min(8)` and the letter+number pattern.

## slug

URL-friendly slug validation -- lowercase letters, numbers, and hyphens (no leading/trailing/consecutive hyphens).

```tsx
validation.slug()                         // default: 'Only lowercase letters, numbers, and hyphens'
validation.slug('Custom error')           // custom message
```

**Pattern:** `/^[a-z0-9]+(-[a-z0-9]+)*$/` -- one or more lowercase alphanumeric chars, optionally followed by groups of hyphen + alphanumeric chars.

**Implementation:** `string().matches(pattern, message)`

**Valid examples:** `my-post-title`, `v2-release`, `hello`

**Invalid examples:** `My Post` (uppercase/spaces), `-leading` (leading hyphen), `trailing-` (trailing hyphen), `double--hyphen` (consecutive hyphens)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Only lowercase letters, numbers, and hyphens'` | Error message |

**Returns:** `yup.StringSchema`

## noSpaces

Validates that string contains no whitespace -- useful for usernames, codes, tokens.

```tsx
validation.noSpaces()                     // default: 'Must not contain spaces'
validation.noSpaces('Custom error')       // custom message
```

**Pattern:** `/^\S+$/` -- one or more non-whitespace characters.

**Implementation:** `string().matches(pattern, message)`

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Must not contain spaces'` | Error message |

**Returns:** `yup.StringSchema`

## minAge

Date of birth validation -- checks that the given date is at least N years in the past. Uses `date().test()` with a custom test function.

```tsx
validation.minAge(18)                     // default: 'Must be at least 18 years old'
validation.minAge(21, 'Must be 21+')      // custom message
```

**Implementation:** `date().test('min-age', message, testFn)` -- the test function computes a cutoff date by subtracting `years` from the current date, then checks `value <= cutoff`. Returns `true` if `value` is `undefined`/`null` (to allow optional fields; use `.required()` to enforce).

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `years` | `number` | **required** | Minimum age in years |
| `message` | `string` | `` `Must be at least ${years} years old` `` | Error message. Uses template literal with the `years` param if not provided. |

**Returns:** `yup.DateSchema`

## hexColor

HEX color validation -- 3 or 6 character format with `#` prefix (case-insensitive).

```tsx
validation.hexColor()                     // default: 'Invalid hex color'
validation.hexColor('Custom error')       // custom message
```

**Pattern:** `/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/`

Note: Unlike the `isValid()` utility in [Colors](/lib/colors), this validator does NOT accept 4 or 8 character formats (with alpha channel).

**Implementation:** `string().matches(pattern, message)`

**Valid examples:** `#fff`, `#FF00AA`, `#123456`

**Invalid examples:** `red` (named color), `#GGGG` (invalid hex), `#FF0000FF` (8-char with alpha)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid hex color'` | Error message |

**Returns:** `yup.StringSchema`

## ipv4

IPv4 address validation using `string().matches()`.

```tsx
validation.ipv4()                         // default: 'Invalid IPv4 address'
validation.ipv4('Custom error')           // custom message
```

**Pattern:** `/^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$/` -- validates each octet is 0-255.

**Implementation:** `string().matches(pattern, message)`

**Valid examples:** `192.168.1.1`, `10.0.0.255`, `0.0.0.0`, `255.255.255.255`

**Invalid examples:** `999.0.0.1` (octet > 255), `1.2.3` (missing octet), `1.2.3.4.5` (too many octets)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid IPv4 address'` | Error message |

**Returns:** `yup.StringSchema`

## creditCard

Credit card number validation using the Luhn algorithm. Uses `string().test()` with a custom test function.

```tsx
validation.creditCard()                   // default: 'Invalid card number'
validation.creditCard('Custom error')     // custom message
```

**Implementation:** `string().test('luhn', message, testFn)` -- the test function:

1. Returns `true` if value is `undefined`/`null` (to allow optional fields; use `.required()` to enforce).
2. Strips all non-digit characters via `value.replace(/\D/g, '')`.
3. Rejects if digit count is less than 13 or greater than 19.
4. Runs the Luhn checksum algorithm: iterates digits from right to left, doubling every second digit (subtracting 9 if result > 9), sums all digits, and checks if `sum % 10 === 0`.

**Valid examples:** `4111111111111111` (Visa test number), `5500000000000004` (Mastercard test), `4111-1111-1111-1111` (with dashes, stripped before validation)

**Invalid examples:** `1234567890` (fails Luhn), `123` (too short), `12345678901234567890` (too long)

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| `message` | `string` | `'Invalid card number'` | Error message |

**Returns:** `yup.StringSchema`

## Summary Table

| Validator | Yup base | Method | Allows empty | Default message |
|-----------|----------|--------|--------------|-----------------|
| `email` | `string()` | `matches()` | Yes (use `.required()`) | `'Invalid email address'` |
| `phone` | `string()` | `matches()` | Yes (use `.required()`) | `'Invalid phone number'` |
| `url` | `string()` | `matches()` | Yes (use `.required()`) | `'Invalid URL'` |
| `password` | `string()` | `min()` + `matches()` | Yes (use `.required()`) | `'Must contain at least one letter and one number'` |
| `slug` | `string()` | `matches()` | Yes (use `.required()`) | `'Only lowercase letters, numbers, and hyphens'` |
| `noSpaces` | `string()` | `matches()` | Yes (use `.required()`) | `'Must not contain spaces'` |
| `minAge` | `date()` | `test()` | Yes (use `.required()`) | `` `Must be at least ${years} years old` `` |
| `hexColor` | `string()` | `matches()` | Yes (use `.required()`) | `'Invalid hex color'` |
| `ipv4` | `string()` | `matches()` | Yes (use `.required()`) | `'Invalid IPv4 address'` |
| `creditCard` | `string()` | `test()` | Yes (use `.required()`) | `'Invalid card number'` |

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
  color: validation.hexColor(),
  ip: validation.ipv4(),
  card: validation.creditCard(),
  handle: validation.slug(),
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
