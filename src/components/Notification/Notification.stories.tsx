import { Button } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { NotificationProvider } from './NotificationProvider'
import { useNotification } from './useNotification'

const meta: Meta = {
  title: 'components/Notification',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <NotificationProvider>
        <Story />
      </NotificationProvider>
    ),
  ],
}

export default meta

type Story = StoryObj

const NotificationDemo = () => {
  const { show } = useNotification()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button onClick={() => show('Default notification message')}>Show Default</Button>
      <Button variant="success" onClick={() => show('Success! Operation completed.', 'success')}>
        Show Success
      </Button>
      <Button
        variant="warning"
        onClick={() => show('Warning! Please check your input.', 'warning')}
      >
        Show Warning
      </Button>
      <Button variant="danger" onClick={() => show('Error! Something went wrong.', 'danger')}>
        Show Danger
      </Button>
      <Button variant="system" onClick={() => show('Info: New updates available.', 'info')}>
        Show Info
      </Button>
    </div>
  )
}

export const Playground: Story = {
  render: () => <NotificationDemo />,
}

const VariantsDemo = () => {
  const { show } = useNotification()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default</div>
        <Button onClick={() => show('This is a default notification')}>Show Default</Button>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Success</div>
        <Button
          variant="success"
          onClick={() => show('Operation completed successfully!', 'success')}
        >
          Show Success
        </Button>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Warning</div>
        <Button
          variant="warning"
          onClick={() => show('Please review before continuing.', 'warning')}
        >
          Show Warning
        </Button>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Danger</div>
        <Button
          variant="danger"
          onClick={() => show('An error occurred. Please try again.', 'danger')}
        >
          Show Danger
        </Button>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Info</div>
        <Button
          variant="system"
          onClick={() => show('New version is available for download.', 'info')}
        >
          Show Info
        </Button>
      </div>
    </div>
  )
}

export const Variants: Story = {
  render: () => <VariantsDemo />,
}

const QueueDemo = () => {
  const { show } = useNotification()

  const showMultiple = () => {
    show('First notification', 'default', 2000)
    show('Second notification', 'success', 2000)
    show('Third notification', 'warning', 2000)
    show('Fourth notification', 'danger', 2000)
    show('Fifth notification', 'info', 2000)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 14, color: '#666', maxWidth: 300 }}>
        Click the button to add 5 notifications to the queue. They will show one by one.
      </div>
      <Button onClick={showMultiple}>Add 5 Notifications</Button>
    </div>
  )
}

export const Queue: Story = {
  render: () => <QueueDemo />,
}

const CustomDurationDemo = () => {
  const { show } = useNotification()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Button onClick={() => show('Quick notification (2s)', 'default', 2000)}>2 seconds</Button>
      <Button onClick={() => show('Normal notification (5s)', 'default', 5000)}>
        5 seconds (default)
      </Button>
      <Button onClick={() => show('Long notification (10s)', 'default', 10000)}>10 seconds</Button>
    </div>
  )
}

export const CustomDuration: Story = {
  render: () => <CustomDurationDemo />,
}

const ManualHideDemo = () => {
  const { show, hide } = useNotification()

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Button onClick={() => show('This notification can be hidden manually', 'info', 30000)}>
        Show Notification
      </Button>
      <Button variant="danger" onClick={hide}>
        Hide Notification
      </Button>
    </div>
  )
}

export const ManualHide: Story = {
  render: () => <ManualHideDemo />,
}
