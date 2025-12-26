import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconLucideSearch } from '../../../../icons/Lucide'
import { Button } from '../Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Button>

const WithIconExample = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" icon={<IconLucideSearch />}>
      Search
    </Button>
    <Button variant="secondary" icon="animated-settings">
      Settings
    </Button>
    <Button variant="ghost" icon="animated-bell">
      Notifications
    </Button>
    <Button variant="danger" icon="animated-trash">
      Delete
    </Button>
  </div>
)

export const WithIcon: Story = {
  render: () => <WithIconExample />,
}
