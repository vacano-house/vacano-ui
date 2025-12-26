# RadioGroup

A group of radio buttons with built-in state management.

<a href="https://ui.vacano.io/storybook/?path=/story/molecules-radiogroup" target="_blank">View in Storybook</a>

## Import

```tsx
import { RadioGroup } from '@vacano/ui'
```

## Basic Usage

```tsx
const [value, setValue] = useState('option1')

const options = [
  { label: 'Option 1', value: 'option1' },
  { label: 'Option 2', value: 'option2' },
  { label: 'Option 3', value: 'option3' },
]

<RadioGroup
  value={value}
  options={options}
  onChange={setValue}
/>
```

## With Label

```tsx
<RadioGroup
  value={value}
  options={options}
  onChange={setValue}
  label="Select an option"
/>
```

## Disabled State

```tsx
<RadioGroup
  value={value}
  options={options}
  onChange={setValue}
  disabled
/>
```

## Props

### RadioGroupProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | — | **Required.** Currently selected value |
| `options` | `RadioGroupOption[]` | — | **Required.** Array of options |
| `onChange` | `(value: string) => void` | — | **Required.** Change handler |
| `label` | `string` | — | Group label |
| `name` | `string` | — | HTML name attribute for the radio group |
| `disabled` | `boolean` | `false` | Disables all radios |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `RadioGroupClassnames` | — | CSS classes for internal elements |
| `data-test-id` | `string` | — | Test ID for testing |

### RadioGroupOption

```ts
type RadioGroupOption = {
  label: string   // Display text
  value: string   // Option value
}
```

### RadioGroupClassnames

```ts
type RadioGroupClassnames = {
  container?: string  // Outer container
  label?: string      // Group label
  options?: string    // Options wrapper
  radio?: string      // Individual radio
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_radio-group_container` | Outer container |
| `vacano_radio-group_label` | Group label |
| `vacano_radio-group_options` | Options wrapper |
| `vacano_radio-group_radio` | Individual radio |

## Accessibility

- Uses native radio button behavior
- Supports keyboard navigation (Arrow keys to move, Space to select)
- Group label is properly associated with the radio group

## Examples

### Form Selection

```tsx
function ShippingForm() {
  const [shipping, setShipping] = useState('standard')

  const shippingOptions = [
    { label: 'Standard (5-7 days)', value: 'standard' },
    { label: 'Express (2-3 days)', value: 'express' },
    { label: 'Overnight', value: 'overnight' },
  ]

  return (
    <RadioGroup
      value={shipping}
      options={shippingOptions}
      onChange={setShipping}
      label="Shipping Method"
    />
  )
}
```

### Subscription Plan

```tsx
function PlanSelector() {
  const [plan, setPlan] = useState('monthly')

  const planOptions = [
    { label: 'Monthly - $10/month', value: 'monthly' },
    { label: 'Yearly - $100/year (Save 17%)', value: 'yearly' },
    { label: 'Lifetime - $299 one-time', value: 'lifetime' },
  ]

  return (
    <RadioGroup
      value={plan}
      options={planOptions}
      onChange={setPlan}
      label="Billing Cycle"
    />
  )
}
```

### Survey Question

```tsx
function SurveyQuestion() {
  const [satisfaction, setSatisfaction] = useState('')

  const satisfactionOptions = [
    { label: 'Very Satisfied', value: '5' },
    { label: 'Satisfied', value: '4' },
    { label: 'Neutral', value: '3' },
    { label: 'Dissatisfied', value: '2' },
    { label: 'Very Dissatisfied', value: '1' },
  ]

  return (
    <RadioGroup
      value={satisfaction}
      options={satisfactionOptions}
      onChange={setSatisfaction}
      label="How satisfied are you with our service?"
    />
  )
}
```

### Dynamic Options

```tsx
function DynamicRadioGroup({ items }) {
  const [selected, setSelected] = useState('')

  const options = items.map(item => ({
    label: item.name,
    value: item.id,
  }))

  return (
    <RadioGroup
      value={selected}
      options={options}
      onChange={setSelected}
    />
  )
}
```

## Related Components

- [Radio](/components/atoms/radio) - Individual radio button
- [RadioCard](/components/molecules/radio-card) - Radio button with card styling
- [CheckboxGroup](/components/molecules/checkbox-group) - For multiple selections
