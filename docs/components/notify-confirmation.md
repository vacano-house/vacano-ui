# NotifyConfirmation

Popover-style confirmation notification that appears in the bottom-right corner of the screen.

*Also known as: cookie banner, consent prompt, notify consent, non-blocking confirmation*

<a href="/storybook/?path=/story/components-notifyconfirmation--playground" target="_blank">View in Storybook</a>

## When to use

- Non-blocking user consent prompts (e.g., cookie acceptance, terms agreement, data processing consent).
- For destructive action confirmations, use Confirmation.

## Import

```tsx
import { NotifyConfirmationProvider, useNotifyConfirmation } from '@vacano/ui'
```

## Setup

Wrap your application with `NotifyConfirmationProvider`:

```tsx
function App() {
  return (
    <NotifyConfirmationProvider>
      <YourApp />
    </NotifyConfirmationProvider>
  )
}
```

## Usage

```tsx
function MyComponent() {
  const { show } = useNotifyConfirmation()

  const handleConsent = () => {
    show(
      'Terms & Conditions',
      'By continuing, you agree to our terms of service and privacy policy.',
      () => console.log('Agreed!'),
      () => console.log('Discarded'),
    )
  }

  return <Button onClick={handleConsent}>Show Consent</Button>
}
```

## Custom Labels

```tsx
const { show } = useNotifyConfirmation()

show(
  'Cookie Preferences',
  'We use cookies to improve your experience.',
  () => handleAccept(),
  () => handleDecline(),
  { confirmLabel: 'Accept Cookies', discardLabel: 'Decline' }
)
```

## Async with Loading

If `onConfirm` returns a Promise, the confirm button will show a loading spinner:

```tsx
const { show } = useNotifyConfirmation()

show(
  'Data Processing Consent',
  'We need your permission to process analytics data.',
  async () => {
    await api.saveConsent()  // Shows spinner until resolved
  },
)
```

## Hook Return

| Property | Type | Description |
|----------|------|-------------|
| `show` | `(label: ReactNode, description: ReactNode, onConfirm: () => void \| Promise<void>, onDiscard?: () => void, options?: NotifyConfirmationOptions) => void` | Show notification |
| `hide` | `() => void` | Hide notification |

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `confirmLabel` | `string` | `'Agree'` | Confirm button label |
| `discardLabel` | `string` | `'Discard'` | Discard button label |

## ClassNames

The internal `NotifyConfirmationBar` component uses these CSS class name keys:

| Key | Description |
|-----|-------------|
| `label` | Label text element |
| `description` | Description text element |
| `actions` | Actions button container |

## Behavior

- **Escape** -- Discard and hide
- **Loading** -- If `onConfirm` returns Promise, shows spinner and disables Discard
- Only one notification can be shown at a time

## Related

- [Confirmation](/components/confirmation) - Destructive action confirmation
- [Notification](/components/notification) - Informational notifications
- [Toastr](/components/toastr) - Toast notifications
