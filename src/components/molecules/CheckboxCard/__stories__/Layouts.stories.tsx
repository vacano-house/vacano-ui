import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxCard } from '../CheckboxCard'

const meta: Meta<typeof CheckboxCard> = {
  title: 'Molecules/CheckboxCard',
  component: CheckboxCard,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxCard>

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
}: {
  label: string
  description?: string
  fullWidth?: boolean
}) => {
  const [checked, setChecked] = useState(false)

  return (
    <CheckboxCard
      label={label}
      description={description}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      fullWidth={fullWidth}
    />
  )
}

const LayoutsExample = () => (
  <div style={{ maxWidth: '600px' }}>
    <h3 style={{ marginBottom: '24px' }}>Block Layout</h3>

    <div style={labelStyle}>display: block (default)</div>
    <div style={{ ...containerStyle, display: 'block' }}>
      <InteractiveCard label="First" description="Description for first option" />
      <InteractiveCard label="Second" description="Description for second option" />
      <InteractiveCard label="Third" description="Description for third option" />
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

    <div style={labelStyle}>flex, justify-content: flex-start</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
      <InteractiveCard label="First" />
      <InteractiveCard label="Second" />
      <InteractiveCard label="Third" />
    </div>

    <div style={labelStyle}>flex, justify-content: center</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center', gap: '8px' }}>
      <InteractiveCard label="First" />
      <InteractiveCard label="Second" />
      <InteractiveCard label="Third" />
    </div>

    <div style={labelStyle}>flex, justify-content: flex-end</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <InteractiveCard label="First" />
      <InteractiveCard label="Second" />
      <InteractiveCard label="Third" />
    </div>

    <div style={labelStyle}>flex, justify-content: space-between</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
      <InteractiveCard label="First" />
      <InteractiveCard label="Second" />
      <InteractiveCard label="Third" />
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
      <InteractiveCard label="First" description="Description" />
      <InteractiveCard label="Second" description="Description" />
      <InteractiveCard label="Third" description="Description" />
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
      <InteractiveCard label="First" description="Description" />
      <InteractiveCard label="Second" description="Description" />
      <InteractiveCard label="Third" description="Description" />
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
      <InteractiveCard label="First" description="Description" fullWidth />
      <InteractiveCard label="Second" description="Description" fullWidth />
      <InteractiveCard label="Third" description="Description" fullWidth />
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
      <InteractiveCard label="First" />
      <InteractiveCard label="Second" />
      <InteractiveCard label="Third" />
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
      <InteractiveCard label="First" description="Short" fullWidth />
      <InteractiveCard
        label="Second"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        fullWidth
      />
      <InteractiveCard label="Third" description="Medium description text" fullWidth />
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
      <InteractiveCard label="First" description="Description" fullWidth />
      <InteractiveCard label="Second" description="Description" fullWidth />
      <InteractiveCard label="Third" description="Description" fullWidth />
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
      <InteractiveCard label="First" description="Description" />
      <InteractiveCard label="Second" description="Description" />
      <InteractiveCard label="Third" description="Description" />
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
      <InteractiveCard label="First" description="Description" fullWidth />
      <InteractiveCard label="Second" description="Description" fullWidth />
      <InteractiveCard label="Third" description="Description" fullWidth />
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
