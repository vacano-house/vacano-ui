# Input

A text input component with label, icon, validation states, and password visibility toggle.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-input" target="_blank">View in Storybook</a>

## Import

```tsx
import { Input } from '@vacano/ui'
```

## Basic Usage

```tsx
const [value, setValue] = useState('')

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Enter text..."
/>
```

## With Label

```tsx
<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  label="Email"
  placeholder="you@example.com"
/>
```

## With Icon

Pass an icon as a `ReactNode` to the `icon` prop:

```tsx
import { Search, Mail, User } from '@vacano/ui/icons'

<Input
  value={value}
  onChange={(e) => setValue(e.target.value)}
  icon={<Search size={16} />}
  placeholder="Search..."
/>

<Input
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  icon={<Mail size={16} />}
  type="email"
  label="Email"
/>
```

## Input Types

Input supports all standard HTML input types:

```tsx
// Text (default)
<Input type="text" value={text} onChange={...} />

// Email
<Input type="email" value={email} onChange={...} />

// Password (with visibility toggle)
<Input type="password" value={password} onChange={...} />

// Number
<Input type="number" value={number} onChange={...} />

// Tel
<Input type="tel" value={phone} onChange={...} />
```

### Password Input

Password inputs automatically include a visibility toggle button:

```tsx
<Input
  type="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  label="Password"
/>
```

## Validation States

Use the `state` prop to show validation feedback:

```tsx
// Warning state
<Input
  value={value}
  onChange={...}
  state="warning"
  label="Username"
/>

// Error state
<Input
  value={value}
  onChange={...}
  state="error"
  label="Email"
/>
```

## Full Width

By default, Input has a max-width. Use `fullWidth` to span the full container width:

```tsx
<Input
  value={value}
  onChange={...}
  fullWidth
  placeholder="Full width input"
/>
```

## Disabled State

```tsx
<Input
  value="Disabled value"
  onChange={...}
  disabled
  label="Disabled"
/>
```

## Props

### InputProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | **Required.** Input value |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | **Required.** Change handler |
| `type` | `InputType` | `'text'` | HTML input type |
| `label` | `string` | — | Label text above input |
| `icon` | `ReactNode` | — | Icon element to display |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `fullWidth` | `boolean` | `false` | Makes input full width |
| `disabled` | `boolean` | `false` | Disables the input |
| `placeholder` | `string` | — | Placeholder text |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `InputClassnames` | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | — | Ref to the input element |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `value`, `onChange`).

### InputType

```ts
type InputType = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | ...
```

### InputState

```ts
type InputState = 'warning' | 'error'
```

### InputClassnames

```ts
type InputClassnames = {
  container?: string  // Outer container
  label?: string      // Label element
  wrapper?: string    // Input wrapper (border container)
  input?: string      // Input element itself
  icon?: string       // Icon wrapper
  toggle?: string     // Password visibility toggle
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_input_container` | Outer container |
| `vacano_input_label` | Label element |
| `vacano_input_wrapper` | Input wrapper (border container) |
| `vacano_input_field` | Input element |
| `vacano_input_icon` | Icon wrapper |
| `vacano_input_toggle` | Password visibility toggle |

## Accessibility

- Uses native `<input>` element
- Label is properly associated with input via `id`
- Password toggle is keyboard accessible
- Validation states are communicated visually (consider adding `aria-invalid` and `aria-describedby` for screen readers)

## Examples

### Login Form

```tsx
function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <form>
      <Input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        label="Email"
        icon={<Mail size={16} />}
        fullWidth
      />
      <Input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        label="Password"
        icon={<Lock size={16} />}
        fullWidth
      />
      <Button type="submit" fullWidth>
        Sign in
      </Button>
    </form>
  )
}
```

### Search Input

```tsx
function SearchInput() {
  const [query, setQuery] = useState('')

  return (
    <Input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      icon={<Search size={16} />}
      placeholder="Search..."
    />
  )
}
```

### Form with Validation

```tsx
function ValidatedForm() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)

  const validate = (value: string) => {
    if (!value.includes('@')) {
      setError('Invalid email address')
      return false
    }
    setError(null)
    return true
  }

  return (
    <Input
      value={email}
      onChange={(e) => {
        setEmail(e.target.value)
        validate(e.target.value)
      }}
      type="email"
      label="Email"
      state={error ? 'error' : undefined}
    />
  )
}
```
