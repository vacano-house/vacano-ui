# MultiSelect

A customizable multi-select component with chips, search, virtualization, and validation states.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-multiselect" target="_blank">View in Storybook</a>

## Import

```tsx
import { MultiSelect } from '@vacano/ui'
```

## Basic Usage

```tsx
import { useState } from 'react'

function Example() {
  const [value, setValue] = useState<string[]>([])

  const options = [
    { label: 'Small', value: 'sm' },
    { label: 'Medium', value: 'md' },
    { label: 'Large', value: 'lg' },
  ]

  return (
    <MultiSelect
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Select sizes..."
    />
  )
}
```

## With Label

```tsx
<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  label="Sizes"
  placeholder="Select sizes..."
/>
```

## With Icon

```tsx
import { Globe } from '@vacano/ui/icons'

<MultiSelect
  options={countries}
  value={selectedCountries}
  onChange={setSelectedCountries}
  icon={<Globe size={16} />}
  label="Countries"
  placeholder="Select countries..."
/>
```

## Selected Values as Chips

Selected values are displayed as removable chips in the trigger:

```tsx
<MultiSelect
  options={options}
  value={['sm', 'md', 'lg']}
  onChange={setValue}
  label="Selected Sizes"
/>
```

Click the X icon on any chip to remove it from the selection.

## Searchable

Enable search functionality for filtering options:

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

<MultiSelect
  options={manyOptions}
  value={value}
  onChange={setValue}
  virtualized
  label="Large List"
/>
```

Combine with search for the best UX:

```tsx
<MultiSelect
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
<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  state="warning"
  label="Warning"
/>

<MultiSelect
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
<MultiSelect
  options={options}
  value={['sm', 'md']}
  onChange={setValue}
  disabled
  label="Disabled"
/>
```

## Placement

Control dropdown position:

```tsx
<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  placement="top"
  label="Opens Up"
/>

<MultiSelect
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
<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  maxHeight={150}
  label="Short Dropdown"
/>
```

## Full Width

Make multi-select span full container width:

```tsx
<MultiSelect
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
<MultiSelect
  options={options}
  value={value}
  onChange={setValue}
  portalRenderNode={document.body}
/>
```

## Custom Empty Message

```tsx
<MultiSelect
  options={[]}
  value={value}
  onChange={setValue}
  emptyMessage="No countries found"
  label="Country"
/>
```

## Props

### MultiSelectProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `MultiSelectOption[]` | — | Array of options |
| `value` | `string[]` | — | Selected values |
| `onChange` | `(values: string[]) => void` | — | Change callback |
| `placeholder` | `string` | `'Select...'` | Placeholder text |
| `searchPlaceholder` | `string` | `'Search...'` | Search input placeholder |
| `emptyMessage` | `string` | `'No options'` | Empty state message |
| `label` | `string` | — | Label text |
| `icon` | `ReactNode` | — | Icon in trigger |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disable multi-select |
| `fullWidth` | `boolean` | `false` | Full width mode |
| `placement` | `'top' \| 'bottom'` | `'bottom'` | Dropdown position |
| `maxHeight` | `number` | `256` | Max dropdown height (px) |
| `virtualized` | `boolean` | `false` | Enable virtualization |
| `searchable` | `boolean` | `false` | Enable search |
| `portalRenderNode` | `HTMLElement \| null` | — | Portal target |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `MultiSelectClassnames` | — | CSS classes for elements |
| `data-test-id` | `string` | — | Test ID |

### MultiSelectOption

```ts
type MultiSelectOption = {
  label: string  // Display text
  value: string  // Value returned on select
}
```

### MultiSelectClassnames

```ts
type MultiSelectClassnames = {
  container?: string  // Outer container
  label?: string      // Label element
  trigger?: string    // Trigger button
  chips?: string      // Chips container
  chip?: string       // Individual chip
  chipRemove?: string // Chip remove button
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
| `vacano_multiselect_container` | Outer container |
| `vacano_multiselect_label` | Label |
| `vacano_multiselect_trigger` | Trigger button |
| `vacano_multiselect_chips` | Chips container |
| `vacano_multiselect_chip` | Individual chip |
| `vacano_multiselect_chip-remove` | Chip remove button |
| `vacano_multiselect_content` | Dropdown content |
| `vacano_multiselect_search` | Search wrapper |
| `vacano_multiselect_list` | Options list |
| `vacano_multiselect_option` | Individual option |
| `vacano_multiselect_empty` | Empty state |

## Accessibility

- Uses `combobox` role with `listbox` popup
- Keyboard navigation with Arrow keys
- Enter/Space to toggle selection
- Backspace to remove last selected item
- Escape to close dropdown
- Proper `aria-expanded` state
- Focus management for search input
- Chips have `aria-label` for screen readers

## Behavior

Unlike the single Select component, MultiSelect:
- **Does not close** the dropdown after selecting an option
- Displays selected values as **removable chips**
- Supports **removing items** via the X button on chips or by clicking a selected option
- Supports **Backspace** to remove the last selected chip

## Examples

### Form with Multiple MultiSelects

```tsx
function TagsForm() {
  const [categories, setCategories] = useState<string[]>([])
  const [tags, setTags] = useState<string[]>([])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <MultiSelect
        options={categoryOptions}
        value={categories}
        onChange={setCategories}
        label="Categories"
        fullWidth
      />
      <MultiSelect
        options={tagOptions}
        value={tags}
        onChange={setTags}
        searchable
        label="Tags"
        fullWidth
      />
    </div>
  )
}
```

### With Validation

```tsx
function ValidatedMultiSelect() {
  const [value, setValue] = useState<string[]>([])
  const [error, setError] = useState<string>()

  const handleChange = (newValues: string[]) => {
    setValue(newValues)
    setError(undefined)
  }

  const handleSubmit = () => {
    if (value.length === 0) {
      setError('Please select at least one option')
    }
  }

  return (
    <>
      <MultiSelect
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

### Controlled with External State

```tsx
function ControlledExample() {
  const [selectedTags, setSelectedTags] = useState<string[]>(['react', 'typescript'])

  const handleClearAll = () => setSelectedTags([])

  const handleSelectAll = () => {
    setSelectedTags(options.map(opt => opt.value))
  }

  return (
    <div>
      <MultiSelect
        options={options}
        value={selectedTags}
        onChange={setSelectedTags}
        label="Tags"
      />
      <div style={{ marginTop: '8px', display: 'flex', gap: '8px' }}>
        <button onClick={handleClearAll}>Clear All</button>
        <button onClick={handleSelectAll}>Select All</button>
      </div>
    </div>
  )
}
```
