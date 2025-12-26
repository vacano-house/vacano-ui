import type { Meta, StoryObj } from '@storybook/react-vite'

import { IconLucidePlus, IconLucideSearch, IconLucideX } from '../../../../icons/Lucide'
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
    <Button variant="primary" icon={<IconLucidePlus />} />
    <Button variant="secondary" icon={<IconLucideSearch />} />
    <Button variant="ghost" icon="animated-settings" />
    <Button variant="danger" icon={<IconLucideX />} />
  </div>
)

export const IconOnly: Story = {
  render: () => <IconOnlyExample />,
}
