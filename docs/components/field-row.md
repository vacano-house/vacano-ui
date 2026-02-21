# FieldRow

Grid container that aligns form fields horizontally using CSS Subgrid.

*Also known as: form row, field group, inline fields*

<a href="/storybook/?path=/story/components-fieldrow--playground" target="_blank">View in Storybook</a>

## When to use

- Placing form fields (Input, Select, etc.) side by side while keeping labels, inputs, and messages aligned — even when some fields have messages and others don't.
- Uses CSS Subgrid to create shared row tracks: label, input, message.

## Import

```tsx
import { FieldRow } from '@vacano/ui'
```

## Usage

```tsx
<FieldRow>
  <Input label="First name" placeholder="John" />
  <Input label="Last name" placeholder="Doe" />
</FieldRow>
```

## Mixed Messages

Fields with and without messages stay aligned:

```tsx
<FieldRow>
  <Input label="Email" variant="error" message="Required field" />
  <Input label="Phone" placeholder="+1 (555) 000-0000" />
</FieldRow>
```

## Three Columns

```tsx
<FieldRow>
  <Input label="City" />
  <Select label="State" options={states} value="" />
  <Input label="ZIP" />
</FieldRow>
```

## Custom Gap

```tsx
<FieldRow gap={24}>
  <Input label="First name" />
  <Input label="Last name" />
</FieldRow>

<FieldRow gap="2rem">
  <Input label="First name" />
  <Input label="Last name" />
</FieldRow>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `gap` | `number \| string` | `16` | Column gap between fields (px if number) |
| `children` | `ReactNode` | - | Form field components |
| `className` | `string` | - | CSS class name |

All standard HTML div attributes are also supported.

## How It Works

FieldRow uses CSS Subgrid to create 3 shared row tracks:

1. **Row 1** — Label (FieldLabel)
2. **Row 2** — Input / Select / etc.
3. **Row 3** — Message (FieldMessage)

Each direct child is forced into all 3 rows via `grid-row: 1 / -1` with `grid-template-rows: subgrid`. This keeps fields aligned regardless of whether they have labels or messages.

## Related

- [Input](/components/input) - Text input with label and message
- [Select](/components/select) - Selection dropdown with label and message
- [FieldLabel](/components/field-label) - Standalone form label
- [FieldMessage](/components/field-message) - Validation message
