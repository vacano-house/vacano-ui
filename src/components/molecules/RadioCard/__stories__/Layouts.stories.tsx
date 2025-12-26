import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioCard } from '../RadioCard'

const meta: Meta<typeof RadioCard> = {
  title: 'Molecules/RadioCard',
  component: RadioCard,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof RadioCard>

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

const InteractiveCard = ({
  label,
  description,
  fullWidth,
  name,
  value,
  selectedValue,
  onSelect,
}: {
  label: string
  description?: string
  fullWidth?: boolean
  name: string
  value: string
  selectedValue: string
  onSelect: (value: string) => void
}) => {
  return (
    <RadioCard
      name={name}
      label={label}
      description={description}
      checked={selectedValue === value}
      onChange={() => onSelect(value)}
      fullWidth={fullWidth}
    />
  )
}

const RadioGroupDemo = ({
  name,
  fullWidth,
  withDescription,
}: {
  name: string
  fullWidth?: boolean
  withDescription?: boolean
}) => {
  const [selected, setSelected] = useState('')

  return (
    <>
      <InteractiveCard
        name={name}
        label="First"
        description={withDescription ? 'Description' : undefined}
        fullWidth={fullWidth}
        value="first"
        selectedValue={selected}
        onSelect={setSelected}
      />
      <InteractiveCard
        name={name}
        label="Second"
        description={withDescription ? 'Description' : undefined}
        fullWidth={fullWidth}
        value="second"
        selectedValue={selected}
        onSelect={setSelected}
      />
      <InteractiveCard
        name={name}
        label="Third"
        description={withDescription ? 'Description' : undefined}
        fullWidth={fullWidth}
        value="third"
        selectedValue={selected}
        onSelect={setSelected}
      />
    </>
  )
}

const LayoutsExample = () => (
  <div style={{ maxWidth: '600px' }}>
    <h3 style={{ marginBottom: '24px' }}>Block Layout</h3>

    <div style={labelStyle}>display: block (default)</div>
    <div style={{ ...containerStyle, display: 'block' }}>
      <RadioGroupDemo name="block" withDescription />
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

    <div style={labelStyle}>flex, justify-content: flex-start</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
      <RadioGroupDemo name="flex-start" />
    </div>

    <div style={labelStyle}>flex, justify-content: center</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center', gap: '8px' }}>
      <RadioGroupDemo name="flex-center" />
    </div>

    <div style={labelStyle}>flex, justify-content: flex-end</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <RadioGroupDemo name="flex-end" />
    </div>

    <div style={labelStyle}>flex, justify-content: space-between</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
      <RadioGroupDemo name="flex-between" />
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
      <RadioGroupDemo name="col-start" withDescription />
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
      <RadioGroupDemo name="col-center" withDescription />
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
      <RadioGroupDemo name="col-stretch" withDescription fullWidth />
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
      <RadioGroupDemo name="grid-auto" />
    </div>

    <div style={labelStyle}>grid, grid-template-columns: repeat(3, 1fr)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '8px',
      }}
    >
      <RadioGroupDemo name="grid-1fr" withDescription fullWidth />
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
      <RadioGroupDemo name="grid-single" withDescription fullWidth />
    </div>

    <div style={labelStyle}>grid, justify-items: center</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyItems: 'center',
        gap: '8px',
      }}
    >
      <RadioGroupDemo name="grid-center" withDescription />
    </div>

    <div style={labelStyle}>grid, justify-items: stretch (fullWidth)</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: '1fr',
        justifyItems: 'stretch',
        gap: '8px',
      }}
    >
      <RadioGroupDemo name="grid-stretch" withDescription fullWidth />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
