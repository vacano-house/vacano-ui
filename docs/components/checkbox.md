# Checkbox

Checkbox input with label and indeterminate state support.

<a href="https://ui.vacano.io/components/?path=/docs/atoms-checkbox--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Checkbox } from '@vacano/ui'
```

## Usage

```tsx
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Accept terms"
/>
```

## With Label

```tsx
<Checkbox checked={true} onChange={() => {}} label="Remember me" />
```

## Indeterminate State

Used for "select all" scenarios where some items are selected:

```tsx
<Checkbox
  checked={false}
  indeterminate={true}
  onChange={() => {}}
  label="Select all"
/>
```

## Variants

```tsx
<Checkbox variant="normal" checked={true} onChange={() => {}} label="Normal" />
<Checkbox variant="error" checked={true} onChange={() => {}} label="Error" />
```

## Disabled

```tsx
<Checkbox disabled checked={true} onChange={() => {}} label="Disabled checked" />
<Checkbox disabled checked={false} onChange={() => {}} label="Disabled unchecked" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **required** | Checked state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **required** | Change handler |
| `label` | `string` | - | Label text |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `className` | `string` | - | CSS class name |
| `classnames` | `CheckboxClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `input` | Hidden input element |
| `box` | Visual checkbox box |
| `icon` | Check icon |
| `label` | Label text |
