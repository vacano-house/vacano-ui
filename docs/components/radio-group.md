# RadioGroup

Group of radio buttons with shared state management.

*Also known as: option group, single select group, radio list*

<a href="/storybook/?path=/story/components-radiogroup--playground" target="_blank">View in Storybook</a>

## When to use

- Group of radio buttons for single selection. For cards with descriptions, use RadioCard.
- For dropdown-style, use Select.

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

## Type-safe Values

`RadioGroup` is generic -- the value type is inferred from `options`:

```tsx
type Color = 'red' | 'green' | 'blue'

const [color, setColor] = useState<Color | null>('red')

const options: RadioGroupOption<Color>[] = [
  { value: 'red', label: 'Red' },
  { value: 'green', label: 'Green' },
  { value: 'blue', label: 'Blue' },
]

<RadioGroup<Color>
  options={options}
  value={color}     // Color | null
  onChange={setColor} // (value: Color) => void
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
| `options` | `RadioGroupOption<T>[]` | **required** | Array of options |
| `value` | `T \| null` | **required** | Selected value |
| `onChange` | `(value: T) => void` | **required** | Change handler |
| `label` | `string` | - | Group label |
| `name` | `string` | - | Input name for all radios |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant for all radios |
| `disabled` | `boolean` | `false` | Disable all radios |
| `className` | `string` | - | CSS class for root element |
| `classnames` | `RadioGroupClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref to the root container element |
| `data-test-id` | `string` | - | Test identifier for automated testing |

`T` extends `string` and defaults to `string`.

## Option Type

```tsx
type RadioGroupOption<T extends string = string> = {
  label: string
  value: T
}
```

### ClassNames

| Key | Description |
|-----|-------------|
| `label` | Group label |
| `options` | Options container |
| `radio` | Individual radio |

## Related

- [Radio](/components/radio) - Individual radio button
- [RadioCard](/components/radio-card) - Card-style radio
- [CheckboxGroup](/components/checkbox-group) - Multiple selection group
- [Select](/components/select) - Dropdown selection
