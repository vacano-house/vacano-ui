import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip as TooltipComponent } from './Tooltip'
import { Button } from '../../organisms'

const meta: Meta<typeof TooltipComponent> = {
  title: 'templates/Tooltip',
  component: TooltipComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: 'This is a tooltip message',
    placement: 'top',
    delay: 300,
    disabled: false,
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: 'number' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof TooltipComponent>

export const Tooltip: Story = {
  render: (args) => (
    <TooltipComponent {...args}>
      <Button>Hover me</Button>
    </TooltipComponent>
  ),
}

export const Placements: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '40px',
        padding: '100px',
      }}
    >
      <TooltipComponent content="Top tooltip" placement="top">
        <Button>Top</Button>
      </TooltipComponent>
      <div style={{ display: 'flex', gap: '100px' }}>
        <TooltipComponent content="Left tooltip" placement="left">
          <Button>Left</Button>
        </TooltipComponent>
        <TooltipComponent content="Right tooltip" placement="right">
          <Button>Right</Button>
        </TooltipComponent>
      </div>
      <TooltipComponent content="Bottom tooltip" placement="bottom">
        <Button>Bottom</Button>
      </TooltipComponent>
    </div>
  ),
}

export const LongContent: Story = {
  render: () => (
    <TooltipComponent content="This is a longer tooltip message that demonstrates how the tooltip handles multiple lines of text and wraps properly.">
      <Button>Hover for long text</Button>
    </TooltipComponent>
  ),
}

export const NoDelay: Story = {
  render: () => (
    <TooltipComponent content="Instant tooltip!" delay={0}>
      <Button>No delay</Button>
    </TooltipComponent>
  ),
}

export const LongDelay: Story = {
  render: () => (
    <TooltipComponent content="This took a while!" delay={1000}>
      <Button>1 second delay</Button>
    </TooltipComponent>
  ),
}

export const Disabled: Story = {
  render: () => (
    <TooltipComponent content="You won't see this" disabled>
      <Button>Disabled tooltip</Button>
    </TooltipComponent>
  ),
}

export const OnText: Story = {
  render: () => (
    <p>
      Hover over{' '}
      <TooltipComponent content="This is additional information">
        <span style={{ textDecoration: 'underline', cursor: 'help' }}>this text</span>
      </TooltipComponent>{' '}
      to see tooltip.
    </p>
  ),
}
