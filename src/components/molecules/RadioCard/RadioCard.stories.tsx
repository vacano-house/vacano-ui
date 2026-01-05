import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioCard as RadioCardComponent } from './RadioCard'
import { RadioCardProps } from './types'

const meta: Meta<typeof RadioCardComponent> = {
  title: 'molecules/RadioCard',
  component: RadioCardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Standard plan',
    description: 'Best for small teams and startups',
    checked: false,
    name: 'plan',
    disabled: false,
    fullWidth: false,
    variant: 'normal',
  },
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    description: { control: 'text' },
    variant: { control: 'select', options: ['normal', 'error'] },
  },
}

export default meta

type Story = StoryObj<typeof RadioCardComponent>

const InteractiveRadioCard = (props: RadioCardProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <RadioCardComponent
      {...props}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveRadioCard {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Unchecked</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <RadioCardComponent
            name="states-unchecked"
            label="Unchecked option"
            description="This option is not selected"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Checked</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <RadioCardComponent
            name="states-checked"
            label="Checked option"
            description="This option is currently selected"
            checked={true}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <RadioCardComponent
            name="variant-normal-unchecked"
            label="Unchecked"
            description="Normal variant"
            variant="normal"
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="variant-normal-checked"
            label="Checked"
            description="Normal variant"
            variant="normal"
            checked={true}
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <RadioCardComponent
            name="variant-error-unchecked"
            label="Unchecked"
            description="Error variant"
            variant="error"
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="variant-error-checked"
            label="Checked"
            description="Error variant"
            variant="error"
            checked={true}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        RadioCard with description text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <InteractiveRadioCard
          name="with-description"
          label="Premium Plan"
          description="Access to all features including priority support and advanced analytics"
          checked={false}
          onChange={() => {}}
        />
      </div>
    </div>
  ),
}

export const WithoutDescription: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        RadioCard without description text
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <InteractiveRadioCard
          name="without-description"
          label="Basic Option"
          checked={false}
          onChange={() => {}}
        />
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal Disabled</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <RadioCardComponent
            name="disabled-normal-unchecked"
            label="Disabled unchecked"
            description="This option is not available"
            disabled
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="disabled-normal-checked"
            label="Disabled checked"
            description="This option is selected but locked"
            disabled
            checked={true}
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
        <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
          <RadioCardComponent
            name="disabled-error-unchecked"
            label="Disabled unchecked"
            description="Error state disabled"
            disabled
            variant="error"
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="disabled-error-checked"
            label="Disabled checked"
            description="Error state disabled"
            disabled
            variant="error"
            checked={true}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

const FullWidthStory = () => {
  const [value, setValue] = useState<string | null>('monthly')

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
      <RadioCardComponent
        name="billing"
        label="Monthly billing"
        description="Pay month-to-month, cancel anytime"
        fullWidth
        checked={value === 'monthly'}
        onChange={() => setValue('monthly')}
      />
      <RadioCardComponent
        name="billing"
        label="Annual billing"
        description="Save 20% with annual payment"
        fullWidth
        checked={value === 'annual'}
        onChange={() => setValue('annual')}
      />
    </div>
  )
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        fullWidth prop - cards stretch to fill container
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16, width: '100%' }}>
        <FullWidthStory />
      </div>
    </div>
  ),
}

const AsGroupStory = () => {
  const [value, setValue] = useState<string>('free')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <RadioCardComponent
        name="plan-group"
        label="Free"
        description="For personal projects"
        checked={value === 'free'}
        onChange={() => setValue('free')}
      />
      <RadioCardComponent
        name="plan-group"
        label="Pro"
        description="For growing teams"
        checked={value === 'pro'}
        onChange={() => setValue('pro')}
      />
      <RadioCardComponent
        name="plan-group"
        label="Enterprise"
        description="For large organizations"
        checked={value === 'enterprise'}
        onChange={() => setValue('enterprise')}
      />
    </div>
  )
}

export const AsGroup: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Multiple RadioCards as a selection group (only one can be selected)
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <AsGroupStory />
      </div>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - each RadioCard takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveRadioCard
            name="layout-block-1"
            label="First option"
            description="Block layout item"
            checked={false}
            onChange={() => {}}
          />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveRadioCard
            name="layout-block-2"
            label="Second option with longer text"
            description="This description is a bit longer to show wrapping"
            checked={false}
            onChange={() => {}}
          />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveRadioCard
            name="layout-block-3"
            label="Third option"
            description="Another block item"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          flex-direction: row, gap: 24px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioCard
            name="flex-row-1"
            label="Option 1"
            description="First choice"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="flex-row-2"
            label="Option 2"
            description="Second choice"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="flex-row-3"
            label="Option 3"
            description="Third choice"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
            width: 700,
          }}
        >
          <InteractiveRadioCard
            name="flex-between-1"
            label="Left"
            description="Aligned left"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="flex-between-2"
            label="Center"
            description="Aligned center"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="flex-between-3"
            label="Right"
            description="Aligned right"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioCard
            name="flex-center-1"
            label="Centered 1"
            description="Center aligned"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="flex-center-2"
            label="Centered 2"
            description="Center aligned"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          align-items: flex-start (default)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveRadioCard
            name="col-start-1"
            label="Start 1"
            description="Flex start"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="col-start-2"
            label="Start 2"
            description="Flex start"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveRadioCard
            name="col-center-1"
            label="Center 1"
            description="Centered"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="col-center-2"
            label="Center 2"
            description="Centered"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: stretch</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <RadioCardComponent
            name="col-stretch-1"
            label="Stretch 1"
            description="Full width"
            fullWidth
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="col-stretch-2"
            label="Stretch 2"
            description="Full width"
            fullWidth
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

const LayoutGridStory = () => {
  const [value, setValue] = useState<string>('starter')

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 16,
      }}
    >
      <RadioCardComponent
        name="grid-plan"
        label="Starter"
        description="$9/month - Basic features"
        fullWidth
        checked={value === 'starter'}
        onChange={() => setValue('starter')}
      />
      <RadioCardComponent
        name="grid-plan"
        label="Professional"
        description="$29/month - Advanced tools"
        fullWidth
        checked={value === 'professional'}
        onChange={() => setValue('professional')}
      />
      <RadioCardComponent
        name="grid-plan"
        label="Enterprise"
        description="$99/month - Full suite"
        fullWidth
        checked={value === 'enterprise'}
        onChange={() => setValue('enterprise')}
      />
      <RadioCardComponent
        name="grid-plan"
        label="Team"
        description="$49/month - Collaboration"
        fullWidth
        checked={value === 'team'}
        onChange={() => setValue('team')}
      />
      <RadioCardComponent
        name="grid-plan"
        label="Agency"
        description="$79/month - Multi-client"
        fullWidth
        checked={value === 'agency'}
        onChange={() => setValue('agency')}
      />
      <RadioCardComponent
        name="grid-plan"
        label="Custom"
        description="Contact us - Tailored solution"
        fullWidth
        checked={value === 'custom'}
        onChange={() => setValue('custom')}
      />
    </div>
  )
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Plan selection pattern - grid-template-columns: repeat(3, 1fr)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <LayoutGridStory />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr), justify-items: start
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            justifyItems: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioCard
            name="grid-start-1"
            label="Start 1"
            description="Grid item"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="grid-start-2"
            label="Start 2"
            description="Grid item"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="grid-start-3"
            label="Start 3"
            description="Grid item"
            checked={false}
            onChange={() => {}}
          />
          <InteractiveRadioCard
            name="grid-start-4"
            label="Start 4"
            description="Grid item"
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Auto-fit columns: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <RadioCardComponent
            name="grid-auto-1"
            label="Auto 1"
            description="Responsive grid"
            fullWidth
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="grid-auto-2"
            label="Auto 2"
            description="Responsive grid"
            fullWidth
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="grid-auto-3"
            label="Auto 3"
            description="Responsive grid"
            fullWidth
            checked={false}
            onChange={() => {}}
          />
          <RadioCardComponent
            name="grid-auto-4"
            label="Auto 4"
            description="Responsive grid"
            fullWidth
            checked={false}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

const MixedWithContentStory = () => {
  const [plan, setPlan] = useState<string>('basic')
  const [billing, setBilling] = useState<string>('monthly')

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 600 }}>
      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: 16, fontWeight: 600 }}>Choose your plan</h3>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 12,
          }}
        >
          <RadioCardComponent
            name="mixed-plan"
            label="Basic"
            description="5GB storage, 1 user"
            fullWidth
            checked={plan === 'basic'}
            onChange={() => setPlan('basic')}
          />
          <RadioCardComponent
            name="mixed-plan"
            label="Standard"
            description="50GB storage, 5 users"
            fullWidth
            checked={plan === 'standard'}
            onChange={() => setPlan('standard')}
          />
          <RadioCardComponent
            name="mixed-plan"
            label="Premium"
            description="500GB storage, 20 users"
            fullWidth
            checked={plan === 'premium'}
            onChange={() => setPlan('premium')}
          />
          <RadioCardComponent
            name="mixed-plan"
            label="Enterprise"
            description="Unlimited storage and users"
            fullWidth
            checked={plan === 'enterprise'}
            onChange={() => setPlan('enterprise')}
          />
        </div>
      </div>

      <div>
        <h3 style={{ margin: '0 0 16px 0', fontSize: 16, fontWeight: 600 }}>Billing cycle</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <RadioCardComponent
            name="mixed-billing"
            label="Monthly"
            description="Pay month-to-month, cancel anytime"
            fullWidth
            checked={billing === 'monthly'}
            onChange={() => setBilling('monthly')}
          />
          <RadioCardComponent
            name="mixed-billing"
            label="Yearly"
            description="Save 20% with annual billing"
            fullWidth
            checked={billing === 'yearly'}
            onChange={() => setBilling('yearly')}
          />
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderTop: '1px solid #eee',
          paddingTop: 24,
        }}
      >
        <div>
          <div style={{ fontSize: 14, color: '#666' }}>Selected plan</div>
          <div style={{ fontSize: 18, fontWeight: 600 }}>
            {plan.charAt(0).toUpperCase() + plan.slice(1)} ({billing})
          </div>
        </div>
        <button
          style={{
            padding: '12px 24px',
            backgroundColor: '#0066cc',
            color: 'white',
            border: 'none',
            borderRadius: 8,
            cursor: 'pointer',
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          Continue to checkout
        </button>
      </div>
    </div>
  )
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        RadioCards as plan/option selection in a form context
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 24 }}>
        <MixedWithContentStory />
      </div>
    </div>
  ),
}
