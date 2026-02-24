import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { SplitFlapText as SplitFlapTextComponent } from './SplitFlapText'

const meta: Meta<typeof SplitFlapTextComponent> = {
  title: 'components/SplitFlapText',
  component: SplitFlapTextComponent,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof SplitFlapTextComponent>

export const Playground: Story = {
  args: {
    text: 'Hello World',
  },
}

const phrases = [
  'Departing to New York  ',
  'Arriving from London   ',
  'Gate B42 now boarding   ',
  'Flight delayed 30 min  ',
  'Connecting via Frankfurt',
]

const InteractiveDemo = () => {
  const [index, setIndex] = useState(0)
  const text = phrases[index % phrases.length]!

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
      <SplitFlapTextComponent text={text} />
      <button onClick={() => setIndex((i) => i + 1)} style={{ padding: '8px 16px' }}>
        Next phrase
      </button>
    </div>
  )
}

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
}
