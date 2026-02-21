# Notification

Full-width notification bar at the top of the screen.

*Also known as: notification bar, top banner, alert bar, status bar notification*

<a href="/storybook/?path=/story/components-notification--playground" target="_blank">View in Storybook</a>

## When to use

- Full-width notification at the top of screen. Shows one at a time with queue.
- For multiple simultaneous messages, use Toastr. For background save, use SaveProgress.

## Import

```tsx
import { NotificationProvider, useNotification } from '@vacano/ui'
```

## Setup

Wrap your application with `NotificationProvider`:

```tsx
function App() {
  return (
    <NotificationProvider>
      <YourApp />
    </NotificationProvider>
  )
}
```

## Usage

```tsx
function MyComponent() {
  const { show, hide } = useNotification()

  return (
    <>
      <Button onClick={() => show('Operation completed!')}>
        Show Notification
      </Button>
      <Button onClick={hide}>Hide</Button>
    </>
  )
}
```

## Variants

```tsx
const { show } = useNotification()

// Default (gray)
show('Default notification')

// Success (green)
show('Success message', 'success')

// Warning (yellow)
show('Warning message', 'warning')

// Danger (red)
show('Error message', 'danger')

// Info (blue)
show('Info message', 'info')
```

## Rich Content

Message supports ReactNode, so you can use JSX:

```tsx
const { show } = useNotification()

// With JSX
show(
  <span>
    File <strong>report.pdf</strong> uploaded successfully
  </span>,
  'success'
)

// With icon
show(
  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <IconCheck size={16} />
    Changes saved
  </span>,
  'success'
)
```

## Custom Duration

By default, the notification is shown for 5 seconds. You can specify a different duration in milliseconds:

```tsx
const { show } = useNotification()

// 2 seconds
show('Quick message', 'default', 2000)

// 10 seconds
show('Long message', 'info', 10000)
```

## Queue Behavior

Unlike Toastr, Notification shows only one notification at a time. If multiple notifications are added, they are displayed sequentially:

```tsx
const { show } = useNotification()

// These will show one after another
show('First', 'default', 2000)
show('Second', 'success', 2000)
show('Third', 'info', 2000)
```

## Manual Hide

The notification can be hidden programmatically:

```tsx
const { show, hide } = useNotification()

// Show with long duration
show('Loading...', 'info', 30000)

// Hide when done
await someOperation()
hide()
```

## Props (Provider)

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | required | App content |

## Hook Return

| Property | Type | Description |
|----------|------|-------------|
| `show` | `(message: ReactNode, variant?: NotificationVariant, duration?: number) => void` | Show notification |
| `hide` | `() => void` | Hide current notification |

## Variants

| Variant | Color | Description |
|---------|-------|-------------|
| `default` | Gray | Default notifications |
| `success` | Green | Success messages |
| `warning` | Yellow | Warning messages |
| `danger` | Red | Error messages |
| `info` | Blue | Informational messages |

## Differences from Toastr

| Feature | Notification | Toastr |
|---------|-------------|--------|
| Position | Top | Bottom-left |
| Display | One at a time | Up to 3 at once |
| Queue | Shows next after current | Shows queue count |
| Style | Full-width bar | Rounded toast |

## Related

- [Toastr](/components/toastr) - Multiple simultaneous toast notifications
- [SaveProgress](/components/save-progress) - Background save indicator
