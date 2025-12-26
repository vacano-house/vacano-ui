# Radio API

TypeScript types for the Radio component.

## Import

```tsx
import { Radio } from '@vacano/ui'
import type {
  RadioProps,
  RadioState,
  RadioClassnames,
} from '@vacano/ui'
```

## Types

### RadioProps

```ts
type RadioProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  classnames?: RadioClassnames
  'data-test-id'?: string
  label?: string
  onChange: ChangeEventHandler<HTMLInputElement>
  ref?: Ref<HTMLInputElement>
  state?: RadioState
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `checked` | `boolean` | **Yes** | — | Whether the radio is selected |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **Yes** | — | Change event handler |
| `label` | `string` | No | — | Label text displayed next to radio |
| `name` | `string` | No | — | Radio group name |
| `state` | `RadioState` | No | — | Validation state |
| `disabled` | `boolean` | No | `false` | Disables the radio |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `RadioClassnames` | No | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | No | — | Ref to the input element |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

---

### RadioState

```ts
type RadioState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<Radio checked={checked} onChange={...} state="warning" />
<Radio checked={checked} onChange={...} state="error" />
```

---

### RadioClassnames

```ts
type RadioClassnames = {
  container?: string
  input?: string
  circle?: string
  dot?: string
  label?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Label wrapper (root element) | `vacano_radio_container` |
| `input` | Hidden input element | `vacano_radio_input` |
| `circle` | Visual radio circle | `vacano_radio_circle` |
| `dot` | Inner dot (when selected) | `vacano_radio_dot` |
| `label` | Label text | `vacano_radio_label` |

**Usage:**

```tsx
<Radio
  checked={checked}
  onChange={onChange}
  classnames={{
    container: 'my-radio',
    label: 'my-radio-label',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_radio_container` | Label wrapper (root element) |
| `vacano_radio_input` | Hidden input element |
| `vacano_radio_circle` | Visual radio circle |
| `vacano_radio_dot` | Inner dot (visible when checked) |
| `vacano_radio_label` | Label text |

## Examples

### With Type Annotations

```tsx
import { Radio } from '@vacano/ui'
import type { RadioProps, RadioState } from '@vacano/ui'

const MyRadio = (props: RadioProps) => {
  return <Radio {...props} />
}

const state: RadioState = 'error'
```

### Radio Group

```tsx
import { useState } from 'react'
import { Radio } from '@vacano/ui'

function Form() {
  const [selected, setSelected] = useState('option1')

  return (
    <>
      <Radio
        checked={selected === 'option1'}
        onChange={() => setSelected('option1')}
        name="options"
        label="Option 1"
      />
      <Radio
        checked={selected === 'option2'}
        onChange={() => setSelected('option2')}
        name="options"
        label="Option 2"
      />
    </>
  )
}
```

## See Also

- [Radio Component](/components/atoms/radio) — Usage guide and examples
- [RadioGroup](/api/radio-group) — Simplified radio group component
- [RadioCard](/api/radio-card) — Radio with card styling
