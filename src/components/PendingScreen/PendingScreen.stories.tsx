import type { Meta, StoryObj } from '@storybook/react-vite'

import { PendingScreen as PendingScreenComponent } from './PendingScreen'

const meta: Meta<typeof PendingScreenComponent> = {
  title: 'components/PendingScreen',
  component: PendingScreenComponent,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof PendingScreenComponent>

export const Playground: Story = {
  args: {
    description: 'Пожалуйста, подождите. Это может занять некоторое время.',
  },
}

export const Default: Story = {
  render: () => <PendingScreenComponent />,
}

export const WithDescription: Story = {
  render: () => (
    <PendingScreenComponent description="Загрузка данных с сервера. Пожалуйста, не закрывайте страницу." />
  ),
}

export const CustomPhrases: Story = {
  render: () => (
    <PendingScreenComponent
      phrases={[
        'Compiling shaders',
        'Loading textures',
        'Building scene graph',
        'Initializing renderer',
        'Connecting to server',
      ]}
      interval={2500}
      description="Setting up your workspace..."
    />
  ),
}

export const FastInterval: Story = {
  render: () => <PendingScreenComponent interval={1500} />,
}

export const SlowInterval: Story = {
  render: () => (
    <PendingScreenComponent
      interval={6000}
      description="Generating a complex report. This usually takes a minute or two."
    />
  ),
}
