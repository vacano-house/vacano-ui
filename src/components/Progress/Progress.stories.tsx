import { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress } from './Progress'

const meta: Meta<typeof Progress> = {
  title: 'components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
    },
    size: {
      control: 'select',
      options: ['compact', 'default'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Progress>

export const Playground: Story = {
  args: {
    value: 50,
    size: 'default',
  },
  render: (args) => (
    <div style={{ width: 300 }}>
      <Progress {...args} />
    </div>
  ),
}

export const Values: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Progress value={0} />
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <Progress value={60} size="compact" />
      <Progress value={60} size="default" />
    </div>
  ),
}

const AnimatedProgress = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 1))
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return <Progress value={value} />
}

export const Animated: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 300 }}>
      <AnimatedProgress />
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, border: '1px dashed #ccc', padding: 16, width: 500 }}>
      <Progress value={30} />
      <Progress value={60} />
      <Progress value={90} />
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        border: '1px dashed #ccc',
        padding: 16,
        width: 400,
      }}
    >
      <Progress value={25} />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  ),
}

export const WithLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 300 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
        <span style={{ fontSize: 14 }}>Uploading...</span>
        <span style={{ fontSize: 14 }}>67%</span>
      </div>
      <Progress value={67} />
    </div>
  ),
}
