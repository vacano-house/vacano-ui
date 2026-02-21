# Select

Single selection dropdown with search and portal support.

*Also known as: dropdown, picker, option selector, single select*

<a href="/storybook/?path=/story/components-select--playground" target="_blank">View in Storybook</a>

## When to use

- Choosing one option from a predefined list. For multiple selections, use MultiSelect.
- For search with suggestions, use Autocomplete.

## Import

```tsx
import { Select } from '@vacano/ui'
```

## Usage

```tsx
const [value, setValue] = useState('')

const options = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'de', label: 'Germany' },
]

<Select
  value={value}
  options={options}
  onChange={setValue}
  placeholder="Select country"
/>
```

## With Label

```tsx
<Select
  label="Country"
  value={value}
  options={options}
  onChange={setValue}
/>
```

## Variants

```tsx
<Select variant="normal" value="" options={options} placeholder="Normal" />
<Select variant="error" value="" options={options} placeholder="Error" />
```

## Sizes

```tsx
<Select size="default" value="" options={options} placeholder="Default" />
<Select size="compact" value="" options={options} placeholder="Compact" />
```

## Disabled Options

```tsx
const options = [
  { value: 'active', label: 'Active' },
  { value: 'pending', label: 'Pending', disabled: true },
  { value: 'archived', label: 'Archived' },
]

<Select value="" options={options} placeholder="Select status" />
```

## Full Width

```tsx
<Select fullWidth value="" options={options} placeholder="Full width" />
```

## Portal Rendering

For use inside containers with `overflow: hidden`:

```tsx
<Select
  value={value}
  options={options}
  portalRenderNode={document.body}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Selected value |
| `options` | `SelectOption[]` | **required** | Array of options |
| `onChange` | `(value: string) => void` | - | Change handler |
| `label` | `string` | - | Label text |
| `placeholder` | `string` | - | Placeholder text |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `size` | `'compact' \| 'default'` | `'default'` | Select size |
| `disabled` | `boolean` | `false` | Disable select |
| `fullWidth` | `boolean` | `false` | Full width |
| `message` | `string` | - | Message text below select (error, hint) |
| `portalRenderNode` | `HTMLElement \| null` | - | Portal target for dropdown |
| `className` | `string` | - | CSS class name |
| `classnames` | `SelectClassNames` | - | Custom class names |

## Option Type

```tsx
type SelectOption = {
  value: string
  label: string
  disabled?: boolean
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `label` | Label element |
| `trigger` | Trigger button |
| `dropdown` | Dropdown container |
| `option` | Individual option |

## Related

- [MultiSelect](/components/multi-select) - Multiple option selection
- [Autocomplete](/components/autocomplete) - Search with async suggestions
- [Dropdown](/components/dropdown) - Custom dropdown menus
- [RadioGroup](/components/radio-group) - Radio button group for single selection
