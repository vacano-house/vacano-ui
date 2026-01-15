# Input

Text input field with label support and validation variants.

<a href="/storybook/?path=/docs/components-input--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Input } from '@vacano/ui'
```

## Usage

```tsx
const [value, setValue] = useState('')

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text"
/>
```

## With Label

```tsx
<Input label="Email" placeholder="Enter your email" />
```

## Variants

```tsx
<Input variant="normal" label="Normal" />
<Input variant="error" label="Error" />
```

## Sizes

```tsx
<Input size="default" label="Default Size" />
<Input size="compact" label="Compact Size" />
```

## Full Width

```tsx
<Input fullWidth label="Full Width Input" />
```

## Disabled

```tsx
<Input disabled label="Disabled" value="Cannot edit" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text above input |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `size` | `'compact' \| 'default'` | `'default'` | Input size |
| `fullWidth` | `boolean` | `false` | Full width input |
| `className` | `string` | - | CSS class name |
| `classnames` | `InputClassNames` | - | Custom class names |

All standard HTML input attributes are also supported.

## ClassNames

| Key | Description |
|-----|-------------|
| `input` | Input element |
| `label` | Label element |
