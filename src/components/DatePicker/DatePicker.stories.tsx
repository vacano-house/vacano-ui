import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DatePicker } from './DatePicker'
import { DatePickerProps } from './types'
import { Card } from '../Card'

const meta: Meta<typeof DatePicker> = {
  title: 'components/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    mode: {
      control: 'select',
      options: ['date', 'month', 'year'],
    },
    size: {
      control: 'select',
      options: ['compact', 'default'],
    },
    variant: {
      control: 'select',
      options: ['normal', 'error'],
    },
    weekStartsOn: {
      control: 'select',
      options: [0, 1],
    },
    locale: {
      control: 'select',
      options: ['en', 'en-US', 'ru', 'de', 'fr', 'es', 'ja', 'zh'],
    },
  },
}

export default meta
type Story = StoryObj<typeof DatePicker>

const InteractiveDatePicker = (props: DatePickerProps) => {
  const [value, setValue] = useState<Date | null>(props.value ?? null)
  return <DatePicker {...props} value={value} onChange={setValue} />
}

const InsideOverflowHiddenDemo = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <div style={{ display: 'flex', gap: 24 }}>
      <div
        style={{
          overflow: 'hidden',
          border: '1px dashed red',
          padding: 16,
          height: 100,
        }}
      >
        <p style={{ margin: '0 0 8px', color: 'red', fontSize: 12 }}>Clipped (no portal)</p>
        <InteractiveDatePicker placeholder="Select date" />
      </div>

      <div
        style={{
          overflow: 'hidden',
          border: '1px dashed green',
          padding: 16,
          height: 100,
        }}
      >
        <p style={{ margin: '0 0 8px', color: 'green', fontSize: 12 }}>With portal</p>
        <InteractiveDatePicker placeholder="Select date" portalRenderNode={portalNode} />
      </div>

      <div ref={setPortalNode} />
    </div>
  )
}

const PortalInCardDemo = () => {
  const [portalNode, setPortalNode] = useState<HTMLDivElement | null>(null)

  return (
    <>
      <div style={{ display: 'flex', gap: 16 }}>
        <Card style={{ width: 280, overflow: 'hidden' }}>
          <h4 style={{ margin: '0 0 16px' }}>Event Details</h4>
          <InteractiveDatePicker
            fullWidth
            label="Event date"
            placeholder="Select date"
            portalRenderNode={portalNode}
          />
        </Card>
        <Card style={{ width: 280, overflow: 'hidden' }}>
          <h4 style={{ margin: '0 0 16px' }}>Период</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InteractiveDatePicker
              fullWidth
              locale="ru"
              label="Начало"
              placeholder="Выберите"
              portalRenderNode={portalNode}
            />
            <InteractiveDatePicker
              fullWidth
              locale="ru"
              label="Конец"
              placeholder="Выберите"
              portalRenderNode={portalNode}
            />
          </div>
        </Card>
      </div>
      <div ref={setPortalNode} />
    </>
  )
}

export const Playground: Story = {
  render: (args: DatePickerProps) => <InteractiveDatePicker {...args} />,
  args: {
    placeholder: 'Select date',
    mode: 'date',
    size: 'default',
    variant: 'normal',
    locale: 'en',
    weekStartsOn: 1,
  },
}

export const Modes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <InteractiveDatePicker mode="date" label="Date" placeholder="Select date" />
      <InteractiveDatePicker mode="month" label="Month" placeholder="Select month" />
      <InteractiveDatePicker mode="year" label="Year" placeholder="Select year" />
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker size="compact" label="Compact" placeholder="Select date" />
      <InteractiveDatePicker size="default" label="Default" placeholder="Select date" />
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker variant="normal" label="Normal" placeholder="Select date" />
      <InteractiveDatePicker variant="error" label="Error" placeholder="Select date" />
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker disabled label="Disabled empty" placeholder="Select date" />
      <InteractiveDatePicker disabled label="Disabled with value" value={new Date(2024, 5, 15)} />
    </div>
  ),
}

export const LocaleRussian: Story = {
  name: 'Locale: Russian',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker
        locale="ru"
        weekStartsOn={1}
        label="Дата (Пн первый)"
        placeholder="Выберите дату"
        displayFormat="02 January 2006"
      />
      <InteractiveDatePicker locale="ru" mode="month" label="Месяц" placeholder="Выберите месяц" />
    </div>
  ),
}

export const LocaleEnglishUS: Story = {
  name: 'Locale: English US',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker
        locale="en-US"
        weekStartsOn={0}
        label="Date (Sun first)"
        placeholder="Select date"
        displayFormat="01/02/2006"
      />
      <InteractiveDatePicker
        locale="en-US"
        weekStartsOn={0}
        label="Date (Jan 2, 2006)"
        placeholder="Select date"
        displayFormat="Jan 2, 2006"
      />
    </div>
  ),
}

export const LocaleGerman: Story = {
  name: 'Locale: German',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker
        locale="de"
        weekStartsOn={1}
        label="Datum"
        placeholder="Datum auswählen"
        displayFormat="02.01.2006"
      />
      <InteractiveDatePicker locale="de" mode="month" label="Monat" placeholder="Monat auswählen" />
    </div>
  ),
}

export const WeekStartsOn: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker weekStartsOn={1} label="Monday first" placeholder="Select date" />
      <InteractiveDatePicker weekStartsOn={0} label="Sunday first" placeholder="Select date" />
    </div>
  ),
}

export const DisplayFormats: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <InteractiveDatePicker
        label="DD.MM.YYYY"
        displayFormat="02.01.2006"
        value={new Date(2024, 11, 25)}
      />
      <InteractiveDatePicker
        label="MM/DD/YYYY"
        displayFormat="01/02/2006"
        value={new Date(2024, 11, 25)}
      />
      <InteractiveDatePicker
        label="YYYY-MM-DD"
        displayFormat="2006-01-02"
        value={new Date(2024, 11, 25)}
      />
      <InteractiveDatePicker
        label="January 2, 2006"
        displayFormat="January 2, 2006"
        value={new Date(2024, 11, 25)}
      />
      <InteractiveDatePicker
        label="Mon, Jan 2 2006"
        displayFormat="Mon, Jan 2 2006"
        value={new Date(2024, 11, 25)}
      />
      <InteractiveDatePicker
        label="2 Jan 2006"
        displayFormat="2 Jan 2006"
        value={new Date(2024, 11, 25)}
      />
    </div>
  ),
}

export const MinMaxDates: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const today = new Date()
    const minDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7)
    const maxDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7)

    return (
      <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
        <InteractiveDatePicker
          label="±7 days from today"
          placeholder="Select date"
          minDate={minDate}
          maxDate={maxDate}
        />
        <InteractiveDatePicker
          label="This year only"
          mode="month"
          placeholder="Select month"
          minDate={new Date(today.getFullYear(), 0, 1)}
          maxDate={new Date(today.getFullYear(), 11, 31)}
        />
      </div>
    )
  },
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ width: 400 }}>
      <InteractiveDatePicker fullWidth label="Full width" placeholder="Select date" />
    </div>
  ),
}

export const WithLabel: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker label="Birth date" placeholder="Select date" />
      <InteractiveDatePicker label="Start date" placeholder="Select date" variant="error" />
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, border: '1px dashed #ccc', padding: 16 }}>
      <InteractiveDatePicker label="From" placeholder="Start date" />
      <InteractiveDatePicker label="To" placeholder="End date" />
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
        width: 300,
      }}
    >
      <InteractiveDatePicker fullWidth label="Birth date" placeholder="Select date" />
      <InteractiveDatePicker fullWidth label="Hire date" placeholder="Select date" />
      <InteractiveDatePicker fullWidth label="End date" placeholder="Select date" />
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
        width: 500,
      }}
    >
      <InteractiveDatePicker fullWidth label="Start" placeholder="Select" />
      <InteractiveDatePicker fullWidth label="End" placeholder="Select" />
      <InteractiveDatePicker fullWidth label="Created" placeholder="Select" />
      <InteractiveDatePicker fullWidth label="Updated" placeholder="Select" />
    </div>
  ),
}

export const InsideOverflowHidden: Story = {
  parameters: { layout: 'padded' },
  render: () => <InsideOverflowHiddenDemo />,
}

export const PortalInCard: Story = {
  name: 'Portal: In Card',
  parameters: { layout: 'padded' },
  render: () => <PortalInCardDemo />,
}

export const MixedWithOtherContent: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
      <span>From</span>
      <InteractiveDatePicker size="compact" placeholder="Start" />
      <span>to</span>
      <InteractiveDatePicker size="compact" placeholder="End" />
      <button type="button">Search</button>
    </div>
  ),
}

export const PreselectedValues: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      <InteractiveDatePicker label="Date" value={new Date(2024, 5, 15)} />
      <InteractiveDatePicker label="Month" mode="month" value={new Date(2024, 5, 1)} />
      <InteractiveDatePicker label="Year" mode="year" value={new Date(2024, 0, 1)} />
    </div>
  ),
}
