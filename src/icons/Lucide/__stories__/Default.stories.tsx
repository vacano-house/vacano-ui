import { JSX } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import * as LucideIcons from '../components'

type IconComponent = (props: { size?: number; className?: string }) => JSX.Element

const icons = Object.entries(LucideIcons)
  .filter(([name]) => name.startsWith('IconLucide'))
  .map<[string, IconComponent]>(([name, Icon]) => [name.replace('IconLucide', ''), Icon])

const IconsGallery = ({ size }: { size: number }) => {
  return (
    <div style={{ width: '100vw', maxWidth: 1200 }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 8,
        }}
      >
        {icons.map(([name, Icon]) => (
          <div
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: 16,
              borderRadius: 8,
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
            }}
            title={name}
            onClick={() => navigator.clipboard.writeText(name)}
          >
            <Icon size={size} />
            <span
              style={{
                marginTop: 8,
                fontSize: 10,
                color: '#64748b',
                textAlign: 'center',
                wordBreak: 'break-all',
                lineHeight: 1.2,
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

const meta: Meta<typeof IconsGallery> = {
  title: 'Icons/Lucide',
  component: IconsGallery,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    size: {
      control: { type: 'range', min: 16, max: 64, step: 4 },
      description: 'Icon size in pixels',
    },
  },
}

export default meta
type Story = StoryObj<typeof IconsGallery>

export const Default: Story = {
  args: {
    size: 40,
  },
}
