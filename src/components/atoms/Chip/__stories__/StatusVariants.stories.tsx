import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip } from '../Chip'

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Chip>

const StatusVariantsExample = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Chip>Default</Chip>
    <Chip status="neutral">Neutral</Chip>
    <Chip status="success">Success</Chip>
    <Chip status="warning">Warning</Chip>
    <Chip status="error">Error</Chip>
  </div>
)

export const StatusVariants: Story = {
  render: () => <StatusVariantsExample />,
}
