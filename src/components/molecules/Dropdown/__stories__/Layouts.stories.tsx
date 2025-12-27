import { useEffect, useRef, useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Button } from '../../../atoms/Button/Button'
import { Dropdown } from '../Dropdown'

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'padded',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Dropdown>

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

const MenuContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', minWidth: '160px' }}>
    <Button variant="ghost" fullWidth>
      Profile
    </Button>
    <Button variant="ghost" fullWidth>
      Settings
    </Button>
    <Button variant="ghost" fullWidth>
      Logout
    </Button>
  </div>
)

const LayoutsExample = () => {
  const portalRef = useRef<HTMLDivElement>(null)
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (portalRef.current) {
      setPortalNode(portalRef.current)
    }
  }, [])

  return (
    <div style={{ maxWidth: '800px' }}>
      <div ref={portalRef} id="dropdown-portal-root" />

      <h3 style={{ marginBottom: '24px' }}>Block Layout</h3>

      <div style={labelStyle}>display: block (default)</div>
      <div style={{ ...containerStyle, display: 'block' }}>
        <Dropdown trigger={<Button>Dropdown 1</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown trigger={<Button>Dropdown 2</Button>}>
          <MenuContent />
        </Dropdown>
      </div>

      <h3 style={{ margin: '24px 0' }}>Flex Layout</h3>

      <div style={labelStyle}>flex, justify-content: flex-start</div>
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'flex-start', gap: '8px' }}>
        <Dropdown trigger={<Button>Left</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown trigger={<Button>Center</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown trigger={<Button>Right</Button>}>
          <MenuContent />
        </Dropdown>
      </div>

      <div style={labelStyle}>flex, justify-content: space-between</div>
      <div style={{ ...containerStyle, display: 'flex', justifyContent: 'space-between' }}>
        <Dropdown placement="bottom" align="start" trigger={<Button>Start</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown placement="bottom" align="end" trigger={<Button>End</Button>}>
          <MenuContent />
        </Dropdown>
      </div>

      <h3 style={{ margin: '24px 0' }}>Grid Layout</h3>

      <div style={labelStyle}>grid, grid-template-columns: repeat(3, 1fr)</div>
      <div
        style={{
          ...containerStyle,
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
        }}
      >
        <Dropdown fullWidth trigger={<Button fullWidth>Full Width 1</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown fullWidth trigger={<Button fullWidth>Full Width 2</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown fullWidth trigger={<Button fullWidth>Full Width 3</Button>}>
          <MenuContent />
        </Dropdown>
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
          Dropdown content is clipped by overflow:hidden
        </p>
        <Dropdown trigger={<Button>Without Portal</Button>}>
          <MenuContent />
        </Dropdown>
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
          Dropdown renders in portal, escapes overflow:hidden
        </p>
        <Dropdown trigger={<Button>With Portal</Button>} portalRenderNode={portalNode}>
          <MenuContent />
        </Dropdown>
      </div>

      <h3 style={{ margin: '24px 0' }}>Placement Variations</h3>

      <div style={labelStyle}>Different placements and alignments</div>
      <div
        style={{
          ...containerStyle,
          display: 'flex',
          justifyContent: 'space-around',
          padding: '60px 16px',
        }}
      >
        <Dropdown placement="top" align="start" trigger={<Button>top-start</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown placement="top" align="end" trigger={<Button>top-end</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown placement="bottom" align="start" trigger={<Button>bottom-start</Button>}>
          <MenuContent />
        </Dropdown>
        <Dropdown placement="bottom" align="end" trigger={<Button>bottom-end</Button>}>
          <MenuContent />
        </Dropdown>
      </div>
    </div>
  )
}

export const Layouts: Story = {
  render: () => <LayoutsExample />,
}
