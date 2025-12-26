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

const DisabledExample = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary" disabled>
      Primary
    </Button>
    <Button variant="secondary" disabled>
      Secondary
    </Button>
    <Button variant="ghost" disabled>
      Ghost
    </Button>
    <Button variant="danger" disabled>
      Danger
    </Button>
    <Button variant="primary" icon={<IconLucideSearch />} disabled>
      With Icon
    </Button>
    <Button variant="secondary" char="K" disabled>
      With Char
    </Button>
  </div>
)

export const Disabled: Story = {
  render: () => <DisabledExample />,
}
