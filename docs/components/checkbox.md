# Checkbox

Checkbox input with label and indeterminate state support.

*Also known as: check box, tick box, boolean toggle*

<a href="/storybook/?path=/story/components-checkbox--playground" target="_blank">View in Storybook</a>

## When to use

- Binary on/off choices. For selecting from multiple options, use CheckboxGroup.
- For card-style selection, use CheckboxCard. For mutual exclusion, use Radio.

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
| `label` | `ReactNode` | - | Label content (text or any renderable node) |
| `indeterminate` | `boolean` | `false` | Indeterminate state |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable checkbox |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `CheckboxClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLInputElement>` | - | Ref to the underlying input element |
| `data-test-id` | `string` | - | Test identifier attribute |

All standard HTML input attributes are also supported (except `type`, `checked`, `onChange`, and `className` which are controlled by the component).

### ClassNames

| Key | Description |
|-----|-------------|
| `input` | Hidden input element |
| `box` | Visual checkbox box |
| `icon` | Check icon |
| `label` | Label text |

## Related

- [Toggle](/components/toggle) - Toggle switch for on/off settings
- [CheckboxCard](/components/checkbox-card) - Card-style checkbox with description
- [CheckboxGroup](/components/checkbox-group) - Group of checkboxes
- [Radio](/components/radio) - Mutually exclusive selection
