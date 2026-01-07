import { Button, Input } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Panel as PanelComponent } from './Panel'
import { Apple, Monitor } from '../../icons/Lucide'

const meta: Meta<typeof PanelComponent> = {
  title: 'components/Panel',
  component: PanelComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    variant: 'light',
  },
  argTypes: {
    variant: { control: 'select', options: ['light', 'dark'] },
    title: { control: 'text' },
    description: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof PanelComponent>

export const Playground: Story = {
  args: {
    title: 'Panel Title',
    description: 'This is a description for the panel.',
  },
  render: (args) => (
    <PanelComponent {...args}>
      <Button variant="system">Action 1</Button>
      <Button variant="system">Action 2</Button>
      <Button variant="system">Action 3</Button>
    </PanelComponent>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Light variant</div>
        <PanelComponent
          variant="light"
          title="Ways to buy crypto with a credit card or Apple Pay!"
          description="You can buy crypto via our on-ramp partners!"
        >
          <Button variant="transparent">VISA</Button>
          <Button variant="transparent">Mastercard</Button>
          <Button variant="transparent" icon={<Apple />}>
            Pay
          </Button>
        </PanelComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dark variant</div>
        <div style={{ backgroundColor: '#0f1115', padding: 24, borderRadius: 16 }}>
          <PanelComponent variant="dark">
            <Button variant="normal" icon={<Apple />}>
              Download for macOS
            </Button>
            <Button variant="system" icon={<Monitor />} />
          </PanelComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithTitleOnly: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Light with title only</div>
        <PanelComponent variant="light" title="Select your payment method">
          <Button variant="transparent">Credit Card</Button>
          <Button variant="transparent">Bank Transfer</Button>
          <Button variant="transparent">PayPal</Button>
        </PanelComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dark with title only</div>
        <div style={{ backgroundColor: '#0f1115', padding: 24, borderRadius: 16 }}>
          <PanelComponent variant="dark" title="Choose your platform">
            <Button variant="system">Windows</Button>
            <Button variant="system">macOS</Button>
            <Button variant="system">Linux</Button>
          </PanelComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithoutHeader: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Light without header</div>
        <PanelComponent variant="light">
          <Button variant="normal">Primary Action</Button>
          <Button variant="system">Secondary Action</Button>
        </PanelComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dark without header</div>
        <div style={{ backgroundColor: '#0f1115', padding: 24, borderRadius: 16 }}>
          <PanelComponent variant="dark">
            <Button variant="normal" icon={<Apple />}>
              Download for macOS
            </Button>
            <Button variant="system" icon={<Monitor />} />
          </PanelComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithInput: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Input component</div>
        <PanelComponent
          variant="light"
          title="Subscribe to our newsletter"
          description="Get the latest updates and news delivered to your inbox."
        >
          <div style={{ display: 'flex', gap: 8, width: '100%' }}>
            <div style={{ flex: 1 }}>
              <Input placeholder="Enter your email" fullWidth />
            </div>
            <Button variant="normal">Subscribe</Button>
          </div>
        </PanelComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Contact form</div>
        <PanelComponent
          variant="light"
          title="Contact Us"
          description="We would love to hear from you!"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
            <Input label="Name" placeholder="Your name" fullWidth />
            <Input label="Email" placeholder="your@email.com" fullWidth />
            <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
              <Button variant="system">Cancel</Button>
              <Button variant="normal">Send Message</Button>
            </div>
          </div>
        </PanelComponent>
      </div>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Full width block</div>
        <PanelComponent
          variant="light"
          title="Account Settings"
          description="Manage your account preferences."
        >
          <Button variant="system">Profile</Button>
          <Button variant="system">Security</Button>
          <Button variant="system">Notifications</Button>
          <Button variant="danger">Delete Account</Button>
        </PanelComponent>
      </div>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Side by side</div>
        <div style={{ display: 'flex', gap: 16 }}>
          <PanelComponent variant="light" title="Option A">
            <Button variant="normal">Select A</Button>
          </PanelComponent>
          <PanelComponent variant="light" title="Option B">
            <Button variant="system">Select B</Button>
          </PanelComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Grid layout</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          <PanelComponent variant="light" title="Payment" description="Choose payment method">
            <Button variant="transparent">Card</Button>
            <Button variant="transparent">Cash</Button>
          </PanelComponent>
          <PanelComponent variant="light" title="Delivery" description="Choose delivery option">
            <Button variant="transparent">Standard</Button>
            <Button variant="transparent">Express</Button>
          </PanelComponent>
          <PanelComponent variant="light" title="Gift" description="Add gift options">
            <Button variant="transparent">Wrap</Button>
            <Button variant="transparent">Message</Button>
          </PanelComponent>
          <PanelComponent variant="light" title="Insurance" description="Protect your order">
            <Button variant="transparent">Basic</Button>
            <Button variant="transparent">Premium</Button>
          </PanelComponent>
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 600 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Download section</div>
        <div style={{ backgroundColor: '#0f1115', padding: 24, borderRadius: 16 }}>
          <PanelComponent variant="dark">
            <Button variant="normal" icon={<Apple />}>
              Download for macOS
            </Button>
            <Button variant="system" icon={<Monitor />} />
          </PanelComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Payment methods</div>
        <PanelComponent
          variant="light"
          title="Ways to buy crypto with a credit card or Apple Pay!"
          description="You can buy crypto via our on-ramp partners!"
        >
          <Button variant="transparent">VISA</Button>
          <Button variant="transparent">Mastercard</Button>
          <Button variant="transparent" icon={<Apple />}>
            Pay
          </Button>
          <Button variant="transparent">G Pay</Button>
        </PanelComponent>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Quick actions</div>
        <PanelComponent variant="light" title="Quick Actions">
          <Button variant="success">Approve</Button>
          <Button variant="warning">Review</Button>
          <Button variant="danger">Reject</Button>
        </PanelComponent>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Search form</div>
        <PanelComponent variant="light" title="Search" description="Find what you are looking for">
          <div style={{ display: 'flex', gap: 8, width: '100%' }}>
            <div style={{ flex: 1 }}>
              <Input placeholder="Search..." fullWidth />
            </div>
            <Button variant="normal">Search</Button>
          </div>
        </PanelComponent>
      </div>
    </div>
  ),
}
