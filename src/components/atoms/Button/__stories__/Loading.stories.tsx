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

const LoadingExample = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <div>
      <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
        With text (shows dots)
      </h4>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary" loading>
          Primary
        </Button>
        <Button variant="secondary" loading>
          Secondary
        </Button>
        <Button variant="ghost" loading>
          Ghost
        </Button>
        <Button variant="danger" loading>
          Danger
        </Button>
      </div>
    </div>
    <div>
      <h4 style={{ margin: '0 0 12px 0', fontSize: '14px', color: '#666' }}>
        Icon only (shows spinner)
      </h4>
      <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        <Button variant="primary" icon={<Search size={18} />} loading />
        <Button variant="secondary" icon={<Settings size={18} />} loading />
        <Button variant="ghost" icon={<Bell size={18} />} loading />
        <Button variant="danger" icon={<Trash size={18} />} loading />
      </div>
    </div>
  </div>
)

export const Loading: Story = {
  render: () => <LoadingExample />,
}
