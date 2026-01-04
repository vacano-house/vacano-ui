import { useEffect, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Progress as ProgressComponent } from './Progress'

const meta: Meta<typeof ProgressComponent> = {
  title: 'atoms/Progress',
  component: ProgressComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    value: 50,
    animated: true,
  },
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    animated: { control: 'boolean' },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '300px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof ProgressComponent>

export const Progress: Story = {}

export const Values: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <ProgressComponent value={0} />
      <ProgressComponent value={25} />
      <ProgressComponent value={50} />
      <ProgressComponent value={75} />
      <ProgressComponent value={100} />
    </div>
  ),
}

const AnimatedStory = () => {
  const [value, setValue] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => (prev >= 100 ? 0 : prev + 10))
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <ProgressComponent value={value} />
      <span style={{ fontSize: '14px', color: '#666' }}>{value}%</span>
    </div>
  )
}

export const Animated: Story = {
  render: () => <AnimatedStory />,
}

export const NoAnimation: Story = {
  args: {
    value: 60,
    animated: false,
  },
}
