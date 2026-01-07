# RadioGroup

Group of radio buttons with shared state management.

<a href="/storybook/?path=/docs/molecules-radiogroup--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { RadioGroup } from '@vacano/ui'
```

## Usage

```tsx
const [value, setValue] = useState<string | null>('option1')

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

<RadioGroup
  options={options}
  value={value}
  onChange={setValue}
/>
```

## With Label

```tsx
<RadioGroup
  label="Select an option"
  options={options}
  value={value}
  onChange={setValue}
/>
```

## With Name

```tsx
<RadioGroup
  name="preferences"
  options={options}
  value={value}
  onChange={setValue}
/>
```

## Disabled

```tsx
<RadioGroup
  disabled
  options={options}
  value="option1"
  onChange={() => {}}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `RadioGroupOption[]` | **required** | Array of options |
| `value` | `string \| null` | **required** | Selected value |
| `onChange` | `(value: string) => void` | **required** | Change handler |
| `label` | `string` | - | Group label |
| `name` | `string` | - | Input name for all radios |
| `disabled` | `boolean` | `false` | Disable all radios |
| `className` | `string` | - | CSS class name |
| `classnames` | `RadioGroupClassNames` | - | Custom class names |

## Option Type

```tsx
type RadioGroupOption = {
  label: string
  value: string
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `label` | Group label |
| `options` | Options container |
| `radio` | Individual radio |
