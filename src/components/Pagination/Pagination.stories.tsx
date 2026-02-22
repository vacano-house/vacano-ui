import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Pagination as PaginationComponent } from './Pagination'

const meta: Meta<typeof PaginationComponent> = {
  title: 'components/Pagination',
  component: PaginationComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    total: 10,
    variant: 'flat',
    siblings: 1,
    boundaries: 1,
  },
  argTypes: {
    total: { control: 'number' },
    variant: { control: 'select', options: ['flat', 'bordered', 'light'] },
    siblings: { control: 'number' },
    boundaries: { control: 'number' },
    showControls: { control: 'boolean' },
    loop: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof PaginationComponent>

export const Playground: Story = {
  args: {
    total: 10,
  },
}

export const Disabled: Story = {
  args: {
    total: 10,
    disabled: true,
  },
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Flat (default)</div>
        <PaginationComponent total={10} variant="flat" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Bordered</div>
        <PaginationComponent total={10} variant="bordered" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Light</div>
        <PaginationComponent total={10} variant="light" />
      </div>
    </div>
  ),
}

export const WithControls: Story = {
  args: {
    total: 10,
    showControls: true,
  },
}

export const Loop: Story = {
  args: {
    total: 5,
    showControls: true,
    loop: true,
  },
}

export const InitialPage: Story = {
  args: {
    total: 10,
    initialPage: 5,
  },
}

export const Siblings: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>siblings=1 (default)</div>
        <PaginationComponent total={20} initialPage={10} siblings={1} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>siblings=2</div>
        <PaginationComponent total={20} initialPage={10} siblings={2} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>siblings=3</div>
        <PaginationComponent total={20} initialPage={10} siblings={3} />
      </div>
    </div>
  ),
}

export const FewPages: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>3 pages</div>
        <PaginationComponent total={3} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>5 pages</div>
        <PaginationComponent total={5} showControls />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>1 page</div>
        <PaginationComponent total={1} />
      </div>
    </div>
  ),
}

const ControlledExample = () => {
  const [page, setPage] = useState(1)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'center' }}>
      <PaginationComponent total={10} page={page} onChange={setPage} showControls />
      <div style={{ fontSize: 14, color: '#666' }}>
        Current page: <strong>{page}</strong>
      </div>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}
