# Confirmation

Confirmation dialog that appears at the bottom center of the screen.

<a href="/storybook/?path=/docs/components-confirmation--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { ConfirmationProvider, useConfirmation } from '@vacano/ui'
```

## Setup

Wrap your application with `ConfirmationProvider`:

```tsx
function App() {
  return (
    <ConfirmationProvider>
      <YourApp />
    </ConfirmationProvider>
  )
}
```

## Usage

```tsx
function MyComponent() {
  const { show } = useConfirmation()

  const handleDelete = () => {
    show(
      'Are you sure you want to delete this item?',
      () => console.log('Confirmed!'),
      () => console.log('Cancelled'),
    )
  }

  return <Button onClick={handleDelete}>Delete Item</Button>
}
```

## Custom Labels

```tsx
const { show } = useConfirmation()

show(
  'Discard unsaved changes?',
  () => handleDiscard(),
  () => handleCancel(),
  { confirmLabel: 'Discard', cancelLabel: 'Keep Editing' }
)
```

## Async with Loading

If `onConfirm` returns a Promise, the confirm button will show a loading spinner:

```tsx
const { show } = useConfirmation()

show(
  'Delete this item?',
  async () => {
    await api.deleteItem(id)  // Shows spinner until resolved
  },
  undefined,
  { confirmLabel: 'Delete', cancelLabel: 'Cancel' }
)
```

## Rich Message Content

```tsx
const { show } = useConfirmation()

show(
  <div>
    <strong>Warning!</strong>
    <p>This action cannot be undone.</p>
  </div>,
  handleConfirm,
)
```

## Hook Return

| Property | Type | Description |
|----------|------|-------------|
| `show` | `(message: ReactNode, onConfirm: () => void \| Promise<void>, onCancel?: () => void, options?: ConfirmationOptions) => void` | Show confirmation |
| `hide` | `() => void` | Hide confirmation |

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `confirmLabel` | `string` | `'Confirm'` | Confirm button label |
| `cancelLabel` | `string` | `'Cancel'` | Cancel button label |

## Behavior

- **Escape** — Cancel and hide
- **Loading** — If `onConfirm` returns Promise, shows spinner and disables Cancel
- Only one confirmation can be shown at a time
