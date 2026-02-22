import type { Meta, StoryObj } from '@storybook/react-vite'

import { Skeleton as SkeletonComponent } from './Skeleton'
import { Card, CardBody, CardFooter, CardHeader } from '../Card'

const meta: Meta<typeof SkeletonComponent> = {
  title: 'components/Skeleton',
  component: SkeletonComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    width: 200,
    height: 16,
    radius: 'md',
    animation: 'pulse',
    circle: false,
  },
  argTypes: {
    animation: { control: 'select', options: ['pulse', 'wave', 'none'] },
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg', 'full'] },
    width: { control: 'number' },
    height: { control: 'number' },
    circle: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof SkeletonComponent>

export const Playground: Story = {}

export const Animations: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 300 }}>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>Pulse</p>
        <SkeletonComponent animation="pulse" height={16} />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>Wave</p>
        <SkeletonComponent animation="wave" height={16} />
      </div>
      <div>
        <p style={{ margin: '0 0 8px', fontSize: 12, color: '#666' }}>None</p>
        <SkeletonComponent animation="none" height={16} />
      </div>
    </div>
  ),
}

export const Shapes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <SkeletonComponent circle height={48} />
      <SkeletonComponent width={120} height={16} radius="md" />
      <SkeletonComponent width={200} height={40} radius="lg" />
      <SkeletonComponent width={80} height={80} radius="none" />
    </div>
  ),
}

export const Radii: Story = {
  name: 'Radius',
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      {(['none', 'sm', 'md', 'lg', 'full'] as const).map((r) => (
        <div key={r} style={{ textAlign: 'center' }}>
          <SkeletonComponent width={80} height={32} radius={r} />
          <p style={{ margin: '8px 0 0', fontSize: 12, color: '#666' }}>{r}</p>
        </div>
      ))}
    </div>
  ),
}

export const TextBlock: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, width: 300 }}>
      <SkeletonComponent height={16} />
      <SkeletonComponent height={16} />
      <SkeletonComponent height={16} width="80%" />
    </div>
  ),
}

export const UserSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <SkeletonComponent circle height={40} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <SkeletonComponent width={120} height={14} />
        <SkeletonComponent width={80} height={12} />
      </div>
    </div>
  ),
}

export const CardSkeleton: Story = {
  render: () => (
    <Card shadow="sm" style={{ width: 340 }}>
      <CardHeader>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SkeletonComponent circle height={40} animation="wave" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <SkeletonComponent width={120} height={14} animation="wave" />
            <SkeletonComponent width={80} height={12} animation="wave" />
          </div>
        </div>
      </CardHeader>
      <CardBody>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <SkeletonComponent height={14} animation="wave" />
          <SkeletonComponent height={14} animation="wave" />
          <SkeletonComponent height={14} width="60%" animation="wave" />
        </div>
      </CardBody>
      <CardFooter style={{ gap: 16 }}>
        <SkeletonComponent width={80} height={14} animation="wave" />
        <SkeletonComponent width={80} height={14} animation="wave" />
      </CardFooter>
    </Card>
  ),
}

export const ListSkeleton: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 340 }}>
      {[0, 1, 2].map((i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <SkeletonComponent width={48} height={48} radius="lg" />
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <SkeletonComponent height={14} width="70%" />
            <SkeletonComponent height={12} width="40%" />
          </div>
        </div>
      ))}
    </div>
  ),
}
