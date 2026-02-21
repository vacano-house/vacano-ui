# FieldLabel

Form field label component with required indicator.

*Also known as: form label, input label, field title*

<a href="/storybook/?path=/story/components-fieldlabel--playground" target="_blank">View in Storybook</a>

## When to use

- Labeling form fields. Most form components have built-in `label` prop, use FieldLabel only for custom layouts.

## Import

```tsx
import { FieldLabel } from '@vacano/ui'
```

## Usage

```tsx
<FieldLabel>Email Address</FieldLabel>
```

## Required Field

```tsx
<FieldLabel required>Username</FieldLabel>
```

## Variants

```tsx
<FieldLabel variant="normal">Normal Label</FieldLabel>
<FieldLabel variant="error">Error Label</FieldLabel>
```

## With Form Field

```tsx
<div>
  <FieldLabel required>Email</FieldLabel>
  <Input placeholder="Enter email" />
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `string` | - | Label text |
| `required` | `boolean` | `false` | Show required indicator |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `className` | `string` | - | CSS class name |

## Related

- [FieldMessage](/components/field-message) - Validation and helper messages
- [Input](/components/input) - Text input with built-in label
