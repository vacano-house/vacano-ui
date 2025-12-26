# CheckboxCard

A checkbox styled as a selectable card with label and description.

<a href="https://ui.vacano.io/storybook/?path=/story/molecules-checkboxcard" target="_blank">View in Storybook</a>

## Import

```tsx
import { CheckboxCard } from '@vacano/ui'
```

## Basic Usage

```tsx
const [checked, setChecked] = useState(false)

<CheckboxCard
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Enable feature"
/>
```

## With Description

```tsx
<CheckboxCard
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
  label="Dark Mode"
  description="Enable dark theme across the application"
/>
```

## Multiple Selection

```tsx
const [features, setFeatures] = useState({
  notifications: false,
  analytics: false,
  autoSave: true,
})

const handleChange = (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
  setFeatures({ ...features, [key]: e.target.checked })
}

<CheckboxCard
  checked={features.notifications}
  onChange={handleChange('notifications')}
  label="Notifications"
  description="Receive push notifications"
/>
<CheckboxCard
  checked={features.analytics}
  onChange={handleChange('analytics')}
  label="Analytics"
  description="Help improve the product"
/>
<CheckboxCard
  checked={features.autoSave}
  onChange={handleChange('autoSave')}
  label="Auto-save"
  description="Automatically save your work"
/>
```

## Full Width

By default, CheckboxCard has a max-width. Use `fullWidth` to span the full container:

```tsx
<CheckboxCard
  checked={checked}
  onChange={...}
  label="Full Width Card"
  description="This card spans the full width"
  fullWidth
/>
```

## Validation States

Use the `state` prop to show validation feedback:

```tsx
// Warning state
<CheckboxCard
  checked={checked}
  onChange={...}
  label="Warning"
  description="This option requires attention"
  state="warning"
/>

// Error state
<CheckboxCard
  checked={checked}
  onChange={...}
  label="Error"
  description="There's an issue with this selection"
  state="error"
/>
```

## Disabled State

```tsx
<CheckboxCard
  checked={false}
  onChange={...}
  label="Disabled"
  description="This option is not available"
  disabled
/>
```

## Props

### CheckboxCardProps

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `checked` | `boolean` | — | **Required.** Whether the card is checked |
| `onChange` | `ChangeEventHandler<HTMLInputElement>` | — | **Required.** Change handler |
| `label` | `string` | — | **Required.** Card title |
| `description` | `string` | — | Optional description text |
| `fullWidth` | `boolean` | `false` | Makes card full width |
| `state` | `'warning' \| 'error'` | — | Validation state |
| `disabled` | `boolean` | `false` | Disables the card |
| `className` | `string` | — | Additional CSS class |
| `classnames` | `CheckboxCardClassnames` | — | CSS classes for internal elements |
| `ref` | `Ref<HTMLInputElement>` | — | Ref to the input element |
| `data-test-id` | `string` | — | Test ID for testing |

Plus all standard `InputHTMLAttributes<HTMLInputElement>` props (except `type`, `checked`, `onChange`).

### CheckboxCardState

```ts
type CheckboxCardState = 'warning' | 'error'
```

### CheckboxCardClassnames

```ts
type CheckboxCardClassnames = {
  container?: string    // Card container
  checkbox?: string     // Checkbox
  content?: string      // Content wrapper
  label?: string        // Label text
  description?: string  // Description text
}
```

## CSS Classes

The component uses the following CSS classes:

| Class | Element |
|-------|---------|
| `vacano_checkbox-card_container` | Card container |
| `vacano_checkbox-card_checkbox` | Checkbox |
| `vacano_checkbox-card_content` | Content wrapper |
| `vacano_checkbox-card_label` | Label text |
| `vacano_checkbox-card_description` | Description text |

## Accessibility

- Uses native `<input type="checkbox">` element
- Entire card is clickable
- Supports keyboard navigation (Tab to focus, Space to toggle)
- Focus state is clearly visible

## Examples

### Feature Toggles

```tsx
function FeatureToggles() {
  const [features, setFeatures] = useState({
    darkMode: false,
    notifications: true,
    autoSave: true,
    analytics: false,
  })

  const toggle = (key: keyof typeof features) => (e: ChangeEvent<HTMLInputElement>) => {
    setFeatures({ ...features, [key]: e.target.checked })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckboxCard
        checked={features.darkMode}
        onChange={toggle('darkMode')}
        label="Dark Mode"
        description="Use dark theme throughout the app"
        fullWidth
      />
      <CheckboxCard
        checked={features.notifications}
        onChange={toggle('notifications')}
        label="Push Notifications"
        description="Receive alerts for important updates"
        fullWidth
      />
      <CheckboxCard
        checked={features.autoSave}
        onChange={toggle('autoSave')}
        label="Auto-save"
        description="Automatically save changes every minute"
        fullWidth
      />
      <CheckboxCard
        checked={features.analytics}
        onChange={toggle('analytics')}
        label="Usage Analytics"
        description="Help us improve by sharing anonymous usage data"
        fullWidth
      />
    </div>
  )
}
```

### Add-ons Selection

```tsx
function AddOnsSelector() {
  const [addOns, setAddOns] = useState<string[]>([])

  const toggle = (id: string) => (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setAddOns([...addOns, id])
    } else {
      setAddOns(addOns.filter(item => item !== id))
    }
  }

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
      <CheckboxCard
        checked={addOns.includes('storage')}
        onChange={toggle('storage')}
        label="Extra Storage"
        description="100GB additional cloud storage - $5/month"
        fullWidth
      />
      <CheckboxCard
        checked={addOns.includes('support')}
        onChange={toggle('support')}
        label="Priority Support"
        description="24/7 dedicated support - $10/month"
        fullWidth
      />
      <CheckboxCard
        checked={addOns.includes('backup')}
        onChange={toggle('backup')}
        label="Daily Backups"
        description="Automated daily backups - $3/month"
        fullWidth
      />
      <CheckboxCard
        checked={addOns.includes('api')}
        onChange={toggle('api')}
        label="API Access"
        description="Full REST API access - $15/month"
        fullWidth
      />
    </div>
  )
}
```

### Privacy Settings

```tsx
function PrivacySettings() {
  const [settings, setSettings] = useState({
    shareProfile: true,
    showOnline: true,
    allowMessages: false,
  })

  const toggle = (key: keyof typeof settings) => (e: ChangeEvent<HTMLInputElement>) => {
    setSettings({ ...settings, [key]: e.target.checked })
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <CheckboxCard
        checked={settings.shareProfile}
        onChange={toggle('shareProfile')}
        label="Public Profile"
        description="Allow others to see your profile information"
        fullWidth
      />
      <CheckboxCard
        checked={settings.showOnline}
        onChange={toggle('showOnline')}
        label="Show Online Status"
        description="Let others know when you're online"
        fullWidth
      />
      <CheckboxCard
        checked={settings.allowMessages}
        onChange={toggle('allowMessages')}
        label="Direct Messages"
        description="Allow anyone to send you messages"
        fullWidth
      />
    </div>
  )
}
```

## Related Components

- [Checkbox](/components/atoms/checkbox) - Simple checkbox
- [CheckboxGroup](/components/molecules/checkbox-group) - Group of simple checkboxes
- [RadioCard](/components/molecules/radio-card) - Card with radio for single selection
