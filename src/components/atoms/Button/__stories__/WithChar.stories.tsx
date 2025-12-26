import type { Meta, StoryObj } from '@storybook/react-vite'

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

const WithCharExample = () => (
  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
    <Button variant="primary" char="K">
      Search
    </Button>
    <Button variant="secondary" char="S">
      Save
    </Button>
    <Button variant="ghost" char="Esc">
      Cancel
    </Button>
    <Button variant="danger" char="D">
      Delete
    </Button>
  </div>
)

export const WithChar: Story = {
  render: () => <WithCharExample />,
}
