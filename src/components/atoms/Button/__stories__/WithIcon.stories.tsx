import type { Meta, StoryObj } from '@storybook/react-vite'

import { Bell, Search, Settings, Trash } from '../../../../icons/Lucide'
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
    <Button variant="primary" icon={<Search size={18} />}>
      Search
    </Button>
    <Button variant="secondary" icon={<Settings size={18} />}>
      Settings
    </Button>
    <Button variant="ghost" icon={<Bell size={18} />}>
      Notifications
    </Button>
    <Button variant="danger" icon={<Trash size={18} />}>
      Delete
    </Button>
  </div>
)

export const WithIcon: Story = {
  render: () => <WithIconExample />,
}
