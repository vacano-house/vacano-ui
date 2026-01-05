import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { RadioGroup as RadioGroupComponent } from './RadioGroup'
import { RadioGroupProps } from './types'

const meta: Meta<typeof RadioGroupComponent> = {
  title: 'molecules/RadioGroup',
  component: RadioGroupComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    value: 'option1',
    label: 'Select an option',
    name: 'radio-group',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    name: { control: 'text' },
    value: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof RadioGroupComponent>

const InteractiveRadioGroup = (
  props: Omit<RadioGroupProps, 'onChange'> & { onChange?: (value: string) => void },
) => {
  const [value, setValue] = useState<string | null>(props.value)

  return (
    <RadioGroupComponent
      {...props}
      value={value}
      onChange={(newValue) => {
        setValue(newValue)
        props.onChange?.(newValue)
      }}
    />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveRadioGroup {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>No Selection</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveRadioGroup
            label="Choose your plan"
            name="plan-no-selection"
            options={[
              { label: 'Free', value: 'free' },
              { label: 'Pro', value: 'pro' },
              { label: 'Enterprise', value: 'enterprise' },
            ]}
            value={null}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>With Selection</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveRadioGroup
            label="Choose your plan"
            name="plan-with-selection"
            options={[
              { label: 'Free', value: 'free' },
              { label: 'Pro', value: 'pro' },
              { label: 'Enterprise', value: 'enterprise' },
            ]}
            value="pro"
          />
        </div>
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>With Group Label</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveRadioGroup
            label="Select your preferred contact method"
            name="contact-method"
            options={[
              { label: 'Email', value: 'email' },
              { label: 'Phone', value: 'phone' },
              { label: 'SMS', value: 'sms' },
            ]}
            value="email"
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>With Long Group Label</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 400 }}>
          <InteractiveRadioGroup
            label="Please select your preferred method of receiving notifications and updates from our service"
            name="notifications"
            options={[
              { label: 'Email notifications', value: 'email' },
              { label: 'Push notifications', value: 'push' },
              { label: 'No notifications', value: 'none' },
            ]}
            value="email"
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Without Group Label</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveRadioGroup
            name="options-no-label"
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' },
            ]}
            value="a"
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          In a form context without label
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ marginBottom: 12, fontWeight: 500 }}>Account Type</div>
          <InteractiveRadioGroup
            name="account-type"
            options={[
              { label: 'Personal', value: 'personal' },
              { label: 'Business', value: 'business' },
              { label: 'Enterprise', value: 'enterprise' },
            ]}
            value="personal"
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
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Disabled with Selection</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <RadioGroupComponent
            label="Subscription tier"
            name="tier-disabled-selected"
            disabled
            options={[
              { label: 'Basic', value: 'basic' },
              { label: 'Standard', value: 'standard' },
              { label: 'Premium', value: 'premium' },
            ]}
            value="standard"
            onChange={() => {}}
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          Disabled without Selection
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <RadioGroupComponent
            label="Subscription tier"
            name="tier-disabled-no-selection"
            disabled
            options={[
              { label: 'Basic', value: 'basic' },
              { label: 'Standard', value: 'standard' },
              { label: 'Premium', value: 'premium' },
            ]}
            value={null}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const ManyOptions: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          Many Options (Vertical List)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveRadioGroup
            label="Select your country"
            name="country"
            options={[
              { label: 'United States', value: 'us' },
              { label: 'Canada', value: 'ca' },
              { label: 'United Kingdom', value: 'uk' },
              { label: 'Germany', value: 'de' },
              { label: 'France', value: 'fr' },
              { label: 'Spain', value: 'es' },
              { label: 'Italy', value: 'it' },
              { label: 'Australia', value: 'au' },
              { label: 'Japan', value: 'jp' },
              { label: 'Brazil', value: 'br' },
            ]}
            value="us"
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Options with Long Labels</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 400 }}>
          <InteractiveRadioGroup
            label="Select your shipping preference"
            name="shipping"
            options={[
              { label: 'Standard shipping (5-7 business days)', value: 'standard' },
              { label: 'Express shipping (2-3 business days)', value: 'express' },
              { label: 'Overnight shipping (next business day)', value: 'overnight' },
              { label: 'Same day delivery (order before 2pm)', value: 'same-day' },
              { label: 'Pickup at store (usually ready in 2 hours)', value: 'pickup' },
            ]}
            value="standard"
          />
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
        display: block (default) - radio group takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveRadioGroup
            label="Payment method"
            name="payment-block"
            options={[
              { label: 'Credit Card', value: 'credit' },
              { label: 'Debit Card', value: 'debit' },
              { label: 'PayPal', value: 'paypal' },
            ]}
            value="credit"
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
          flex-direction: row, gap: 24px - Multiple radio groups side by side
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
          <InteractiveRadioGroup
            label="Size"
            name="size-row"
            options={[
              { label: 'S', value: 's' },
              { label: 'M', value: 'm' },
              { label: 'L', value: 'l' },
            ]}
            value="m"
          />
          <InteractiveRadioGroup
            label="Color"
            name="color-row"
            options={[
              { label: 'Red', value: 'red' },
              { label: 'Blue', value: 'blue' },
              { label: 'Green', value: 'green' },
            ]}
            value="blue"
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
            width: 600,
          }}
        >
          <InteractiveRadioGroup
            label="Priority"
            name="priority-row"
            options={[
              { label: 'Low', value: 'low' },
              { label: 'Medium', value: 'medium' },
              { label: 'High', value: 'high' },
            ]}
            value="medium"
          />
          <InteractiveRadioGroup
            label="Status"
            name="status-row"
            options={[
              { label: 'Active', value: 'active' },
              { label: 'Inactive', value: 'inactive' },
            ]}
            value="active"
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 48,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioGroup
            label="Theme"
            name="theme-row"
            options={[
              { label: 'Light', value: 'light' },
              { label: 'Dark', value: 'dark' },
            ]}
            value="light"
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveRadioGroup
            label="Language"
            name="language-start"
            options={[
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
            ]}
            value="en"
          />
          <InteractiveRadioGroup
            label="Region"
            name="region-start"
            options={[
              { label: 'Americas', value: 'am' },
              { label: 'Europe', value: 'eu' },
            ]}
            value="am"
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveRadioGroup
            label="Language"
            name="language-center"
            options={[
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
            ]}
            value="en"
          />
          <InteractiveRadioGroup
            label="Region"
            name="region-center"
            options={[
              { label: 'Americas', value: 'am' },
              { label: 'Europe', value: 'eu' },
            ]}
            value="am"
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>align-items: flex-end</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveRadioGroup
            label="Language"
            name="language-end"
            options={[
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
            ]}
            value="en"
          />
          <InteractiveRadioGroup
            label="Region"
            name="region-end"
            options={[
              { label: 'Americas', value: 'am' },
              { label: 'Europe', value: 'eu' },
            ]}
            value="am"
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveRadioGroup
            label="Language"
            name="language-stretch"
            options={[
              { label: 'English', value: 'en' },
              { label: 'Spanish', value: 'es' },
            ]}
            value="en"
          />
          <InteractiveRadioGroup
            label="Region"
            name="region-stretch"
            options={[
              { label: 'Americas', value: 'am' },
              { label: 'Europe', value: 'eu' },
            ]}
            value="am"
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
          grid-template-columns: repeat(2, 1fr)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioGroup
            label="Size"
            name="size-grid"
            options={[
              { label: 'Small', value: 's' },
              { label: 'Medium', value: 'm' },
              { label: 'Large', value: 'l' },
            ]}
            value="m"
          />
          <InteractiveRadioGroup
            label="Color"
            name="color-grid"
            options={[
              { label: 'Red', value: 'red' },
              { label: 'Blue', value: 'blue' },
              { label: 'Green', value: 'green' },
            ]}
            value="blue"
          />
          <InteractiveRadioGroup
            label="Material"
            name="material-grid"
            options={[
              { label: 'Cotton', value: 'cotton' },
              { label: 'Polyester', value: 'polyester' },
              { label: 'Wool', value: 'wool' },
            ]}
            value="cotton"
          />
          <InteractiveRadioGroup
            label="Fit"
            name="fit-grid"
            options={[
              { label: 'Slim', value: 'slim' },
              { label: 'Regular', value: 'regular' },
              { label: 'Loose', value: 'loose' },
            ]}
            value="regular"
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          grid-template-columns: repeat(3, 1fr)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioGroup
            label="Category"
            name="category-grid"
            options={[
              { label: 'Electronics', value: 'electronics' },
              { label: 'Clothing', value: 'clothing' },
            ]}
            value="electronics"
          />
          <InteractiveRadioGroup
            label="Sort by"
            name="sort-grid"
            options={[
              { label: 'Price', value: 'price' },
              { label: 'Rating', value: 'rating' },
            ]}
            value="price"
          />
          <InteractiveRadioGroup
            label="Availability"
            name="availability-grid"
            options={[
              { label: 'In Stock', value: 'in-stock' },
              { label: 'All', value: 'all' },
            ]}
            value="all"
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioGroup
            label="Frequency"
            name="frequency-auto"
            options={[
              { label: 'Daily', value: 'daily' },
              { label: 'Weekly', value: 'weekly' },
              { label: 'Monthly', value: 'monthly' },
            ]}
            value="weekly"
          />
          <InteractiveRadioGroup
            label="Duration"
            name="duration-auto"
            options={[
              { label: '1 month', value: '1m' },
              { label: '3 months', value: '3m' },
              { label: '1 year', value: '1y' },
            ]}
            value="3m"
          />
          <InteractiveRadioGroup
            label="Billing"
            name="billing-auto"
            options={[
              { label: 'Monthly', value: 'monthly' },
              { label: 'Annual', value: 'annual' },
            ]}
            value="annual"
          />
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          Radio group in a form with other elements
        </div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
          }}
        >
          <div>
            <label
              htmlFor="email-input"
              style={{ display: 'block', marginBottom: 4, fontWeight: 500 }}
            >
              Email
            </label>
            <input
              id="email-input"
              type="email"
              placeholder="your@email.com"
              style={{ width: '100%', padding: 8, boxSizing: 'border-box' }}
            />
          </div>
          <InteractiveRadioGroup
            label="Subscription type"
            name="subscription-form"
            options={[
              { label: 'Free tier', value: 'free' },
              { label: 'Pro tier', value: 'pro' },
              { label: 'Enterprise tier', value: 'enterprise' },
            ]}
            value="free"
          />
          <button style={{ padding: '8px 16px', cursor: 'pointer', alignSelf: 'flex-start' }}>
            Subscribe
          </button>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          Radio group with description text
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveRadioGroup
            label="Privacy settings"
            name="privacy-form"
            options={[
              { label: 'Public', value: 'public' },
              { label: 'Friends only', value: 'friends' },
              { label: 'Private', value: 'private' },
            ]}
            value="friends"
          />
          <p style={{ marginTop: 12, fontSize: 12, color: '#666' }}>
            Choose who can see your profile and posts. You can change this setting at any time.
          </p>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>Multiple form sections</div>
        <div
          style={{
            border: '1px dashed #ccc',
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
          }}
        >
          <div style={{ borderBottom: '1px solid #eee', paddingBottom: 16 }}>
            <h4 style={{ margin: '0 0 12px 0', fontSize: 14 }}>Delivery Options</h4>
            <InteractiveRadioGroup
              name="delivery-form"
              options={[
                { label: 'Standard (5-7 days)', value: 'standard' },
                { label: 'Express (2-3 days)', value: 'express' },
                { label: 'Next day', value: 'next-day' },
              ]}
              value="standard"
            />
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px 0', fontSize: 14 }}>Payment Method</h4>
            <InteractiveRadioGroup
              name="payment-form"
              options={[
                { label: 'Credit Card', value: 'credit' },
                { label: 'PayPal', value: 'paypal' },
                { label: 'Bank Transfer', value: 'bank' },
              ]}
              value="credit"
            />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: 'gray' }}>
          Inline with action button
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveRadioGroup
            label="Export format"
            name="export-form"
            options={[
              { label: 'PDF', value: 'pdf' },
              { label: 'CSV', value: 'csv' },
              { label: 'Excel', value: 'excel' },
            ]}
            value="pdf"
          />
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Export</button>
        </div>
      </div>
    </div>
  ),
}
