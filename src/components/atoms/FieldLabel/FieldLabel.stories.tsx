import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldLabel as FieldLabelComponent } from './FieldLabel'

const meta: Meta<typeof FieldLabelComponent> = {
  title: 'atoms/FieldLabel',
  component: FieldLabelComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Field Label',
    required: false,
    variant: 'normal',
  },
  argTypes: {
    children: { control: 'text' },
    required: { control: 'boolean' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof FieldLabelComponent>

export const Playground: Story = {
  render: (args) => <FieldLabelComponent {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <FieldLabelComponent variant="normal">Username</FieldLabelComponent>
          <FieldLabelComponent variant="normal" required>
            Email
          </FieldLabelComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <FieldLabelComponent variant="error">Username</FieldLabelComponent>
          <FieldLabelComponent variant="error" required>
            Email
          </FieldLabelComponent>
        </div>
      </div>
    </div>
  ),
}

export const Required: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Non-Required</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <FieldLabelComponent>First Name</FieldLabelComponent>
          <FieldLabelComponent variant="error">Last Name</FieldLabelComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Required (with asterisk)</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <FieldLabelComponent required>First Name</FieldLabelComponent>
          <FieldLabelComponent required variant="error">
            Last Name
          </FieldLabelComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - each label takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <FieldLabelComponent>First Name</FieldLabelComponent>
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <FieldLabelComponent required>Email Address</FieldLabelComponent>
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <FieldLabelComponent variant="error" required>
            Password
          </FieldLabelComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutInline: Story = {
  name: 'Layout: Inline',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 600 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: inline / inline-block - labels flow inline with text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <span>Fill in your </span>
        <span style={{ display: 'inline-block', marginRight: 8 }}>
          <FieldLabelComponent required>name</FieldLabelComponent>
        </span>
        <span>and </span>
        <span style={{ display: 'inline-block', marginRight: 8 }}>
          <FieldLabelComponent required>email</FieldLabelComponent>
        </span>
        <span>to continue.</span>
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
          flex-direction: row, gap: 24px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>Username</FieldLabelComponent>
          <FieldLabelComponent required>Email</FieldLabelComponent>
          <FieldLabelComponent variant="error">Password</FieldLabelComponent>
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
            border: '1px dashed #ccc',
            padding: 16,
            width: 500,
          }}
        >
          <FieldLabelComponent>Left</FieldLabelComponent>
          <FieldLabelComponent required>Center</FieldLabelComponent>
          <FieldLabelComponent variant="error">Right</FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>Centered 1</FieldLabelComponent>
          <FieldLabelComponent required>Centered 2</FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: flex-end
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>End 1</FieldLabelComponent>
          <FieldLabelComponent required>End 2</FieldLabelComponent>
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          align-items: flex-start (default)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 200,
            height: 150,
          }}
        >
          <FieldLabelComponent>Start 1</FieldLabelComponent>
          <FieldLabelComponent required>Start 2</FieldLabelComponent>
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
            width: 200,
            height: 150,
          }}
        >
          <FieldLabelComponent>Center 1</FieldLabelComponent>
          <FieldLabelComponent required>Center 2</FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-end</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 200,
            height: 150,
          }}
        >
          <FieldLabelComponent>End 1</FieldLabelComponent>
          <FieldLabelComponent required>End 2</FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: stretch</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 200,
            height: 150,
          }}
        >
          <FieldLabelComponent>Stretch 1</FieldLabelComponent>
          <FieldLabelComponent required>Stretch 2</FieldLabelComponent>
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(3, 1fr)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>Item 1</FieldLabelComponent>
          <FieldLabelComponent required>Item 2</FieldLabelComponent>
          <FieldLabelComponent variant="error">Item 3</FieldLabelComponent>
          <FieldLabelComponent variant="error" required>
            Item 4
          </FieldLabelComponent>
          <FieldLabelComponent>Item 5</FieldLabelComponent>
          <FieldLabelComponent required>Item 6</FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: start
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>Start 1</FieldLabelComponent>
          <FieldLabelComponent required>Start 2</FieldLabelComponent>
          <FieldLabelComponent variant="error">Start 3</FieldLabelComponent>
          <FieldLabelComponent variant="error" required>
            Start 4
          </FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: center
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>Center 1</FieldLabelComponent>
          <FieldLabelComponent required>Center 2</FieldLabelComponent>
          <FieldLabelComponent variant="error">Center 3</FieldLabelComponent>
          <FieldLabelComponent variant="error" required>
            Center 4
          </FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: end
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'end',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>End 1</FieldLabelComponent>
          <FieldLabelComponent required>End 2</FieldLabelComponent>
          <FieldLabelComponent variant="error">End 3</FieldLabelComponent>
          <FieldLabelComponent variant="error" required>
            End 4
          </FieldLabelComponent>
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
          Label with text input field
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <FieldLabelComponent required>Email Address</FieldLabelComponent>
            <input
              type="email"
              placeholder="Enter your email"
              style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4 }}
            />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Error label with input field
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <FieldLabelComponent variant="error" required>
              Password
            </FieldLabelComponent>
            <input
              type="password"
              placeholder="Enter your password"
              style={{ padding: '8px 12px', border: '1px solid #f44336', borderRadius: 4 }}
            />
            <span style={{ fontSize: 11, color: '#f44336' }}>
              Password must be at least 8 characters
            </span>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Long label text in constrained width
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 200 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <FieldLabelComponent required>
              This is a very long field label that may wrap to multiple lines
            </FieldLabelComponent>
            <input
              type="text"
              placeholder="Value"
              style={{
                padding: '8px 12px',
                border: '1px solid #ccc',
                borderRadius: 4,
                width: '100%',
                boxSizing: 'border-box',
              }}
            />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Multiple labels in a form layout
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <FieldLabelComponent required>First Name</FieldLabelComponent>
              <input
                type="text"
                placeholder="John"
                style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <FieldLabelComponent required>Last Name</FieldLabelComponent>
              <input
                type="text"
                placeholder="Doe"
                style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4 }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <FieldLabelComponent>Phone Number</FieldLabelComponent>
              <input
                type="tel"
                placeholder="(555) 123-4567"
                style={{ padding: '8px 12px', border: '1px solid #ccc', borderRadius: 4 }}
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Labels with varying lengths
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <FieldLabelComponent>Short</FieldLabelComponent>
          <FieldLabelComponent required>Medium length label</FieldLabelComponent>
          <FieldLabelComponent variant="error">
            This is a longer label to show alignment
          </FieldLabelComponent>
          <FieldLabelComponent variant="error" required>
            Another required field with error styling
          </FieldLabelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Horizontal form layout with labels
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', gap: 16 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, flex: 1 }}>
              <FieldLabelComponent required>City</FieldLabelComponent>
              <input
                type="text"
                placeholder="New York"
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 80 }}>
              <FieldLabelComponent required>State</FieldLabelComponent>
              <input
                type="text"
                placeholder="NY"
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4, width: 100 }}>
              <FieldLabelComponent required>ZIP</FieldLabelComponent>
              <input
                type="text"
                placeholder="10001"
                style={{
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
}
