import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Drawer as DrawerComponent } from './Drawer'
import type { DrawerPosition, DrawerProps } from './types'
import { Button } from '../../organisms'
import {
  Bell,
  ChevronRight,
  FileText,
  Filter,
  HelpCircle,
  Home,
  LogOut,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Settings,
  User,
  X,
} from '../../../icons/Lucide'

const meta: Meta<typeof DrawerComponent> = {
  title: 'templates/Drawer',
  component: DrawerComponent,
  parameters: {
    layout: 'centered',
    controls: {
      include: ['animated', 'position', 'size'],
    },
  },
  args: {
    position: 'right',
    size: '400px',
    animated: true,
  },
  argTypes: {
    animated: {
      control: 'boolean',
    },
    position: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
    size: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof DrawerComponent>

// Playground - Interactive story with open/close functionality
const PlaygroundStory = (props: DrawerProps) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <DrawerComponent {...props} open={open}>
        <div style={{ padding: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <h2 style={{ margin: 0 }}>Drawer Content</h2>
            <Button
              variant="transparent"
              onClick={() => setOpen(false)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <p style={{ margin: '0 0 16px', color: '#666' }}>
            Position: {props.position}
            <br />
            Size: {props.size}
          </p>
          <p style={{ margin: 0, color: '#666' }}>
            This is an interactive playground. Use the controls panel to modify the drawer
            properties.
          </p>
        </div>
      </DrawerComponent>
    </>
  )
}

export const Playground: Story = {
  render: PlaygroundStory,
}

// Positions - Show all drawer positions side by side
const PositionsStory = () => {
  const [openPosition, setOpenPosition] = useState<DrawerPosition | null>(null)
  const positions: DrawerPosition[] = ['left', 'right', 'top', 'bottom']

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Click a button to open a drawer from that position
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          {positions.map((position) => (
            <Button key={position} onClick={() => setOpenPosition(position)}>
              {`Open ${position.charAt(0).toUpperCase() + position.slice(1)}`}
            </Button>
          ))}
        </div>
      </div>
      {positions.map((position) => (
        <DrawerComponent
          key={position}
          open={openPosition === position}
          position={position}
          size={position === 'top' || position === 'bottom' ? '200px' : '400px'}
          animated
        >
          <div style={{ padding: 24 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <h2 style={{ margin: 0 }}>
                {position.charAt(0).toUpperCase() + position.slice(1)} Drawer
              </h2>
              <Button
                variant="transparent"
                onClick={() => setOpenPosition(null)}
                keyBindings={['Escape']}
                icon={<X />}
              />
            </div>
            <p style={{ margin: 0, color: '#666' }}>
              This drawer slides in from the {position} edge of the screen.
            </p>
          </div>
        </DrawerComponent>
      ))}
    </div>
  )
}

export const Positions: Story = {
  parameters: { layout: 'padded' },
  render: PositionsStory,
}

// Sizes - Show different drawer sizes
const SizesStory = () => {
  const [openSize, setOpenSize] = useState<string | null>(null)
  const sizes = [
    { label: 'Small', size: '280px' },
    { label: 'Medium', size: '400px' },
    { label: 'Large', size: '600px' },
    { label: 'Full', size: '100%' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Different drawer width sizes
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            gap: 12,
            flexWrap: 'wrap',
          }}
        >
          {sizes.map(({ label, size }) => (
            <Button key={size} onClick={() => setOpenSize(size)}>
              {`${label} (${size})`}
            </Button>
          ))}
        </div>
      </div>
      {sizes.map(({ label, size }) => (
        <DrawerComponent key={size} open={openSize === size} position="right" size={size} animated>
          <div style={{ padding: 24 }}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 16,
              }}
            >
              <h2 style={{ margin: 0 }}>{label} Drawer</h2>
              <Button
                variant="transparent"
                onClick={() => setOpenSize(null)}
                keyBindings={['Escape']}
                icon={<X />}
              />
            </div>
            <p style={{ margin: '0 0 8px', color: '#666' }}>
              Size: <strong>{size}</strong>
            </p>
            <p style={{ margin: 0, color: '#666' }}>
              {size === '100%'
                ? 'Full-width drawer takes up the entire viewport width.'
                : `This drawer is ${size} wide.`}
            </p>
          </div>
        </DrawerComponent>
      ))}
    </div>
  )
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: SizesStory,
}

// WithHeader - Drawer with header content
const WithHeaderStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Drawer with a styled header section
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpen(true)}>Open Drawer with Header</Button>
        </div>
      </div>
      <DrawerComponent open={open} position="right" size="400px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fafafa',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>Drawer Header</h2>
            <Button
              variant="transparent"
              onClick={() => setOpen(false)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <div style={{ padding: 24, flex: 1 }}>
            <p style={{ margin: 0, color: '#666' }}>
              The header section provides a clear title and close action for the drawer. It has a
              subtle background color and border to visually separate it from the content area.
            </p>
          </div>
        </div>
      </DrawerComponent>
    </div>
  )
}

export const WithHeader: Story = {
  parameters: { layout: 'padded' },
  render: WithHeaderStory,
}

// WithFooter - Drawer with footer content
const WithFooterStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Drawer with a footer containing actions
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpen(true)}>Open Drawer with Footer</Button>
        </div>
      </div>
      <DrawerComponent open={open} position="right" size="400px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ padding: 24, flex: 1 }}>
            <h2 style={{ margin: '0 0 16px' }}>Drawer Content</h2>
            <p style={{ margin: 0, color: '#666' }}>
              This drawer has a footer section with action buttons. The footer stays fixed at the
              bottom while the content area can scroll if needed.
            </p>
          </div>
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #eee',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
              backgroundColor: '#fafafa',
            }}
          >
            <Button variant="system" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="normal" onClick={() => setOpen(false)}>
              Save Changes
            </Button>
          </div>
        </div>
      </DrawerComponent>
    </div>
  )
}

export const WithFooter: Story = {
  parameters: { layout: 'padded' },
  render: WithFooterStory,
}

// WithHeaderAndFooter - Full drawer layout
const WithHeaderAndFooterStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Complete drawer layout with header, scrollable content, and footer
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpen(true)}>Open Full Layout Drawer</Button>
        </div>
      </div>
      <DrawerComponent open={open} position="right" size="400px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fafafa',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>Edit Profile</h2>
            <Button
              variant="transparent"
              onClick={() => setOpen(false)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <div style={{ padding: 24, flex: 1, overflowY: 'auto' }}>
            <p style={{ margin: '0 0 16px', color: '#666' }}>
              This is a complete drawer layout with a header, scrollable content area, and footer
              with actions.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} style={{ padding: 16, backgroundColor: '#f5f5f5', borderRadius: 8 }}>
                  <h4 style={{ margin: '0 0 8px' }}>Section {i + 1}</h4>
                  <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
                    Content for section {i + 1}. This demonstrates scrollable content within the
                    drawer body.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fafafa',
            }}
          >
            <Button variant="transparent" onClick={() => setOpen(false)}>
              Discard
            </Button>
            <div style={{ display: 'flex', gap: 12 }}>
              <Button variant="system" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="normal" onClick={() => setOpen(false)}>
                Save
              </Button>
            </div>
          </div>
        </div>
      </DrawerComponent>
    </div>
  )
}

export const WithHeaderAndFooter: Story = {
  parameters: { layout: 'padded' },
  render: WithHeaderAndFooterStory,
}

// WithNavigation - Drawer used as navigation menu
const WithNavigationStory = () => {
  const [open, setOpen] = useState(false)

  const navItems = [
    { icon: <Home />, label: 'Dashboard' },
    { icon: <User />, label: 'Profile' },
    { icon: <FileText />, label: 'Documents' },
    { icon: <Bell />, label: 'Notifications' },
    { icon: <Settings />, label: 'Settings' },
    { icon: <HelpCircle />, label: 'Help & Support' },
  ]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Navigation drawer with menu items
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button icon={<Menu />} onClick={() => setOpen(true)}>
            Open Menu
          </Button>
        </div>
      </div>
      <DrawerComponent open={open} position="left" size="280px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              padding: '20px 24px',
              borderBottom: '1px solid #eee',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>Vacano UI</h2>
            <p style={{ margin: '4px 0 0', fontSize: 12, color: '#666' }}>Component Library</p>
          </div>
          <nav style={{ flex: 1, padding: '12px 0' }}>
            {navItems.map((item, index) => (
              <button
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  width: '100%',
                  padding: '12px 24px',
                  border: 'none',
                  background: index === 0 ? '#f0f0f0' : 'transparent',
                  cursor: 'pointer',
                  fontSize: 14,
                  color: index === 0 ? '#000' : '#333',
                  fontWeight: index === 0 ? 500 : 400,
                  textAlign: 'left',
                }}
                onClick={() => setOpen(false)}
              >
                {item.icon}
                {item.label}
                <ChevronRight style={{ marginLeft: 'auto', opacity: 0.4 }} />
              </button>
            ))}
          </nav>
          <div style={{ padding: '16px 24px', borderTop: '1px solid #eee' }}>
            <button
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                width: '100%',
                padding: '12px 0',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
                fontSize: 14,
                color: '#666',
                textAlign: 'left',
              }}
              onClick={() => setOpen(false)}
            >
              <LogOut />
              Sign Out
            </button>
          </div>
        </div>
      </DrawerComponent>
    </div>
  )
}

export const WithNavigation: Story = {
  parameters: { layout: 'padded' },
  render: WithNavigationStory,
}

// WithForm - Drawer containing a form
const WithFormStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Drawer with a contact form
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpen(true)}>Open Contact Form</Button>
        </div>
      </div>
      <DrawerComponent open={open} position="right" size="450px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>Contact Us</h2>
            <Button
              variant="transparent"
              onClick={() => setOpen(false)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <form style={{ padding: 24, flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <label
                htmlFor="name"
                style={{
                  display: 'block',
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                  }}
                />
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                style={{
                  display: 'block',
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                  }}
                />
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                style={{
                  display: 'block',
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Phone Number
              </label>
              <div style={{ position: 'relative' }}>
                <Phone
                  style={{
                    position: 'absolute',
                    left: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                  }}
                />
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone"
                  style={{
                    width: '100%',
                    padding: '10px 12px 10px 40px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                style={{
                  display: 'block',
                  marginBottom: 6,
                  fontSize: 14,
                  fontWeight: 500,
                  color: '#333',
                }}
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="How can we help you?"
                rows={4}
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  fontSize: 14,
                  resize: 'vertical',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </form>
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #eee',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
            }}
          >
            <Button variant="system" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="normal" onClick={() => setOpen(false)}>
              Send Message
            </Button>
          </div>
        </div>
      </DrawerComponent>
    </div>
  )
}

export const WithForm: Story = {
  parameters: { layout: 'padded' },
  render: WithFormStory,
}

// MixedWithContent - Real-world usage examples
const MixedWithContentStory = () => {
  const [activeDrawer, setActiveDrawer] = useState<string | null>(null)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      {/* Settings Panel */}
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Settings Panel</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button icon={<Settings />} onClick={() => setActiveDrawer('settings')}>
            Open Settings
          </Button>
        </div>
      </div>
      <DrawerComponent open={activeDrawer === 'settings'} position="right" size="360px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>Settings</h2>
            <Button
              variant="transparent"
              onClick={() => setActiveDrawer(null)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            {['Appearance', 'Notifications', 'Privacy', 'Language', 'Accessibility'].map(
              (section) => (
                <div
                  key={section}
                  style={{ padding: '16px 24px', borderBottom: '1px solid #f0f0f0' }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontWeight: 500 }}>{section}</span>
                    <ChevronRight style={{ color: '#999' }} />
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </DrawerComponent>

      {/* Filters Drawer */}
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Filters Drawer</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button icon={<Filter />} onClick={() => setActiveDrawer('filters')}>
            Open Filters
          </Button>
        </div>
      </div>
      <DrawerComponent open={activeDrawer === 'filters'} position="right" size="320px" animated>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div
            style={{
              padding: '16px 24px',
              borderBottom: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 18 }}>Filters</h2>
            <Button
              variant="transparent"
              onClick={() => setActiveDrawer(null)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <div style={{ flex: 1, padding: 24 }}>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 14 }}>
                Search
              </label>
              <div style={{ position: 'relative' }}>
                <Search
                  style={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                  }}
                />
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 36px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 14 }}>
                Category
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: 6,
                  fontSize: 14,
                  boxSizing: 'border-box',
                }}
              >
                <option>All Categories</option>
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Home & Garden</option>
              </select>
            </div>
            <div style={{ marginBottom: 24 }}>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 14 }}>
                Price Range
              </label>
              <div style={{ display: 'flex', gap: 8 }}>
                <input
                  type="number"
                  placeholder="Min"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
                <input
                  type="number"
                  placeholder="Max"
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontWeight: 500, fontSize: 14 }}>
                Location
              </label>
              <div style={{ position: 'relative' }}>
                <MapPin
                  style={{
                    position: 'absolute',
                    left: 10,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#999',
                  }}
                />
                <input
                  type="text"
                  placeholder="Enter location"
                  style={{
                    width: '100%',
                    padding: '8px 12px 8px 36px',
                    border: '1px solid #ddd',
                    borderRadius: 6,
                    fontSize: 14,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
            </div>
          </div>
          <div
            style={{
              padding: '16px 24px',
              borderTop: '1px solid #eee',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Button variant="transparent" onClick={() => setActiveDrawer(null)}>
              Clear All
            </Button>
            <Button variant="normal" onClick={() => setActiveDrawer(null)}>
              Apply Filters
            </Button>
          </div>
        </div>
      </DrawerComponent>

      {/* Mobile Menu */}
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Mobile Menu (full height from top)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button icon={<Menu />} onClick={() => setActiveDrawer('mobile')}>
            Open Mobile Menu
          </Button>
        </div>
      </div>
      <DrawerComponent open={activeDrawer === 'mobile'} position="left" size="100%" animated>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: '#1a1a1a',
          }}
        >
          <div
            style={{
              padding: '20px 24px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 20, color: '#fff' }}>Menu</h2>
            <Button
              variant="transparent"
              onClick={() => setActiveDrawer(null)}
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <nav style={{ flex: 1, padding: '24px 0' }}>
            {['Home', 'Products', 'About', 'Contact', 'Blog'].map((item, index) => (
              <button
                key={item}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '20px 24px',
                  border: 'none',
                  background: 'transparent',
                  fontSize: 24,
                  fontWeight: 300,
                  color: '#fff',
                  textAlign: 'left',
                  cursor: 'pointer',
                  opacity: index === 0 ? 1 : 0.7,
                }}
                onClick={() => setActiveDrawer(null)}
              >
                {item}
              </button>
            ))}
          </nav>
          <div style={{ padding: '24px', borderTop: '1px solid #333' }}>
            <Button fullWidth variant="normal" onClick={() => setActiveDrawer(null)}>
              Sign In
            </Button>
          </div>
        </div>
      </DrawerComponent>
    </div>
  )
}

export const MixedWithContent: Story = {
  name: 'Mixed with Content',
  parameters: { layout: 'padded' },
  render: MixedWithContentStory,
}
