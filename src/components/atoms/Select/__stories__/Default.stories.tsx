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
