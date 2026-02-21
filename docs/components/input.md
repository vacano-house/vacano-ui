# Input

Text input field with label support and validation variants.

*Also known as: text field, text input, form field, text box*

<a href="/storybook/?path=/story/components-input--playground" target="_blank">View in Storybook</a>

## When to use

- Single-line text entry. For multiline, use Textarea.
- For search with suggestions, use Autocomplete. For selection from options, use Select.

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

## Related

- [FieldLabel](/components/field-label) - Standalone form label
- [FieldMessage](/components/field-message) - Validation and helper messages
- [Textarea](/components/textarea) - Multiline text input
- [Autocomplete](/components/autocomplete) - Search input with suggestions
