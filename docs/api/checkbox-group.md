# CheckboxGroup API

TypeScript types for the CheckboxGroup component.

## Import

```tsx
import { CheckboxGroup } from '@vacano/ui'
import type {
  CheckboxGroupProps,
  CheckboxGroupOption,
  CheckboxGroupClassnames,
} from '@vacano/ui'
```

## Types

### CheckboxGroupProps

```ts
type CheckboxGroupProps = {
  options: CheckboxGroupOption[]
  value: string[]
  onChange: (values: string[]) => void
  label?: string
  disabled?: boolean
  className?: string
  classnames?: CheckboxGroupClassnames
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `value` | `string[]` | **Yes** | — | Array of selected values |
| `options` | `CheckboxGroupOption[]` | **Yes** | — | Array of options to display |
| `onChange` | `(values: string[]) => void` | **Yes** | — | Callback when selection changes |
| `label` | `string` | No | — | Group label displayed above options |
| `disabled` | `boolean` | No | `false` | Disables all checkboxes |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `CheckboxGroupClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

---

### CheckboxGroupOption

```ts
type CheckboxGroupOption = {
  label: string
  value: string
}
```

Single option in the checkbox group.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | **Yes** | Display text for the option |
| `value` | `string` | **Yes** | Value included in array when checked |

**Usage:**

```tsx
const options: CheckboxGroupOption[] = [
  { label: 'Email', value: 'email' },
  { label: 'SMS', value: 'sms' },
  { label: 'Push', value: 'push' },
]
```

---

### CheckboxGroupClassnames

```ts
type CheckboxGroupClassnames = {
  container?: string
  label?: string
  options?: string
  checkbox?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Outer container | `vacano_checkbox-group_container` |
| `label` | Group label | `vacano_checkbox-group_label` |
| `options` | Options wrapper | `vacano_checkbox-group_options` |
| `checkbox` | Individual checkbox | `vacano_checkbox-group_checkbox` |

**Usage:**

```tsx
<CheckboxGroup
  value={values}
  options={options}
  onChange={onChange}
  classnames={{
    container: 'my-checkbox-group',
    options: 'my-options-list',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_checkbox-group_container` | Outer container div |
| `vacano_checkbox-group_label` | Group label span |
| `vacano_checkbox-group_options` | Options wrapper div |
| `vacano_checkbox-group_checkbox` | Individual checkbox wrapper |

## Examples

### With Type Annotations

```tsx
import { CheckboxGroup } from '@vacano/ui'
import type { CheckboxGroupProps, CheckboxGroupOption } from '@vacano/ui'

const options: CheckboxGroupOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

const MyCheckboxGroup = (props: Omit<CheckboxGroupProps, 'options'>) => {
  return <CheckboxGroup {...props} options={options} />
}
```

### Controlled CheckboxGroup

```tsx
import { useState } from 'react'
import { CheckboxGroup } from '@vacano/ui'
import type { CheckboxGroupOption } from '@vacano/ui'

function Form() {
  const [selected, setSelected] = useState<string[]>([])

  const options: CheckboxGroupOption[] = [
    { label: 'Email notifications', value: 'email' },
    { label: 'SMS notifications', value: 'sms' },
    { label: 'Push notifications', value: 'push' },
  ]

  return (
    <CheckboxGroup
      value={selected}
      options={options}
      onChange={setSelected}
      label="Notifications"
    />
  )
}
```

### With Pre-selected Values

```tsx
const [selected, setSelected] = useState<string[]>(['email', 'push'])

<CheckboxGroup
  value={selected}
  options={options}
  onChange={setSelected}
/>
```

## See Also

- [CheckboxGroup Component](/components/molecules/checkbox-group) — Usage guide and examples
- [Checkbox](/api/checkbox) — Individual checkbox
- [CheckboxCard](/api/checkbox-card) — Checkbox with card styling
