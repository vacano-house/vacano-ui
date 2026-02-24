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

export const Locales: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ fontSize: 12, color: '#999' }}>English (default)</div>
      <DateRangeComponent from={new Date(2023, 2)} to={new Date(2025, 11)} />

      <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>Russian</div>
      <DateRangeComponent from={new Date(2023, 2)} to={new Date(2025, 11)} locale="ru" />

      <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>German</div>
      <DateRangeComponent from={new Date(2023, 2)} to={new Date(2025, 11)} locale="de" />

      <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>French</div>
      <DateRangeComponent from={new Date(2023, 2)} to={new Date(2025, 11)} locale="fr" />

      <div style={{ fontSize: 12, color: '#999', marginTop: 8 }}>Japanese</div>
      <DateRangeComponent from={new Date(2023, 2)} to={new Date(2025, 11)} locale="ja" />
    </div>
  ),
}

export const CustomPresentLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <DateRangeComponent from={new Date(2023, 2)} presentLabel="Present Time" />
      <DateRangeComponent from={new Date(2023, 2)} locale="ru" presentLabel="По настоящее время" />
      <DateRangeComponent from={new Date(2023, 2)} locale="de" presentLabel="Bis heute" />
    </div>
  ),
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
