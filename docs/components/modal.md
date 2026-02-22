# Modal

Overlay modal dialog component. Renders via `createPortal` to `document.body`.

*Also known as: dialog, popup, overlay, lightbox, modal dialog*

<a href="/storybook/?path=/story/components-modal--playground" target="_blank">View in Storybook</a>

## When to use

- Overlaying content that requires attention (forms, confirmations, details). For side panels, use Drawer.
- For simple yes/no confirmations, use Confirmation.

## Import

```tsx
import { Modal } from '@vacano/ui'
```

## Usage

```tsx
const [open, setOpen] = useState(false)

<Button onClick={() => setOpen(true)}>Open Modal</Button>

<Modal open={open}>
  <h2>Modal Title</h2>
  <p>Modal content goes here.</p>
  <Button onClick={() => setOpen(false)}>Close</Button>
</Modal>
```

## Custom Width

```tsx
<Modal open={open} width="600px">
  <p>Wide modal content</p>
</Modal>

<Modal open={open} width="80%">
  <p>Percentage width modal</p>
</Modal>
```

## Animated

```tsx
<Modal open={open} animated>
  <p>This modal has fade-in animation</p>
</Modal>
```

## Without Animation

```tsx
<Modal open={open} animated={false}>
  <p>This modal appears instantly</p>
</Modal>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | **required** | Controls whether the modal is visible |
| `children` | `ReactNode` | - | Modal content |
| `width` | `string` | `'500px'` | Custom width of the modal content container |
| `animated` | `boolean` | `false` | Enable fade-in animation for overlay and content |
| `className` | `string` | - | CSS class name applied to the content container |
| `classnames` | `ModalClassNames` | - | Custom class names for sub-elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the content container |
| `data-test-id` | `string` | - | Test identifier attribute |

The component also accepts all standard `HTMLDivElement` attributes (except `className` which is overridden by the component prop).

### ModalClassNames

| Key | Description |
|-----|-------------|
| `overlay` | Background overlay that covers the viewport |
| `content` | Modal content container |

## Related

- [Drawer](/components/drawer) - Slide-out side panel
- [Confirmation](/components/confirmation) - Simple confirmation dialog
