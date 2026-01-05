import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxCard as CheckboxCardComponent } from './CheckboxCard'
import { CheckboxCardProps } from './types'

const meta: Meta<typeof CheckboxCardComponent> = {
  title: 'molecules/CheckboxCard',
  component: CheckboxCardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    checked: false,
    disabled: false,
    fullWidth: false,
    label: 'Checkbox card label',
    description: 'Optional description text',
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

type Story = StoryObj<typeof CheckboxCardComponent>

const InteractiveCheckboxCard = (props: CheckboxCardProps) => {
  const [checked, setChecked] = useState(props.checked)

  return (
    <CheckboxCardComponent
      {...props}
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveCheckboxCard {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Unchecked</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxCard
            checked={false}
            label="Unchecked card"
            description="This card is not selected"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Checked</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxCard
            checked={true}
            label="Checked card"
            description="This card is selected"
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
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Normal</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InteractiveCheckboxCard
              checked={false}
              variant="normal"
              label="Normal unchecked"
              description="Default variant in unchecked state"
              onChange={() => {}}
            />
            <InteractiveCheckboxCard
              checked={true}
              variant="normal"
              label="Normal checked"
              description="Default variant in checked state"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Error</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InteractiveCheckboxCard
              checked={false}
              variant="error"
              label="Error unchecked"
              description="Error variant in unchecked state"
              onChange={() => {}}
            />
            <InteractiveCheckboxCard
              checked={true}
              variant="error"
              label="Error checked"
              description="Error variant in checked state"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const WithDescription: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div>
      <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>With description text</div>
      <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 400 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InteractiveCheckboxCard
            checked={false}
            label="Enable notifications"
            description="Receive updates about new features and changes"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            label="Dark mode"
            description="Use dark theme across the application for reduced eye strain"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            label="Auto-save"
            description="Automatically save your work every few minutes to prevent data loss"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutDescription: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div>
      <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Without description text</div>
      <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 400 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <InteractiveCheckboxCard checked={false} label="Remember me" onChange={() => {}} />
          <InteractiveCheckboxCard checked={true} label="Stay signed in" onChange={() => {}} />
          <InteractiveCheckboxCard
            checked={false}
            label="Subscribe to newsletter"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Normal Disabled</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <CheckboxCardComponent
              checked={false}
              disabled
              label="Disabled unchecked"
              description="This option is not available"
              onChange={() => {}}
            />
            <CheckboxCardComponent
              checked={true}
              disabled
              label="Disabled checked"
              description="This option is enabled but locked"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Error Disabled</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <CheckboxCardComponent
              checked={false}
              disabled
              variant="error"
              label="Disabled error unchecked"
              description="This option has an error and is not available"
              onChange={() => {}}
            />
            <CheckboxCardComponent
              checked={true}
              disabled
              variant="error"
              label="Disabled error checked"
              description="This option has an error but is locked"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          fullWidth: false (default) - card fits content
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 500 }}>
          <InteractiveCheckboxCard
            checked={false}
            fullWidth={false}
            label="Default width card"
            description="This card only takes up the space it needs"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          fullWidth: true - card stretches to fill container
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 500 }}>
          <InteractiveCheckboxCard
            checked={false}
            fullWidth={true}
            label="Full width card"
            description="This card stretches to fill the entire container width"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          Multiple fullWidth cards stacked
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 500 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InteractiveCheckboxCard
              checked={true}
              fullWidth
              label="Email notifications"
              description="Receive updates via email"
              onChange={() => {}}
            />
            <InteractiveCheckboxCard
              checked={false}
              fullWidth
              label="SMS notifications"
              description="Receive updates via text message"
              onChange={() => {}}
            />
            <InteractiveCheckboxCard
              checked={false}
              fullWidth
              label="Push notifications"
              description="Receive updates on your device"
              onChange={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
        display: block (default) - each card takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveCheckboxCard
            checked={false}
            label="First option"
            description="Description for first option"
            onChange={() => {}}
          />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveCheckboxCard
            checked={true}
            label="Second option with longer text"
            description="This description is a bit longer to show text wrapping"
            onChange={() => {}}
          />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveCheckboxCard
            checked={false}
            label="Third option"
            description="Another description"
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
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          flex-direction: row, gap: 16px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            label="Option 1"
            description="First choice"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            label="Option 2"
            description="Second choice"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            label="Option 3"
            description="Third choice"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
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
          <InteractiveCheckboxCard
            checked={false}
            label="Left"
            description="Left aligned"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            label="Center"
            description="Center aligned"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            label="Right"
            description="Right aligned"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            label="Centered 1"
            description="First centered card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            label="Centered 2"
            description="Second centered card"
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
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
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
            width: 280,
            minHeight: 200,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            label="Start 1"
            description="Left aligned card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            label="Start 2"
            description="Another left aligned card"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 280,
            minHeight: 200,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            label="Center 1"
            description="Center aligned card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            label="Center 2"
            description="Another center aligned card"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>align-items: stretch</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 280,
            minHeight: 200,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Stretch 1"
            description="Full width stretched card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="Stretch 2"
            description="Another full width stretched card"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          grid-template-columns: repeat(3, 1fr) - Selection grid pattern
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Basic Plan"
            description="For individuals"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="Pro Plan"
            description="For professionals"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Enterprise"
            description="For large teams"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="Monthly billing"
            description="Pay each month"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Annual billing"
            description="Save 20%"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Lifetime access"
            description="One-time payment"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          grid-template-columns: repeat(2, 1fr) - Two column layout
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            maxWidth: 600,
          }}
        >
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Email updates"
            description="Weekly newsletter"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="Push notifications"
            description="Real-time alerts"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="SMS alerts"
            description="Important updates only"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="In-app messages"
            description="While using the app"
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
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
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Auto 1"
            description="Responsive card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="Auto 2"
            description="Responsive card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Auto 3"
            description="Responsive card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={true}
            fullWidth
            label="Auto 4"
            description="Responsive card"
            onChange={() => {}}
          />
          <InteractiveCheckboxCard
            checked={false}
            fullWidth
            label="Auto 5"
            description="Responsive card"
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => {
    const FormExample = () => {
      const [values, setValues] = useState({
        terms: false,
        newsletter: false,
        marketing: false,
      })

      const handleChange =
        (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) => {
          setValues((prev) => ({ ...prev, [key]: e.target.checked }))
        }

      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
          <div>
            <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
              Option cards in a form
            </div>
            <div style={{ border: '1px dashed #ccc', padding: 16 }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: 16 }}>Notification Preferences</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <CheckboxCardComponent
                  checked={values.terms}
                  fullWidth
                  label="Accept terms and conditions"
                  description="I agree to the terms of service and privacy policy"
                  variant={!values.terms ? 'error' : 'normal'}
                  onChange={handleChange('terms')}
                />
                <CheckboxCardComponent
                  checked={values.newsletter}
                  fullWidth
                  label="Subscribe to newsletter"
                  description="Receive weekly updates about new features"
                  onChange={handleChange('newsletter')}
                />
                <CheckboxCardComponent
                  checked={values.marketing}
                  fullWidth
                  label="Marketing communications"
                  description="Allow us to send promotional offers"
                  onChange={handleChange('marketing')}
                />
              </div>
              <button
                style={{
                  marginTop: 16,
                  padding: '10px 20px',
                  cursor: values.terms ? 'pointer' : 'not-allowed',
                  opacity: values.terms ? 1 : 0.5,
                }}
                disabled={!values.terms}
              >
                Continue
              </button>
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
              Cards with varying content lengths
            </div>
            <div style={{ border: '1px dashed #ccc', padding: 16 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <InteractiveCheckboxCard checked={false} label="Short" onChange={() => {}} />
                <InteractiveCheckboxCard
                  checked={true}
                  label="Medium length label"
                  description="With a description"
                  onChange={() => {}}
                />
                <InteractiveCheckboxCard
                  checked={false}
                  label="This is a longer label to show alignment"
                  description="This description is also quite long to demonstrate how the card handles longer text content that may wrap to multiple lines"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>

          <div>
            <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
              Feature selection grid
            </div>
            <div style={{ border: '1px dashed #ccc', padding: 16 }}>
              <h3 style={{ margin: '0 0 16px 0', fontSize: 16 }}>Select Features</h3>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 12,
                }}
              >
                <InteractiveCheckboxCard
                  checked={true}
                  fullWidth
                  label="Cloud Storage"
                  description="10GB included"
                  onChange={() => {}}
                />
                <InteractiveCheckboxCard
                  checked={false}
                  fullWidth
                  label="Priority Support"
                  description="24/7 assistance"
                  onChange={() => {}}
                />
                <InteractiveCheckboxCard
                  checked={true}
                  fullWidth
                  label="API Access"
                  description="Full REST API"
                  onChange={() => {}}
                />
                <InteractiveCheckboxCard
                  checked={false}
                  fullWidth
                  label="Analytics"
                  description="Advanced reports"
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
        </div>
      )
    }

    return <FormExample />
  },
}
