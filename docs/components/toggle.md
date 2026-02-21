# Toggle

Toggle switch for binary on/off settings.

*Also known as: switch, toggle switch, on/off switch*

<a href="/storybook/?path=/story/components-toggle--playground" target="_blank">View in Storybook</a>

## When to use

- Binary on/off settings where the effect is immediate (e.g. enable notifications). For form checkboxes that require submit, use Checkbox.
- For card-style toggles, use ToggleCard. For grouping multiple toggles, use ToggleGroup.

## Import

```tsx
import { Toggle } from '@vacano/ui'
```

## Usage

```tsx
const [enabled, setEnabled] = useState(false)

<Toggle
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  label="Enable notifications"
/>
```

## With Label

```tsx
<Toggle checked={true} onChange={() => {}} label="Dark mode" />
```

## Without Label

```tsx
<Toggle checked={false} onChange={() => {}} />
```

## Variants

```tsx
<Toggle variant="normal" checked={true} onChange={() => {}} label="Normal" />
<Toggle variant="error" checked={true} onChange={() => {}} label="Error" />
```

## Disabled

```tsx
<Toggle disabled checked={true} onChange={() => {}} label="Disabled on" />
<Toggle disabled checked={false} onChange={() => {}} label="Disabled off" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **required** | Toggle state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **required** | Change handler |
| `label` | `ReactNode` | - | Label text |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable toggle |
| `className` | `string` | - | CSS class name |
| `classnames` | `ToggleClassNames` | - | Custom class names |

All standard HTML input attributes are also supported.

## ClassNames

| Key | Description |
|-----|-------------|
| `input` | Hidden input element |
| `track` | Toggle track (background pill) |
| `thumb` | Toggle thumb (sliding circle) |
| `label` | Label text |

## Related

- [Checkbox](/components/checkbox) - Checkbox input
- [ToggleCard](/components/toggle-card) - Card-style toggle with description
- [ToggleGroup](/components/toggle-group) - Group of toggles
