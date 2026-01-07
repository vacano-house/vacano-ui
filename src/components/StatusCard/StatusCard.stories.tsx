import type { Meta, StoryObj } from '@storybook/react-vite'

import { StatusCard as StatusCardComponent } from './StatusCard'

const meta: Meta<typeof StatusCardComponent> = {
  title: 'components/StatusCard',
  component: StatusCardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Total Revenue',
    value: '$12,450',
    border: false,
    shadow: false,
    trendVariant: 'neutral',
  },
  argTypes: {
    border: { control: 'boolean' },
    shadow: { control: 'boolean' },
    label: { control: 'text' },
    value: { control: 'text' },
    trend: { control: 'text' },
    trendVariant: { control: 'select', options: ['positive', 'negative', 'neutral'] },
    icon: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof StatusCardComponent>

export const Playground: Story = {
  args: {
    label: 'Total Revenue',
    value: '$12,450',
    trend: '+12% from last month',
    trendVariant: 'positive',
  },
}

const DollarIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
)

const UsersIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const ChartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 20V10M12 20V4M6 20v-6" />
  </svg>
)

const ShoppingCartIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
)

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>No Border, No Shadow</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent label="Total Revenue" value="$12,450" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Border Only</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent label="Total Revenue" value="$12,450" border />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Shadow Only</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent label="Total Revenue" value="$12,450" shadow />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Border and Shadow</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent label="Total Revenue" value="$12,450" border shadow />
        </div>
      </div>
    </div>
  ),
}

export const TrendVariants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Positive Trend</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Total Revenue"
            value="$45,231"
            trend="+20.1% from last month"
            trendVariant="positive"
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Negative Trend</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Total Expenses"
            value="$8,230"
            trend="-5% from last month"
            trendVariant="negative"
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Neutral Trend</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Active Users"
            value="1,234"
            trend="No change from last month"
            trendVariant="neutral"
            border
          />
        </div>
      </div>
    </div>
  ),
}

export const WithIcon: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Dollar Icon</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Total Revenue"
            value="$45,231"
            trend="+20.1% from last month"
            trendVariant="positive"
            icon={<DollarIcon />}
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Users Icon</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Active Users"
            value="2,350"
            trend="+180 new users"
            trendVariant="positive"
            icon={<UsersIcon />}
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>With Chart Icon</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Conversion Rate"
            value="3.2%"
            trend="-0.4% from last week"
            trendVariant="negative"
            icon={<ChartIcon />}
            border
          />
        </div>
      </div>
    </div>
  ),
}

export const WithoutTrend: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Value only</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent label="Total Orders" value="342" border />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Value with icon</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, backgroundColor: '#f5f5f5' }}>
          <StatusCardComponent
            label="Total Orders"
            value="342"
            icon={<ShoppingCartIcon />}
            border
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
          flex-direction: row, gap: 16px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Orders"
            value="12,234"
            trend="-5%"
            trendVariant="negative"
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Orders"
            value="12,234"
            trend="-5%"
            trendVariant="negative"
            border
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
          flex-direction: column, gap: 12px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            width: 280,
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Orders"
            value="12,234"
            trend="-5%"
            trendVariant="negative"
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          align-items: center (container width: 400px)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            width: 400,
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
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
          grid-template-columns: repeat(2, 1fr), gap: 16px
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            maxWidth: 500,
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            icon={<DollarIcon />}
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            icon={<UsersIcon />}
            border
          />
          <StatusCardComponent
            label="Orders"
            value="12,234"
            trend="-5%"
            trendVariant="negative"
            icon={<ShoppingCartIcon />}
            border
          />
          <StatusCardComponent
            label="Growth"
            value="15.3%"
            trend="Steady"
            trendVariant="neutral"
            icon={<ChartIcon />}
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(3, 1fr), gap: 16px
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Conversion"
            value="3.2%"
            trend="-0.4%"
            trendVariant="negative"
            border
          />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(4, 1fr), gap: 16px
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Orders"
            value="12,234"
            trend="-5%"
            trendVariant="negative"
            border
          />
          <StatusCardComponent
            label="Growth"
            value="15.3%"
            trend="Steady"
            trendVariant="neutral"
            border
          />
        </div>
      </div>
    </div>
  ),
}

export const LayoutGridStretch: Story = {
  name: 'Layout: Grid Stretch',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Revenue"
            value="$45,231"
            trend="+20.1%"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Users"
            value="2,350"
            trend="+180"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Orders"
            value="12,234"
            trend="-5%"
            trendVariant="negative"
            border
          />
          <StatusCardComponent
            label="Growth"
            value="15.3%"
            trend="Steady"
            trendVariant="neutral"
            border
          />
          <StatusCardComponent
            label="Conversion"
            value="3.2%"
            trend="-0.4%"
            trendVariant="negative"
            border
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dashboard with shadow</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 24,
            backgroundColor: '#f5f5f5',
            borderRadius: 16,
            maxWidth: 500,
          }}
        >
          <StatusCardComponent
            label="Total Revenue"
            value="$45,231"
            trend="+20.1% from last month"
            trendVariant="positive"
            icon={<DollarIcon />}
            shadow
          />
          <StatusCardComponent
            label="Active Users"
            value="2,350"
            trend="+180 new users"
            trendVariant="positive"
            icon={<UsersIcon />}
            shadow
          />
          <StatusCardComponent
            label="Total Orders"
            value="12,234"
            trend="-5% from last month"
            trendVariant="negative"
            icon={<ShoppingCartIcon />}
            shadow
          />
          <StatusCardComponent
            label="Growth Rate"
            value="15.3%"
            trend="Steady growth"
            trendVariant="neutral"
            icon={<ChartIcon />}
            shadow
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dashboard with border</div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent
            label="Total Revenue"
            value="$45,231"
            trend="+20.1% from last month"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Active Users"
            value="2,350"
            trend="+180 new users"
            trendVariant="positive"
            border
          />
          <StatusCardComponent
            label="Conversion Rate"
            value="3.2%"
            trend="-0.4% from last week"
            trendVariant="negative"
            border
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Minimal cards</div>
        <div
          style={{
            display: 'flex',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
          }}
        >
          <StatusCardComponent label="Views" value="1.2M" />
          <StatusCardComponent label="Likes" value="45.6K" />
          <StatusCardComponent label="Comments" value="12.3K" />
          <StatusCardComponent label="Shares" value="8.9K" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Full featured with icons and trends
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            backgroundColor: '#f5f5f5',
            maxWidth: 300,
          }}
        >
          <StatusCardComponent
            label="Total Revenue"
            value="$45,231"
            trend="+20.1% from last month"
            trendVariant="positive"
            icon={<DollarIcon />}
            border
          />
          <StatusCardComponent
            label="Active Users"
            value="2,350"
            trend="-3% from last week"
            trendVariant="negative"
            icon={<UsersIcon />}
            border
          />
          <StatusCardComponent
            label="Conversion Rate"
            value="3.2%"
            trend="No change"
            trendVariant="neutral"
            icon={<ChartIcon />}
            border
          />
        </div>
      </div>
    </div>
  ),
}
