# CheckboxGroup

Group of checkboxes with shared state management.

<a href="/storybook/?path=/docs/molecules-checkboxgroup--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { CheckboxGroup } from '@vacano/ui'
```

## Usage

```tsx
const [values, setValues] = useState(['option1'])

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
]

<CheckboxGroup
  options={options}
  value={values}
  onChange={setValues}
/>
```

## With Label

```tsx
<CheckboxGroup
  label="Select features"
  options={options}
  value={values}
  onChange={setValues}
/>
```

## Disabled

```tsx
<CheckboxGroup
  disabled
  options={options}
  value={['option1']}
  onChange={() => {}}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `CheckboxGroupOption[]` | **required** | Array of options |
| `value` | `string[]` | **required** | Selected values |
| `onChange` | `(values: string[]) => void` | **required** | Change handler |
| `label` | `string` | - | Group label |
| `disabled` | `boolean` | `false` | Disable all checkboxes |
| `className` | `string` | - | CSS class name |
| `classnames` | `CheckboxGroupClassNames` | - | Custom class names |

## Option Type

```tsx
type CheckboxGroupOption = {
  label: string
  value: string
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `label` | Group label |
| `options` | Options container |
| `checkbox` | Individual checkbox |
