# FieldMessage

Helper, error, success or warning message displayed below form fields.

<a href="/storybook/?path=/docs/components-fieldmessage--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { FieldMessage } from '@vacano/ui'
```

## Usage

```tsx
<FieldMessage>This is a helper message</FieldMessage>
```

## Variants

```tsx
<FieldMessage variant="normal">This field is optional</FieldMessage>
<FieldMessage variant="error">This field is required</FieldMessage>
<FieldMessage variant="success">Email is available</FieldMessage>
<FieldMessage variant="warning">Password is weak</FieldMessage>
```

## With Input

```tsx
const [value, setValue] = useState('')
const hasError = value.length > 0 && value.length < 3

<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
  <Input
    label="Username"
    value={value}
    onChange={(e) => setValue(e.target.value)}
    variant={hasError ? 'error' : 'normal'}
  />
  {hasError && (
    <FieldMessage variant="error">
      Username must be at least 3 characters
    </FieldMessage>
  )}
</div>
```

## With Select

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
  <Select label="Country" value={value} onChange={setValue} options={options} />
  <FieldMessage variant="normal">
    Select your country of residence
  </FieldMessage>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Message content |
| `variant` | `'normal' \| 'error' \| 'success' \| 'warning'` | `'normal'` | Visual variant |
| `className` | `string` | - | CSS class name |
