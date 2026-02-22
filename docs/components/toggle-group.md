# ToggleGroup

Group of toggles with shared state management.

*Also known as: switch group, toggle list, multi-toggle*

<a href="/storybook/?path=/story/components-togglegroup--playground" target="_blank">View in Storybook</a>

## When to use

- Selecting multiple options as on/off toggles (feature flags, notification preferences). For checkbox groups, use CheckboxGroup.
- For card-style toggles, use ToggleCard.

## Import

```tsx
import { ToggleGroup } from '@vacano/ui'
```

## Usage

```tsx
const [values, setValues] = useState(['email'])

const options = [
  { value: 'email', label: 'Email' },
  { value: 'sms', label: 'SMS' },
  { value: 'push', label: 'Push' },
]

<ToggleGroup
  options={options}
  value={values}
  onChange={setValues}
/>
```

## With Label

```tsx
<ToggleGroup
  label="Notifications"
  options={options}
  value={values}
  onChange={setValues}
/>
```

## Variants

```tsx
<ToggleGroup variant="normal" options={options} value={[]} onChange={() => {}} />
<ToggleGroup variant="error" options={options} value={[]} onChange={() => {}} />
```

## Disabled

```tsx
<ToggleGroup
  disabled
  options={options}
  value={['email']}
  onChange={() => {}}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `ToggleGroupOption[]` | **required** | Array of options |
| `value` | `string[]` | **required** | Selected values |
| `onChange` | `(values: string[]) => void` | **required** | Change handler |
| `label` | `string` | - | Group label |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant for all toggles |
| `disabled` | `boolean` | `false` | Disable all toggles |
| `className` | `string` | - | CSS class for root element |
| `classnames` | `ToggleGroupClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref to the root container element |
| `data-test-id` | `string` | - | Test identifier for automated testing |

## Option Type

```tsx
type ToggleGroupOption = {
  label: string
  value: string
}
```

### ClassNames

| Key | Description |
|-----|-------------|
| `label` | Group label |
| `options` | Options container |
| `toggle` | Individual toggle |

## Related

- [Toggle](/components/toggle) - Individual toggle
- [ToggleCard](/components/toggle-card) - Card-style toggle
- [CheckboxGroup](/components/checkbox-group) - Checkbox group
