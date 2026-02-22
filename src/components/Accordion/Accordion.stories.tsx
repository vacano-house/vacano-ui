import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Accordion as AccordionComponent } from './Accordion'
import { type AccordionItem } from './types'

const items: AccordionItem[] = [
  {
    value: 'spa',
    title: 'Spa Therapies',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Face Treatments</span>
          <span>40 min.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Nail Treatments</span>
          <span>30 min.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Hair Treatments</span>
          <span>30 min.</span>
        </div>
      </div>
    ),
  },
  {
    value: 'massage',
    title: 'Massage Therapies',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Swedish Massage</span>
          <span>60 min.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Deep Tissue Massage</span>
          <span>45 min.</span>
        </div>
      </div>
    ),
  },
  {
    value: 'yoga',
    title: 'Yoga Classes',
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Morning Flow</span>
          <span>60 min.</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Evening Stretch</span>
          <span>45 min.</span>
        </div>
      </div>
    ),
  },
]

const faqItems: AccordionItem[] = [
  {
    value: 'what',
    title: 'What is Vacano UI?',
    content:
      'Vacano UI is a React component library built with Emotion CSS-in-JS. It provides 50+ components, icons, and shared utilities.',
  },
  {
    value: 'install',
    title: 'How do I install it?',
    content:
      'Install via npm or pnpm: pnpm add @vacano/ui. You also need @emotion/react and @emotion/styled as peer dependencies.',
  },
  {
    value: 'customization',
    title: 'Can I customize the styles?',
    content:
      'Yes! Every component supports className and classnames props for custom styling. You can also override styled components via Emotion theme.',
  },
  {
    value: 'support',
    title: 'Where can I get help?',
    content:
      'Check the documentation at our VitePress site, open a GitHub issue, or reach out on Slack.',
  },
]

const meta: Meta<typeof AccordionComponent> = {
  title: 'components/Accordion',
  component: AccordionComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    items,
    variant: 'outlined',
    multiple: false,
  },
  argTypes: {
    variant: { control: 'select', options: ['outlined', 'splitted'] },
    multiple: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof AccordionComponent>

export const Playground: Story = {
  render: (args) => (
    <div style={{ width: 400 }}>
      <AccordionComponent {...args} />
    </div>
  ),
}

export const Outlined: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AccordionComponent items={items} variant="outlined" />
    </div>
  ),
}

export const Splitted: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AccordionComponent items={items} variant="splitted" />
    </div>
  ),
}

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AccordionComponent items={items} multiple />
    </div>
  ),
}

export const DefaultExpanded: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <AccordionComponent items={items} defaultValue={['spa']} />
    </div>
  ),
}

export const FAQ: Story = {
  render: () => (
    <div style={{ width: 480 }}>
      <AccordionComponent items={faqItems} variant="splitted" />
    </div>
  ),
}

const ControlledExample = () => {
  const [value, setValue] = useState<string[]>(['what'])

  return (
    <div style={{ width: 480 }}>
      <AccordionComponent items={faqItems} value={value} onChange={setValue} />
      <p style={{ marginTop: 16, fontSize: 12, color: '#666' }}>
        Expanded: {value.length ? value.join(', ') : 'none'}
      </p>
    </div>
  )
}

export const Controlled: Story = {
  render: () => <ControlledExample />,
}

export const WithDisabledItem: Story = {
  render: () => {
    const disabledItems: AccordionItem[] = [
      { value: '1', title: 'Available Section', content: 'This section is accessible.' },
      { value: '2', title: 'Disabled Section', content: 'Cannot be opened.', disabled: true },
      { value: '3', title: 'Another Section', content: 'This section is also accessible.' },
    ]

    return (
      <div style={{ width: 400 }}>
        <AccordionComponent items={disabledItems} />
      </div>
    )
  },
}
