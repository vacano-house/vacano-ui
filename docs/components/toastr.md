# Toastr

Toast notification system with queue management.

*Also known as: toast, snackbar, flash message, notification popup*

<a href="/storybook/?path=/story/components-toastr--playground" target="_blank">View in Storybook</a>

## When to use

- Brief feedback messages (success, error, warning). Shows multiple toasts simultaneously at bottom-left.
- For top-of-screen single notifications, use Notification. For background save, use SaveProgress.

## Import

```tsx
import { ToastProvider, useToastr } from '@vacano/ui'
```

## Setup

Wrap your app with `ToastProvider`:

```tsx
import { ToastProvider } from '@vacano/ui'

function App() {
  return (
    <ToastProvider>
      <YourApp />
    </ToastProvider>
  )
}
```

## Usage

Use the `useToastr` hook to show notifications:

```tsx
import { useToastr } from '@vacano/ui'

function MyComponent() {
  const { show } = useToastr()

  return <Button onClick={() => show('Operation completed', 'success')}>Save</Button>
}
```

## Variants

```tsx
const { show } = useToastr()

// Default
show('Default message')

// Success
show('Successfully saved!', 'success')

// Warning
show('Please review your input', 'warning')

// Danger/Error
show('An error occurred', 'danger')
```

## Custom Duration

```tsx
// Default duration (auto-dismiss)
show('Quick message', 'default')

// Longer duration (in milliseconds)
show('Important message', 'warning', 10000)

// Very short duration
show('Flash message', 'success', 2000)
```

## Hide Toast Programmatically

```tsx
const { show, hide } = useToastr()

show('Processing...', 'default')

// Later, hide by toast id
hide(toastId)
```

## Toast Types

```tsx
type ToastVariant = 'default' | 'success' | 'warning' | 'danger'

type Toast = {
  id: string
  message: string
  variant: ToastVariant
  duration?: number
}
```

## Context Value

```tsx
type ToastContextValue = {
  show: (
    message: string,
    variant?: ToastVariant,
    duration?: number
  ) => void
  hide: (id: string) => void
}
```

## Related

- [Notification](/components/notification) - Full-width top notification bar
- [SaveProgress](/components/save-progress) - Background save indicator
