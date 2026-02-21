import type { Meta, StoryObj } from '@storybook/react-vite'

import { ToastProvider } from './ToastProvider'
import { useToastr } from './useToast'
import { Button } from '../Button'

const meta: Meta<typeof ToastProvider> = {
  title: 'components/Toastr',
  component: ToastProvider,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof ToastProvider>

const PlaygroundDemo = () => {
  const { show } = useToastr()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Toast Notifications</h3>

      <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
        <Button variant="system" onClick={() => show('This is a default notification')}>
          Show Default
        </Button>
        <Button
          variant="normal"
          onClick={() => show('Operation completed successfully!', 'success')}
        >
          Show Success
        </Button>
        <Button
          variant="system"
          onClick={() => show('Warning: Please verify this action', 'warning')}
        >
          Show Warning
        </Button>
        <Button variant="danger" onClick={() => show('An error occurred!', 'danger')}>
          Show Danger
        </Button>
      </div>

      <div style={{ marginTop: 12 }}>
        <Button
          variant="system"
          onClick={() => show('This toast will disappear in 3 seconds', 'default', 3000)}
        >
          Show Auto-dismiss (3s)
        </Button>
      </div>
    </div>
  )
}

export const Playground: Story = {
  render: () => (
    <ToastProvider>
      <PlaygroundDemo />
    </ToastProvider>
  ),
}

const VariantsDemo = () => {
  const { show } = useToastr()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Toast Variants</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Default (Dark Gray)</div>
          <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b7280' }}>General information</p>
          <Button
            variant="system"
            onClick={() => show('User logged in successfully', 'default', 3000)}
          >
            Show Default
          </Button>
        </div>

        <div>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Success (Green)</div>
          <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b7280' }}>Successful operations</p>
          <Button
            variant="normal"
            onClick={() => show('Changes saved successfully', 'success', 3000)}
          >
            Show Success
          </Button>
        </div>

        <div>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Warning (Yellow)</div>
          <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b7280' }}>Warnings and cautions</p>
          <Button
            variant="system"
            onClick={() => show('Please verify this action', 'warning', 3000)}
          >
            Show Warning
          </Button>
        </div>

        <div>
          <div style={{ fontWeight: 500, marginBottom: 4 }}>Danger (Red)</div>
          <p style={{ margin: '0 0 8px', fontSize: 14, color: '#6b7280' }}>
            Errors and critical issues
          </p>
          <Button variant="danger" onClick={() => show('Failed to save changes', 'danger', 3000)}>
            Show Danger
          </Button>
        </div>
      </div>
    </div>
  )
}

export const Variants: Story = {
  render: () => (
    <ToastProvider>
      <VariantsDemo />
    </ToastProvider>
  ),
}

const AutoDismissDemo = () => {
  const { show } = useToastr()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Auto-dismiss</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="system" onClick={() => show('Disappears in 2 seconds', 'default', 2000)}>
          2 seconds
        </Button>
        <Button variant="system" onClick={() => show('Disappears in 5 seconds', 'success', 5000)}>
          5 seconds
        </Button>
        <Button variant="system" onClick={() => show('Stays until closed', 'danger')}>
          No auto-dismiss
        </Button>
      </div>
    </div>
  )
}

export const AutoDismiss: Story = {
  render: () => (
    <ToastProvider>
      <AutoDismissDemo />
    </ToastProvider>
  ),
}

const MultipleToastsDemo = () => {
  const { show } = useToastr()

  const showMultiple = () => {
    show('First notification', 'default')
    setTimeout(() => show('Second notification', 'success'), 200)
    setTimeout(() => show('Third notification', 'danger'), 400)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Multiple Toasts</h3>
      <Button variant="system" onClick={showMultiple}>
        Show 3 Toasts
      </Button>
    </div>
  )
}

export const MultipleToasts: Story = {
  render: () => (
    <ToastProvider>
      <MultipleToastsDemo />
    </ToastProvider>
  ),
}

const QueueDemo = () => {
  const { show } = useToastr()

  const showMany = () => {
    for (let i = 1; i <= 6; i++) {
      setTimeout(() => {
        const variant =
          i % 4 === 0 ? 'danger' : i % 3 === 0 ? 'warning' : i % 2 === 0 ? 'success' : 'default'
        show(`Notification ${i}`, variant)
      }, i * 100)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Queue System</h3>
      <p style={{ margin: 0, fontSize: 14, color: '#6b7280' }}>
        Maximum 3 toasts visible at once. Others wait in queue.
      </p>
      <Button variant="system" onClick={showMany}>
        Show 6 Toasts
      </Button>
    </div>
  )
}

export const QueueSystem: Story = {
  render: () => (
    <ToastProvider>
      <QueueDemo />
    </ToastProvider>
  ),
}

const LongMessageDemo = () => {
  const { show } = useToastr()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Long Messages</h3>
      <Button
        variant="system"
        onClick={() =>
          show(
            'This is a very long notification message that demonstrates how the toast handles lengthy text content',
            'default',
          )
        }
      >
        Show Long Message
      </Button>
    </div>
  )
}

export const LongMessage: Story = {
  render: () => (
    <ToastProvider>
      <LongMessageDemo />
    </ToastProvider>
  ),
}

const RealWorldDemo = () => {
  const { show } = useToastr()

  const simulateSave = () => {
    show('Saving changes...', 'default', 2000)
    setTimeout(() => {
      show('Changes saved successfully!', 'success', 3000)
    }, 2000)
  }

  const simulateError = () => {
    show('Processing request...', 'default', 2000)
    setTimeout(() => {
      show('Server error: Unable to complete request', 'danger')
    }, 2000)
  }

  const simulateDelete = () => {
    show('Item deleted successfully', 'success', 3000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: 20 }}>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Real-world Examples</h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <Button variant="system" onClick={simulateSave}>
          Simulate Save Operation
        </Button>
        <Button variant="system" onClick={simulateError}>
          Simulate Error
        </Button>
        <Button variant="system" onClick={simulateDelete}>
          Simulate Delete
        </Button>
      </div>
    </div>
  )
}

export const RealWorld: Story = {
  name: 'Real-world Examples',
  render: () => (
    <ToastProvider>
      <RealWorldDemo />
    </ToastProvider>
  ),
}

const LayoutDemo = () => {
  const { show } = useToastr()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Form with toast feedback</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                fontSize: 14,
              }}
            />
            <input
              type="email"
              placeholder="Enter your email"
              style={{
                padding: '8px 12px',
                border: '1px solid #e5e7eb',
                borderRadius: 6,
                fontSize: 14,
              }}
            />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button variant="system" onClick={() => show('Form cancelled', 'default', 2000)}>
                Cancel
              </Button>
              <Button
                variant="normal"
                onClick={() => show('Form submitted successfully!', 'success', 3000)}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Action buttons with feedback
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Button
              variant="system"
              onClick={() => show('Item copied to clipboard', 'success', 2000)}
            >
              Copy
            </Button>
            <Button variant="system" onClick={() => show('Item pasted', 'success', 2000)}>
              Paste
            </Button>
            <Button variant="danger" onClick={() => show('Item deleted', 'danger', 3000)}>
              Delete
            </Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Status updates</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <Button
              variant="system"
              onClick={() => show('Connection established', 'success', 2000)}
            >
              Connect
            </Button>
            <Button variant="system" onClick={() => show('Connection lost', 'warning', 3000)}>
              Disconnect
            </Button>
            <Button variant="system" onClick={() => show('Syncing data...', 'default', 2000)}>
              Sync
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <ToastProvider>
      <LayoutDemo />
    </ToastProvider>
  ),
}
