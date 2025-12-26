# RadioGroup API

TypeScript types for the RadioGroup component.

## Import

```tsx
import { RadioGroup } from '@vacano/ui'
import type {
  RadioGroupProps,
  RadioGroupOption,
  RadioGroupClassnames,
} from '@vacano/ui'
```

## Types

### RadioGroupProps

```ts
type RadioGroupProps = {
  value: string
  options: RadioGroupOption[]
  onChange: (value: string) => void
  label?: string
  name?: string
  disabled?: boolean
  className?: string
  classnames?: RadioGroupClassnames
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `value` | `string` | **Yes** | — | Currently selected value |
| `options` | `RadioGroupOption[]` | **Yes** | — | Array of options to display |
| `onChange` | `(value: string) => void` | **Yes** | — | Callback when selection changes |
| `label` | `string` | No | — | Group label displayed above options |
| `name` | `string` | No | — | HTML name attribute for the radio group |
| `disabled` | `boolean` | No | `false` | Disables all radio buttons |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `RadioGroupClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

---

### RadioGroupOption

```ts
type RadioGroupOption = {
  label: string
  value: string
}
```

Single option in the radio group.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | **Yes** | Display text for the option |
| `value` | `string` | **Yes** | Value returned when selected |

**Usage:**

```tsx
const options: RadioGroupOption[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]
```

---

### RadioGroupClassnames

```ts
type RadioGroupClassnames = {
  container?: string
  label?: string
  options?: string
  radio?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Outer container | `vacano_radio-group_container` |
| `label` | Group label | `vacano_radio-group_label` |
| `options` | Options wrapper | `vacano_radio-group_options` |
| `radio` | Individual radio | `vacano_radio-group_radio` |

**Usage:**

```tsx
<RadioGroup
  value={value}
  options={options}
  onChange={onChange}
  classnames={{
    container: 'my-radio-group',
    options: 'my-options-list',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_radio-group_container` | Outer container div |
| `vacano_radio-group_label` | Group label span |
| `vacano_radio-group_options` | Options wrapper div |
| `vacano_radio-group_radio` | Individual radio wrapper |

## Examples

### With Type Annotations

```tsx
import { RadioGroup } from '@vacano/ui'
import type { RadioGroupProps, RadioGroupOption } from '@vacano/ui'

const options: RadioGroupOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

const MyRadioGroup = (props: Omit<RadioGroupProps, 'options'>) => {
  return <RadioGroup {...props} options={options} />
}
```

### Controlled RadioGroup

```tsx
import { useState } from 'react'
import { RadioGroup } from '@vacano/ui'
import type { RadioGroupOption } from '@vacano/ui'

function Form() {
  const [size, setSize] = useState('md')

  const options: RadioGroupOption[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ]

  return (
    <RadioGroup
      value={size}
      options={options}
      onChange={setSize}
      label="Size"
    />
  )
}
```

### Dynamic Options

```tsx
import type { RadioGroupOption } from '@vacano/ui'

interface Item {
  id: string
  name: string
}

function DynamicRadioGroup({ items }: { items: Item[] }) {
  const [selected, setSelected] = useState('')

  const options: RadioGroupOption[] = items.map(item => ({
    label: item.name,
    value: item.id,
  }))

  return (
    <RadioGroup
      value={selected}
      options={options}
      onChange={setSelected}
    />
  )
}
```

## See Also

- [RadioGroup Component](/components/molecules/radio-group) — Usage guide and examples
- [Radio](/api/radio) — Individual radio button
- [RadioCard](/api/radio-card) — Radio with card styling
