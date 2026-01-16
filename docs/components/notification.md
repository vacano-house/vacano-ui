# Notification

Всплывающая полоска вверху экрана для отображения уведомлений.

<a href="/storybook/?path=/docs/components-notification--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { NotificationProvider, useNotification } from '@vacano/ui'
```

## Setup

Оберните приложение в `NotificationProvider`:

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

## Custom Duration

По умолчанию уведомление показывается 5 секунд. Можно указать другое время в миллисекундах:

```tsx
const { show } = useNotification()

// 2 seconds
show('Quick message', 'default', 2000)

// 10 seconds
show('Long message', 'info', 10000)
```

## Queue Behavior

В отличие от Toastr, Notification показывает только одно уведомление за раз. Если добавить несколько уведомлений, они покажутся последовательно:

```tsx
const { show } = useNotification()

// These will show one after another
show('First', 'default', 2000)
show('Second', 'success', 2000)
show('Third', 'info', 2000)
```

## Manual Hide

Уведомление можно скрыть программно:

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
| `show` | `(message: string, variant?: NotificationVariant, duration?: number) => void` | Show notification |
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
