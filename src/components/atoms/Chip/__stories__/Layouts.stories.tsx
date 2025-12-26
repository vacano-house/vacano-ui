import type { Meta, StoryObj } from '@storybook/react-vite'

import { Chip } from '../Chip'

const meta: Meta<typeof Chip> = {
  title: 'Atoms/Chip',
  component: Chip,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Chip>

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
    <h3 style={{ marginBottom: '24px' }}>Block Layout</h3>

    <div style={labelStyle}>display: block (default)</div>
    <div style={{ ...containerStyle, display: 'block' }}>
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
    </div>

    <h3 style={{ margin: '24px 0' }}>Flex Layout - Horizontal</h3>

    <div style={labelStyle}>flex, justify-content: flex-start</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
    </div>

    <div style={labelStyle}>flex, justify-content: center</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'center', gap: '8px' }}>
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
    </div>

    <div style={labelStyle}>flex, justify-content: flex-end</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
    </div>

    <div style={labelStyle}>flex, justify-content: space-between</div>
    <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
    </div>

    <div style={labelStyle}>flex, align-items: stretch (height: 60px)</div>
    <div
      style={{
        ...containerStyle,
        display: 'flex',
        alignItems: 'stretch',
        gap: '8px',
        height: '60px',
      }}
    >
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
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
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
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
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
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
      <Chip fullWidth>First</Chip>
      <Chip fullWidth status="success">
        Second
      </Chip>
      <Chip fullWidth status="warning">
        Third
      </Chip>
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
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
    </div>

    <div style={labelStyle}>grid, grid-template-columns: repeat(3, auto), long content</div>
    <div
      style={{
        ...containerStyle,
        display: 'grid',
        gridTemplateColumns: 'repeat(3, auto)',
        gap: '8px',
        justifyContent: 'start',
      }}
    >
      <Chip>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </Chip>
      <Chip status="success">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </Chip>
      <Chip status="warning">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </Chip>
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
      <Chip>First</Chip>
      <Chip status="success">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book.
      </Chip>
      <Chip status="warning">Third</Chip>
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
      <Chip fullWidth>First</Chip>
      <Chip fullWidth status="success">
        Second
      </Chip>
      <Chip fullWidth status="warning">
        Third
      </Chip>
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
      <Chip>First</Chip>
      <Chip status="success">Second</Chip>
      <Chip status="warning">Third</Chip>
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
      <Chip fullWidth>First</Chip>
      <Chip fullWidth status="success">
        Second
      </Chip>
      <Chip fullWidth status="warning">
        Third
      </Chip>
    </div>
  </div>
)

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
