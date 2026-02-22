# ToggleCard

Card-style toggle switch with label and description.

*Also known as: switch card, toggle setting card, option toggle card*

<a href="/storybook/?path=/story/components-togglecard--playground" target="_blank">View in Storybook</a>

## When to use

- Rich toggle settings with label and description (notification preferences, feature flags). For simple toggles, use Toggle.
- For card-style checkboxes, use CheckboxCard.

## Import

```tsx
import { ToggleCard } from '@vacano/ui'
```

## Usage

```tsx
const [enabled, setEnabled] = useState(false)

<ToggleCard
  checked={enabled}
  onChange={(e) => setEnabled(e.target.checked)}
  label="Email Notifications"
  description="Receive updates about your account"
/>
```

## With Description

```tsx
<ToggleCard
  checked={true}
  onChange={() => {}}
  label="Premium Plan"
  description="Access to all features and priority support"
/>
```

## Full Width

```tsx
<ToggleCard
  fullWidth
  checked={false}
  onChange={() => {}}
  label="Full Width Card"
  description="This card takes full width"
/>
```

## Variants

```tsx
<ToggleCard variant="normal" checked={true} onChange={() => {}} label="Normal" />
<ToggleCard variant="error" checked={true} onChange={() => {}} label="Error" />
```

## Disabled

```tsx
<ToggleCard disabled checked={true} onChange={() => {}} label="Disabled" />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | **required** | Toggle state |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | **required** | Change handler |
| `label` | `string` | **required** | Label text |
| `description` | `string` | - | Description text |
| `fullWidth` | `boolean` | `false` | Full width card |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable card |
| `className` | `string` | - | CSS class for root element |
| `classnames` | `ToggleCardClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLInputElement>` | - | Ref to the underlying input element |
| `data-test-id` | `string` | - | Test identifier for automated testing |

Also accepts all standard `InputHTMLAttributes<HTMLInputElement>` except `type`, `checked`, `onChange`, and `className`.

### ClassNames

| Key | Description |
|-----|-------------|
| `toggle` | Toggle element |
| `content` | Content container |
| `label` | Label text |
| `description` | Description text |

## Related

- [Toggle](/components/toggle) - Simple toggle switch
- [ToggleGroup](/components/toggle-group) - Group of toggles
- [CheckboxCard](/components/checkbox-card) - Card-style checkbox
