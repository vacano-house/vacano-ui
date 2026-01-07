# Confirmation

Confirmation dialog with customizable actions and keyboard bindings.

<a href="/storybook/?path=/docs/molecules-confirmation--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Confirmation } from '@vacano/ui'
```

## Usage

```tsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Delete Item</Button>

<Confirmation
  open={open}
  message="Are you sure you want to delete this item?"
  onConfirm={() => {
    // Handle delete
    setOpen(false)
  }}
  onCancel={() => setOpen(false)}
/>
```

## Custom Labels

```tsx
<Confirmation
  open={open}
  message="Discard unsaved changes?"
  confirmLabel="Discard"
  cancelLabel="Keep Editing"
  onConfirm={handleDiscard}
  onCancel={handleCancel}
/>
```

## With Keyboard Bindings

```tsx
<Confirmation
  open={open}
  message="Save changes?"
  submitBindings={['Meta', 'Enter']}
  cancelBindings={['Escape']}
  onConfirm={handleSave}
  onCancel={handleCancel}
/>
```

## Loading State

```tsx
<Confirmation
  open={open}
  message="Processing..."
  loading={isProcessing}
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

## Rich Message Content

```tsx
<Confirmation
  open={open}
  message={
    <div>
      <strong>Warning!</strong>
      <p>This action cannot be undone.</p>
    </div>
  }
  onConfirm={handleConfirm}
  onCancel={handleCancel}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | - | Open state |
| `message` | `ReactNode` | **required** | Message content |
| `confirmLabel` | `string` | `'Confirm'` | Confirm button label |
| `cancelLabel` | `string` | `'Cancel'` | Cancel button label |
| `onConfirm` | `() => void` | - | Confirm callback |
| `onCancel` | `() => void` | - | Cancel callback |
| `loading` | `boolean` | `false` | Loading state |
| `submitBindings` | `KeyboardEventKey[]` | - | Confirm keyboard shortcut |
| `cancelBindings` | `KeyboardEventKey[]` | - | Cancel keyboard shortcut |
| `style` | `CSSProperties` | - | Custom styles |
| `className` | `string` | - | CSS class name |
| `classnames` | `ConfirmationClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `message` | Message container |
| `actions` | Actions container |
| `confirmButton` | Confirm button |
| `cancelButton` | Cancel button |
