# Tabs

Tab navigation component for switching between views.

*Also known as: tab bar, tab navigation, segmented control, tab switcher*

<a href="/storybook/?path=/story/components-tabs--playground" target="_blank">View in Storybook</a>

## When to use

- Switching between views or content sections. For step-by-step flows, use Stepper.

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
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `TabsClassNames` | - | Custom class names for sub-elements |

### TabItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | **required** | Unique tab identifier |
| `label` | `string` | **required** | Tab display label |
| `disabled` | `boolean` | `false` | Disable this tab |

### ClassNames

| Key | Description |
|-----|-------------|
| `tab` | Individual tab button |

## Related

- [Stepper](/components/stepper) - Multi-step flow indicator
