# FieldLabel

Form field label component with required indicator.

<a href="/storybook/?path=/docs/components-fieldlabel--docs" target="_blank">View in Storybook</a>

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
