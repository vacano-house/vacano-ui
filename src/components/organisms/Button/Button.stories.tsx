import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button as ButtonComponent } from './Button'
import { Download, Edit, Plus, Search, Settings, Trash2 } from '../../../icons/Lucide'

const meta: Meta<typeof ButtonComponent> = {
  title: 'organisms/Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Button',
    variant: 'normal',
    size: 'default',
    disabled: false,
    fullWidth: false,
    loading: false,
    type: 'button',
  },
  argTypes: {
    children: { control: 'text' },
    variant: {
      control: 'select',
      options: ['normal', 'system', 'success', 'warning', 'danger', 'transparent'],
    },
    size: { control: 'select', options: ['compact', 'default'] },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    loading: { control: 'boolean' },
    type: { control: 'select', options: ['button', 'submit', 'reset', 'link'] },
    keyBindings: { control: 'object' },
  },
}

export default meta

type Story = StoryObj<typeof ButtonComponent>

export const Playground: Story = {
  render: (args) => <ButtonComponent {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <ButtonComponent variant="normal">Normal Button</ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>System</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <ButtonComponent variant="system">System Button</ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Success</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <ButtonComponent variant="success">Success Button</ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Warning</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <ButtonComponent variant="warning">Warning Button</ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Danger</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <ButtonComponent variant="danger">Danger Button</ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Transparent</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <ButtonComponent variant="transparent">Transparent Button</ButtonComponent>
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default Size</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <ButtonComponent size="default" variant="normal">
            Normal
          </ButtonComponent>
          <ButtonComponent size="default" variant="system">
            System
          </ButtonComponent>
          <ButtonComponent size="default" variant="success">
            Success
          </ButtonComponent>
          <ButtonComponent size="default" variant="warning">
            Warning
          </ButtonComponent>
          <ButtonComponent size="default" variant="danger">
            Danger
          </ButtonComponent>
          <ButtonComponent size="default" variant="transparent">
            Transparent
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Compact Size</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <ButtonComponent size="compact" variant="normal">
            Normal
          </ButtonComponent>
          <ButtonComponent size="compact" variant="system">
            System
          </ButtonComponent>
          <ButtonComponent size="compact" variant="success">
            Success
          </ButtonComponent>
          <ButtonComponent size="compact" variant="warning">
            Warning
          </ButtonComponent>
          <ButtonComponent size="compact" variant="danger">
            Danger
          </ButtonComponent>
          <ButtonComponent size="compact" variant="transparent">
            Transparent
          </ButtonComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithIcon: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Icons with Text - Default Size
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent icon={<Plus />} variant="normal">
            Add Item
          </ButtonComponent>
          <ButtonComponent icon={<Settings />} variant="system">
            Settings
          </ButtonComponent>
          <ButtonComponent icon={<Trash2 />} variant="danger">
            Delete
          </ButtonComponent>
          <ButtonComponent icon={<Search />} variant="transparent">
            Search
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Icons with Text - Compact Size
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent icon={<Plus />} variant="normal" size="compact">
            Add
          </ButtonComponent>
          <ButtonComponent icon={<Edit />} variant="system" size="compact">
            Edit
          </ButtonComponent>
          <ButtonComponent icon={<Trash2 />} variant="danger" size="compact">
            Remove
          </ButtonComponent>
          <ButtonComponent icon={<Download />} variant="transparent" size="compact">
            Download
          </ButtonComponent>
        </div>
      </div>
    </div>
  ),
}

export const IconOnly: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Icon Only - Default Size</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent icon={<Plus />} variant="normal" />
          <ButtonComponent icon={<Settings />} variant="system" />
          <ButtonComponent icon={<Trash2 />} variant="danger" />
          <ButtonComponent icon={<Search />} variant="transparent" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Icon Only - Compact Size</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent icon={<Plus />} variant="normal" size="compact" />
          <ButtonComponent icon={<Settings />} variant="system" size="compact" />
          <ButtonComponent icon={<Trash2 />} variant="danger" size="compact" />
          <ButtonComponent icon={<Search />} variant="transparent" size="compact" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Various Icons</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent icon={<Edit />} variant="normal" />
          <ButtonComponent icon={<Download />} variant="normal" />
          <ButtonComponent icon={<Search />} variant="normal" />
        </div>
      </div>
    </div>
  ),
}

export const Loading: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Loading State - All Variants
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent loading variant="normal">
            Loading
          </ButtonComponent>
          <ButtonComponent loading variant="system">
            Loading
          </ButtonComponent>
          <ButtonComponent loading variant="danger">
            Loading
          </ButtonComponent>
          <ButtonComponent loading variant="transparent">
            Loading
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Loading with Icon (icon hidden during loading)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent loading icon={<Plus />} variant="normal">
            Add Item
          </ButtonComponent>
          <ButtonComponent loading icon={<Settings />} variant="system">
            Settings
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Loading - Compact Size</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent loading variant="normal" size="compact">
            Loading
          </ButtonComponent>
          <ButtonComponent loading variant="system" size="compact">
            Loading
          </ButtonComponent>
        </div>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Disabled State - All Variants
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent disabled variant="normal">
            Normal
          </ButtonComponent>
          <ButtonComponent disabled variant="system">
            System
          </ButtonComponent>
          <ButtonComponent disabled variant="danger">
            Danger
          </ButtonComponent>
          <ButtonComponent disabled variant="transparent">
            Transparent
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Disabled with Icons</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent disabled icon={<Plus />} variant="normal">
            Add Item
          </ButtonComponent>
          <ButtonComponent disabled icon={<Settings />} variant="system">
            Settings
          </ButtonComponent>
          <ButtonComponent disabled icon={<Trash2 />} variant="danger">
            Delete
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Disabled Icon Only</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent disabled icon={<Plus />} variant="normal" />
          <ButtonComponent disabled icon={<Settings />} variant="system" />
          <ButtonComponent disabled icon={<Trash2 />} variant="danger" />
        </div>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Full Width Buttons</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 400 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ButtonComponent fullWidth variant="normal">
              Full Width Normal
            </ButtonComponent>
            <ButtonComponent fullWidth variant="system">
              Full Width System
            </ButtonComponent>
            <ButtonComponent fullWidth variant="danger">
              Full Width Danger
            </ButtonComponent>
            <ButtonComponent fullWidth variant="transparent">
              Full Width Transparent
            </ButtonComponent>
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Full Width with Icons</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 400 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <ButtonComponent fullWidth icon={<Plus />} variant="normal">
              Add New Item
            </ButtonComponent>
            <ButtonComponent fullWidth icon={<Download />} variant="system">
              Download File
            </ButtonComponent>
          </div>
        </div>
      </div>
    </div>
  ),
}

export const WithKeyBindings: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Buttons with Keyboard Shortcuts
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent keyBindings={['Meta', 'S']} variant="normal">
            Save
          </ButtonComponent>
          <ButtonComponent keyBindings={['Meta', 'Enter']} variant="system">
            Submit
          </ButtonComponent>
          <ButtonComponent keyBindings={['Escape']} variant="transparent">
            Cancel
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Icons and Shortcuts</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent icon={<Plus />} keyBindings={['Meta', 'N']} variant="normal">
            New
          </ButtonComponent>
          <ButtonComponent icon={<Search />} keyBindings={['Meta', 'K']} variant="system">
            Search
          </ButtonComponent>
          <ButtonComponent icon={<Trash2 />} keyBindings={['Delete']} variant="danger">
            Delete
          </ButtonComponent>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Single Key Shortcuts</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, display: 'flex', gap: 16 }}>
          <ButtonComponent keyBindings={['Enter']} variant="normal">
            Confirm
          </ButtonComponent>
          <ButtonComponent keyBindings={[' ']} variant="system">
            Toggle
          </ButtonComponent>
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
        display: block (default) - each button takes full container width when fullWidth is set
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <ButtonComponent fullWidth variant="normal">
            First Action
          </ButtonComponent>
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <ButtonComponent fullWidth variant="system">
            Second Action
          </ButtonComponent>
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <ButtonComponent fullWidth variant="transparent">
            Third Action
          </ButtonComponent>
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
          Button Group - flex-direction: row, gap: 12px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ButtonComponent variant="normal">Save</ButtonComponent>
          <ButtonComponent variant="system">Cancel</ButtonComponent>
          <ButtonComponent variant="transparent">Reset</ButtonComponent>
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
          <ButtonComponent variant="transparent">Back</ButtonComponent>
          <div style={{ display: 'flex', gap: 12 }}>
            <ButtonComponent variant="system">Cancel</ButtonComponent>
            <ButtonComponent variant="normal">Continue</ButtonComponent>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ButtonComponent variant="normal">Confirm</ButtonComponent>
          <ButtonComponent variant="danger">Delete</ButtonComponent>
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
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ButtonComponent variant="system">Cancel</ButtonComponent>
          <ButtonComponent variant="normal">Submit</ButtonComponent>
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
            height: 180,
          }}
        >
          <ButtonComponent variant="normal">Action 1</ButtonComponent>
          <ButtonComponent variant="system">Action 2</ButtonComponent>
          <ButtonComponent variant="transparent">Action 3</ButtonComponent>
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
            height: 180,
          }}
        >
          <ButtonComponent variant="normal">Action 1</ButtonComponent>
          <ButtonComponent variant="system">Action 2</ButtonComponent>
          <ButtonComponent variant="transparent">Action 3</ButtonComponent>
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
            height: 180,
          }}
        >
          <ButtonComponent variant="normal">Action 1</ButtonComponent>
          <ButtonComponent variant="system">Action 2</ButtonComponent>
          <ButtonComponent variant="transparent">Action 3</ButtonComponent>
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
            height: 180,
          }}
        >
          <ButtonComponent fullWidth variant="normal">
            Action 1
          </ButtonComponent>
          <ButtonComponent fullWidth variant="system">
            Action 2
          </ButtonComponent>
          <ButtonComponent fullWidth variant="transparent">
            Action 3
          </ButtonComponent>
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
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ButtonComponent fullWidth icon={<Plus />} variant="normal">
            Add
          </ButtonComponent>
          <ButtonComponent fullWidth icon={<Edit />} variant="system">
            Edit
          </ButtonComponent>
          <ButtonComponent fullWidth icon={<Trash2 />} variant="danger">
            Delete
          </ButtonComponent>
          <ButtonComponent fullWidth icon={<Download />} variant="normal">
            Download
          </ButtonComponent>
          <ButtonComponent fullWidth icon={<Search />} variant="system">
            Search
          </ButtonComponent>
          <ButtonComponent fullWidth icon={<Settings />} variant="transparent">
            Settings
          </ButtonComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            maxWidth: 400,
          }}
        >
          <ButtonComponent fullWidth variant="normal">
            Option 1
          </ButtonComponent>
          <ButtonComponent fullWidth variant="normal">
            Option 2
          </ButtonComponent>
          <ButtonComponent fullWidth variant="normal">
            Option 3
          </ButtonComponent>
          <ButtonComponent fullWidth variant="normal">
            Option 4
          </ButtonComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Icon-only buttons in grid: repeat(4, auto)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, auto)',
            gap: 8,
            justifyContent: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <ButtonComponent icon={<Plus />} variant="normal" />
          <ButtonComponent icon={<Edit />} variant="normal" />
          <ButtonComponent icon={<Trash2 />} variant="danger" />
          <ButtonComponent icon={<Settings />} variant="system" />
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 600 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Form with Submit Button</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div>
              <label
                style={{ display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 }}
                htmlFor="email-input"
              >
                Email
              </label>
              <input
                id="email-input"
                type="email"
                placeholder="Enter your email"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div>
              <label
                style={{ display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 }}
                htmlFor="password-input"
              >
                Password
              </label>
              <input
                id="password-input"
                type="password"
                placeholder="Enter your password"
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ccc',
                  borderRadius: 4,
                  boxSizing: 'border-box',
                }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <ButtonComponent variant="transparent">Forgot Password?</ButtonComponent>
              <ButtonComponent variant="normal" type="submit">
                Sign In
              </ButtonComponent>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Toolbar with Icon Buttons
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            backgroundColor: '#f5f5f5',
          }}
        >
          <ButtonComponent icon={<Plus />} variant="normal" size="compact">
            New
          </ButtonComponent>
          <div style={{ width: 1, height: 24, backgroundColor: '#ccc' }} />
          <ButtonComponent icon={<Edit />} variant="transparent" size="compact" />
          <ButtonComponent icon={<Download />} variant="transparent" size="compact" />
          <ButtonComponent icon={<Trash2 />} variant="transparent" size="compact" />
          <div style={{ flex: 1 }} />
          <ButtonComponent icon={<Settings />} variant="system" size="compact" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Card with Action Buttons</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            borderRadius: 8,
          }}
        >
          <h3 style={{ margin: '0 0 8px 0', fontSize: 16 }}>Project Settings</h3>
          <p style={{ margin: '0 0 16px 0', color: '#666', fontSize: 14 }}>
            Configure your project settings and preferences.
          </p>
          <div style={{ display: 'flex', gap: 12 }}>
            <ButtonComponent icon={<Settings />} variant="system">
              Configure
            </ButtonComponent>
            <ButtonComponent variant="transparent">Learn More</ButtonComponent>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Dialog Footer with Actions
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            borderRadius: 8,
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: 16, borderBottom: '1px solid #eee' }}>
            <h3 style={{ margin: 0, fontSize: 16 }}>Confirm Delete</h3>
          </div>
          <div style={{ padding: 16, backgroundColor: '#fafafa' }}>
            <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
              Are you sure you want to delete this item? This action cannot be undone.
            </p>
          </div>
          <div
            style={{
              padding: 16,
              backgroundColor: '#f5f5f5',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
            }}
          >
            <ButtonComponent variant="system">Cancel</ButtonComponent>
            <ButtonComponent variant="danger" icon={<Trash2 />}>
              Delete
            </ButtonComponent>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Mixed Sizes in Toolbar</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', gap: 8 }}>
            <ButtonComponent icon={<Plus />} variant="normal" size="compact" />
            <ButtonComponent icon={<Edit />} variant="system" size="compact" />
            <ButtonComponent icon={<Trash2 />} variant="danger" size="compact" />
          </div>
          <ButtonComponent variant="normal" keyBindings={['Meta', 'S']}>
            Save Changes
          </ButtonComponent>
        </div>
      </div>
    </div>
  ),
}
