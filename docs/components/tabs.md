# Tabs

Tab navigation component for switching between views.

<a href="/storybook/?path=/docs/molecules-tabs--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Tabs } from '@vacano/ui'
```

## Usage

```tsx
const [activeTab, setActiveTab] = useState('overview')

const tabs = [
  { value: 'overview', label: 'Overview' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'settings', label: 'Settings' },
]

<Tabs
  value={activeTab}
  tabs={tabs}
  onChange={setActiveTab}
/>
```

## With Disabled Tab

```tsx
const tabs = [
  { value: 'active', label: 'Active' },
  { value: 'disabled', label: 'Disabled', disabled: true },
  { value: 'another', label: 'Another' },
]

<Tabs value="active" tabs={tabs} onChange={setActiveTab} />
```

## Full Example with Content

```tsx
const [activeTab, setActiveTab] = useState('tab1')

<div>
  <Tabs
    value={activeTab}
    tabs={[
      { value: 'tab1', label: 'Tab 1' },
      { value: 'tab2', label: 'Tab 2' },
      { value: 'tab3', label: 'Tab 3' },
    ]}
    onChange={setActiveTab}
  />

  <div style={{ marginTop: 16 }}>
    {activeTab === 'tab1' && <p>Content for Tab 1</p>}
    {activeTab === 'tab2' && <p>Content for Tab 2</p>}
    {activeTab === 'tab3' && <p>Content for Tab 3</p>}
  </div>
</div>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Active tab value |
| `tabs` | `TabItem[]` | **required** | Array of tabs |
| `onChange` | `(value: string) => void` | **required** | Change handler |
| `className` | `string` | - | CSS class name |
| `classnames` | `TabsClassNames` | - | Custom class names |

## Tab Item Type

```tsx
type TabItem = {
  value: string
  label: string
  disabled?: boolean
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `tab` | Individual tab button |
