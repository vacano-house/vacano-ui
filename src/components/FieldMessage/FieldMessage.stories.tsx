import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { FieldMessage as FieldMessageComponent } from './FieldMessage'
import { Input } from '../Input'
import { Select } from '../Select'

const meta: Meta<typeof FieldMessageComponent> = {
  title: 'components/FieldMessage',
  component: FieldMessageComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'This is a field message',
    variant: 'normal',
  },
  argTypes: {
    children: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error', 'success', 'warning'] },
  },
}

export default meta

type Story = StoryObj<typeof FieldMessageComponent>

export const Playground: Story = {
  render: (args) => <FieldMessageComponent {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>Normal</div>
        <FieldMessageComponent variant="normal">This field is optional</FieldMessageComponent>
      </div>
      <div>
        <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>Error</div>
        <FieldMessageComponent variant="error">This field is required</FieldMessageComponent>
      </div>
      <div>
        <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>Success</div>
        <FieldMessageComponent variant="success">Email is available</FieldMessageComponent>
      </div>
      <div>
        <div style={{ marginBottom: 4, fontSize: 12, color: '#666' }}>Warning</div>
        <FieldMessageComponent variant="warning">Password is weak</FieldMessageComponent>
      </div>
    </div>
  ),
}

export const WithInput: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const InputWithMessage = () => {
      const [value, setValue] = useState('')
      const hasError = value.length > 0 && value.length < 3

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Input
            label="Username"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={hasError ? 'error' : 'normal'}
            placeholder="Enter username"
          />
          {hasError && (
            <FieldMessageComponent variant="error" style={{ marginLeft: 6 }}>
              Username must be at least 3 characters
            </FieldMessageComponent>
          )}
          {!hasError && value.length >= 3 && (
            <FieldMessageComponent variant="success" style={{ marginLeft: 6 }}>
              Username is valid
            </FieldMessageComponent>
          )}
        </div>
      )
    }

    return <InputWithMessage />
  },
}

export const WithSelect: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const SelectWithMessage = () => {
      const [value, setValue] = useState('')

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <Select
            label="Country"
            value={value}
            onChange={setValue}
            placeholder="Select country"
            options={[
              { value: 'us', label: 'United States' },
              { value: 'uk', label: 'United Kingdom' },
              { value: 'de', label: 'Germany' },
            ]}
          />
          <FieldMessageComponent variant="normal" style={{ marginLeft: 6 }}>
            Select your country of residence
          </FieldMessageComponent>
        </div>
      )
    }

    return <SelectWithMessage />
  },
}

export const FormExample: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const FormDemo = () => {
      const [email, setEmail] = useState('')
      const [password, setPassword] = useState('')

      const emailError = email.length > 0 && !email.includes('@')
      const passwordWeak = password.length > 0 && password.length < 8

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Input
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant={emailError ? 'error' : 'normal'}
              placeholder="Enter email"
            />
            {emailError && (
              <FieldMessageComponent variant="error" style={{ marginLeft: 6 }}>
                Please enter a valid email address
              </FieldMessageComponent>
            )}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <Input
              fullWidth
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            {passwordWeak && (
              <FieldMessageComponent variant="warning" style={{ marginLeft: 6 }}>
                Password should be at least 8 characters
              </FieldMessageComponent>
            )}
            {password.length >= 8 && (
              <FieldMessageComponent variant="success" style={{ marginLeft: 6 }}>
                Strong password
              </FieldMessageComponent>
            )}
          </div>
        </div>
      )
    }

    return <FormDemo />
  },
}

export const MultilineMessage: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 250 }}>
      <FieldMessageComponent variant="error">
        Password must contain at least one uppercase letter, one lowercase letter, and one number
      </FieldMessageComponent>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 300 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - message takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <FieldMessageComponent variant="normal">This is a helper message</FieldMessageComponent>
        <FieldMessageComponent variant="error" style={{ marginTop: 8 }}>
          This is an error message
        </FieldMessageComponent>
      </div>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Field with message below</div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <Input fullWidth label="Email" placeholder="Enter email" />
        <FieldMessageComponent variant="normal" style={{ marginLeft: 6 }}>
          We will never share your email
        </FieldMessageComponent>
      </div>
    </div>
  ),
}
