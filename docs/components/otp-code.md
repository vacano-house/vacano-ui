# OtpCode

6-digit (or custom length) OTP code input for verification codes.

*Also known as: OTP input, verification code, PIN input, 2FA code, SMS code*

<a href="/storybook/?path=/story/components-otpcode--playground" target="_blank">View in Storybook</a>

## When to use

- Entering numeric verification codes (SMS, 2FA, email verification). Supports auto-focus, paste, and SMS autofill.

## Import

```tsx
import { OtpCode } from '@vacano/ui'
```

## Usage

```tsx
const [code, setCode] = useState('')

<OtpCode
  value={code}
  onChange={setCode}
/>
```

## With Label

```tsx
<OtpCode label="Verification code" />
```

## Different Lengths

```tsx
<OtpCode length={4} label="4-digit code" />
<OtpCode length={6} label="6-digit code" />
<OtpCode length={8} label="8-digit code" />
```

## Variants

```tsx
<OtpCode variant="normal" label="Normal" />
<OtpCode variant="error" label="Invalid code" />
```

## Sizes

```tsx
<OtpCode size="default" label="Default Size" />
<OtpCode size="compact" label="Compact Size" />
```

## Disabled

```tsx
<OtpCode disabled label="Disabled" value="123456" />
```

## Features

- Auto-focus next input on digit entry
- Arrow key navigation (left/right)
- Backspace deletes and moves focus back
- Paste support (Ctrl+V)
- Numeric input only
- `autoComplete="one-time-code"` for SMS autofill

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | `''` | Current OTP value |
| `onChange` | `(value: string) => void` | - | Change handler |
| `length` | `number` | `6` | Number of digits |
| `label` | `string` | - | Label text above input |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `size` | `'compact' \| 'default'` | `'default'` | Input size |
| `disabled` | `boolean` | `false` | Disabled state |
| `message` | `string` | - | Message text below input (error, hint) |
| `autoFocus` | `boolean` | `false` | Auto focus first input on mount |
| `className` | `string` | - | CSS class name |
| `classnames` | `OtpCodeClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `container` | Container element |
| `input` | Individual input elements |
| `label` | Label element |

## Related

- [Input](/components/input) - Basic text input
