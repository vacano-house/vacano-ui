# CheckboxGroup

A group of checkboxes with built-in state management for multiple selections.

<a href="https://ui.vacano.io/storybook/?path=/story/molecules-checkboxgroup" target="_blank">View in Storybook</a>

## Import

```tsx
import { CheckboxGroup } from '@vacano/ui'
```

## Basic Usage

```tsx
const [selected, setSelected] = useState<string[]>([])

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

<CheckboxGroup
  value={selected}
  options={options}
  onChange={setSelected}
/>
```

## With Label

```tsx
<CheckboxGroup
  value={selected}
  options={options}
  onChange={setSelected}
  label="Select options"
/>
```

## Pre-selected Values

```tsx
const [selected, setSelected] = useState(['option1', 'option3'])

<CheckboxGroup
  value={selected}
  options={options}
  onChange={setSelected}
/>
```

## Disabled State

```tsx
<CheckboxGroup
  value={selected}
  options={options}
  onChange={setSelected}
  disabled
/>
```

## Props

### CheckboxGroupProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string[]` | — | **Required.** Array of selected values |
| `options` | `CheckboxGroupOption[]` | — | **Required.** Array of options |
| `onChange` | `(values: string[]) => void` | — | **Required.** Change handler |
| `label` | `string` | — | Group label |
| `disabled` | `boolean` | `false` | Disables all checkboxes |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `CheckboxGroupClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

### CheckboxGroupOption

```ts
type CheckboxGroupOption = {
  label: string   // Display text
  value: string   // Option value
}
```

### CheckboxGroupClassnames

```ts
type CheckboxGroupClassnames = {
  container?: string  // Outer container
  label?: string      // Group label
  options?: string    // Options wrapper
  checkbox?: string   // Individual checkbox
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_checkbox-group_container` | Outer container |
| `vacano_checkbox-group_label` | Group label |
| `vacano_checkbox-group_options` | Options wrapper |
| `vacano_checkbox-group_checkbox` | Individual checkbox |

## Accessibility

- Uses native checkbox behavior
- Supports keyboard navigation (Tab to move, Space to toggle)
- Group label provides context for assistive technologies

## Examples

### Feature Selection

```tsx
function FeatureSelector() {
  const [features, setFeatures] = useState<string[]>([])

  const featureOptions = [
    { label: 'Dark Mode', value: 'dark-mode' },
    { label: 'Notifications', value: 'notifications' },
    { label: 'Auto-save', value: 'auto-save' },
    { label: 'Analytics', value: 'analytics' },
  ]

  return (
    <CheckboxGroup
      value={features}
      options={featureOptions}
      onChange={setFeatures}
      label="Enable Features"
    />
  )
}
```

### Filter Options

```tsx
function ProductFilter() {
  const [categories, setCategories] = useState<string[]>([])

  const categoryOptions = [
    { label: 'Electronics', value: 'electronics' },
    { label: 'Clothing', value: 'clothing' },
    { label: 'Books', value: 'books' },
    { label: 'Home & Garden', value: 'home' },
  ]

  return (
    <CheckboxGroup
      value={categories}
      options={categoryOptions}
      onChange={setCategories}
      label="Categories"
    />
  )
}
```

### Preferences Form

```tsx
function PreferencesForm() {
  const [notifications, setNotifications] = useState(['email'])

  const notificationOptions = [
    { label: 'Email notifications', value: 'email' },
    { label: 'Push notifications', value: 'push' },
    { label: 'SMS notifications', value: 'sms' },
  ]

  return (
    <form>
      <CheckboxGroup
        value={notifications}
        options={notificationOptions}
        onChange={setNotifications}
        label="Notification Preferences"
      />
      <Button type="submit">Save Preferences</Button>
    </form>
  )
}
```

### With Validation

```tsx
function RequiredCheckboxGroup() {
  const [selected, setSelected] = useState<string[]>([])
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (selected.length === 0) {
      setError(true)
      return
    }
    // Submit form
  }

  return (
    <div>
      <CheckboxGroup
        value={selected}
        options={options}
        onChange={(values) => {
          setSelected(values)
          setError(false)
        }}
        label="Select at least one option"
      />
      {error && <span style={{ color: 'red' }}>Please select at least one option</span>}
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
```

### Dynamic Options from API

```tsx
function DynamicCheckboxGroup({ items }) {
  const [selected, setSelected] = useState<string[]>([])

  const options = items.map(item => ({
    label: item.name,
    value: item.id,
  }))

  return (
    <CheckboxGroup
      value={selected}
      options={options}
      onChange={setSelected}
    />
  )
}
```

## Related Components

- [Checkbox](/components/atoms/checkbox) - Individual checkbox
- [CheckboxCard](/components/molecules/checkbox-card) - Checkbox with card styling
- [RadioGroup](/components/molecules/radio-group) - For single selection
