# CheckboxCard

Card-style checkbox with label and description.

<a href="/storybook/?path=/docs/components-checkboxcard--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { CheckboxCard } from '@vacano/ui'
```

## Usage

```tsx
const [checked, setChecked] = useState(false)

<CheckboxCard
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Premium Plan"
  description="Access all features and priority support"
/>
```

## With Description

```tsx
<CheckboxCard
  checked={true}
  onChange={() => {}}
  label="Email notifications"
  description="Receive updates about your account"
/>
```

## Full Width

```tsx
<CheckboxCard
  fullWidth
  checked={false}
  onChange={() => {}}
  label="Full Width Card"
  description="This card takes full width"
/>
```

## Variants

```tsx
<CheckboxCard variant="normal" checked={true} onChange={() => {}} label="Normal" />
<CheckboxCard variant="error" checked={true} onChange={() => {}} label="Error" />
```

## Disabled

```tsx
<CheckboxCard disabled checked={true} onChange={() => {}} label="Disabled" />
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
| `className` | `string` | - | CSS class name |
| `classnames` | `CheckboxCardClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `checkbox` | Checkbox element |
| `content` | Content container |
| `label` | Label text |
| `description` | Description text |
