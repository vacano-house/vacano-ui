import type { Meta, StoryObj } from '@storybook/react-vite'

import { Overline as OverlineComponent } from './Overline'

const meta: Meta<typeof OverlineComponent> = {
  title: 'components/Overline',
  component: OverlineComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Daily Mix',
    description: '12 Tracks',
  },
}

export default meta

type Story = StoryObj<typeof OverlineComponent>

export const Playground: Story = {}

export const WithoutDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <OverlineComponent>Category</OverlineComponent>
      <OverlineComponent>Status</OverlineComponent>
      <OverlineComponent>Release Date</OverlineComponent>
    </div>
  ),
}

export const WithDescription: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <OverlineComponent description="12 Tracks">Daily Mix</OverlineComponent>
      <OverlineComponent description="Active">Status</OverlineComponent>
      <OverlineComponent description="February 22, 2026">Release Date</OverlineComponent>
    </div>
  ),
}

export const InContext: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <OverlineComponent description="12 Tracks">Daily Mix</OverlineComponent>
      <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700 }}>Frontend Radio</h3>
    </div>
  ),
}
