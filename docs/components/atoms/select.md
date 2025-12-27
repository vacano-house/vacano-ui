# Select

A customizable select component with search, virtualization, and validation states.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-select" target="_blank">View in Storybook</a>

## Import

```tsx
import { Select } from '@vacano/ui'
```

## Basic Usage

```tsx
import { useState } from 'react'

function Example() {
  const [value, setValue] = useState<string>()

  const options = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ]

  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select size..."
    />
  )
}
```

## With Label

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  label="Size"
  placeholder="Select size..."
/>
```

## With Icon

```tsx
import { Globe } from '@vacano/ui/icons'

<Select
  options={countries}
  value={country}
  onChange={setCountry}
  icon={<Globe size={16} />}
  label="Country"
  placeholder="Select country..."
/>
```

## Searchable

Enable search functionality for filtering options:

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

::: tip
When `searchable` is enabled, the search input is automatically focused when the dropdown opens.
:::

## Virtualized

For large lists (1000+ options), enable virtualization for smooth performance:

```tsx
const manyOptions = Array.from({ length: 100000 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

<Select
  options={manyOptions}
  value={value}
  onChange={setValue}
  virtualized
  label="Large List"
/>
```

Combine with search for the best UX:

```tsx
<Select
  options={manyOptions}
  value={value}
  onChange={setValue}
  virtualized
  searchable
  label="Search Large List"
/>
```

## Validation States

Show validation feedback with `state` prop:

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  state="warning"
  label="Warning"
/>

<Select
  options={options}
  value={value}
  onChange={setValue}
  state="error"
  label="Error"
/>
```

| State | Use case |
|-------|----------|
| `'warning'` | Validation warnings, non-blocking issues |
| `'error'` | Validation errors, required fields |

## Disabled State

```tsx
<Select
  options={options}
  disabled
  label="Disabled"
  placeholder="Cannot select"
/>
```

## Placement

Control dropdown position:

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  placement="top"
  label="Opens Up"
/>

<Select
  options={options}
  value={value}
  onChange={setValue}
  placement="bottom"
  label="Opens Down (default)"
/>
```

## Custom Max Height

Adjust dropdown height:

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  maxHeight={150}
  label="Short Dropdown"
/>
```

## Full Width

Make select span full container width:

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  fullWidth
  label="Full Width"
/>
```

## Portal Rendering

Render dropdown in a portal to escape `overflow: hidden` containers:

```tsx
<Select
  options={options}
  value={value}
  onChange={setValue}
  portalRenderNode={document.body}
/>
```

## Custom Empty Message

```tsx
<Select
  options={[]}
  emptyMessage="No countries found"
  label="Country"
/>
```

## Props

### SelectProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `SelectOption[]` | — | Array of options |
| `value` | `string` | — | Selected value |
| `onChange` | `(value: string) => void` | — | Change callback |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder |
| `emptyMessage` | `string` | `'No options'` | Empty state message |
| `label` | `string` | — | Label text |
| `icon` | `ReactNode` | — | Icon in trigger |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable select |
| `fullWidth` | `boolean` | `false` | Full width mode |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | Dropdown position |
| `maxHeight` | `number` | `256` | Max dropdown height (px) |
| `virtualized` | `boolean` | `false` | Enable virtualization |
| `searchable` | `boolean` | `false` | Enable search |
| `portalRenderNode` | `HTMLElement \| null` | — | Portal target |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `SelectClassnames` | — | CSS classes for elements |
| `data-test-id` | `string` | — | Test ID |

### SelectOption

```ts
type SelectOption = {
  label: string  // Display text
  value: string  // Value returned on select
}
```

### SelectClassnames

```ts
type SelectClassnames = {
  container?: string  // Outer container
  label?: string      // Label element
  trigger?: string    // Trigger button
  content?: string    // Dropdown content
  search?: string     // Search input wrapper
  list?: string       // Options list
  option?: string     // Individual option
  empty?: string      // Empty state
}
```

## CSS Classes

| Class | Element |
|-------|---------|
| `vacano_select_container` | Outer container |
| `vacano_select_label` | Label |
| `vacano_select_trigger` | Trigger button |
| `vacano_select_content` | Dropdown content |
| `vacano_select_search` | Search wrapper |
| `vacano_select_list` | Options list |
| `vacano_select_option` | Individual option |
| `vacano_select_empty` | Empty state |

## Accessibility

- Uses `combobox` role with `listbox` popup
- Keyboard navigation with Arrow keys
- Enter to select, Escape to close
- Proper `aria-expanded` state
- Focus management for search input

## Examples

### Form with Multiple Selects

```tsx
function AddressForm() {
  const [country, setCountry] = useState<string>()
  const [city, setCity] = useState<string>()

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <Select
        options={countries}
        value={country}
        onChange={setCountry}
        icon={<Globe size={16} />}
        label="Country"
        fullWidth
      />
      <Select
        options={cities}
        value={city}
        onChange={setCity}
        icon={<MapPin size={16} />}
        label="City"
        fullWidth
      />
    </div>
  )
}
```

### Dynamic Options

```tsx
import { useEffect, useState } from 'react'
import type { SelectOption } from '@vacano/ui'

function DynamicSelect() {
  const [options, setOptions] = useState<SelectOption[]>([])
  const [value, setValue] = useState<string>()

  useEffect(() => {
    fetch('/api/items')
      .then(res => res.json())
      .then(items => {
        setOptions(items.map(item => ({
          label: item.name,
          value: item.id,
        })))
      })
  }, [])

  return (
    <Select
      options={options}
      value={value}
      onChange={setValue}
      searchable
      label="Select Item"
    />
  )
}
```

### With Validation

```tsx
function ValidatedSelect() {
  const [value, setValue] = useState<string>()
  const [error, setError] = useState<string>()

  const handleChange = (newValue: string) => {
    setValue(newValue)
    setError(undefined)
  }

  const handleSubmit = () => {
    if (!value) {
      setError('Please select an option')
    }
  }

  return (
    <>
      <Select
        options={options}
        value={value}
        onChange={handleChange}
        state={error ? 'error' : undefined}
        label="Required Field"
      />
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </>
  )
}
```
