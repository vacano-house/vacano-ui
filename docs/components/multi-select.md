# MultiSelect

Multiple selection component with search, chips display, and modal picker.

*Also known as: multi picker, multiple selection, multi dropdown, tag selector*

<a href="/storybook/?path=/story/components-multiselect--playground" target="_blank">View in Storybook</a>

## When to use

- Selecting multiple options from a list via modal picker. For free-form tags, use Tags.
- For a simple group of checkboxes, use CheckboxGroup.

## Import

```tsx
import { MultiSelect } from '@vacano/ui'
```

## Usage

```tsx
const [values, setValues] = useState<string[]>([])

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
]

<MultiSelect
  value={values}
  options={options}
  onChange={setValues}
  placeholder="Select frameworks"
/>
```

## With Label

```tsx
<MultiSelect
  label="Technologies"
  value={values}
  options={options}
  onChange={setValues}
/>
```

## Max Visible Chips

Limit the number of visible chips:

```tsx
<MultiSelect
  value={['react', 'vue', 'angular']}
  options={options}
  onChange={setValues}
  maxVisible={2}
/>
```

## Custom Empty Message

```tsx
<MultiSelect
  value={values}
  options={options}
  onChange={setValues}
  emptyMessage="No frameworks found"
/>
```

## Custom Modal Title

```tsx
<MultiSelect
  value={values}
  options={options}
  onChange={setValues}
  modalTitle="Choose Frameworks"
/>
```

## Search Placeholder

```tsx
<MultiSelect
  value={values}
  options={options}
  onChange={setValues}
  searchPlaceholder="Search frameworks..."
/>
```

## Variants

```tsx
<MultiSelect variant="normal" value={[]} options={options} onChange={() => {}} />
<MultiSelect variant="error" value={[]} options={options} onChange={() => {}} />
```

## Disabled

```tsx
<MultiSelect disabled value={['react']} options={options} onChange={() => {}} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string[]` | **required** | Selected values |
| `options` | `MultiSelectOption[]` | **required** | Array of options |
| `onChange` | `(value: string[]) => void` | **required** | Change handler |
| `label` | `string` | - | Label text |
| `placeholder` | `string` | - | Placeholder text |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable component |
| `maxVisible` | `number` | - | Max visible chips |
| `emptyMessage` | `ReactNode` | - | Empty state message |
| `searchPlaceholder` | `string` | - | Search input placeholder |
| `modalTitle` | `string` | - | Modal header title |
| `className` | `string` | - | CSS class name |
| `classnames` | `MultiSelectClassNames` | - | Custom class names |

## Option Type

```tsx
type MultiSelectOption = {
  value: string
  label: string
  disabled?: boolean
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `trigger` | Trigger container |
| `chips` | Chips container |
| `chip` | Individual chip |
| `placeholder` | Placeholder text |
| `modal` | Modal container |
| `search` | Search input |
| `options` | Options list |
| `option` | Individual option |
| `empty` | Empty state |

## Related

- [Select](/components/select) - Single option selection
- [Tags](/components/tags) - Tag input with free-form entry
- [CheckboxGroup](/components/checkbox-group) - Simple checkbox group
