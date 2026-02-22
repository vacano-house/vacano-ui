import type { Meta, StoryObj } from '@storybook/react-vite'

import { DateRange as DateRangeComponent } from './DateRange'

const meta: Meta<typeof DateRangeComponent> = {
  title: 'components/DateRange',
  component: DateRangeComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    from: new Date(2021, 9),
    presentLabel: 'Present Time',
  },
}

export default meta

type Story = StoryObj<typeof DateRangeComponent>

export const Playground: Story = {}

export const PresentTime: Story = {
  render: () => <DateRangeComponent from={new Date(2021, 9)} />,
}

export const WithEndDate: Story = {
  render: () => <DateRangeComponent from={new Date(2019, 6)} to={new Date(2021, 8)} />,
}

export const Examples: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <DateRangeComponent from={new Date(2021, 9)} />
      <DateRangeComponent from={new Date(2019, 6)} to={new Date(2021, 8)} />
      <DateRangeComponent from={new Date(2018, 0)} to={new Date(2019, 5)} />
      <DateRangeComponent from={new Date(2023, 2)} presentLabel="Now" />
    </div>
  ),
}
