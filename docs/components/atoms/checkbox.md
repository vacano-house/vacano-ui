# Checkbox

A checkbox component with label, indeterminate state, and validation states.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-checkbox" target="_blank">View in Storybook</a>

## Import

```tsx
import { Checkbox } from '@vacano/ui'
```

## Basic Usage

```tsx
const [checked, setChecked] = useState(false)

<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>
```

## With Label

```tsx
<Checkbox
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Accept terms and conditions"
/>
```

## Indeterminate State

Use `indeterminate` for "select all" checkboxes when some items are selected:

```tsx
const [items, setItems] = useState([
  { id: 1, checked: true },
  { id: 2, checked: false },
  { id: 3, checked: true },
])

const allChecked = items.every(item => item.checked)
const someChecked = items.some(item => item.checked) && !allChecked

<Checkbox
  checked={allChecked}
  indeterminate={someChecked}
  onChange={(e) => {
    setItems(items.map(item => ({ ...item, checked: e.target.checked })))
  }}
  label="Select all"
/>
```

## Validation States

Use the `state` prop to show validation feedback:

```tsx
// Warning state
<Checkbox
  checked={checked}
  onChange={...}
  state="warning"
  label="This field requires attention"
/>

// Error state
<Checkbox
  checked={checked}
  onChange={...}
  state="error"
  label="You must accept the terms"
/>
```

## Disabled State

```tsx
<Checkbox
  checked={false}
  onChange={...}
  disabled
  label="Disabled unchecked"
/>

<Checkbox
  checked={true}
  onChange={...}
  disabled
  label="Disabled checked"
/>
```

## Props

### CheckboxProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | **Required.** Whether the checkbox is checked |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | **Required.** Change handler |
| `label` | `string` | — | Label text |
| `indeterminate` | `boolean` | `false` | Shows indeterminate (minus) state |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disables the checkbox |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `CheckboxClassnames` | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | — | Ref to the input element |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

### CheckboxState

```ts
type CheckboxState = 'warning' | 'error'
```

### CheckboxClassnames

```ts
type CheckboxClassnames = {
  container?: string  // Label wrapper
  input?: string      // Hidden input element
  box?: string        // Visual checkbox box
  icon?: string       // Check/minus icon
  label?: string      // Label text
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_checkbox_container` | Label wrapper (root element) |
| `vacano_checkbox_input` | Hidden input element |
| `vacano_checkbox_box` | Visual checkbox box |
| `vacano_checkbox_icon` | Check/minus icon |
| `vacano_checkbox_label` | Label text |

## Accessibility

- Uses native `<input type="checkbox">` element
- Label is clickable and properly associated
- Supports keyboard navigation (Space to toggle)
- `aria-checked` is set to `"mixed"` for indeterminate state

## Examples

### Terms and Conditions

```tsx
function TermsCheckbox() {
  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!accepted) {
      setError(true)
      return
    }
    // Submit form
  }

  return (
    <>
      <Checkbox
        checked={accepted}
        onChange={(e) => {
          setAccepted(e.target.checked)
          setError(false)
        }}
        state={error ? 'error' : undefined}
        label="I accept the terms and conditions"
      />
      <Button onClick={handleSubmit}>Continue</Button>
    </>
  )
}
```

### Select All Pattern

```tsx
function SelectAllExample() {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1', checked: false },
    { id: 2, name: 'Item 2', checked: false },
    { id: 3, name: 'Item 3', checked: false },
  ])

  const allChecked = items.every(item => item.checked)
  const someChecked = items.some(item => item.checked)

  const handleSelectAll = (e: ChangeEvent<HTMLInputElement>) => {
    setItems(items.map(item => ({ ...item, checked: e.target.checked })))
  }

  const handleItemChange = (id: number) => (e: ChangeEvent<HTMLInputElement>) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, checked: e.target.checked } : item
    ))
  }

  return (
    <div>
      <Checkbox
        checked={allChecked}
        indeterminate={someChecked && !allChecked}
        onChange={handleSelectAll}
        label="Select all"
      />
      <div style={{ marginLeft: '24px' }}>
        {items.map(item => (
          <Checkbox
            key={item.id}
            checked={item.checked}
            onChange={handleItemChange(item.id)}
            label={item.name}
          />
        ))}
      </div>
    </div>
  )
}
```

### Multiple Options

```tsx
function PreferencesForm() {
  const [prefs, setPrefs] = useState({
    notifications: true,
    newsletter: false,
    marketing: false,
  })

  const updatePref = (key: keyof typeof prefs) => (e: ChangeEvent<HTMLInputElement>) => {
    setPrefs({ ...prefs, [key]: e.target.checked })
  }

  return (
    <div>
      <Checkbox
        checked={prefs.notifications}
        onChange={updatePref('notifications')}
        label="Enable notifications"
      />
      <Checkbox
        checked={prefs.newsletter}
        onChange={updatePref('newsletter')}
        label="Subscribe to newsletter"
      />
      <Checkbox
        checked={prefs.marketing}
        onChange={updatePref('marketing')}
        label="Receive marketing emails"
      />
    </div>
  )
}
```
