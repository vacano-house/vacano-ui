import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup } from '../RadioGroup'

const meta: Meta<typeof RadioGroup> = {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof RadioGroup>

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

const paymentOptions = [
  { label: 'Credit Card', value: 'card' },
  { label: 'Bank Transfer', value: 'bank' },
  { label: 'PayPal', value: 'paypal' },
]

const sizeOptions = [
  { label: 'Small', value: 'sm' },
  { label: 'Medium', value: 'md' },
  { label: 'Large', value: 'lg' },
  { label: 'Extra Large', value: 'xl' },
]

const LayoutsExample = () => {
  const [payment, setPayment] = useState('card')
  const [size, setSize] = useState('md')

  return (
    <div style={{ maxWidth: '600px' }}>
      <h3 style={{ marginBottom: '24px' }}>With Label</h3>

      <div style={labelStyle}>label=&quot;Payment Method&quot;</div>
      <div style={containerStyle}>
        <RadioGroup
          label="Payment Method"
          options={paymentOptions}
          value={payment}
          onChange={setPayment}
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Without Label</h3>

      <div style={labelStyle}>no label prop</div>
      <div style={containerStyle}>
        <RadioGroup options={sizeOptions} value={size} onChange={setSize} />
      </div>

      <h3 style={{ margin: '24px 0' }}>Disabled State</h3>

      <div style={labelStyle}>disabled=true</div>
      <div style={containerStyle}>
        <RadioGroup
          label="Select Size"
          options={sizeOptions}
          value="md"
          onChange={() => {}}
          disabled
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

      <div style={labelStyle}>flex, gap: 24px</div>
      <div style={{ ...containerStyle, display: 'flex', gap: '24px' }}>
        <RadioGroup
          label="Payment"
          options={paymentOptions}
          value={payment}
          onChange={setPayment}
        />
        <RadioGroup label="Size" options={sizeOptions} value={size} onChange={setSize} />
      </div>

      <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

      <div style={labelStyle}>grid, grid-template-columns: repeat(2, 1fr)</div>
      <div
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '24px',
        }}
      >
        <RadioGroup
          label="Payment Method"
          options={paymentOptions}
          value={payment}
          onChange={setPayment}
        />
        <RadioGroup label="Select Size" options={sizeOptions} value={size} onChange={setSize} />
      </div>
    </div>
  )
}

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
