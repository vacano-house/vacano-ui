# Radio

Radio button input with label support.

*Also known as: radio button, option button, single choice*

<a href="/storybook/?path=/story/components-radio--playground" target="_blank">View in Storybook</a>

## When to use

- Mutually exclusive choice from 2-5 options. For more options, use Select.
- For card-style, use RadioCard. For grouped layout, use RadioGroup.

## Import

```tsx
import { Radio } from '@vacano/ui'
```

## Usage

```tsx
const [selected, setSelected] = useState('option1')

<Radio
  checked={selected === 'option1'}
  onChange={() => setSelected('option1')}
  label="Option 1"
  name="options"
/>
<Radio
  checked={selected === 'option2'}
  onChange={() => setSelected('option2')}
  label="Option 2"
  name="options"
/>
```

## Variants

```tsx
<Radio variant="normal" checked={true} onChange={() => {}} label="Normal" />
<Radio variant="error" checked={true} onChange={() => {}} label="Error" />
```

## Disabled

```tsx
<Radio disabled checked={true} onChange={() => {}} label="Disabled checked" />
<Radio disabled checked={false} onChange={() => {}} label="Disabled unchecked" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **required** | Checked state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **required** | Change handler |
| `label` | `string` | - | Label text |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable radio |
| `name` | `string` | - | Input name for grouping |
| `className` | `string` | - | CSS class name |
| `classnames` | `RadioClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `input` | Hidden input element |
| `box` | Visual radio circle |
| `dot` | Selected dot indicator |
| `label` | Label text |

## Related

- [RadioCard](/components/radio-card) - Card-style radio with description
- [RadioGroup](/components/radio-group) - Group of radio buttons
- [Checkbox](/components/checkbox) - Binary on/off toggle
- [Select](/components/select) - Dropdown selection for many options
