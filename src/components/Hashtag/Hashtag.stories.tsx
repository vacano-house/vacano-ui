import type { Meta, StoryObj } from '@storybook/react-vite'

import { Hashtag as HashtagComponent } from './Hashtag'

const meta: Meta<typeof HashtagComponent> = {
  title: 'components/Hashtag',
  component: HashtagComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    children: 'FrontendWithZoey',
  },
}

export default meta

type Story = StoryObj<typeof HashtagComponent>

export const Playground: Story = {}

export const Static: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <HashtagComponent>React</HashtagComponent>
      <HashtagComponent>TypeScript</HashtagComponent>
      <HashtagComponent>VacanoUI</HashtagComponent>
    </div>
  ),
}

export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <HashtagComponent onClick={() => {}}>FrontendWithZoey</HashtagComponent>
      <HashtagComponent onClick={() => {}}>React</HashtagComponent>
      <HashtagComponent onClick={() => {}}>OpenSource</HashtagComponent>
    </div>
  ),
}

export const AsLink: Story = {
  name: 'As Link',
  render: () => (
    <div style={{ display: 'flex', gap: 12 }}>
      <HashtagComponent href="#">FrontendWithZoey</HashtagComponent>
      <HashtagComponent href="#">TypeScript</HashtagComponent>
    </div>
  ),
}
