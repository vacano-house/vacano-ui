# CheckboxCard API

TypeScript types for the CheckboxCard component.

## Import

```tsx
import { CheckboxCard } from '@vacano/ui'
import type {
  CheckboxCardProps,
  CheckboxCardState,
  CheckboxCardClassnames,
} from '@vacano/ui'
```

## Types

### CheckboxCardProps

```ts
type CheckboxCardProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  description?: string
  fullWidth?: boolean
  state?: CheckboxCardState
  className?: string
  classnames?: CheckboxCardClassnames
  ref?: Ref<HTMLInputElement>
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `checked` | `boolean` | **Yes** | — | Whether the card is checked |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **Yes** | — | Change event handler |
| `label` | `string` | **Yes** | — | Card title text |
| `description` | `string` | No | — | Description text below title |
| `fullWidth` | `boolean` | No | `false` | Makes card span full container width |
| `state` | `CheckboxCardState` | No | — | Validation state |
| `disabled` | `boolean` | No | `false` | Disables the card |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `CheckboxCardClassnames` | No | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | No | — | Ref to the input element |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

---

### CheckboxCardState

```ts
type CheckboxCardState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<CheckboxCard checked={...} onChange={...} label="Option" state="warning" />
<CheckboxCard checked={...} onChange={...} label="Option" state="error" />
```

---

### CheckboxCardClassnames

```ts
type CheckboxCardClassnames = {
  container?: string
  checkbox?: string
  content?: string
  label?: string
  description?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Card container | `vacano_checkbox-card_container` |
| `checkbox` | Checkbox | `vacano_checkbox-card_checkbox` |
| `content` | Content wrapper | `vacano_checkbox-card_content` |
| `label` | Label text | `vacano_checkbox-card_label` |
| `description` | Description text | `vacano_checkbox-card_description` |

**Usage:**

```tsx
<CheckboxCard
  checked={checked}
  onChange={onChange}
  label="Option"
  classnames={{
    container: 'my-checkbox-card',
    label: 'my-card-label',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_checkbox-card_container` | Card container label |
| `vacano_checkbox-card_checkbox` | Checkbox |
| `vacano_checkbox-card_content` | Content wrapper div |
| `vacano_checkbox-card_label` | Label text span |
| `vacano_checkbox-card_description` | Description text span |

## Examples

### With Type Annotations

```tsx
import { CheckboxCard } from '@vacano/ui'
import type { CheckboxCardProps, CheckboxCardState } from '@vacano/ui'

const MyCheckboxCard = (props: CheckboxCardProps) => {
  return <CheckboxCard {...props} />
}

const state: CheckboxCardState = 'error'
```

### Feature Toggles

```tsx
import { useState, ChangeEvent } from 'react'
import { CheckboxCard } from '@vacano/ui'

function FeatureToggles() {
  const [features, setFeatures] = useState({
    darkMode: false,
    notifications: true,
  })

  const toggle = (key: keyof typeof features) => (e: ChangeEvent<HTMLInputElement>) => {
    setFeatures({ ...features, [key]: e.target.checked })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckboxCard
        checked={features.darkMode}
        onChange={toggle('darkMode')}
        label="Dark Mode"
        description="Use dark theme throughout the app"
        fullWidth
      />
      <CheckboxCard
        checked={features.notifications}
        onChange={toggle('notifications')}
        label="Notifications"
        description="Receive push notifications"
        fullWidth
      />
    </div>
  )
}
```

### Grid Layout

```tsx
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
  <CheckboxCard
    checked={options.includes('a')}
    onChange={...}
    label="Option A"
    description="Description A"
    fullWidth
  />
  <CheckboxCard
    checked={options.includes('b')}
    onChange={...}
    label="Option B"
    description="Description B"
    fullWidth
  />
</div>
```

## See Also

- [CheckboxCard Component](/components/molecules/checkbox-card) — Usage guide and examples
- [Checkbox](/api/checkbox) — Simple checkbox
- [CheckboxGroup](/api/checkbox-group) — Group of simple checkboxes
