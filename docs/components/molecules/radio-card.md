# RadioCard

A radio button styled as a selectable card with label and description.

<a href="https://ui.vacano.io/storybook/?path=/story/molecules-radiocard" target="_blank">View in Storybook</a>

## Import

```tsx
import { RadioCard } from '@vacano/ui'
```

## Basic Usage

```tsx
const [selected, setSelected] = useState('option1')

<RadioCard
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
  label="Option 1"
  name="options"
/>
<RadioCard
  checked={selected === 'option2'}
  onChange={() => setSelected('option2')}
  label="Option 2"
  name="options"
/>
```

## With Description

```tsx
<RadioCard
  checked={selected === 'basic'}
  onChange={() => setSelected('basic')}
  label="Basic Plan"
  description="Perfect for individuals and small projects"
  name="plan"
/>
<RadioCard
  checked={selected === 'pro'}
  onChange={() => setSelected('pro')}
  label="Pro Plan"
  description="Best for growing teams and businesses"
  name="plan"
/>
```

## Full Width

By default, RadioCard has a max-width. Use `fullWidth` to span the full container:

```tsx
<RadioCard
  checked={checked}
  onChange={...}
  label="Full Width Card"
  description="This card spans the full width"
  fullWidth
/>
```

## Validation States

Use the `state` prop to show validation feedback:

```tsx
// Warning state
<RadioCard
  checked={checked}
  onChange={...}
  label="Warning"
  description="This option requires attention"
  state="warning"
/>

// Error state
<RadioCard
  checked={checked}
  onChange={...}
  label="Error"
  description="There's an issue with this selection"
  state="error"
/>
```

## Disabled State

```tsx
<RadioCard
  checked={false}
  onChange={...}
  label="Disabled"
  description="This option is not available"
  disabled
/>
```

## Props

### RadioCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | **Required.** Whether the card is selected |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | **Required.** Change handler |
| `label` | `string` | — | **Required.** Card title |
| `description` | `string` | — | Optional description text |
| `name` | `string` | — | Radio group name |
| `fullWidth` | `boolean` | `false` | Makes card full width |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disables the card |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `RadioCardClassnames` | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | — | Ref to the input element |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

### RadioCardState

```ts
type RadioCardState = 'warning' | 'error'
```

### RadioCardClassnames

```ts
type RadioCardClassnames = {
  container?: string    // Card container
  radio?: string        // Radio button
  content?: string      // Content wrapper
  label?: string        // Label text
  description?: string  // Description text
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_radio-card_container` | Card container |
| `vacano_radio-card_radio` | Radio button |
| `vacano_radio-card_content` | Content wrapper |
| `vacano_radio-card_label` | Label text |
| `vacano_radio-card_description` | Description text |

## Accessibility

- Uses native `<input type="radio">` element
- Entire card is clickable
- Supports keyboard navigation
- Focus state is clearly visible

## Examples

### Pricing Plans

```tsx
function PricingSelector() {
  const [plan, setPlan] = useState('basic')

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <RadioCard
        checked={plan === 'basic'}
        onChange={() => setPlan('basic')}
        label="Basic"
        description="$9/month - For individuals"
        name="pricing"
      />
      <RadioCard
        checked={plan === 'pro'}
        onChange={() => setPlan('pro')}
        label="Pro"
        description="$29/month - For small teams"
        name="pricing"
      />
      <RadioCard
        checked={plan === 'enterprise'}
        onChange={() => setPlan('enterprise')}
        label="Enterprise"
        description="Custom pricing - For large organizations"
        name="pricing"
      />
    </div>
  )
}
```

### Shipping Options

```tsx
function ShippingSelector() {
  const [shipping, setShipping] = useState('standard')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <RadioCard
        checked={shipping === 'standard'}
        onChange={() => setShipping('standard')}
        label="Standard Shipping"
        description="5-7 business days - Free"
        name="shipping"
        fullWidth
      />
      <RadioCard
        checked={shipping === 'express'}
        onChange={() => setShipping('express')}
        label="Express Shipping"
        description="2-3 business days - $9.99"
        name="shipping"
        fullWidth
      />
      <RadioCard
        checked={shipping === 'overnight'}
        onChange={() => setShipping('overnight')}
        label="Overnight Shipping"
        description="Next business day - $24.99"
        name="shipping"
        fullWidth
      />
    </div>
  )
}
```

### Account Type Selection

```tsx
function AccountTypeSelector() {
  const [type, setType] = useState('personal')

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
      <RadioCard
        checked={type === 'personal'}
        onChange={() => setType('personal')}
        label="Personal"
        description="For individual use and personal projects"
        name="account"
        fullWidth
      />
      <RadioCard
        checked={type === 'business'}
        onChange={() => setType('business')}
        label="Business"
        description="For teams and commercial use"
        name="account"
        fullWidth
      />
    </div>
  )
}
```

## Related Components

- [Radio](/components/atoms/radio) - Simple radio button
- [RadioGroup](/components/molecules/radio-group) - Group of simple radios
- [CheckboxCard](/components/molecules/checkbox-card) - Card with checkbox for multiple selection
