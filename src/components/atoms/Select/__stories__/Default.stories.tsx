import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Globe, Mail, MapPin, Search, User } from '../../../../icons/Lucide'
import { Select } from '../Select'
import type { SelectOption, SelectProps } from '../types'

const iconMap = {
  none: null,
  search: <Search size={16} />,
  mail: <Mail size={16} />,
  user: <User size={16} />,
  globe: <Globe size={16} />,
  'map-pin': <MapPin size={16} />,
}

type IconOption = keyof typeof iconMap

const sampleOptions: SelectOption[] = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
]

type StoryProps = Omit<SelectProps, 'icon' | 'value' | 'onChange' | 'options'> & {
  icon: IconOption
}

const meta: Meta<StoryProps> = {
  title: 'Atoms/Select',
  parameters: {
    layout: 'centered',
    controls: {
      include: [
        'label',
        'placeholder',
        'searchPlaceholder',
        'emptyMessage',
        'state',
        'disabled',
        'fullWidth',
        'placement',
        'maxHeight',
        'virtualized',
        'searchable',
        'icon',
      ],
    },
  },
  args: {
    label: 'Label',
    placeholder: 'Select...',
    searchPlaceholder: 'Search...',
    emptyMessage: 'No options',
    icon: 'none',
  },
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    searchPlaceholder: {
      control: 'text',
      description: 'Search input placeholder',
    },
    emptyMessage: {
      control: 'text',
      description: 'Empty state message',
    },
    state: {
      control: 'select',
      options: [undefined, 'warning', 'error'],
      description: 'Validation state',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable select',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width mode',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom'],
      description: 'Dropdown placement',
    },
    maxHeight: {
      control: 'number',
      description: 'Max dropdown height',
    },
    virtualized: {
      control: 'boolean',
      description: 'Enable virtualization',
    },
    searchable: {
      control: 'boolean',
      description: 'Enable search',
    },
    icon: {
      control: 'select',
      options: Object.keys(iconMap),
      description: 'Icon',
    },
  },
}

export default meta

type Story = StoryObj<StoryProps>

const InteractiveSelect = ({ icon, ...args }: StoryProps) => {
  const [value, setValue] = useState<string>()

  return (
    <Select
      {...args}
      options={sampleOptions}
      icon={iconMap[icon]}
      value={value}
      onChange={setValue}
    />
  )
}

export const Default: Story = {
  render: (args) => <InteractiveSelect {...args} />,
}

const longOptions: SelectOption[] = [
  {
    label: 'This is a very long option label that should be truncated with ellipsis',
    value: '1',
  },
  {
    label: 'Another extremely long option text that demonstrates text overflow behavior',
    value: '2',
  },
  {
    label: 'United States of America - The Land of the Free and Home of the Brave',
    value: '3',
  },
  {
    label: 'The quick brown fox jumps over the lazy dog near the riverbank',
    value: '4',
  },
  {
    label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod',
    value: '5',
  },
]

const LongTextSelect = () => {
  const [value, setValue] = useState<string>()

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', width: '250px' }}>
      <Select
        options={longOptions}
        value={value}
        onChange={setValue}
        label="Very Long Label That Should Also Be Truncated If Too Long"
        placeholder="Select"
      />
      <Select
        options={longOptions}
        value={value}
        onChange={setValue}
        label="With Icon"
        placeholder="Very long placeholder with icon..."
        icon={<Globe size={16} />}
      />
      <Select
        options={longOptions}
        value="1"
        onChange={setValue}
        label="Pre-selected Long Value"
        placeholder="Select..."
      />
      <Select
        options={longOptions}
        value={value}
        onChange={setValue}
        label="Searchable"
        placeholder="Search with long placeholder..."
        searchable
        searchPlaceholder="Type to search through very long option labels..."
      />
    </div>
  )
}

export const LongText: Story = {
  render: () => <LongTextSelect />,
  parameters: {
    layout: 'centered',
  },
}
