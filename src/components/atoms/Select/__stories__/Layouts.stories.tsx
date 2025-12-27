import { useEffect, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Globe, MapPin, Search, User } from '../../../../icons/Lucide'
import { Select } from '../Select'
import type { SelectOption } from '../types'

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Select>

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

const sampleOptions: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
]

const countryOptions: SelectOption[] = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'Australia', value: 'au' },
  { label: 'Canada', value: 'ca' },
  { label: 'Brazil', value: 'br' },
]

const manyOptions: SelectOption[] = Array.from({ length: 100 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

const ControlledSelect = ({
  options,
  ...props
}: Omit<React.ComponentProps<typeof Select>, 'value' | 'onChange'> & {
  options: SelectOption[]
}) => {
  const [value, setValue] = useState<string>()
  return <Select {...props} options={options} value={value} onChange={setValue} />
}

const LayoutsExample = () => {
  const portalRef = useRef<HTMLDivElement>(null)
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (portalRef.current) {
      setPortalNode(portalRef.current)
    }
  }, [])

  return (
    <div style={{ maxWidth: '600px' }}>
      <div ref={portalRef} id="select-portal-root" />

      <h3 style={{ marginBottom: '24px' }}>States</h3>

      <div style={labelStyle}>default</div>
      <div style={containerStyle}>
        <ControlledSelect options={sampleOptions} placeholder="Select option..." />
      </div>

      <div style={labelStyle}>with label</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={countryOptions}
          label="Country"
          placeholder="Select country..."
        />
      </div>

      <div style={labelStyle}>with icon</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={countryOptions}
          icon={<Globe size={16} />}
          placeholder="Select country..."
        />
      </div>

      <div style={labelStyle}>disabled</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={sampleOptions}
          disabled
          label="Disabled"
          placeholder="Cannot select"
        />
      </div>

      <div style={labelStyle}>state: warning</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={sampleOptions}
          state="warning"
          label="Warning"
          placeholder="Warning state"
        />
      </div>

      <div style={labelStyle}>state: error</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={sampleOptions}
          state="error"
          label="Error"
          placeholder="Error state"
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Features</h3>

      <div style={labelStyle}>searchable</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={countryOptions}
          searchable
          icon={<Search size={16} />}
          label="Country"
          placeholder="Search countries..."
          searchPlaceholder="Type to search..."
        />
      </div>

      <div style={labelStyle}>virtualized (100 options)</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={manyOptions}
          virtualized
          label="Many Options"
          placeholder="Select from 100 options..."
        />
      </div>

      <div style={labelStyle}>virtualized + searchable</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={manyOptions}
          virtualized
          searchable
          label="Search Many"
          placeholder="Search 100 options..."
        />
      </div>

      <div style={labelStyle}>custom maxHeight: 150px</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={sampleOptions}
          maxHeight={150}
          label="Short List"
          placeholder="Select..."
        />
      </div>

      <div style={labelStyle}>placement: top</div>
      <div style={{ ...containerStyle, marginTop: '200px' }}>
        <ControlledSelect
          options={sampleOptions}
          placement="top"
          label="Opens Up"
          placeholder="Select..."
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Width Behavior</h3>

      <div style={labelStyle}>default (max-width: 320px)</div>
      <div style={containerStyle}>
        <ControlledSelect options={sampleOptions} placeholder="Default width" />
      </div>

      <div style={labelStyle}>fullWidth=true</div>
      <div style={containerStyle}>
        <ControlledSelect options={sampleOptions} fullWidth placeholder="Full width select" />
      </div>

      <h3 style={{ margin: '24px 0' }}>Flex Layout</h3>

      <div style={labelStyle}>flex, gap: 16px</div>
      <div style={{ ...containerStyle, display: 'flex', gap: '16px' }}>
        <ControlledSelect options={sampleOptions} placeholder="First" />
        <ControlledSelect options={sampleOptions} placeholder="Second" />
      </div>

      <div style={labelStyle}>flex, fullWidth</div>
      <div style={{ ...containerStyle, display: 'flex', gap: '16px' }}>
        <ControlledSelect options={sampleOptions} fullWidth placeholder="First" />
        <ControlledSelect options={sampleOptions} fullWidth placeholder="Second" />
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
        <ControlledSelect
          options={countryOptions}
          fullWidth
          label="Country"
          icon={<Globe size={16} />}
          placeholder="Select country"
        />
        <ControlledSelect
          options={sampleOptions}
          fullWidth
          label="City"
          icon={<MapPin size={16} />}
          placeholder="Select city"
        />
        <ControlledSelect
          options={sampleOptions}
          fullWidth
          label="Role"
          icon={<User size={16} />}
          placeholder="Select role"
        />
        <ControlledSelect
          options={sampleOptions}
          fullWidth
          label="Status"
          placeholder="Select..."
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Empty State</h3>

      <div style={labelStyle}>no options</div>
      <div style={containerStyle}>
        <ControlledSelect options={[]} label="Empty" placeholder="No options available" />
      </div>

      <div style={labelStyle}>custom empty message</div>
      <div style={containerStyle}>
        <ControlledSelect
          options={[]}
          label="Custom Message"
          emptyMessage="Nothing to see here"
          placeholder="Select..."
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Portal Demo - overflow:hidden Container</h3>

      <div style={labelStyle}>overflow: hidden container - WITHOUT portal (clipped)</div>
      <div
        style={{
          ...containerStyle,
          overflow: 'hidden',
          height: '80px',
          position: 'relative',
        }}
      >
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#999' }}>
          Select dropdown is clipped by overflow:hidden
        </p>
        <ControlledSelect options={sampleOptions} placeholder="Without Portal" />
      </div>

      <div style={labelStyle}>overflow: hidden container - WITH portal (not clipped)</div>
      <div
        style={{
          ...containerStyle,
          overflow: 'hidden',
          height: '80px',
          position: 'relative',
        }}
      >
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#999' }}>
          Select renders in portal, escapes overflow:hidden
        </p>
        <ControlledSelect
          options={sampleOptions}
          placeholder="With Portal"
          portalRenderNode={portalNode}
        />
      </div>

      <div style={labelStyle}>scrollable container - WITH portal</div>
      <div
        style={{
          ...containerStyle,
          overflow: 'auto',
          height: '120px',
          position: 'relative',
        }}
      >
        <p style={{ marginBottom: '8px', fontSize: '12px', color: '#999' }}>
          Scroll down to see the select. Portal keeps dropdown visible.
        </p>
        <div style={{ height: '60px' }} />
        <ControlledSelect
          options={countryOptions}
          searchable
          placeholder="Scrollable with Portal"
          portalRenderNode={portalNode}
        />
        <div style={{ height: '100px' }} />
      </div>
    </div>
  )
}

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
