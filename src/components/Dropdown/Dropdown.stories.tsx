import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Dropdown as DropdownComponent } from './Dropdown'
import { DropdownProps } from './types'
import { Button } from '../Button'

const meta: Meta<typeof DropdownComponent> = {
  title: 'components/Dropdown',
  component: DropdownComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    align: 'left',
    trigger: <Button variant="system">Open Menu</Button>,
  },
  argTypes: {
    align: { control: 'select', options: ['left', 'right'] },
    open: { control: 'boolean' },
    onOpen: { action: 'opened' },
    onClose: { action: 'closed' },
  },
}

export default meta

type Story = StoryObj<typeof DropdownComponent>

const MenuContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <Button variant="transparent" style={{ justifyContent: 'flex-start' }}>
      Profile
    </Button>
    <Button variant="transparent" style={{ justifyContent: 'flex-start' }}>
      Settings
    </Button>
    <Button variant="transparent" style={{ justifyContent: 'flex-start' }}>
      Logout
    </Button>
  </div>
)

const InteractiveDropdown = (props: DropdownProps) => {
  const [open, setOpen] = useState(false)
  return (
    <DropdownComponent
      {...props}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
    />
  )
}

export const Playground: Story = {
  render: (args) => (
    <InteractiveDropdown {...args}>
      <MenuContent />
    </InteractiveDropdown>
  ),
}

export const Aligns: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
      <DropdownComponent align="left" trigger={<Button variant="system">Align Left</Button>}>
        <MenuContent />
      </DropdownComponent>
      <DropdownComponent align="right" trigger={<Button variant="system">Align Right</Button>}>
        <MenuContent />
      </DropdownComponent>
    </div>
  ),
}

export const WithCustomTrigger: Story = {
  render: () => (
    <DropdownComponent
      trigger={
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#e5e7eb',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 18,
          }}
        >
          ⋮
        </div>
      }
    >
      <MenuContent />
    </DropdownComponent>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <DropdownComponent trigger={<Button variant="system">Menu</Button>}>
        <MenuContent />
      </DropdownComponent>
    </div>
  ),
}

export const LayoutInline: Story = {
  name: 'Layout: Inline',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <span>Click the </span>
      <DropdownComponent trigger={<Button variant="system">menu button</Button>}>
        <MenuContent />
      </DropdownComponent>
      <span> to see options.</span>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <DropdownComponent trigger={<Button variant="system">Start</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent align="right" trigger={<Button variant="system">End</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <DropdownComponent trigger={<Button variant="system">Center 1</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent trigger={<Button variant="system">Center 2</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 16,
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <DropdownComponent align="right" trigger={<Button variant="system">End 1</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent align="right" trigger={<Button variant="system">End 2</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 8,
          border: '1px dashed #ccc',
          padding: 16,
          width: 200,
        }}
      >
        <span style={{ fontSize: 12, color: '#666' }}>align: flex-start</span>
        <DropdownComponent trigger={<Button variant="system">Menu</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          border: '1px dashed #ccc',
          padding: 16,
          width: 200,
        }}
      >
        <span style={{ fontSize: 12, color: '#666' }}>align: center</span>
        <DropdownComponent trigger={<Button variant="system">Menu</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: 8,
          border: '1px dashed #ccc',
          padding: 16,
          width: 200,
        }}
      >
        <span style={{ fontSize: 12, color: '#666' }}>align: flex-end</span>
        <DropdownComponent align="right" trigger={<Button variant="system">Menu</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'start',
          gap: 16,
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <DropdownComponent trigger={<Button variant="system">Start</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent trigger={<Button variant="system">Start</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent trigger={<Button variant="system">Start</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'center',
          gap: 16,
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <DropdownComponent trigger={<Button variant="system">Center</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent trigger={<Button variant="system">Center</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent trigger={<Button variant="system">Center</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'end',
          gap: 16,
          border: '1px dashed #ccc',
          padding: 16,
        }}
      >
        <DropdownComponent align="right" trigger={<Button variant="system">End</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent align="right" trigger={<Button variant="system">End</Button>}>
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent align="right" trigger={<Button variant="system">End</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
    </div>
  ),
}

const OverflowHiddenExample = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        When dropdown is inside a container with <code>overflow: hidden</code>, the dropdown content
        gets clipped. Use <code>portalRenderNode</code> prop to render dropdown in a portal.
      </p>
      <div
        style={{
          overflow: 'hidden',
          border: '1px dashed #C1121F',
          padding: 16,
          height: 80,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#C1121F' }}>overflow: hidden (clipped)</span>
          <DropdownComponent align="right" trigger={<Button variant="system">Menu</Button>}>
            <MenuContent />
          </DropdownComponent>
        </div>
      </div>
      <div
        style={{
          overflow: 'hidden',
          border: '1px dashed #16a34a',
          padding: 16,
          height: 80,
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 12, color: '#16a34a' }}>
            overflow: hidden + portalRenderNode (works)
          </span>
          <DropdownComponent
            align="right"
            trigger={<Button variant="system">Menu</Button>}
            portalRenderNode={portalNode}
          >
            <MenuContent />
          </DropdownComponent>
        </div>
      </div>
      <div ref={setPortalNode} />
    </div>
  )
}

export const InsideOverflowHidden: Story = {
  parameters: { layout: 'padded' },
  render: () => <OverflowHiddenExample />,
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 400 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ margin: 0, fontSize: 16 }}>Card Title</h3>
        <DropdownComponent align="right" trigger={<Button variant="system">⋮</Button>}>
          <MenuContent />
        </DropdownComponent>
      </div>
      <p style={{ margin: '12px 0 0', fontSize: 14, color: '#666' }}>
        This is a card with a dropdown menu in the header. The dropdown is aligned to the right to
        prevent overflow on the right side of the card.
      </p>
    </div>
  ),
}

const PortalAlignsExample = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        Portal dropdowns with different <code>align</code> props inside overflow hidden containers.
      </p>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          align="left"
          trigger={<Button variant="system">Align Left</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">Align Right</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div ref={setPortalNode} />
    </div>
  )
}

export const PortalAligns: Story = {
  name: 'Portal: Aligns',
  parameters: { layout: 'padded' },
  render: () => <PortalAlignsExample />,
}

const PortalFlexRowExample = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          trigger={<Button variant="system">Start</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">End</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: 16,
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          trigger={<Button variant="system">Center 1</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          trigger={<Button variant="system">Center 2</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: 16,
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">End 1</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">End 2</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div ref={setPortalNode} />
    </div>
  )
}

export const PortalFlexRow: Story = {
  name: 'Portal: Flex Row',
  parameters: { layout: 'padded' },
  render: () => <PortalFlexRowExample />,
}

const PortalGridExample = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'start',
          gap: 16,
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          trigger={<Button variant="system">Start</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          trigger={<Button variant="system">Start</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          trigger={<Button variant="system">Start</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'center',
          gap: 16,
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          trigger={<Button variant="system">Center</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          trigger={<Button variant="system">Center</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          trigger={<Button variant="system">Center</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          justifyItems: 'end',
          gap: 16,
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          height: 60,
        }}
      >
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">End</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">End</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
        <DropdownComponent
          align="right"
          trigger={<Button variant="system">End</Button>}
          portalRenderNode={portalNode}
        >
          <MenuContent />
        </DropdownComponent>
      </div>
      <div ref={setPortalNode} />
    </div>
  )
}

export const PortalGrid: Story = {
  name: 'Portal: Grid',
  parameters: { layout: 'padded' },
  render: () => <PortalGridExample />,
}

const PortalNestedContainersExample = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        Portal dropdowns work even with deeply nested overflow hidden containers.
      </p>
      <div
        style={{
          overflow: 'hidden',
          border: '1px dashed #ccc',
          padding: 16,
          borderRadius: 8,
        }}
      >
        <div
          style={{
            overflow: 'hidden',
            border: '1px dashed #ccc',
            padding: 16,
            borderRadius: 8,
          }}
        >
          <div
            style={{
              overflow: 'hidden',
              border: '1px dashed #ccc',
              padding: 16,
              borderRadius: 8,
              height: 60,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ fontSize: 12, color: '#666' }}>3 levels of overflow: hidden</span>
            <DropdownComponent
              align="right"
              trigger={<Button variant="system">Menu</Button>}
              portalRenderNode={portalNode}
            >
              <MenuContent />
            </DropdownComponent>
          </div>
        </div>
      </div>
      <div ref={setPortalNode} />
    </div>
  )
}

export const PortalNestedContainers: Story = {
  name: 'Portal: Nested Containers',
  parameters: { layout: 'padded' },
  render: () => <PortalNestedContainersExample />,
}

const PortalInCardExample = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div
        style={{
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <div
          style={{
            padding: 16,
            borderBottom: '1px solid #e5e7eb',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Card Header</h3>
          <DropdownComponent
            align="right"
            trigger={<Button variant="system">⋮</Button>}
            portalRenderNode={portalNode}
          >
            <MenuContent />
          </DropdownComponent>
        </div>
        <div style={{ padding: 16 }}>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
            Card with overflow hidden and portal dropdown in the header.
          </p>
        </div>
      </div>
      <div
        style={{
          overflow: 'hidden',
          border: '1px solid #e5e7eb',
          borderRadius: 12,
          backgroundColor: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
        }}
      >
        <div style={{ padding: 16 }}>
          <p style={{ margin: '0 0 12px', fontSize: 14, color: '#666' }}>
            Card with dropdown in the content area.
          </p>
          <DropdownComponent
            trigger={<Button variant="system">Actions</Button>}
            portalRenderNode={portalNode}
          >
            <MenuContent />
          </DropdownComponent>
        </div>
      </div>
      <div ref={setPortalNode} />
    </div>
  )
}

export const PortalInCard: Story = {
  name: 'Portal: In Card',
  parameters: { layout: 'padded' },
  render: () => <PortalInCardExample />,
}

const AutoCloseMenuContent = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
    <Button
      variant="transparent"
      style={{ justifyContent: 'flex-start' }}
      onClick={() => alert('Profile clicked')}
    >
      Profile
    </Button>
    <Button
      variant="transparent"
      style={{ justifyContent: 'flex-start' }}
      onClick={() => alert('Settings clicked')}
    >
      Settings
    </Button>
    <Button
      variant="transparent"
      style={{ justifyContent: 'flex-start' }}
      onClick={() => alert('Logout clicked')}
    >
      Logout
    </Button>
  </div>
)

export const AutoClose: Story = {
  name: 'Auto Close',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        <code>autoClose=true</code> (default). Clicking a menu item triggers the action and closes
        the dropdown.
      </p>
      <DropdownComponent trigger={<Button variant="system">Open Menu</Button>}>
        <AutoCloseMenuContent />
      </DropdownComponent>
    </div>
  ),
}

export const AutoCloseDisabled: Story = {
  name: 'Auto Close Disabled',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
        <code>autoClose=false</code>. Clicking a menu item triggers the action but the dropdown
        stays open.
      </p>
      <DropdownComponent autoClose={false} trigger={<Button variant="system">Open Menu</Button>}>
        <AutoCloseMenuContent />
      </DropdownComponent>
    </div>
  ),
}
