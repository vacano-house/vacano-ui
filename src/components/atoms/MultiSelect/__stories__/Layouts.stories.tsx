import { useEffect, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Globe, MapPin, Search, User } from '../../../../icons/Lucide'
import { MultiSelect } from '../MultiSelect'
import type { MultiSelectOption } from '../types'

const meta: Meta<typeof MultiSelect> = {
  title: 'Atoms/MultiSelect',
  component: MultiSelect,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof MultiSelect>

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

const sampleOptions: MultiSelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
]

const countryOptions: MultiSelectOption[] = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'Australia', value: 'au' },
  { label: 'Canada', value: 'ca' },
  { label: 'Brazil', value: 'br' },
]

const manyOptions: MultiSelectOption[] = Array.from({ length: 100000 }, (_, i) => ({
  label: `Option ${i + 1}`,
  value: String(i + 1),
}))

const ControlledMultiSelect = ({
  options,
  initialValue = [],
  ...props
}: Omit<React.ComponentProps<typeof MultiSelect>, 'value' | 'onChange'> & {
  options: MultiSelectOption[]
  initialValue?: string[]
}) => {
  const [value, setValue] = useState<string[]>(initialValue)
  return <MultiSelect {...props} options={options} value={value} onChange={setValue} />
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
      <div ref={portalRef} id="multiselect-portal-root" />

      <h3 style={{ marginBottom: '24px' }}>Block Layout</h3>

      <div style={labelStyle}>display: block (default)</div>
      <div style={{ ...containerStyle, display: 'block' }}>
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
      </div>

      <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

      <div style={labelStyle}>flex, justify-content: flex-start</div>
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
      </div>

      <div style={labelStyle}>flex, justify-content: center</div>
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center', gap: '8px' }}>
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
      </div>

      <div style={labelStyle}>flex, justify-content: flex-end</div>
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
      </div>

      <div style={labelStyle}>flex, justify-content: space-between</div>
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
      </div>

      <div style={labelStyle}>grid, grid-template-columns: repeat(3, 1fr) (fullWidth)</div>
      <div
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}
      >
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} placeholder="Third" />
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
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="First" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Second" />
        <ControlledMultiSelect options={sampleOptions} fullWidth placeholder="Third" />
      </div>

      <h3 style={{ margin: '24px 0' }}>States</h3>

      <div style={labelStyle}>default</div>
      <div style={containerStyle}>
        <ControlledMultiSelect options={sampleOptions} placeholder="Select options..." />
      </div>

      <div style={labelStyle}>with label</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={countryOptions}
          label="Countries"
          placeholder="Select countries..."
        />
      </div>

      <div style={labelStyle}>with icon</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={countryOptions}
          icon={<Globe size={16} />}
          placeholder="Select countries..."
        />
      </div>

      <div style={labelStyle}>with preselected values</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={sampleOptions}
          initialValue={['1', '2', '3']}
          label="Preselected"
          placeholder="Select options..."
        />
      </div>

      <div style={labelStyle}>disabled</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={sampleOptions}
          initialValue={['1', '2']}
          disabled
          label="Disabled"
          placeholder="Cannot select"
        />
      </div>

      <div style={labelStyle}>state: warning</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={sampleOptions}
          initialValue={['1']}
          state="warning"
          label="Warning"
          placeholder="Warning state"
        />
      </div>

      <div style={labelStyle}>state: error</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={sampleOptions}
          initialValue={['1']}
          state="error"
          label="Error"
          placeholder="Error state"
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Features</h3>

      <div style={labelStyle}>searchable</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={countryOptions}
          searchable
          icon={<Search size={16} />}
          label="Countries"
          placeholder="Search countries..."
          searchPlaceholder="Type to search..."
        />
      </div>

      <div style={labelStyle}>virtualized (100,000 options)</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={manyOptions}
          virtualized
          label="Many Options"
          placeholder="Select from 100,000 options..."
        />
      </div>

      <div style={labelStyle}>virtualized + searchable</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={manyOptions}
          virtualized
          searchable
          label="Search Many"
          placeholder="Search 100,000 options..."
        />
      </div>

      <div style={labelStyle}>custom maxHeight: 150px</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={sampleOptions}
          maxHeight={150}
          label="Short List"
          placeholder="Select..."
        />
      </div>

      <div style={labelStyle}>placement: top</div>
      <div style={{ ...containerStyle, marginTop: '200px' }}>
        <ControlledMultiSelect
          options={sampleOptions}
          placement="top"
          label="Opens Up"
          placeholder="Select..."
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Form Layout Example</h3>

      <div style={labelStyle}>grid, grid-template-columns: repeat(2, 1fr)</div>
      <div
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '16px',
        }}
      >
        <ControlledMultiSelect
          options={countryOptions}
          fullWidth
          label="Countries"
          icon={<Globe size={16} />}
          placeholder="Select countries"
        />
        <ControlledMultiSelect
          options={sampleOptions}
          fullWidth
          label="Cities"
          icon={<MapPin size={16} />}
          placeholder="Select cities"
        />
        <ControlledMultiSelect
          options={sampleOptions}
          fullWidth
          label="Roles"
          icon={<User size={16} />}
          placeholder="Select roles"
        />
        <ControlledMultiSelect
          options={sampleOptions}
          fullWidth
          label="Tags"
          placeholder="Select tags..."
        />
      </div>

      <h3 style={{ margin: '24px 0' }}>Empty State</h3>

      <div style={labelStyle}>no options</div>
      <div style={containerStyle}>
        <ControlledMultiSelect options={[]} label="Empty" placeholder="No options available" />
      </div>

      <div style={labelStyle}>custom empty message</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
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
          MultiSelect dropdown is clipped by overflow:hidden
        </p>
        <ControlledMultiSelect options={sampleOptions} placeholder="Without Portal" />
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
          MultiSelect renders in portal, escapes overflow:hidden
        </p>
        <ControlledMultiSelect
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
          Scroll down to see the multiselect. Portal keeps dropdown visible.
        </p>
        <div style={{ height: '60px' }} />
        <ControlledMultiSelect
          options={countryOptions}
          searchable
          placeholder="Scrollable with Portal"
          portalRenderNode={portalNode}
        />
        <div style={{ height: '100px' }} />
      </div>

      <h3 style={{ margin: '24px 0' }}>Chip Behavior</h3>

      <div style={labelStyle}>many selected items (chip wrapping)</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={countryOptions}
          initialValue={['us', 'uk', 'de', 'fr', 'jp']}
          fullWidth
          label="Many Selected"
          placeholder="Select countries..."
        />
      </div>

      <div style={labelStyle}>long labels (chip truncation)</div>
      <div style={containerStyle}>
        <ControlledMultiSelect
          options={[
            { label: 'This is a very long option label', value: '1' },
            { label: 'Another extremely long label text', value: '2' },
            { label: 'Short', value: '3' },
          ]}
          initialValue={['1', '2']}
          fullWidth
          label="Long Labels"
          placeholder="Select..."
        />
      </div>
    </div>
  )
}

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
