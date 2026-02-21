# Textarea

Multiline text field for entering long text.

*Also known as: multiline input, text area, rich text field*

<a href="/storybook/?path=/story/components-textarea--playground" target="_blank">View in Storybook</a>

## When to use

- Multiline text entry (descriptions, comments, notes). For single-line text, use Input.
- For code editing, consider a dedicated code editor.

## Import

```tsx
import { Textarea } from '@vacano/ui'
```

## Basic Usage

```tsx
<Textarea label="Description" placeholder="Enter description..." />
```

## Variants

```tsx
<Textarea variant="normal" label="Normal" placeholder="Normal textarea" />
<Textarea variant="error" label="Error" placeholder="Error textarea" />
```

## Rows

The number of visible rows can be configured via the `rows` prop:

```tsx
<Textarea rows={2} label="Small" placeholder="2 rows" />
<Textarea rows={4} label="Default" placeholder="4 rows (default)" />
<Textarea rows={8} label="Large" placeholder="8 rows" />
```

## Full Width

```tsx
<Textarea fullWidth label="Full width" placeholder="Expands to container width" />
```

## Disabled

```tsx
<Textarea disabled label="Disabled" placeholder="Disabled textarea" />
<Textarea disabled label="Disabled with value" value="Some text" />
```

## Without Label

```tsx
<Textarea placeholder="Textarea without label" />
```

## Controlled

```tsx
const [value, setValue] = useState('')

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  label="Controlled"
  placeholder="Controlled textarea"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Label text above the field |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `rows` | `number` | `4` | Number of visible rows |
| `fullWidth` | `boolean` | `false` | Takes full container width |
| `disabled` | `boolean` | `false` | Disables the field |
| `className` | `string` | - | CSS class for the container |
| `classnames` | `TextareaClassNames` | - | CSS class names object for inner elements |

### TextareaClassNames

```tsx
type TextareaClassNames = {
  textarea?: string
  label?: string
}
```

## Accessibility

- The field is associated with its label through the component structure
- Supports standard `aria-*` attributes
- Supports keyboard navigation

## Related

- [Input](/components/input) - Single-line text input
- [FieldLabel](/components/field-label) - Standalone form label
- [FieldMessage](/components/field-message) - Validation and helper messages
