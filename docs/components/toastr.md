# Toastr

Toast notification system with queue management.

<a href="https://ui.vacano.io/components/?path=/docs/organisms-toastr--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { ToastrProvider, useToastr } from '@vacano/ui'
```

## Setup

Wrap your app with `ToastrProvider`:

```tsx
import { ToastrProvider } from '@vacano/ui'

function App() {
  return (
    <ToastrProvider>
      <YourApp />
    </ToastrProvider>
  )
}
```

## Usage

Use the `useToastr` hook to show notifications:

```tsx
import { useToastr } from '@vacano/ui'

function MyComponent() {
  const { addToast } = useToastr()

  const showNotification = () => {
    addToast('Operation completed successfully', 'success')
  }

  return <Button onClick={showNotification}>Show Toast</Button>
}
```

## Variants

```tsx
const { addToast } = useToastr()

// Default
addToast('Default message')

// Success
addToast('Successfully saved!', 'success')

// Warning
addToast('Please review your input', 'warning')

// Danger/Error
addToast('An error occurred', 'danger')
```

## Custom Duration

```tsx
// Default duration (auto-dismiss)
addToast('Quick message', 'default')

// Longer duration (in milliseconds)
addToast('Important message', 'warning', 10000)

// Very short duration
addToast('Flash message', 'success', 2000)
```

## Remove Toast Programmatically

```tsx
const { addToast, removeToast } = useToastr()

// The toast ID is returned when adding
const toastId = addToast('Processing...', 'default')

// Later, remove it manually
removeToast(toastId)
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
  addToast: (
    message: string,
    variant?: ToastVariant,
    duration?: number
  ) => void
  removeToast: (id: string) => void
}
```
