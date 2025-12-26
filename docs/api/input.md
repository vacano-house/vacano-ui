# Input API

TypeScript types for the Input component.

## Import

```tsx
import { Input } from '@vacano/ui'
import type {
  InputProps,
  InputType,
  InputState,
  InputClassnames,
} from '@vacano/ui'
```

## Types

### InputProps

```ts
type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'value' | 'onChange'
> & {
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  type?: InputType
  label?: string
  icon?: ReactNode
  state?: InputState
  fullWidth?: boolean
  className?: string
  classnames?: InputClassnames
  ref?: Ref<HTMLInputElement>
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `value` | `string` | **Yes** | — | Current input value |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **Yes** | — | Change event handler |
| `type` | `InputType` | No | `'text'` | HTML input type |
| `label` | `string` | No | — | Label text displayed above input |
| `icon` | `ReactNode` | No | — | Icon element displayed inside input |
| `state` | `InputState` | No | — | Validation state |
| `fullWidth` | `boolean` | No | `false` | Makes input span full container width |
| `disabled` | `boolean` | No | `false` | Disables the input |
| `placeholder` | `string` | No | — | Placeholder text |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `InputClassnames` | No | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | No | — | Ref to the input element |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `value`, `onChange`).

---

### InputType

```ts
type InputType = InputHTMLAttributes<HTMLInputElement>['type']
```

HTML input types. Common values:

| Value | Description |
|-------|-------------|
| `'text'` | Single-line text input (default) |
| `'email'` | Email address input with validation |
| `'password'` | Password input with visibility toggle |
| `'number'` | Numeric input with increment/decrement |
| `'tel'` | Telephone number input |
| `'url'` | URL input with validation |
| `'search'` | Search input |

**Usage:**

```tsx
<Input type="email" value={email} onChange={...} />
<Input type="password" value={password} onChange={...} />
<Input type="number" value={count} onChange={...} />
```

---

### InputState

```ts
type InputState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<Input state="warning" value={...} onChange={...} />
<Input state="error" value={...} onChange={...} />
```

---

### InputClassnames

```ts
type InputClassnames = {
  container?: string
  label?: string
  wrapper?: string
  input?: string
  icon?: string
  toggle?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Outer container | `vacano_input_container` |
| `label` | Label element | `vacano_input_label` |
| `wrapper` | Input wrapper (border container) | `vacano_input_wrapper` |
| `input` | Input element itself | `vacano_input_field` |
| `icon` | Icon wrapper | `vacano_input_icon` |
| `toggle` | Password visibility toggle | `vacano_input_toggle` |

**Usage:**

```tsx
<Input
  value={value}
  onChange={onChange}
  classnames={{
    container: 'my-input-container',
    input: 'my-input-field',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_input_container` | Outer container div |
| `vacano_input_label` | Label element |
| `vacano_input_wrapper` | Input wrapper (border container) |
| `vacano_input_field` | Input element |
| `vacano_input_icon` | Icon wrapper |
| `vacano_input_toggle` | Password visibility toggle button |

## Examples

### With Type Annotations

```tsx
import { Input } from '@vacano/ui'
import type { InputProps, InputState } from '@vacano/ui'

const MyInput = (props: InputProps) => {
  return <Input {...props} />
}

const state: InputState = 'error'
```

### Controlled Input

```tsx
import { useState, ChangeEvent } from 'react'
import { Input } from '@vacano/ui'

function Form() {
  const [value, setValue] = useState('')

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  return <Input value={value} onChange={handleChange} />
}
```

### With Validation State

```tsx
import type { InputState } from '@vacano/ui'

const [error, setError] = useState<InputState | undefined>(undefined)

<Input
  value={email}
  onChange={handleChange}
  state={error}
  label="Email"
/>
```

## See Also

- [Input Component](/components/atoms/input) — Usage guide and examples
- [Icons](/guide/icons) — Using icons with inputs
