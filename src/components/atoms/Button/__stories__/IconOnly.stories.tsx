import type { Meta, StoryObj } from '@storybook/react-vite'

import { Plus, Search, Settings, X } from '../../../../icons/Lucide'
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

const IconOnlyExample = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
    <Button variant="primary" icon={<Plus size={18} />} />
    <Button variant="secondary" icon={<Search size={18} />} />
    <Button variant="ghost" icon={<Settings size={18} />} />
    <Button variant="danger" icon={<X size={18} />} />
  </div>
)

export const IconOnly: Story = {
  render: () => <IconOnlyExample />,
}
