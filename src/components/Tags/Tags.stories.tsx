import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Tags } from './Tags'
import { TagsProps } from './types'

const SKILLS = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'nodejs', label: 'Node.js' },
  { value: 'python', label: 'Python' },
  { value: 'rust', label: 'Rust' },
  { value: 'go', label: 'Go' },
  { value: 'docker', label: 'Docker' },
  { value: 'kubernetes', label: 'Kubernetes' },
  { value: 'aws', label: 'AWS' },
]

const meta: Meta<typeof Tags> = {
  title: 'components/Tags',
  component: Tags,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['normal', 'error'],
    },
    disabled: {
      control: 'boolean',
    },
    freeSolo: {
      control: 'boolean',
    },
    createKey: {
      control: 'select',
      options: ['Tab', 'Enter'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Tags>

const InteractiveTags = (props: Omit<TagsProps, 'onChange'>) => {
  const [value, setValue] = useState(props.value)
  return <Tags {...props} value={value} onChange={setValue} />
}

export const Playground: Story = {
  args: {
    value: ['react', 'typescript'],
    options: SKILLS,
    label: 'Skills',
    placeholder: 'Add skill...',
    variant: 'normal',
    disabled: false,
    freeSolo: true,
    createKey: 'Tab',
    emptyMessage: 'No skills found',
  },
  render: (args) => (
    <div style={{ width: 350 }}>
      <InteractiveTags {...args} />
    </div>
  ),
}

export const WithOptions: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags
        value={['react']}
        options={SKILLS}
        label="Skills (with suggestions)"
        placeholder="Add skill..."
      />
    </div>
  ),
}

export const WithoutOptions: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags
        value={['custom-tag']}
        label="Tags (free input only)"
        placeholder="Type and press Tab..."
      />
    </div>
  ),
}

export const FreeSoloDisabled: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags
        value={['react']}
        options={SKILLS}
        freeSolo={false}
        label="Skills (only from list)"
        placeholder="Select from list..."
      />
    </div>
  ),
}

export const CreateWithEnter: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags
        value={[]}
        options={SKILLS}
        createKey="Enter"
        label="Press Enter to add"
        placeholder="Type and press Enter..."
      />
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 350 }}>
      <InteractiveTags
        value={['react']}
        options={SKILLS}
        label="Normal"
        variant="normal"
        placeholder="Add skill..."
      />
      <InteractiveTags
        value={['typescript']}
        options={SKILLS}
        label="Error"
        variant="error"
        placeholder="Add skill..."
      />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 350 }}>
      <InteractiveTags
        value={[]}
        options={SKILLS}
        label="Disabled (empty)"
        disabled
        placeholder="Add skill..."
      />
      <InteractiveTags
        value={['react', 'typescript']}
        options={SKILLS}
        label="Disabled (with values)"
        disabled
        placeholder="Add skill..."
      />
    </div>
  ),
}

export const Empty: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags value={[]} options={SKILLS} label="Empty state" placeholder="Add skill..." />
    </div>
  ),
}

export const ManyTags: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags
        value={SKILLS.map((s) => s.value)}
        options={SKILLS}
        label="All skills selected"
        placeholder="Add more..."
      />
    </div>
  ),
}

export const CustomEmptyMessage: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags
        value={SKILLS.map((s) => s.value)}
        options={SKILLS}
        label="All selected (custom empty)"
        emptyMessage="All skills already added!"
      />
    </div>
  ),
}

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ width: 350 }}>
      <InteractiveTags value={['tag1', 'tag2']} placeholder="Add tags..." />
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 16, border: '1px dashed #ccc', padding: 16 }}>
      <InteractiveTags
        value={['react']}
        options={SKILLS}
        label="Primary skills"
        placeholder="Add..."
      />
      <InteractiveTags
        value={['docker']}
        options={SKILLS}
        label="Secondary skills"
        placeholder="Add..."
      />
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        border: '1px dashed #ccc',
        padding: 16,
        width: 350,
      }}
    >
      <InteractiveTags value={['react']} options={SKILLS} label="Technical skills" />
      <InteractiveTags value={['communication']} label="Soft skills" />
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 16,
        border: '1px dashed #ccc',
        padding: 16,
        width: 600,
      }}
    >
      <InteractiveTags value={['react']} options={SKILLS} label="Frontend" />
      <InteractiveTags value={['nodejs']} options={SKILLS} label="Backend" />
      <InteractiveTags value={['docker']} options={SKILLS} label="DevOps" />
      <InteractiveTags value={['aws']} options={SKILLS} label="Cloud" />
    </div>
  ),
}
