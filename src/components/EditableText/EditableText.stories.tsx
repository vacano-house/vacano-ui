import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { EditableText as EditableTextComponent } from './EditableText'
import type { EditableTextProps } from './types'

const meta: Meta<typeof EditableTextComponent> = {
  title: 'components/EditableText',
  component: EditableTextComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    value: 'Editable text',
    disabled: false,
    placeholder: 'Enter text...',
  },
  argTypes: {
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    placeholder: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof EditableTextComponent>

const InteractiveEditableText = (props: EditableTextProps) => {
  const [value, setValue] = useState(props.value)

  return <EditableTextComponent {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  render: (args) => <InteractiveEditableText {...args} onChange={() => {}} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default</div>
        <InteractiveEditableText value="Click pencil to edit" onChange={() => {}} />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Disabled</div>
        <EditableTextComponent value="Cannot edit this" onChange={() => {}} disabled />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With placeholder</div>
        <InteractiveEditableText value="" placeholder="Enter value..." onChange={() => {}} />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With value</div>
        <EditableTextComponent value="This text cannot be edited" onChange={() => {}} disabled />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Empty with placeholder</div>
        <EditableTextComponent
          value=""
          placeholder="Disabled placeholder"
          onChange={() => {}}
          disabled
        />
      </div>
    </div>
  ),
}

export const LayoutInline: Story = {
  name: 'Layout: Inline',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <span>User name: </span>
      <InteractiveEditableText value="John Doe" onChange={() => {}} />
      <span> (click pencil to edit)</span>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>gap: 24px</div>
        <div
          style={{
            display: 'flex',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveEditableText value="First" onChange={() => {}} />
          <InteractiveEditableText value="Second" onChange={() => {}} />
          <InteractiveEditableText value="Third" onChange={() => {}} />
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
            width: 400,
          }}
        >
          <InteractiveEditableText value="Left" onChange={() => {}} />
          <InteractiveEditableText value="Right" onChange={() => {}} />
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
            width: 200,
          }}
        >
          <InteractiveEditableText value="First item" onChange={() => {}} />
          <InteractiveEditableText value="Second item" onChange={() => {}} />
          <InteractiveEditableText value="Third item" onChange={() => {}} />
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
          }}
        >
          <InteractiveEditableText value="First item" onChange={() => {}} />
          <InteractiveEditableText value="Second item" onChange={() => {}} />
          <InteractiveEditableText value="Third item" onChange={() => {}} />
        </div>
      </div>
    </div>
  ),
}

const ProfileDemo = () => {
  const [name, setName] = useState('John Doe')
  const [email, setEmail] = useState('john@example.com')
  const [phone, setPhone] = useState('+1 234 567 8900')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 80, fontSize: 14, color: '#666' }}>Name:</span>
        <EditableTextComponent value={name} onChange={setName} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 80, fontSize: 14, color: '#666' }}>Email:</span>
        <EditableTextComponent value={email} onChange={setEmail} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ width: 80, fontSize: 14, color: '#666' }}>Phone:</span>
        <EditableTextComponent value={phone} onChange={setPhone} />
      </div>
    </div>
  )
}

export const ProfileExample: Story = {
  name: 'Example: Profile',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: 24 }}>
      <h3 style={{ margin: '0 0 16px', fontSize: 16 }}>User Profile</h3>
      <ProfileDemo />
    </div>
  ),
}
