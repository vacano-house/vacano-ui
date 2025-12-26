import type { Meta, StoryObj } from '@storybook/react-vite'

import { Lock, Mail, Search } from '../../../../icons/Lucide'
import { Input } from '../Input'

const meta: Meta<typeof Input> = {
  title: 'Atoms/Input',
  component: Input,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Input>

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
    <h3 style={{ marginBottom: '24px' }}>States</h3>

    <div style={labelStyle}>default</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} placeholder="Default input" />
    </div>

    <div style={labelStyle}>with label</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} label="Email" placeholder="Enter your email" />
    </div>

    <div style={labelStyle}>with icon</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} icon={<Search size={16} />} placeholder="Search..." />
    </div>

    <div style={labelStyle}>disabled</div>
    <div style={containerStyle}>
      <Input value="Disabled value" onChange={() => {}} disabled label="Disabled" />
    </div>

    <div style={labelStyle}>state: warning</div>
    <div style={containerStyle}>
      <Input
        value=""
        onChange={() => {}}
        state="warning"
        label="Warning"
        placeholder="Warning state"
      />
    </div>

    <div style={labelStyle}>state: error</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} state="error" label="Error" placeholder="Error state" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Types</h3>

    <div style={labelStyle}>type: text (default)</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} placeholder="Text input" />
    </div>

    <div style={labelStyle}>type: email</div>
    <div style={containerStyle}>
      <Input
        value=""
        onChange={() => {}}
        type="email"
        icon={<Mail size={16} />}
        placeholder="email@example.com"
      />
    </div>

    <div style={labelStyle}>type: password</div>
    <div style={containerStyle}>
      <Input
        value="secret123"
        onChange={() => {}}
        type="password"
        icon={<Lock size={16} />}
        placeholder="Password"
      />
    </div>

    <div style={labelStyle}>type: number</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} type="number" placeholder="0" />
    </div>

    <div style={labelStyle}>type: phone</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} type="tel" label="Phone" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Width Behavior</h3>

    <div style={labelStyle}>default (max-width: 320px)</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} placeholder="Default width" />
    </div>

    <div style={labelStyle}>fullWidth=true</div>
    <div style={containerStyle}>
      <Input value="" onChange={() => {}} fullWidth placeholder="Full width input" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout</h3>

    <div style={labelStyle}>flex, gap: 16px</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '16px' }}>
      <Input value="" onChange={() => {}} placeholder="First" />
      <Input value="" onChange={() => {}} placeholder="Second" />
    </div>

    <div style={labelStyle}>flex, fullWidth</div>
    <div style={{ ...containerStyle, display: 'flex', gap: '16px' }}>
      <Input value="" onChange={() => {}} fullWidth placeholder="First" />
      <Input value="" onChange={() => {}} fullWidth placeholder="Second" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

    <div style={labelStyle}>grid, grid-template-columns: repeat(2, 1fr)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
      }}
    >
      <Input value="" onChange={() => {}} fullWidth label="First Name" placeholder="John" />
      <Input value="" onChange={() => {}} fullWidth label="Last Name" placeholder="Doe" />
      <Input
        value=""
        onChange={() => {}}
        fullWidth
        label="Email"
        type="email"
        placeholder="john@example.com"
      />
      <Input value="" onChange={() => {}} fullWidth label="Phone" type="tel" />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
