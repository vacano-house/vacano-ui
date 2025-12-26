# Checkbox API

TypeScript types for the Checkbox component.

## Import

```tsx
import { Checkbox } from '@vacano/ui'
import type {
  CheckboxProps,
  CheckboxState,
  CheckboxClassnames,
} from '@vacano/ui'
```

## Types

### CheckboxProps

```ts
type CheckboxProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  'data-test-id'?: string
  classnames?: CheckboxClassnames
  indeterminate?: boolean
  label?: string
  ref?: Ref<HTMLInputElement>
  state?: CheckboxState
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `checked` | `boolean` | **Yes** | — | Whether the checkbox is checked |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **Yes** | — | Change event handler |
| `label` | `string` | No | — | Label text displayed next to checkbox |
| `indeterminate` | `boolean` | No | `false` | Shows indeterminate (minus) state |
| `state` | `CheckboxState` | No | — | Validation state |
| `disabled` | `boolean` | No | `false` | Disables the checkbox |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `CheckboxClassnames` | No | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | No | — | Ref to the input element |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

---

### CheckboxState

```ts
type CheckboxState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<Checkbox checked={checked} onChange={...} state="warning" />
<Checkbox checked={checked} onChange={...} state="error" />
```

---

### CheckboxClassnames

```ts
type CheckboxClassnames = {
  container?: string
  input?: string
  box?: string
  icon?: string
  label?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Label wrapper (root element) | `vacano_checkbox_container` |
| `input` | Hidden input element | `vacano_checkbox_input` |
| `box` | Visual checkbox box | `vacano_checkbox_box` |
| `icon` | Check/minus icon | `vacano_checkbox_icon` |
| `label` | Label text | `vacano_checkbox_label` |

**Usage:**

```tsx
<Checkbox
  checked={checked}
  onChange={onChange}
  classnames={{
    container: 'my-checkbox',
    label: 'my-checkbox-label',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_checkbox_container` | Label wrapper (root element) |
| `vacano_checkbox_input` | Hidden input element |
| `vacano_checkbox_box` | Visual checkbox box |
| `vacano_checkbox_icon` | Check/minus icon inside box |
| `vacano_checkbox_label` | Label text |

## Examples

### With Type Annotations

```tsx
import { Checkbox } from '@vacano/ui'
import type { CheckboxProps, CheckboxState } from '@vacano/ui'

const MyCheckbox = (props: CheckboxProps) => {
  return <Checkbox {...props} />
}

const state: CheckboxState = 'error'
```

### Controlled Checkbox

```tsx
import { useState, ChangeEvent } from 'react'
import { Checkbox } from '@vacano/ui'

function Form() {
  const [checked, setChecked] = useState(false)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked)
  }

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      label="Accept terms"
    />
  )
}
```

### Indeterminate State

```tsx
const allChecked = items.every(item => item.checked)
const someChecked = items.some(item => item.checked)

<Checkbox
  checked={allChecked}
  indeterminate={someChecked && !allChecked}
  onChange={handleSelectAll}
  label="Select all"
/>
```

## See Also

- [Checkbox Component](/components/atoms/checkbox) — Usage guide and examples
- [CheckboxGroup](/api/checkbox-group) — Group multiple checkboxes
- [CheckboxCard](/api/checkbox-card) — Checkbox with card styling
