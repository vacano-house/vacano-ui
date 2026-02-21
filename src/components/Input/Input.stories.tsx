import { useState } from 'react'

import { Button, FieldRow } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Input as InputComponent } from './Input'
import { InputProps } from './types'

const meta: Meta<typeof InputComponent> = {
  title: 'components/Input',
  component: InputComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Input label',
    placeholder: 'Enter text...',
    size: 'default',
    variant: 'normal',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    message: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['compact', 'default'] },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof InputComponent>

const InteractiveInput = (props: InputProps) => {
  const [value, setValue] = useState(props.value ?? '')

  return <InputComponent {...props} value={value} onChange={(e) => setValue(e.target.value)} />
}

export const Playground: Story = {
  render: (args) => <InteractiveInput {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveInput variant="normal" label="Label" placeholder="Normal input" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveInput variant="error" label="Label" placeholder="Error input" />
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
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveInput size="default" label="Default" placeholder="Default size input" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Compact Size</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveInput size="compact" label="Compact" placeholder="Compact size input" />
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal Disabled</div>
        <FieldRow gap={24}>
          <InputComponent disabled variant="normal" label="Disabled" placeholder="Disabled input" />
          <InputComponent
            disabled
            variant="normal"
            label="With value"
            value="Disabled with value"
          />
        </FieldRow>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <FieldRow gap={24}>
          <InputComponent
            disabled
            variant="error"
            label="Disabled"
            placeholder="Disabled error input"
          />
          <InputComponent
            disabled
            variant="error"
            label="With value"
            value="Disabled error with value"
          />
        </FieldRow>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <InteractiveInput placeholder="Without label" />
      <InteractiveInput placeholder="Another input" />
      <span style={{ color: '#666', fontSize: 14 }}>Inputs without labels</span>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          fullWidth: false (default)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveInput label="Default width" placeholder="Input fits content" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>fullWidth: true</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveInput fullWidth label="Full width" placeholder="Input expands to container" />
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
        display: block (default) - each input takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveInput fullWidth label="First name" placeholder="Enter first name" />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveInput fullWidth label="Last name" placeholder="Enter last name" />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveInput fullWidth label="Email" placeholder="Enter email address" />
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
          <InteractiveInput label="First" placeholder="First" />
          <InteractiveInput label="Second" placeholder="Second" />
          <InteractiveInput label="Third" placeholder="Third" />
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
            width: 600,
          }}
        >
          <InteractiveInput label="Left" placeholder="Left input" />
          <InteractiveInput label="Center" placeholder="Center input" />
          <InteractiveInput label="Right" placeholder="Right input" />
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
          <InteractiveInput label="Centered 1" placeholder="First" />
          <InteractiveInput label="Centered 2" placeholder="Second" />
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
          <InteractiveInput label="End 1" placeholder="First" />
          <InteractiveInput label="End 2" placeholder="Second" />
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
            width: 250,
            height: 200,
          }}
        >
          <InteractiveInput label="Start 1" placeholder="Input 1" />
          <InteractiveInput label="Start 2" placeholder="Input 2" />
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
            width: 250,
            height: 200,
          }}
        >
          <InteractiveInput label="Center 1" placeholder="Input 1" />
          <InteractiveInput label="Center 2" placeholder="Input 2" />
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
            width: 250,
            height: 200,
          }}
        >
          <InteractiveInput label="End 1" placeholder="Input 1" />
          <InteractiveInput label="End 2" placeholder="Input 2" />
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
            width: 250,
            height: 200,
          }}
        >
          <InteractiveInput fullWidth label="Stretch 1" placeholder="Input 1" />
          <InteractiveInput fullWidth label="Stretch 2" placeholder="Input 2" />
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
          grid-template-columns: repeat(2, 1fr) - Form layout
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveInput fullWidth label="First Name" placeholder="John" />
          <InteractiveInput fullWidth label="Last Name" placeholder="Doe" />
          <InteractiveInput fullWidth label="Email" placeholder="john@example.com" />
          <InteractiveInput fullWidth label="Phone" placeholder="+1 234 567 8900" />
        </div>
      </div>

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
          <InteractiveInput fullWidth label="City" placeholder="New York" />
          <InteractiveInput fullWidth label="State" placeholder="NY" />
          <InteractiveInput fullWidth label="ZIP Code" placeholder="10001" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: 1fr 2fr (unequal columns)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveInput fullWidth label="Prefix" placeholder="Mr." />
          <InteractiveInput fullWidth label="Full Name" placeholder="John Smith" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Auto-fit columns: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveInput fullWidth label="Field 1" placeholder="Auto 1" />
          <InteractiveInput fullWidth label="Field 2" placeholder="Auto 2" />
          <InteractiveInput fullWidth label="Field 3" placeholder="Auto 3" />
          <InteractiveInput fullWidth label="Field 4" placeholder="Auto 4" />
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Input with submit button</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveInput label="Email" placeholder="Enter your email" />
          <Button variant="normal">Subscribe</Button>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Input with validation message (error state)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveInput
            fullWidth
            variant="error"
            label="Password"
            placeholder="Enter password"
            message="Password must be at least 8 characters"
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Form with multiple inputs and buttons
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveInput fullWidth label="Username" placeholder="Enter username" />
          <InteractiveInput fullWidth label="Email" placeholder="Enter email" type="email" />
          <InteractiveInput
            fullWidth
            label="Password"
            placeholder="Enter password"
            type="password"
          />
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
            <Button variant="system">Cancel</Button>
            <Button variant="normal">Submit</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Mixed sizes in same form</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveInput
            fullWidth
            size="default"
            label="Default size input"
            placeholder="Default"
          />
          <InteractiveInput fullWidth label="Compact size input" placeholder="Compact" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Inline search bar pattern
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 8,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <div style={{ flex: 1 }}>
            <InteractiveInput fullWidth placeholder="Search..." />
          </div>
          <Button variant="normal">Search</Button>
        </div>
      </div>
    </div>
  ),
}

export const Prefix: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <InteractiveInput fullWidth label="Website" prefix="https://" placeholder="example.com" />
      <InteractiveInput fullWidth label="Email" prefix="@" placeholder="username" />
      <InteractiveInput fullWidth label="Price" prefix="$" placeholder="0.00" type="number" />
      <InteractiveInput fullWidth label="Phone" prefix="+1" placeholder="234 567 8900" />
      <InteractiveInput
        fullWidth
        label="Subdomain"
        prefix="app."
        placeholder="your-company"
        message="Will be available at app.your-company.vacano.io"
      />
      <InteractiveInput
        fullWidth
        label="Error with prefix"
        prefix="https://"
        placeholder="example.com"
        variant="error"
        message="Invalid URL"
      />
      <InteractiveInput
        fullWidth
        label="Compact with prefix"
        prefix="$"
        placeholder="0.00"
        size="compact"
      />
      <InputComponent
        fullWidth
        label="Disabled with prefix"
        prefix="https://"
        value="vacano.io"
        disabled
      />
    </div>
  ),
}

export const Message: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error with message</div>
        <InteractiveInput
          fullWidth
          variant="error"
          label="Email"
          placeholder="Enter email"
          message="Invalid email address"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal with message</div>
        <InteractiveInput
          fullWidth
          variant="normal"
          label="Username"
          placeholder="Enter username"
          message="Username is available"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Without message</div>
        <InteractiveInput fullWidth label="Name" placeholder="Enter name" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Side by side: with and without message
        </div>
        <FieldRow>
          <InteractiveInput
            fullWidth
            variant="error"
            label="Password"
            placeholder="Enter password"
            message="Too short"
          />
          <InteractiveInput fullWidth label="Username" placeholder="Enter username" />
        </FieldRow>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Compact size with message
        </div>
        <InteractiveInput
          fullWidth
          size="compact"
          variant="error"
          label="Code"
          placeholder="Enter code"
          message="Invalid code"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Disabled with message</div>
        <InteractiveInput
          fullWidth
          disabled
          variant="error"
          label="Email"
          value="bad-email"
          message="Invalid email address"
        />
      </div>
    </div>
  ),
}
