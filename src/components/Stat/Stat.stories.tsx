import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stat as StatComponent } from './Stat'

const meta: Meta<typeof StatComponent> = {
  title: 'components/Stat',
  component: StatComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    value: '97.1K',
    label: 'Followers',
  },
}

export default meta

type Story = StoryObj<typeof StatComponent>

export const Playground: Story = {}

export const Group: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <StatComponent value="4" label="Following" />
      <StatComponent value="97.1K" label="Followers" />
    </div>
  ),
}

export const Examples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div style={{ display: 'flex', gap: 16 }}>
        <StatComponent value="128" label="Posts" />
        <StatComponent value="4.2K" label="Likes" />
        <StatComponent value="312" label="Comments" />
      </div>
      <div style={{ display: 'flex', gap: 16 }}>
        <StatComponent value="$12,450" label="Revenue" />
        <StatComponent value="1,024" label="Orders" />
        <StatComponent value="89%" label="Completion" />
      </div>
    </div>
  ),
}
