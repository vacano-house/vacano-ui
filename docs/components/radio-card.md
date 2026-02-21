# RadioCard

Card-style radio button with label and description.

*Also known as: selection card, option card with radio, plan card*

<a href="/storybook/?path=/story/components-radiocard--playground" target="_blank">View in Storybook</a>

## When to use

- Rich radio selection with label and description (plan selection, preference cards). For simple radios, use Radio.
- For checkbox cards, use CheckboxCard.

## Import

```tsx
import { RadioCard } from '@vacano/ui'
```

## Usage

```tsx
const [selected, setSelected] = useState('basic')

<RadioCard
  checked={selected === 'basic'}
  onChange={() => setSelected('basic')}
  label="Basic Plan"
  description="For individuals and small teams"
  name="plan"
/>
<RadioCard
  checked={selected === 'pro'}
  onChange={() => setSelected('pro')}
  label="Pro Plan"
  description="For growing businesses"
  name="plan"
/>
```

## Full Width

```tsx
<RadioCard
  fullWidth
  checked={true}
  onChange={() => {}}
  label="Full Width Card"
  description="Takes full container width"
/>
```

## Variants

```tsx
<RadioCard variant="normal" checked={true} onChange={() => {}} label="Normal" />
<RadioCard variant="error" checked={true} onChange={() => {}} label="Error" />
```

## Disabled

```tsx
<RadioCard disabled checked={true} onChange={() => {}} label="Disabled" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **required** | Checked state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **required** | Change handler |
| `label` | `string` | **required** | Label text |
| `description` | `string` | - | Description text |
| `fullWidth` | `boolean` | `false` | Full width card |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable card |
| `name` | `string` | - | Input name for grouping |
| `className` | `string` | - | CSS class name |
| `classnames` | `RadioCardClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `radio` | Radio element |
| `content` | Content container |
| `label` | Label text |
| `description` | Description text |

## Related

- [Radio](/components/radio) - Simple radio button
- [RadioGroup](/components/radio-group) - Group of radio buttons
- [CheckboxCard](/components/checkbox-card) - Card-style checkbox
