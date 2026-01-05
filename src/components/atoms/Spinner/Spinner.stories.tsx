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

export const Playground: Story = {}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
      <div style={{ textAlign: 'center' }}>
        <SpinnerComponent size="xs" />
        <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>xs</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerComponent size="sm" />
        <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>sm</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerComponent size="md" />
        <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>md</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerComponent size="lg" />
        <div style={{ marginTop: 8, fontSize: 12, color: '#666' }}>lg</div>
      </div>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          flex with align-items: center
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <SpinnerComponent size="sm" />
          <span>Loading data...</span>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            border: '1px dashed #ccc',
            padding: 32,
          }}
        >
          <SpinnerComponent size="lg" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
            width: 300,
          }}
        >
          <span>Status:</span>
          <SpinnerComponent size="sm" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 32,
            width: 200,
          }}
        >
          <SpinnerComponent size="lg" />
          <span style={{ fontSize: 14, color: '#666' }}>Loading...</span>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-start</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 32,
            width: 200,
          }}
        >
          <SpinnerComponent size="md" />
          <span style={{ fontSize: 14, color: '#666' }}>Processing</span>
        </div>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        grid with place-items: center
      </div>
      <div
        style={{
          display: 'grid',
          placeItems: 'center',
          border: '1px dashed #ccc',
          width: 300,
          height: 200,
        }}
      >
        <SpinnerComponent size="lg" />
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Loading overlay pattern</div>
        <div
          style={{
            position: 'relative',
            border: '1px dashed #ccc',
            padding: 32,
          }}
        >
          <div style={{ opacity: 0.3 }}>
            <p>This is some content that is being loaded.</p>
            <p>It appears faded while loading.</p>
          </div>
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SpinnerComponent size="lg" />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Card loading state</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            border: '1px solid #eee',
            borderRadius: 8,
            padding: 48,
            background: '#fafafa',
          }}
        >
          <SpinnerComponent size="lg" />
          <div style={{ fontSize: 14, color: '#666' }}>Loading content...</div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Inline with text at different sizes
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <p style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
            <SpinnerComponent size="xs" /> Checking status...
          </p>
          <p style={{ display: 'flex', alignItems: 'center', gap: 8, margin: '8px 0' }}>
            <SpinnerComponent size="sm" /> Fetching data...
          </p>
          <p
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              margin: '8px 0',
              fontSize: 18,
            }}
          >
            <SpinnerComponent size="md" /> Processing request...
          </p>
        </div>
      </div>
    </div>
  ),
}
