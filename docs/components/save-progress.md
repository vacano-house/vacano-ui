# SaveProgress

Background save indicator (like auto-save in video games).

*Also known as: auto-save indicator, saving indicator, background save, progress indicator*

<a href="/storybook/?path=/story/components-saveprogress--playground" target="_blank">View in Storybook</a>

## When to use

- Showing background save/upload operations. Non-blocking indicator in bottom-right corner.
- For user feedback messages, use Toastr or Notification.

## Import

```tsx
import { SaveProgressProvider, useSaveProgress } from '@vacano/ui'
```

## Setup

Wrap your app with `SaveProgressProvider`:

```tsx
import { SaveProgressProvider } from '@vacano/ui'

function App() {
  return (
    <SaveProgressProvider>
      <YourApp />
    </SaveProgressProvider>
  )
}
```

## Usage

Use the `useSaveProgress` hook to show/hide the indicator:

```tsx
import { useSaveProgress } from '@vacano/ui'

function MyComponent() {
  const { show, hide } = useSaveProgress()

  const handleSave = async () => {
    show()
    await saveData()
    hide()
  }

  return <Button onClick={handleSave}>Save</Button>
}
```

## Custom Message

```tsx
const { show, hide } = useSaveProgress()

// Default message
show()

// Custom message
show('Uploading...')
show('Syncing')
show('Auto-saving')
```

## Default Message Override

Set a default message for all `show()` calls:

```tsx
<SaveProgressProvider defaultMessage="Auto-saving">
  <YourApp />
</SaveProgressProvider>
```

## Check Visibility

```tsx
const { isVisible, show, hide } = useSaveProgress()

if (isVisible) {
  console.log('Currently saving...')
}
```

## Real-world Example

```tsx
function DocumentEditor() {
  const { show, hide } = useSaveProgress()
  const [content, setContent] = useState('')

  // Auto-save on content change
  useEffect(() => {
    const timer = setTimeout(async () => {
      if (content) {
        show()
        await api.saveDocument(content)
        hide()
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [content])

  return (
    <textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
    />
  )
}
```

## Provider Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `defaultMessage` | `string` | `'Saving'` | Default message text |
| `children` | `ReactNode` | **required** | App content |

## Hook Return Value

```tsx
type SaveProgressContextValue = {
  isVisible: boolean
  show: (message?: string) => void
  hide: () => void
}
```

## Appearance

The indicator appears in the bottom-right corner with:
- Semi-transparent background with blur effect
- Spinner animation
- Customizable message text

## Related

- [Toastr](/components/toastr) - Toast notification system
- [Notification](/components/notification) - Full-width top notification bar
- [Spinner](/components/spinner) - Loading indicator
