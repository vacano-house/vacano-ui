import type { Meta, StoryObj } from '@storybook/react-vite'

import { NotifyConfirmationProvider } from './NotifyConfirmationProvider'
import { useNotifyConfirmation } from './useNotifyConfirmation'
import { Button } from '../Button'

const meta: Meta = {
  title: 'components/NotifyConfirmation',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <NotifyConfirmationProvider>
        <Story />
      </NotifyConfirmationProvider>
    ),
  ],
}

export default meta

type Story = StoryObj

const BasicDemo = () => {
  const { show } = useNotifyConfirmation()

  return (
    <Button
      variant="system"
      onClick={() =>
        show(
          'Terms & Conditions',
          'By continuing, you agree to our terms of service and privacy policy.',
          () => console.log('Agreed!'),
          () => console.log('Discarded'),
        )
      }
    >
      Show Notification
    </Button>
  )
}

export const Playground: Story = {
  render: () => <BasicDemo />,
}

const CustomLabelsDemo = () => {
  const { show } = useNotifyConfirmation()

  return (
    <Button
      variant="system"
      onClick={() =>
        show(
          'Cookie Preferences',
          'We use cookies to improve your experience.',
          () => console.log('Accepted!'),
          () => console.log('Declined'),
          { confirmLabel: 'Accept Cookies', discardLabel: 'Decline' },
        )
      }
    >
      Show Custom Labels
    </Button>
  )
}

export const CustomLabels: Story = {
  render: () => <CustomLabelsDemo />,
}

const AsyncDemo = () => {
  const { show } = useNotifyConfirmation()

  return (
    <Button
      variant="system"
      onClick={() =>
        show(
          'Data Processing Consent',
          'We need your permission to process analytics data.',
          async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000))
            console.log('Consent saved!')
          },
          () => console.log('Discarded'),
        )
      }
    >
      Show Async Confirm
    </Button>
  )
}

export const AsyncConfirm: Story = {
  render: () => <AsyncDemo />,
}

const CookieBannerDemo = () => {
  const { show } = useNotifyConfirmation()

  return (
    <Button
      variant="system"
      onClick={() =>
        show(
          'We value your privacy',
          'This website uses cookies to ensure you get the best experience. We use them for analytics and personalization.',
          () => console.log('Cookies accepted'),
          () => console.log('Cookies declined'),
          { confirmLabel: 'Accept All', discardLabel: 'Reject All' },
        )
      }
    >
      Show Cookie Banner
    </Button>
  )
}

export const CookieBanner: Story = {
  render: () => <CookieBannerDemo />,
}
