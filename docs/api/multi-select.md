# MultiSelect API

TypeScript types for the MultiSelect component.

## Import

```tsx
import { MultiSelect } from '@vacano/ui'
import type {
  MultiSelectProps,
  MultiSelectOption,
  MultiSelectState,
  MultiSelectPlacement,
  MultiSelectClassnames,
} from '@vacano/ui'
```

## Types

### MultiSelectProps

```ts
type MultiSelectProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> & {
  options: MultiSelectOption[]
  value: string[]
  onChange: (values: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  label?: string
  icon?: ReactNode
  state?: MultiSelectState
  disabled?: boolean
  fullWidth?: boolean
  placement?: MultiSelectPlacement
  maxHeight?: number
  virtualized?: boolean
  searchable?: boolean
  portalRenderNode?: HTMLElement | null
  classnames?: MultiSelectClassnames
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `options` | `MultiSelectOption[]` | **Yes** | — | Array of options to display |
| `value` | `string[]` | **Yes** | — | Currently selected values |
| `onChange` | `(values: string[]) => void` | **Yes** | — | Callback when selection changes |
| `placeholder` | `string` | No | `'Select...'` | Placeholder text when no values selected |
| `searchPlaceholder` | `string` | No | `'Search...'` | Placeholder for search input |
| `emptyMessage` | `string` | No | `'No options'` | Message when no options available |
| `label` | `string` | No | — | Label text displayed above multiselect |
| `icon` | `ReactNode` | No | — | Icon displayed in trigger |
| `state` | `MultiSelectState` | No | — | Validation state |
| `disabled` | `boolean` | No | `false` | Disables the multiselect |
| `fullWidth` | `boolean` | No | `false` | Makes multiselect span full container width |
| `placement` | `MultiSelectPlacement` | No | `'bottom'` | Dropdown position |
| `maxHeight` | `number` | No | `256` | Maximum dropdown height in pixels |
| `virtualized` | `boolean` | No | `false` | Enable virtualization for large lists |
| `searchable` | `boolean` | No | `false` | Enable search input in dropdown |
| `portalRenderNode` | `HTMLElement \| null` | No | — | Portal target for dropdown content |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `MultiSelectClassnames` | No | — | CSS classes for internal elements |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `HTMLAttributes<HTMLDivElement>` props (except `onChange`).

---

### MultiSelectOption

```ts
type MultiSelectOption = {
  label: string
  value: string
}
```

Single option in the multiselect dropdown.

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | **Yes** | Display text for the option |
| `value` | `string` | **Yes** | Value returned when selected |

**Usage:**

```tsx
const options: MultiSelectOption[] = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
]
```

---

### MultiSelectState

```ts
type MultiSelectState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<MultiSelect options={...} value={...} onChange={...} state="warning" />
<MultiSelect options={...} value={...} onChange={...} state="error" />
```

---

### MultiSelectPlacement

```ts
type MultiSelectPlacement = 'top' | 'bottom'
```

Dropdown position relative to trigger.

| Value | Description |
|-------|-------------|
| `'top'` | Opens above the trigger |
| `'bottom'` | Opens below the trigger (default) |

**Usage:**

```tsx
<MultiSelect options={...} value={...} onChange={...} placement="top" />
<MultiSelect options={...} value={...} onChange={...} placement="bottom" />
```

---

### MultiSelectClassnames

```ts
type MultiSelectClassnames = {
  container?: string
  label?: string
  trigger?: string
  chips?: string
  chip?: string
  chipRemove?: string
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
| `container` | Outer container | `vacano_multiselect_container` |
| `label` | Label element | `vacano_multiselect_label` |
| `trigger` | Trigger button | `vacano_multiselect_trigger` |
| `chips` | Chips container | `vacano_multiselect_chips` |
| `chip` | Individual chip | `vacano_multiselect_chip` |
| `chipRemove` | Chip remove button | `vacano_multiselect_chip-remove` |
| `content` | Dropdown content | `vacano_multiselect_content` |
| `search` | Search input wrapper | `vacano_multiselect_search` |
| `list` | Options list | `vacano_multiselect_list` |
| `option` | Individual option | `vacano_multiselect_option` |
| `empty` | Empty state message | `vacano_multiselect_empty` |

**Usage:**

```tsx
<MultiSelect
  options={options}
  value={value}
  onChange={onChange}
  classnames={{
    container: 'my-multiselect',
    trigger: 'my-trigger',
    chip: 'my-chip',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_multiselect_container` | Outer container div |
| `vacano_multiselect_label` | Label element |
| `vacano_multiselect_trigger` | Trigger button |
| `vacano_multiselect_chips` | Chips container |
| `vacano_multiselect_chip` | Individual chip |
| `vacano_multiselect_chip-remove` | Chip remove button |
| `vacano_multiselect_content` | Dropdown content wrapper |
| `vacano_multiselect_search` | Search input wrapper |
| `vacano_multiselect_list` | Options list |
| `vacano_multiselect_option` | Individual option |
| `vacano_multiselect_empty` | Empty state message |

## Examples

### With Type Annotations

```tsx
import { MultiSelect } from '@vacano/ui'
import type { MultiSelectProps, MultiSelectOption, MultiSelectState } from '@vacano/ui'

const options: MultiSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
]

const MyMultiSelect = (props: Omit<MultiSelectProps, 'options'>) => {
  return <MultiSelect {...props} options={options} />
}

const state: MultiSelectState = 'error'
```

### Controlled MultiSelect

```tsx
import { useState } from 'react'
import { MultiSelect } from '@vacano/ui'
import type { MultiSelectOption } from '@vacano/ui'

function Form() {
  const [values, setValues] = useState<string[]>([])

  const options: MultiSelectOption[] = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ]

  return (
    <MultiSelect
      options={options}
      value={values}
      onChange={setValues}
      label="Sizes"
      placeholder="Select sizes..."
    />
  )
}
```

### Searchable MultiSelect

```tsx
<MultiSelect
  options={countries}
  value={selectedCountries}
  onChange={setSelectedCountries}
  searchable
  searchPlaceholder="Search countries..."
  label="Countries"
/>
```

### Virtualized MultiSelect

```tsx
// For large lists (1000+ items)
const manyOptions = Array.from({ length: 10000 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

<MultiSelect
  options={manyOptions}
  value={values}
  onChange={setValues}
  virtualized
  searchable
  label="Large List"
/>
```

### With Icon

```tsx
import { Globe } from '@vacano/ui/icons'

<MultiSelect
  options={countries}
  value={selectedCountries}
  onChange={setSelectedCountries}
  icon={<Globe size={16} />}
  label="Countries"
/>
```

### With Portal

```tsx
<MultiSelect
  options={options}
  value={values}
  onChange={setValues}
  portalRenderNode={document.body}
/>
```

## See Also

- [MultiSelect Component](/components/atoms/multi-select) — Usage guide and examples
- [Select](/api/select) — Single select component
- [Icons](/guide/icons) — Using icons with MultiSelect
