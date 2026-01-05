import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { CheckboxGroup as CheckboxGroupComponent } from './CheckboxGroup'
import { CheckboxGroupProps } from './types'

const meta: Meta<typeof CheckboxGroupComponent> = {
  title: 'molecules/CheckboxGroup',
  component: CheckboxGroupComponent,
  parameters: {
    layout: 'padded',
  },
  args: {
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' },
      { label: 'Option 3', value: 'option3' },
    ],
    value: ['option1'],
    label: 'Select options',
    disabled: false,
  },
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof CheckboxGroupComponent>

const InteractiveCheckboxGroup = (props: CheckboxGroupProps) => {
  const [value, setValue] = useState(props.value)

  return <CheckboxGroupComponent {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  render: (args) => <InteractiveCheckboxGroup {...args} />,
}

export const States: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Empty Selection</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxGroup
            label="No options selected"
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' },
            ]}
            value={[]}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Partial Selection</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxGroup
            label="Some options selected"
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' },
            ]}
            value={['a', 'c']}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>All Selected</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxGroup
            label="All options selected"
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
              { label: 'Option C', value: 'c' },
            ]}
            value={['a', 'b', 'c']}
            onChange={() => {}}
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Group Label</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxGroup
            label="Select your preferences"
            options={[
              { label: 'Email notifications', value: 'email' },
              { label: 'SMS notifications', value: 'sms' },
              { label: 'Push notifications', value: 'push' },
            ]}
            value={['email']}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Long Label</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxGroup
            label="Please select the communication methods you prefer for receiving updates"
            options={[
              { label: 'Email', value: 'email' },
              { label: 'Phone', value: 'phone' },
              { label: 'Mail', value: 'mail' },
            ]}
            value={['email', 'phone']}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Checkbox group without label
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <InteractiveCheckboxGroup
          options={[
            { label: 'Option A', value: 'a' },
            { label: 'Option B', value: 'b' },
            { label: 'Option C', value: 'c' },
          ]}
          value={['b']}
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Disabled with no selection
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <CheckboxGroupComponent
            label="Disabled group"
            disabled
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            value={[]}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Disabled with partial selection
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <CheckboxGroupComponent
            label="Disabled group"
            disabled
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            value={['option1', 'option3']}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Disabled with all selected
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <CheckboxGroupComponent
            label="Disabled group"
            disabled
            options={[
              { label: 'Option 1', value: 'option1' },
              { label: 'Option 2', value: 'option2' },
              { label: 'Option 3', value: 'option3' },
            ]}
            value={['option1', 'option2', 'option3']}
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Many options (shows scrolling/wrapping behavior)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 400 }}>
          <InteractiveCheckboxGroup
            label="Select countries"
            options={[
              { label: 'United States', value: 'us' },
              { label: 'United Kingdom', value: 'uk' },
              { label: 'Canada', value: 'ca' },
              { label: 'Australia', value: 'au' },
              { label: 'Germany', value: 'de' },
              { label: 'France', value: 'fr' },
              { label: 'Italy', value: 'it' },
              { label: 'Spain', value: 'es' },
              { label: 'Japan', value: 'jp' },
              { label: 'South Korea', value: 'kr' },
              { label: 'Brazil', value: 'br' },
              { label: 'Mexico', value: 'mx' },
            ]}
            value={['us', 'uk', 'ca']}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Many options with long labels
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, maxWidth: 350 }}>
          <InteractiveCheckboxGroup
            label="Select features"
            options={[
              { label: 'Real-time collaboration with team members', value: 'collab' },
              { label: 'Advanced analytics and reporting dashboard', value: 'analytics' },
              { label: 'Custom branding and white-label options', value: 'branding' },
              { label: 'Priority customer support 24/7', value: 'support' },
              { label: 'Unlimited storage and file uploads', value: 'storage' },
              { label: 'API access for custom integrations', value: 'api' },
            ]}
            value={['collab', 'analytics']}
            onChange={() => {}}
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
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        display: block (default) - checkbox group takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveCheckboxGroup
            label="Block layout example"
            options={[
              { label: 'First option', value: 'first' },
              { label: 'Second option with longer text', value: 'second' },
              { label: 'Third option', value: 'third' },
            ]}
            value={['first']}
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
          <InteractiveCheckboxGroup
            label="Group A"
            options={[
              { label: 'Option 1', value: 'a1' },
              { label: 'Option 2', value: 'a2' },
            ]}
            value={['a1']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Group B"
            options={[
              { label: 'Option 1', value: 'b1' },
              { label: 'Option 2', value: 'b2' },
            ]}
            value={['b2']}
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
            width: 600,
          }}
        >
          <InteractiveCheckboxGroup
            label="Left Group"
            options={[
              { label: 'Left 1', value: 'l1' },
              { label: 'Left 2', value: 'l2' },
            ]}
            value={['l1']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Right Group"
            options={[
              { label: 'Right 1', value: 'r1' },
              { label: 'Right 2', value: 'r2' },
            ]}
            value={['r2']}
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
            gap: 48,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckboxGroup
            label="Centered Group"
            options={[
              { label: 'Center 1', value: 'c1' },
              { label: 'Center 2', value: 'c2' },
            ]}
            value={['c1', 'c2']}
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveCheckboxGroup
            label="First Group"
            options={[
              { label: 'Start 1', value: 's1' },
              { label: 'Start 2', value: 's2' },
            ]}
            value={['s1']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Second Group"
            options={[
              { label: 'Start 3', value: 's3' },
              { label: 'Start 4', value: 's4' },
            ]}
            value={['s4']}
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveCheckboxGroup
            label="First Group"
            options={[
              { label: 'Center 1', value: 'c1' },
              { label: 'Center 2', value: 'c2' },
            ]}
            value={['c1']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Second Group"
            options={[
              { label: 'Center 3', value: 'c3' },
              { label: 'Center 4', value: 'c4' },
            ]}
            value={['c4']}
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
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            minHeight: 300,
          }}
        >
          <InteractiveCheckboxGroup
            label="First Group"
            options={[
              { label: 'Stretch 1', value: 'st1' },
              { label: 'Stretch 2', value: 'st2' },
            ]}
            value={['st1']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Second Group"
            options={[
              { label: 'Stretch 3', value: 'st3' },
              { label: 'Stretch 4', value: 'st4' },
            ]}
            value={['st4']}
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
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
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
          <InteractiveCheckboxGroup
            label="Preferences"
            options={[
              { label: 'Email', value: 'email' },
              { label: 'SMS', value: 'sms' },
            ]}
            value={['email']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Notifications"
            options={[
              { label: 'Push', value: 'push' },
              { label: 'In-app', value: 'inapp' },
            ]}
            value={['push', 'inapp']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Privacy"
            options={[
              { label: 'Analytics', value: 'analytics' },
              { label: 'Cookies', value: 'cookies' },
            ]}
            value={[]}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Features"
            options={[
              { label: 'Beta', value: 'beta' },
              { label: 'Experimental', value: 'exp' },
            ]}
            value={['beta']}
            onChange={() => {}}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(3, 1fr), justify-items: start
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            justifyItems: 'start',
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveCheckboxGroup
            label="Group 1"
            options={[
              { label: 'A', value: 'a' },
              { label: 'B', value: 'b' },
            ]}
            value={['a']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Group 2"
            options={[
              { label: 'C', value: 'c' },
              { label: 'D', value: 'd' },
            ]}
            value={['d']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Group 3"
            options={[
              { label: 'E', value: 'e' },
              { label: 'F', value: 'f' },
            ]}
            value={['e', 'f']}
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
          <InteractiveCheckboxGroup
            label="Auto 1"
            options={[
              { label: 'Option A', value: 'a' },
              { label: 'Option B', value: 'b' },
            ]}
            value={['a']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Auto 2"
            options={[
              { label: 'Option C', value: 'c' },
              { label: 'Option D', value: 'd' },
            ]}
            value={['c', 'd']}
            onChange={() => {}}
          />
          <InteractiveCheckboxGroup
            label="Auto 3"
            options={[
              { label: 'Option E', value: 'e' },
              { label: 'Option F', value: 'f' },
            ]}
            value={[]}
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
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Checkbox group in a form with other elements
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              style={{
                padding: 8,
                width: '100%',
                boxSizing: 'border-box',
                border: '1px solid #ccc',
              }}
            />
          </div>
          <div style={{ marginBottom: 16 }}>
            <InteractiveCheckboxGroup
              label="Select your interests"
              options={[
                { label: 'Technology', value: 'tech' },
                { label: 'Sports', value: 'sports' },
                { label: 'Music', value: 'music' },
                { label: 'Art', value: 'art' },
              ]}
              value={['tech', 'music']}
              onChange={() => {}}
            />
          </div>
          <button style={{ padding: '8px 16px', cursor: 'pointer' }}>Submit</button>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Checkbox group with description text
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveCheckboxGroup
            label="Newsletter preferences"
            options={[
              { label: 'Daily digest', value: 'daily' },
              { label: 'Weekly summary', value: 'weekly' },
              { label: 'Monthly newsletter', value: 'monthly' },
            ]}
            value={['weekly']}
            onChange={() => {}}
          />
          <p style={{ marginTop: 8, fontSize: 12, color: '#666', marginBottom: 0 }}>
            Select the frequency of emails you would like to receive from us.
          </p>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Multiple checkbox groups in a form section
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <h4 style={{ marginTop: 0, marginBottom: 16 }}>Notification Settings</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <InteractiveCheckboxGroup
              label="Email notifications"
              options={[
                { label: 'New messages', value: 'messages' },
                { label: 'Updates', value: 'updates' },
                { label: 'Promotions', value: 'promos' },
              ]}
              value={['messages', 'updates']}
              onChange={() => {}}
            />
            <InteractiveCheckboxGroup
              label="Push notifications"
              options={[
                { label: 'Alerts', value: 'alerts' },
                { label: 'Reminders', value: 'reminders' },
              ]}
              value={['alerts']}
              onChange={() => {}}
            />
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Checkbox group with constrained width
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, width: 280 }}>
          <InteractiveCheckboxGroup
            label="Select features for your subscription plan"
            options={[
              { label: 'Unlimited storage and file uploads', value: 'storage' },
              { label: 'Priority customer support', value: 'support' },
              { label: 'Advanced analytics', value: 'analytics' },
            ]}
            value={['storage']}
            onChange={() => {}}
          />
        </div>
      </div>
    </div>
  ),
}
