import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../Button'

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Button>

const containerStyle = {
  border: '1px dashed #ccc',
  padding: '16px',
  marginBottom: '16px',
  background: '#fafafa',
}

const labelStyle = {
  fontSize: '12px',
  color: '#666',
  marginBottom: '8px',
  fontFamily: 'monospace',
}

const LayoutsExample = () => (
  <div style={{ maxWidth: '600px' }}>
    <h3 style={{ marginBottom: '24px' }}>Block Layout</h3>

    <div style={labelStyle}>display: block (default)</div>
    <div style={{ ...containerStyle, display: 'block' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

    <div style={labelStyle}>flex, justify-content: flex-start</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <div style={labelStyle}>flex, justify-content: center</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center', gap: '8px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <div style={labelStyle}>flex, justify-content: flex-end</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <div style={labelStyle}>flex, justify-content: space-between</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Vertical</h3>

    <div style={labelStyle}>flex-direction: column, align-items: flex-start</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '8px',
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <div style={labelStyle}>flex-direction: column, align-items: center</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <div style={labelStyle}>flex-direction: column, align-items: stretch (fullWidth)</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        gap: '8px',
      }}
    >
      <Button fullWidth variant="primary">
        Primary
      </Button>
      <Button fullWidth variant="secondary">
        Secondary
      </Button>
      <Button fullWidth variant="ghost">
        Ghost
      </Button>
    </div>

    <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

    <div style={labelStyle}>grid, grid-template-columns: repeat(3, auto)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '8px',
        justifyContent: 'start',
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>

    <div style={labelStyle}>grid, grid-template-columns: repeat(3, 1fr) (fullWidth)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
      }}
    >
      <Button fullWidth variant="primary">
        Primary
      </Button>
      <Button fullWidth variant="secondary">
        Secondary
      </Button>
      <Button fullWidth variant="ghost">
        Ghost
      </Button>
    </div>

    <div style={labelStyle}>grid, grid-template-columns: 1fr (vertical, fullWidth)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '8px',
      }}
    >
      <Button fullWidth variant="primary">
        Primary
      </Button>
      <Button fullWidth variant="secondary">
        Secondary
      </Button>
      <Button fullWidth variant="ghost">
        Ghost
      </Button>
    </div>

    <h3 style={{ margin: '24px 0' }}>Common Patterns</h3>

    <div style={labelStyle}>Dialog actions (flex-end)</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <Button variant="ghost">Cancel</Button>
      <Button variant="primary">Confirm</Button>
    </div>

    <div style={labelStyle}>Danger action (space-between)</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="danger">Delete</Button>
      <Button variant="secondary">Cancel</Button>
    </div>

    <div style={labelStyle}>Full width actions (column)</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        maxWidth: '300px',
      }}
    >
      <Button fullWidth variant="primary">
        Continue
      </Button>
      <Button fullWidth variant="ghost">
        Skip for now
      </Button>
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
