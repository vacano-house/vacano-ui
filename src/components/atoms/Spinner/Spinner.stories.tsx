import type { Meta, StoryObj } from '@storybook/react-vite'

import { Spinner as SpinnerComponent } from './Spinner'

const meta: Meta<typeof SpinnerComponent> = {
  title: 'atoms/Spinner',
  component: SpinnerComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'md',
  },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg'] },
  },
}

export default meta

type Story = StoryObj<typeof SpinnerComponent>

export const Spinner: Story = {}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <SpinnerComponent size="xs" />
      <SpinnerComponent size="sm" />
      <SpinnerComponent size="md" />
      <SpinnerComponent size="lg" />
    </div>
  ),
}

export const InButton: Story = {
  render: () => (
    <button
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        padding: '8px 16px',
        border: '1px solid #ccc',
        borderRadius: '6px',
        background: 'white',
        cursor: 'pointer',
      }}
    >
      <SpinnerComponent size="xs" />
      Loading...
    </button>
  ),
}

export const Centered: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '200px',
        height: '200px',
        border: '1px dashed #ccc',
        borderRadius: '8px',
      }}
    >
      <SpinnerComponent size="lg" />
    </div>
  ),
}
