# Select API

TypeScript types for the Select component.

## Import

```tsx
import { Select } from '@vacano/ui'
import type {
  SelectProps,
  SelectOption,
  SelectState,
  SelectPlacement,
  SelectClassnames,
} from '@vacano/ui'
```

## Types

### SelectProps

```ts
type SelectProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  icon?: ReactNode
  state?: SelectState
  disabled?: boolean
  fullWidth?: boolean
  placement?: SelectPlacement
  maxHeight?: number
  virtualized?: boolean
  searchable?: boolean
  portalRenderNode?: HTMLElement | null
  classnames?: SelectClassnames
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `options` | `SelectOption[]` | **Yes** | — | Array of options to display |
| `value` | `string` | No | — | Currently selected value |
| `onChange` | `(value: string) => void` | No | — | Callback when selection changes |
| `placeholder` | `string` | No | `'Select...'` | Placeholder text when no value selected |
| `searchPlaceholder` | `string` | No | `'Search...'` | Placeholder for search input |
| `emptyMessage` | `string` | No | `'No options'` | Message when no options available |
| `label` | `string` | No | — | Label text displayed above select |
| `icon` | `ReactNode` | No | — | Icon displayed in trigger |
| `state` | `SelectState` | No | — | Validation state |
| `disabled` | `boolean` | No | `false` | Disables the select |
| `fullWidth` | `boolean` | No | `false` | Makes select span full container width |
| `placement` | `SelectPlacement` | No | `'bottom'` | Dropdown position |
| `maxHeight` | `number` | No | `256` | Maximum dropdown height in pixels |
| `virtualized` | `boolean` | No | `false` | Enable virtualization for large lists |
| `searchable` | `boolean` | No | `false` | Enable search input in dropdown |
| `portalRenderNode` | `HTMLElement \| null` | No | — | Portal target for dropdown content |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `SelectClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `HTMLAttributes<HTMLDivElement>` props (except `onChange`).

---

### SelectOption

```ts
type SelectOption = {
  label: string
  value: string
}
```

Single option in the select dropdown.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | **Yes** | Display text for the option |
| `value` | `string` | **Yes** | Value returned when selected |

**Usage:**

```tsx
const options: SelectOption[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]
```

---

### SelectState

```ts
type SelectState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<Select options={...} state="warning" />
<Select options={...} state="error" />
```

---

### SelectPlacement

```ts
type SelectPlacement = 'top' | 'bottom'
```

Dropdown position relative to trigger.

| Value | Description |
|-------|-------------|
| `'top'` | Opens above the trigger |
| `'bottom'` | Opens below the trigger (default) |

**Usage:**

```tsx
<Select options={...} placement="top" />
<Select options={...} placement="bottom" />
```

---

### SelectClassnames

```ts
type SelectClassnames = {
  container?: string
  label?: string
  trigger?: string
  content?: string
  search?: string
  list?: string
  option?: string
  empty?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Outer container | `vacano_select_container` |
| `label` | Label element | `vacano_select_label` |
| `trigger` | Trigger button | `vacano_select_trigger` |
| `content` | Dropdown content | `vacano_select_content` |
| `search` | Search input wrapper | `vacano_select_search` |
| `list` | Options list | `vacano_select_list` |
| `option` | Individual option | `vacano_select_option` |
| `empty` | Empty state message | `vacano_select_empty` |

**Usage:**

```tsx
<Select
  options={options}
  classnames={{
    container: 'my-select',
    trigger: 'my-trigger',
    option: 'my-option',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_select_container` | Outer container div |
| `vacano_select_label` | Label element |
| `vacano_select_trigger` | Trigger button |
| `vacano_select_content` | Dropdown content wrapper |
| `vacano_select_search` | Search input wrapper |
| `vacano_select_list` | Options list |
| `vacano_select_option` | Individual option |
| `vacano_select_empty` | Empty state message |

## Examples

### With Type Annotations

```tsx
import { Select } from '@vacano/ui'
import type { SelectProps, SelectOption, SelectState } from '@vacano/ui'

const options: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
]

const MySelect = (props: Omit<SelectProps, 'options'>) => {
  return <Select {...props} options={options} />
}

const state: SelectState = 'error'
```

### Controlled Select

```tsx
import { useState } from 'react'
import { Select } from '@vacano/ui'
import type { SelectOption } from '@vacano/ui'

function Form() {
  const [value, setValue] = useState<string>()

  const options: SelectOption[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ]

  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      label="Size"
      placeholder="Select size..."
    />
  )
}
```

### Searchable Select

```tsx
<Select
  options={countries}
  value={country}
  onChange={setCountry}
  searchable
  searchPlaceholder="Search countries..."
  label="Country"
/>
```

### Virtualized Select

```tsx
// For large lists (1000+ items)
const manyOptions = Array.from({ length: 10000 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

<Select
  options={manyOptions}
  value={value}
  onChange={setValue}
  virtualized
  searchable
  label="Large List"
/>
```

### With Icon

```tsx
import { Globe } from '@vacano/ui/icons'

<Select
  options={countries}
  value={country}
  onChange={setCountry}
  icon={<Globe size={16} />}
  label="Country"
/>
```

### With Portal

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  portalRenderNode={document.body}
/>
```

## See Also

- [Select Component](/components/atoms/select) — Usage guide and examples
- [Dropdown](/api/dropdown) — Generic dropdown component
- [Icons](/guide/icons) — Using icons with Select
