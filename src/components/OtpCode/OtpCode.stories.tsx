import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { OtpCode as OtpCodeComponent } from './OtpCode'
import { OtpCodeProps } from './types'

const meta: Meta<typeof OtpCodeComponent> = {
  title: 'components/OtpCode',
  component: OtpCodeComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    label: 'Verification code',
    length: 6,
    size: 'default',
    value: '',
    variant: 'normal',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    length: { control: { type: 'number', min: 4, max: 8 } },
    size: { control: 'select', options: ['compact', 'default'] },
    value: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof OtpCodeComponent>

const InteractiveOtpCode = (props: OtpCodeProps) => {
  const [value, setValue] = useState(props.value ?? '')

  return <OtpCodeComponent {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  render: (args) => <InteractiveOtpCode {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Empty</div>
        <InteractiveOtpCode label="Enter code" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Partial</div>
        <InteractiveOtpCode label="Enter code" value="123" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Complete</div>
        <InteractiveOtpCode label="Enter code" value="123456" />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <InteractiveOtpCode variant="normal" label="Verification code" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <InteractiveOtpCode variant="error" label="Invalid code" value="123456" />
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Compact</div>
        <InteractiveOtpCode size="compact" label="Compact size" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default</div>
        <InteractiveOtpCode size="default" label="Default size" />
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
        <OtpCodeComponent disabled variant="normal" label="Disabled" value="123456" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <OtpCodeComponent disabled variant="error" label="Disabled Error" value="123456" />
      </div>
    </div>
  ),
}

export const DifferentLengths: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>4 digits</div>
        <InteractiveOtpCode length={4} label="4-digit code" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>6 digits (default)</div>
        <InteractiveOtpCode length={6} label="6-digit code" />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>8 digits</div>
        <InteractiveOtpCode length={8} label="8-digit code" />
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveOtpCode />
      <InteractiveOtpCode size="compact" />
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - component takes natural width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveOtpCode label="Enter verification code" />
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveOtpCode label="Centered OTP" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between with button
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            border: '1px dashed #ccc',
            padding: 16,
            width: 500,
          }}
        >
          <InteractiveOtpCode label="Enter code" />
          <button style={{ padding: '12px 24px', cursor: 'pointer' }}>Verify</button>
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
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            width: 350,
            height: 200,
          }}
        >
          <InteractiveOtpCode label="Start aligned" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            width: 350,
            height: 200,
          }}
        >
          <InteractiveOtpCode label="Center aligned" />
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
          grid-template-columns: repeat(2, 1fr), justify-items: center
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            justifyItems: 'center',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveOtpCode label="Code 1" size="compact" />
          <InteractiveOtpCode label="Code 2" size="compact" />
        </div>
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const FormDemo = () => {
      const [code, setCode] = useState('')
      const [error, setError] = useState(false)

      const handleVerify = () => {
        if (code.length !== 6) {
          setError(true)
        } else {
          setError(false)
          alert(`Code verified: ${code}`)
        }
      }

      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            alignItems: 'center',
            padding: 32,
            border: '1px solid #e5e7eb',
            borderRadius: 12,
            maxWidth: 400,
          }}
        >
          <h3 style={{ margin: 0 }}>Verify your identity</h3>
          <p style={{ margin: 0, color: '#666', fontSize: 14, textAlign: 'center' }}>
            Enter the 6-digit code sent to your email
          </p>
          <OtpCodeComponent
            value={code}
            onChange={(v) => {
              setCode(v)
              setError(false)
            }}
            variant={error ? 'error' : 'normal'}
            label={error ? 'Invalid code' : undefined}
          />
          <button
            onClick={handleVerify}
            style={{
              padding: '12px 48px',
              cursor: 'pointer',
              backgroundColor: '#212529',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              fontSize: 14,
              fontWeight: 500,
            }}
          >
            Verify
          </button>
        </div>
      )
    }

    return <FormDemo />
  },
}
