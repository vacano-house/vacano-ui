import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading as HeadingComponent } from './Heading'

const meta: Meta<typeof HeadingComponent> = {
  title: 'components/Heading',
  component: HeadingComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'Frontend Radio',
    level: 3,
  },
  argTypes: {
    level: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
    as: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
  },
}

export default meta

type Story = StoryObj<typeof HeadingComponent>

export const Playground: Story = {}

export const Levels: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <HeadingComponent level={1}>Heading Level 1</HeadingComponent>
      <HeadingComponent level={2}>Heading Level 2</HeadingComponent>
      <HeadingComponent level={3}>Heading Level 3</HeadingComponent>
      <HeadingComponent level={4}>Heading Level 4</HeadingComponent>
      <HeadingComponent level={5}>Heading Level 5</HeadingComponent>
      <HeadingComponent level={6}>Heading Level 6</HeadingComponent>
    </div>
  ),
}

export const SemanticOverride: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: '#666' }}>
          Looks like h1, renders as h3
        </p>
        <HeadingComponent level={1} as={3}>
          Large but semantic h3
        </HeadingComponent>
      </div>
      <div>
        <p style={{ margin: '0 0 4px', fontSize: 12, color: '#666' }}>
          Looks like h4, renders as h2
        </p>
        <HeadingComponent level={4} as={2}>
          Small but semantic h2
        </HeadingComponent>
      </div>
    </div>
  ),
}
