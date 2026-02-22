import type { Meta, StoryObj } from '@storybook/react-vite'

import { Alert as AlertComponent } from './Alert'

const InfoIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </svg>
)

const CheckIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m5 12 5 5L20 7" />
  </svg>
)

const AlertTriangleIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
)

const meta: Meta<typeof AlertComponent> = {
  title: 'components/Alert',
  component: AlertComponent,
}

export default meta

type Story = StoryObj<typeof AlertComponent>

export const Playground: Story = {
  args: {
    icon: <InfoIcon />,
    title: 'This is an alert',
    description: 'Thanks for subscribing to our newsletter!',
    variant: 'normal',
  },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <AlertComponent
        icon={<InfoIcon />}
        title="Information"
        description="This is a general informational message."
        variant="normal"
      />
      <AlertComponent
        icon={<CheckIcon />}
        title="Success"
        description="Your changes have been saved successfully."
        variant="success"
      />
      <AlertComponent
        icon={<AlertTriangleIcon />}
        title="Warning"
        description="Your trial period expires in 3 days."
        variant="warning"
      />
      <AlertComponent
        icon={<XIcon />}
        title="Error"
        description="Something went wrong. Please try again later."
        variant="danger"
      />
    </div>
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <AlertComponent icon={<InfoIcon />} title="This is an informational alert" variant="normal" />
      <AlertComponent
        icon={<CheckIcon />}
        title="Operation completed successfully"
        variant="success"
      />
      <AlertComponent
        icon={<AlertTriangleIcon />}
        title="Please review your settings"
        variant="warning"
      />
      <AlertComponent icon={<XIcon />} title="Failed to save changes" variant="danger" />
    </div>
  ),
}

export const Radius: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <AlertComponent icon={<InfoIcon />} title="This is a none radius alert" radius="none" />
      <AlertComponent icon={<InfoIcon />} title="This is a sm radius alert" radius="sm" />
      <AlertComponent icon={<InfoIcon />} title="This is a md radius alert" radius="md" />
      <AlertComponent icon={<InfoIcon />} title="This is a lg radius alert" radius="lg" />
      <AlertComponent icon={<InfoIcon />} title="This is a full radius alert" radius="full" />
    </div>
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <AlertComponent title="Note" description="This alert has no icon, just text content." />
  ),
}

export const LongContent: Story = {
  render: () => (
    <AlertComponent
      icon={<InfoIcon />}
      title="System maintenance scheduled"
      description="We will be performing scheduled maintenance on Saturday, March 15 from 2:00 AM to 6:00 AM UTC. During this time, the service may be temporarily unavailable. We apologize for any inconvenience."
    />
  ),
}
