# CheckboxGroup

Group of checkboxes with shared state management.

*Also known as: checkbox list, multi-check, multiple choice*

<a href="/storybook/?path=/story/components-checkboxgroup--playground" target="_blank">View in Storybook</a>

## When to use

- Selecting multiple values from a small set of options. For cards with descriptions, use CheckboxCard.
- For a modal picker, use MultiSelect.

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
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant for all checkboxes |
| `disabled` | `boolean` | `false` | Disable all checkboxes |
| `className` | `string` | - | CSS class for root element |
| `classnames` | `CheckboxGroupClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref to the root container element |
| `data-test-id` | `string` | - | Test identifier for automated testing |

## Option Type

```tsx
type CheckboxGroupOption = {
  label: string
  value: string
}
```

### ClassNames

| Key | Description |
|-----|-------------|
| `label` | Group label |
| `options` | Options container |
| `checkbox` | Individual checkbox |

## Related

- [ToggleGroup](/components/toggle-group) - Group of toggle switches
- [Checkbox](/components/checkbox) - Individual checkbox
- [CheckboxCard](/components/checkbox-card) - Card-style checkbox
- [RadioGroup](/components/radio-group) - Single selection group
- [MultiSelect](/components/multi-select) - Multiple selection with modal picker
