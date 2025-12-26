import type { Meta, StoryObj } from '@storybook/react-vite'

import { AnimatedIcon } from '../AnimatedIcon'
import { icons } from '../icons'

const iconNames = Object.keys(icons) as (keyof typeof icons)[]

const meta: Meta<typeof AnimatedIcon> = {
  title: 'Icons/AnimatedIcon',
  component: AnimatedIcon,
  parameters: {
    layout: 'fullscreen',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof AnimatedIcon>

const AllIconsGallery = () => (
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '16px',
      padding: '16px',
    }}
  >
    {iconNames.map((name) => (
      <div
        key={name}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          padding: '16px',
          borderRadius: '8px',
          border: '1px solid #e5e7eb',
        }}
      >
        <AnimatedIcon name={name} size={32} />
        <span
          style={{
            fontSize: '11px',
            color: '#6b7280',
            textAlign: 'center',
            wordBreak: 'break-all',
          }}
        >
          {name}
        </span>
      </div>
    ))}
  </div>
)

export const AllIcons: Story = {
  render: () => <AllIconsGallery />,
}
