import { Button } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tooltip as TooltipComponent } from './Tooltip'
import { Info } from '../../icons/Lucide'

const meta: Meta<typeof TooltipComponent> = {
  title: 'components/Tooltip',
  component: TooltipComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    content: 'This is a tooltip',
    placement: 'top',
    variant: 'dark',
    delay: 200,
  },
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
    variant: { control: 'select', options: ['dark', 'light', 'success', 'warning', 'danger'] },
    delay: { control: 'number' },
    content: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof TooltipComponent>

export const Playground: Story = {
  render: (args) => (
    <div style={{ padding: 100 }}>
      <TooltipComponent {...args}>
        <Button>Hover me</Button>
      </TooltipComponent>
    </div>
  ),
}

export const Placements: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 200px)',
        gap: 100,
        padding: 150,
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TooltipComponent content="Tooltip on top" placement="top">
          <Button variant="system">Top</Button>
        </TooltipComponent>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TooltipComponent content="Tooltip on bottom" placement="bottom">
          <Button variant="system">Bottom</Button>
        </TooltipComponent>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TooltipComponent content="Tooltip on left" placement="left">
          <Button variant="system">Left</Button>
        </TooltipComponent>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <TooltipComponent content="Tooltip on right" placement="right">
          <Button variant="system">Right</Button>
        </TooltipComponent>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{ display: 'flex', gap: 24, padding: 100, flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <TooltipComponent content="Dark tooltip (default)" placement="top" variant="dark">
        <Button variant="system">Dark</Button>
      </TooltipComponent>
      <TooltipComponent content="Light tooltip" placement="top" variant="light">
        <Button variant="system">Light</Button>
      </TooltipComponent>
      <TooltipComponent content="Success tooltip" placement="top" variant="success">
        <Button variant="normal">Success</Button>
      </TooltipComponent>
      <TooltipComponent content="Warning tooltip" placement="top" variant="warning">
        <Button variant="system">Warning</Button>
      </TooltipComponent>
      <TooltipComponent content="Danger tooltip" placement="top" variant="danger">
        <Button variant="danger">Danger</Button>
      </TooltipComponent>
    </div>
  ),
}

export const Delays: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{ display: 'flex', gap: 24, padding: 100, flexWrap: 'wrap', justifyContent: 'center' }}
    >
      <TooltipComponent content="Instant tooltip" placement="top" delay={0}>
        <Button variant="system">No delay (0ms)</Button>
      </TooltipComponent>
      <TooltipComponent content="Default delay tooltip" placement="top" delay={200}>
        <Button variant="system">Default (200ms)</Button>
      </TooltipComponent>
      <TooltipComponent content="Slow tooltip" placement="top" delay={500}>
        <Button variant="system">Slow (500ms)</Button>
      </TooltipComponent>
      <TooltipComponent content="Very slow tooltip" placement="top" delay={1000}>
        <Button variant="system">Very slow (1s)</Button>
      </TooltipComponent>
    </div>
  ),
}

export const LongContent: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ padding: 150, display: 'flex', justifyContent: 'center' }}>
      <TooltipComponent
        content="This is a very long tooltip content that demonstrates how the tooltip handles lengthy text. The text will automatically wrap to multiple lines when it exceeds the maximum width of 300 pixels."
        placement="top"
      >
        <Button variant="system">Long tooltip content</Button>
      </TooltipComponent>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Block container</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <TooltipComponent content="Tooltip in block" placement="top">
            <Button variant="system">Hover me</Button>
          </TooltipComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Multiple tooltips in block
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <TooltipComponent content="First tooltip" placement="top">
            <Button variant="system">First</Button>
          </TooltipComponent>
          <TooltipComponent content="Second tooltip" placement="top">
            <Button variant="system">Second</Button>
          </TooltipComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutInline: Story = {
  name: 'Layout: Inline',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Inline with text</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <p style={{ margin: 0 }}>
            This is some text with a{' '}
            <TooltipComponent content="More information here" placement="top">
              <span style={{ textDecoration: 'underline', cursor: 'help', color: '#0582ca' }}>
                tooltip
              </span>
            </TooltipComponent>{' '}
            embedded within it.
          </p>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Icon with tooltip</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 8 }}>
            Password requirements
            <TooltipComponent
              content="Must be at least 8 characters with uppercase, lowercase, and numbers"
              placement="right"
            >
              <Info style={{ width: 16, height: 16, color: '#666', cursor: 'help' }} />
            </TooltipComponent>
          </p>
        </div>
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
          justify-content: flex-start
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <TooltipComponent content="Action 1" placement="top">
            <Button variant="system">Action 1</Button>
          </TooltipComponent>
          <TooltipComponent content="Action 2" placement="top">
            <Button variant="system">Action 2</Button>
          </TooltipComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <TooltipComponent content="Edit item" placement="top">
            <Button variant="system">Edit</Button>
          </TooltipComponent>
          <TooltipComponent content="Delete item" placement="top" variant="danger">
            <Button variant="danger">Delete</Button>
          </TooltipComponent>
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
          }}
        >
          <TooltipComponent content="Go back" placement="right">
            <Button variant="system">Back</Button>
          </TooltipComponent>
          <TooltipComponent content="Continue to next step" placement="left">
            <Button variant="normal">Continue</Button>
          </TooltipComponent>
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-start</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            minWidth: 200,
          }}
        >
          <TooltipComponent content="View dashboard" placement="right">
            <Button variant="system">Dashboard</Button>
          </TooltipComponent>
          <TooltipComponent content="Manage settings" placement="right">
            <Button variant="system">Settings</Button>
          </TooltipComponent>
          <TooltipComponent content="View profile" placement="right">
            <Button variant="system">Profile</Button>
          </TooltipComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            minWidth: 200,
          }}
        >
          <TooltipComponent content="View dashboard" placement="right">
            <Button variant="system">Dashboard</Button>
          </TooltipComponent>
          <TooltipComponent content="Manage settings" placement="right">
            <Button variant="system">Settings</Button>
          </TooltipComponent>
          <TooltipComponent content="View profile" placement="right">
            <Button variant="system">Profile</Button>
          </TooltipComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Grid with tooltips</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            justifyItems: 'start',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          {['Copy', 'Paste', 'Cut', 'Undo', 'Redo', 'Save'].map((action) => (
            <TooltipComponent key={action} content={`${action} action`} placement="top">
              <Button variant="system">{action}</Button>
            </TooltipComponent>
          ))}
        </div>
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Form field with help tooltip
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ marginBottom: 8 }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              API Key
              <TooltipComponent
                content="Your API key can be found in your account settings under Developer section"
                placement="top"
              >
                <Info style={{ width: 14, height: 14, color: '#666', cursor: 'help' }} />
              </TooltipComponent>
            </label>
          </div>
          <input
            type="text"
            placeholder="Enter your API key"
            style={{
              width: '100%',
              padding: '8px 12px',
              border: '1px solid #e5e7eb',
              borderRadius: 6,
              fontSize: 14,
              boxSizing: 'border-box',
            }}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Toolbar with tooltips</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div
            style={{
              display: 'flex',
              gap: 8,
              padding: 8,
              backgroundColor: '#f5f5f5',
              borderRadius: 8,
            }}
          >
            <TooltipComponent content="Bold (Ctrl+B)" placement="bottom">
              <button
                style={{
                  width: 32,
                  height: 32,
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontWeight: 'bold',
                }}
              >
                B
              </button>
            </TooltipComponent>
            <TooltipComponent content="Italic (Ctrl+I)" placement="bottom">
              <button
                style={{
                  width: 32,
                  height: 32,
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderRadius: 4,
                  cursor: 'pointer',
                  fontStyle: 'italic',
                }}
              >
                I
              </button>
            </TooltipComponent>
            <TooltipComponent content="Underline (Ctrl+U)" placement="bottom">
              <button
                style={{
                  width: 32,
                  height: 32,
                  border: 'none',
                  backgroundColor: 'transparent',
                  borderRadius: 4,
                  cursor: 'pointer',
                  textDecoration: 'underline',
                }}
              >
                U
              </button>
            </TooltipComponent>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Status indicators with tooltips
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <TooltipComponent content="All systems operational" placement="top" variant="success">
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#16a34a',
                  cursor: 'help',
                }}
              />
            </TooltipComponent>
            <TooltipComponent content="Minor issues detected" placement="top" variant="warning">
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#d97706',
                  cursor: 'help',
                }}
              />
            </TooltipComponent>
            <TooltipComponent content="Service unavailable" placement="top" variant="danger">
              <div
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  backgroundColor: '#C1121F',
                  cursor: 'help',
                }}
              />
            </TooltipComponent>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Dark context with light tooltip
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#1f2937',
            borderRadius: 8,
          }}
        >
          <TooltipComponent
            content="Light tooltip on dark background"
            placement="top"
            variant="light"
          >
            <Button variant="system">Light tooltip</Button>
          </TooltipComponent>
        </div>
      </div>
    </div>
  ),
}
