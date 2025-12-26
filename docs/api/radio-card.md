# RadioCard API

TypeScript types for the RadioCard component.

## Import

```tsx
import { RadioCard } from '@vacano/ui'
import type {
  RadioCardProps,
  RadioCardState,
  RadioCardClassnames,
} from '@vacano/ui'
```

## Types

### RadioCardProps

```ts
type RadioCardProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'checked' | 'onChange'
> & {
  checked: boolean
  onChange: ChangeEventHandler<HTMLInputElement>
  label: string
  description?: string
  fullWidth?: boolean
  state?: RadioCardState
  className?: string
  classnames?: RadioCardClassnames
  ref?: Ref<HTMLInputElement>
  'data-test-id'?: string
}
```

| Property | Type | Required | Default | Description |
|----------|------|----------|---------|-------------|
| `checked` | `boolean` | **Yes** | — | Whether the card is selected |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **Yes** | — | Change event handler |
| `label` | `string` | **Yes** | — | Card title text |
| `description` | `string` | No | — | Description text below title |
| `name` | `string` | No | — | Radio group name |
| `fullWidth` | `boolean` | No | `false` | Makes card span full container width |
| `state` | `RadioCardState` | No | — | Validation state |
| `disabled` | `boolean` | No | `false` | Disables the card |
| `className` | `string` | No | — | Additional CSS class for container |
| `classnames` | `RadioCardClassnames` | No | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | No | — | Ref to the input element |
| `data-test-id` | `string` | No | — | Test identifier attribute |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

---

### RadioCardState

```ts
type RadioCardState = 'warning' | 'error'
```

Validation states for visual feedback.

| Value | Description |
|-------|-------------|
| `'warning'` | Warning state with yellow/orange styling |
| `'error'` | Error state with red styling |

**Usage:**

```tsx
<RadioCard checked={...} onChange={...} label="Option" state="warning" />
<RadioCard checked={...} onChange={...} label="Option" state="error" />
```

---

### RadioCardClassnames

```ts
type RadioCardClassnames = {
  container?: string
  radio?: string
  content?: string
  label?: string
  description?: string
}
```

CSS class overrides for internal elements.

| Property | Element | Default Class |
|----------|---------|---------------|
| `container` | Card container | `vacano_radio-card_container` |
| `radio` | Radio button | `vacano_radio-card_radio` |
| `content` | Content wrapper | `vacano_radio-card_content` |
| `label` | Label text | `vacano_radio-card_label` |
| `description` | Description text | `vacano_radio-card_description` |

**Usage:**

```tsx
<RadioCard
  checked={checked}
  onChange={onChange}
  label="Option"
  classnames={{
    container: 'my-radio-card',
    label: 'my-card-label',
  }}
/>
```

## CSS Classes

Default CSS classes applied to the component:

| Class | Element |
|-------|---------|
| `vacano_radio-card_container` | Card container label |
| `vacano_radio-card_radio` | Radio button |
| `vacano_radio-card_content` | Content wrapper div |
| `vacano_radio-card_label` | Label text span |
| `vacano_radio-card_description` | Description text span |

## Examples

### With Type Annotations

```tsx
import { RadioCard } from '@vacano/ui'
import type { RadioCardProps, RadioCardState } from '@vacano/ui'

const MyRadioCard = (props: RadioCardProps) => {
  return <RadioCard {...props} />
}

const state: RadioCardState = 'error'
```

### Selection Cards

```tsx
import { useState } from 'react'
import { RadioCard } from '@vacano/ui'

function PlanSelector() {
  const [plan, setPlan] = useState('basic')

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <RadioCard
        checked={plan === 'basic'}
        onChange={() => setPlan('basic')}
        label="Basic"
        description="$9/month"
        name="plan"
      />
      <RadioCard
        checked={plan === 'pro'}
        onChange={() => setPlan('pro')}
        label="Pro"
        description="$29/month"
        name="plan"
      />
    </div>
  )
}
```

### Full Width Cards

```tsx
<div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
  <RadioCard
    checked={selected === 'a'}
    onChange={() => setSelected('a')}
    label="Option A"
    description="Description for option A"
    fullWidth
  />
  <RadioCard
    checked={selected === 'b'}
    onChange={() => setSelected('b')}
    label="Option B"
    description="Description for option B"
    fullWidth
  />
</div>
```

## See Also

- [RadioCard Component](/components/molecules/radio-card) — Usage guide and examples
- [Radio](/api/radio) — Simple radio button
- [RadioGroup](/api/radio-group) — Group of simple radios
