# Radio

A radio button component with label and validation states.

<a href="https://ui.vacano.io/storybook/?path=/story/atoms-radio" target="_blank">View in Storybook</a>

## Import

```tsx
import { Radio } from '@vacano/ui'
```

## Basic Usage

```tsx
const [selected, setSelected] = useState('option1')

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
```

::: tip
For most use cases, consider using [RadioGroup](/components/molecules/radio-group) which handles state management for you.
:::

## With Label

```tsx
<Radio
  checked={checked}
  onChange={...}
  label="Select this option"
/>
```

## Validation States

Use the `state` prop to show validation feedback:

```tsx
// Warning state
<Radio
  checked={checked}
  onChange={...}
  state="warning"
  label="Warning option"
/>

// Error state
<Radio
  checked={checked}
  onChange={...}
  state="error"
  label="Error option"
/>
```

## Disabled State

```tsx
<Radio
  checked={false}
  onChange={...}
  disabled
  label="Disabled unchecked"
/>

<Radio
  checked={true}
  onChange={...}
  disabled
  label="Disabled checked"
/>
```

## Radio Group

Use the `name` prop to group radio buttons:

```tsx
const [plan, setPlan] = useState('free')

<Radio
  checked={plan === 'free'}
  onChange={() => setPlan('free')}
  name="plan"
  label="Free"
/>
<Radio
  checked={plan === 'pro'}
  onChange={() => setPlan('pro')}
  name="plan"
  label="Pro"
/>
<Radio
  checked={plan === 'enterprise'}
  onChange={() => setPlan('enterprise')}
  name="plan"
  label="Enterprise"
/>
```

## Props

### RadioProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | **Required.** Whether the radio is selected |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | **Required.** Change handler |
| `label` | `string` | — | Label text |
| `name` | `string` | — | Radio group name |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disables the radio |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `RadioClassnames` | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | — | Ref to the input element |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

### RadioState

```ts
type RadioState = 'warning' | 'error'
```

### RadioClassnames

```ts
type RadioClassnames = {
  container?: string  // Label wrapper
  input?: string      // Hidden input element
  circle?: string     // Visual radio circle
  dot?: string        // Inner dot (when selected)
  label?: string      // Label text
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_radio_container` | Label wrapper (root element) |
| `vacano_radio_input` | Hidden input element |
| `vacano_radio_circle` | Visual radio circle |
| `vacano_radio_dot` | Inner dot (when selected) |
| `vacano_radio_label` | Label text |

## Accessibility

- Uses native `<input type="radio">` element
- Label is clickable and properly associated
- Supports keyboard navigation (Arrow keys within group, Space to select)
- Groups are properly managed via `name` attribute

## Examples

### Payment Method Selection

```tsx
function PaymentMethodSelector() {
  const [method, setMethod] = useState('card')

  return (
    <div>
      <Radio
        checked={method === 'card'}
        onChange={() => setMethod('card')}
        name="payment"
        label="Credit Card"
      />
      <Radio
        checked={method === 'paypal'}
        onChange={() => setMethod('paypal')}
        name="payment"
        label="PayPal"
      />
      <Radio
        checked={method === 'bank'}
        onChange={() => setMethod('bank')}
        name="payment"
        label="Bank Transfer"
      />
    </div>
  )
}
```

### Subscription Plans

```tsx
function PlanSelector() {
  const [plan, setPlan] = useState('monthly')

  return (
    <div>
      <Radio
        checked={plan === 'monthly'}
        onChange={() => setPlan('monthly')}
        name="billing"
        label="Monthly - $10/month"
      />
      <Radio
        checked={plan === 'yearly'}
        onChange={() => setPlan('yearly')}
        name="billing"
        label="Yearly - $100/year (Save 17%)"
      />
    </div>
  )
}
```

### With Required Validation

```tsx
function RequiredRadioGroup() {
  const [selected, setSelected] = useState<string | null>(null)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!selected) {
      setError(true)
      return
    }
    // Submit form
  }

  const handleChange = (value: string) => () => {
    setSelected(value)
    setError(false)
  }

  return (
    <div>
      <Radio
        checked={selected === 'yes'}
        onChange={handleChange('yes')}
        name="consent"
        label="Yes"
        state={error ? 'error' : undefined}
      />
      <Radio
        checked={selected === 'no'}
        onChange={handleChange('no')}
        name="consent"
        label="No"
        state={error ? 'error' : undefined}
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </div>
  )
}
```
