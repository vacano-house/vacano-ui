import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tabs } from './Tabs'
import { TabsProps } from './types'

const AUDIENCE_TABS = [
  { value: 'contacts', label: 'Contacts' },
  { value: 'properties', label: 'Properties' },
  { value: 'segments', label: 'Segments' },
  { value: 'topics', label: 'Topics' },
]

const SETTINGS_TABS = [
  { value: 'general', label: 'General' },
  { value: 'security', label: 'Security' },
  { value: 'notifications', label: 'Notifications' },
  { value: 'billing', label: 'Billing' },
  { value: 'api', label: 'API' },
]

const meta: Meta<typeof Tabs> = {
  title: 'components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
}

export default meta
type Story = StoryObj<typeof Tabs>

const InteractiveTabs = (props: Omit<TabsProps, 'onChange'>) => {
  const [value, setValue] = useState(props.value)
  return <Tabs {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  args: {
    value: 'contacts',
    tabs: AUDIENCE_TABS,
  },
  render: (args) => <InteractiveTabs {...args} />,
}

export const Default: Story = {
  render: () => <InteractiveTabs value="contacts" tabs={AUDIENCE_TABS} />,
}

export const ManyTabs: Story = {
  render: () => <InteractiveTabs value="general" tabs={SETTINGS_TABS} />,
}

export const WithDisabledTab: Story = {
  render: () => {
    const tabsWithDisabled = AUDIENCE_TABS.map((tab, i) => ({
      ...tab,
      disabled: i === 2,
    }))
    return <InteractiveTabs value="contacts" tabs={tabsWithDisabled} />
  },
}

export const TwoTabs: Story = {
  render: () => (
    <InteractiveTabs
      value="active"
      tabs={[
        { value: 'active', label: 'Active' },
        { value: 'archived', label: 'Archived' },
      ]}
    />
  ),
}

export const WithRouting: Story = {
  name: 'With Routing (simulated)',
  render: () => {
    const RouterSimulation = () => {
      const [route, setRoute] = useState('/audience/contacts')

      const tabs = [
        { value: '/audience/contacts', label: 'Contacts' },
        { value: '/audience/properties', label: 'Properties' },
        { value: '/audience/segments', label: 'Segments' },
      ]

      return (
        <div>
          <Tabs value={route} tabs={tabs} onChange={setRoute} />
          <div
            style={{
              marginTop: 16,
              padding: 16,
              background: '#f5f5f5',
              borderRadius: 8,
              fontSize: 14,
            }}
          >
            Current route: <code>{route}</code>
          </div>
        </div>
      )
    }
    return <RouterSimulation />
  },
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px dashed #ccc',
        padding: 16,
        width: 600,
      }}
    >
      <InteractiveTabs value="contacts" tabs={AUDIENCE_TABS} />
      <span style={{ fontSize: 14, color: '#666' }}>Right content</span>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: '1px dashed #ccc',
        padding: 16,
      }}
    >
      <InteractiveTabs value="contacts" tabs={AUDIENCE_TABS} />
      <div style={{ padding: 16, background: '#f5f5f5', borderRadius: 8 }}>Tab content area</div>
    </div>
  ),
}

export const LayoutInCard: Story = {
  name: 'Layout: In Card',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: 12,
        padding: 20,
        width: 500,
      }}
    >
      <h2 style={{ margin: '0 0 16px', fontSize: 24, fontWeight: 600 }}>Audience</h2>
      <InteractiveTabs value="contacts" tabs={AUDIENCE_TABS} />
    </div>
  ),
}
