import { useState } from 'react'

import { Button, FieldRow } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Autocomplete as AutocompleteComponent } from './Autocomplete'
import type { AutocompleteProps, AutocompleteSuggestion, AutocompleteValue } from './types'

const meta: Meta<typeof AutocompleteComponent> = {
  title: 'components/Autocomplete',
  component: AutocompleteComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    disabled: false,
    fullWidth: false,
    label: 'Search',
    placeholder: 'Type to search...',
    size: 'default',
    variant: 'normal',
    debounceMs: 300,
    minChars: 1,
    noResultsMessage: 'No results found',
  },
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    size: { control: 'select', options: ['compact', 'default'] },
    variant: { control: 'select', options: ['normal', 'error'] },
    debounceMs: { control: 'number' },
    minChars: { control: 'number' },
    noResultsMessage: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof AutocompleteComponent>

const mockUsers: AutocompleteSuggestion[] = [
  { id: '1', value: 'John Doe', image_url: 'https://i.pravatar.cc/150?u=john' },
  { id: '2', value: 'Jane Smith', image_url: 'https://i.pravatar.cc/150?u=jane' },
  { id: '3', value: 'Bob Johnson', image_url: 'https://i.pravatar.cc/150?u=bob' },
  { id: '4', value: 'Alice Williams', image_url: 'https://i.pravatar.cc/150?u=alice' },
  { id: '5', value: 'Charlie Brown', image_url: 'https://i.pravatar.cc/150?u=charlie' },
  { id: '6', value: 'Diana Ross', image_url: null },
  { id: '7', value: 'Edward Norton', image_url: 'https://i.pravatar.cc/150?u=edward' },
]

const mockCities: AutocompleteSuggestion[] = [
  { id: '1', value: 'New York', image_url: null },
  { id: '2', value: 'Los Angeles', image_url: null },
  { id: '3', value: 'Chicago', image_url: null },
  { id: '4', value: 'Houston', image_url: null },
  { id: '5', value: 'Phoenix', image_url: null },
  { id: '6', value: 'Philadelphia', image_url: null },
  { id: '7', value: 'San Antonio', image_url: null },
  { id: '8', value: 'San Diego', image_url: null },
  { id: '9', value: 'Dallas', image_url: null },
  { id: '10', value: 'San Jose', image_url: null },
]

const simulateSearch = (
  data: AutocompleteSuggestion[],
  query: string,
  delay = 500,
): Promise<AutocompleteSuggestion[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = data.filter((item) => item.value.toLowerCase().includes(query.toLowerCase()))
      resolve(filtered)
    }, delay)
  })
}

const InteractiveAutocomplete = (props: Partial<AutocompleteProps>) => {
  const [value, setValue] = useState<AutocompleteValue>({ value: '', image_url: null })

  const handleSearch = async (query: string) => {
    return simulateSearch(mockUsers, query)
  }

  return (
    <AutocompleteComponent
      {...props}
      value={value}
      onChange={setValue}
      onSearch={props.onSearch ?? handleSearch}
    />
  )
}

export const Playground: Story = {
  render: (args) => <InteractiveAutocomplete {...args} />,
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveAutocomplete variant="normal" label="Label" placeholder="Normal input" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveAutocomplete variant="error" label="Label" placeholder="Error input" />
        </div>
      </div>
    </div>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default Size</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveAutocomplete size="default" label="Default" placeholder="Default size" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Compact Size</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <InteractiveAutocomplete size="compact" label="Compact" placeholder="Compact size" />
        </div>
      </div>
    </div>
  ),
}

export const Disabled: Story = {
  parameters: { layout: 'padded' },
  render: () => {
    const handleSearch = async (query: string) => simulateSearch(mockCities, query)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal Disabled</div>
          <FieldRow gap={24}>
            <AutocompleteComponent
              disabled
              variant="normal"
              label="Disabled"
              placeholder="Cannot search"
              onSearch={handleSearch}
            />
            <AutocompleteComponent
              disabled
              variant="normal"
              label="With value"
              value={{ value: 'New York', image_url: null }}
              onSearch={handleSearch}
            />
          </FieldRow>
        </div>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Disabled</div>
          <FieldRow gap={24}>
            <AutocompleteComponent
              disabled
              variant="error"
              label="Disabled"
              placeholder="Cannot search"
              onSearch={handleSearch}
            />
            <AutocompleteComponent
              disabled
              variant="error"
              label="With value"
              value={{ value: 'Los Angeles', image_url: null }}
              onSearch={handleSearch}
            />
          </FieldRow>
        </div>
      </div>
    )
  },
}

export const WithImages: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Suggestions with avatar images
      </div>
      <InteractiveAutocomplete label="Select User" placeholder="Search by name..." />
    </div>
  ),
}

const WithoutImagesDemo = () => {
  const [value, setValue] = useState<AutocompleteValue>({ value: '', image_url: null })
  const handleSearch = async (query: string) => simulateSearch(mockCities, query)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Suggestions without images</div>
      <AutocompleteComponent
        label="Select City"
        placeholder="Search cities..."
        value={value}
        onChange={setValue}
        onSearch={handleSearch}
      />
    </div>
  )
}

export const WithoutImages: Story = {
  parameters: { layout: 'padded' },
  render: () => <WithoutImagesDemo />,
}

const CustomNoResultsMessageDemo = () => {
  const [value, setValue] = useState<AutocompleteValue>({ value: '', image_url: null })
  const handleSearch = async (): Promise<AutocompleteSuggestion[]> => {
    return new Promise((resolve) => setTimeout(() => resolve([]), 500))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: 300 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>English</div>
        <AutocompleteComponent
          label="Search"
          placeholder="Type anything..."
          noResultsMessage="No results found"
          value={value}
          onChange={setValue}
          onSearch={handleSearch}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Russian</div>
        <AutocompleteComponent
          label="Поиск"
          placeholder="Введите текст..."
          noResultsMessage="Ничего не найдено"
          value={value}
          onChange={setValue}
          onSearch={handleSearch}
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>German</div>
        <AutocompleteComponent
          label="Suche"
          placeholder="Text eingeben..."
          noResultsMessage="Keine Ergebnisse gefunden"
          value={value}
          onChange={setValue}
          onSearch={handleSearch}
        />
      </div>
    </div>
  )
}

export const CustomNoResultsMessage: Story = {
  parameters: { layout: 'padded' },
  render: () => <CustomNoResultsMessageDemo />,
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          fullWidth: false (default)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveAutocomplete label="Default width" placeholder="Input fits content" />
        </div>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>fullWidth: true</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveAutocomplete
            fullWidth
            label="Full width"
            placeholder="Input expands to container"
          />
        </div>
      </div>
    </div>
  ),
}

export const LayoutBlock: Story = {
  name: 'Layout: Block',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <div style={{ marginBottom: 16, fontSize: 12, color: '#666' }}>
        display: block (default) - each input takes full width
      </div>
      <div style={{ border: '1px dashed #ccc', padding: 16 }}>
        <div style={{ display: 'block' }}>
          <InteractiveAutocomplete fullWidth label="Country" placeholder="Search country..." />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveAutocomplete fullWidth label="City" placeholder="Search city..." />
        </div>
        <div style={{ display: 'block', marginTop: 12 }}>
          <InteractiveAutocomplete fullWidth label="Address" placeholder="Search address..." />
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexRow: Story = {
  name: 'Layout: Flex Row',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          flex-direction: row, gap: 24px
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete label="First" placeholder="First" />
          <InteractiveAutocomplete label="Second" placeholder="Second" />
          <InteractiveAutocomplete label="Third" placeholder="Third" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: space-between
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '1px dashed #ccc',
            padding: 16,
            width: 600,
          }}
        >
          <InteractiveAutocomplete label="Left" placeholder="Left" />
          <InteractiveAutocomplete label="Center" placeholder="Center" />
          <InteractiveAutocomplete label="Right" placeholder="Right" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>justify-content: center</div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete label="Centered 1" placeholder="First" />
          <InteractiveAutocomplete label="Centered 2" placeholder="Second" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          justify-content: flex-end
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 24,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete label="End 1" placeholder="First" />
          <InteractiveAutocomplete label="End 2" placeholder="Second" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutFlexColumn: Story = {
  name: 'Layout: Flex Column',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          align-items: flex-start (default)
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            height: 200,
          }}
        >
          <InteractiveAutocomplete label="Start 1" placeholder="Input 1" />
          <InteractiveAutocomplete label="Start 2" placeholder="Input 2" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: center</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            height: 200,
          }}
        >
          <InteractiveAutocomplete label="Center 1" placeholder="Input 1" />
          <InteractiveAutocomplete label="Center 2" placeholder="Input 2" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: flex-end</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            height: 200,
          }}
        >
          <InteractiveAutocomplete label="End 1" placeholder="Input 1" />
          <InteractiveAutocomplete label="End 2" placeholder="Input 2" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>align-items: stretch</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
            width: 250,
            height: 200,
          }}
        >
          <InteractiveAutocomplete fullWidth label="Stretch 1" placeholder="Input 1" />
          <InteractiveAutocomplete fullWidth label="Stretch 2" placeholder="Input 2" />
        </div>
      </div>
    </div>
  ),
}

export const LayoutGrid: Story = {
  name: 'Layout: Grid',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(2, 1fr) - Form layout
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete fullWidth label="Country" placeholder="Search country" />
          <InteractiveAutocomplete fullWidth label="City" placeholder="Search city" />
          <InteractiveAutocomplete fullWidth label="Category" placeholder="Search category" />
          <InteractiveAutocomplete fullWidth label="Tag" placeholder="Search tag" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          grid-template-columns: repeat(3, 1fr)
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete fullWidth label="Field 1" placeholder="Search" />
          <InteractiveAutocomplete fullWidth label="Field 2" placeholder="Search" />
          <InteractiveAutocomplete fullWidth label="Field 3" placeholder="Search" />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Auto-fit columns: grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete fullWidth label="Auto 1" placeholder="Search" />
          <InteractiveAutocomplete fullWidth label="Auto 2" placeholder="Search" />
          <InteractiveAutocomplete fullWidth label="Auto 3" placeholder="Search" />
          <InteractiveAutocomplete fullWidth label="Auto 4" placeholder="Search" />
        </div>
      </div>
    </div>
  ),
}

export const Message: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 400 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error with message</div>
        <InteractiveAutocomplete
          fullWidth
          variant="error"
          label="Country"
          placeholder="Search country..."
          message="Country is required"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Normal with message</div>
        <InteractiveAutocomplete
          fullWidth
          variant="normal"
          label="City"
          placeholder="Search city..."
          message="City selected"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Without message</div>
        <InteractiveAutocomplete fullWidth label="Category" placeholder="Search category..." />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Side by side: with and without message
        </div>
        <FieldRow>
          <InteractiveAutocomplete
            fullWidth
            variant="error"
            label="Country"
            placeholder="Search..."
            message="Required"
          />
          <InteractiveAutocomplete fullWidth label="City" placeholder="Search..." />
        </FieldRow>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Compact size with message
        </div>
        <InteractiveAutocomplete
          fullWidth
          size="compact"
          variant="error"
          label="Tag"
          placeholder="Search tag..."
          message="Invalid tag"
        />
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Disabled with message</div>
        <AutocompleteComponent
          fullWidth
          disabled
          variant="error"
          label="Country"
          placeholder="Cannot search"
          onSearch={async () => []}
          message="Country is required"
        />
      </div>
    </div>
  ),
}

const PortalDemo = () => {
  const [value, setValue] = useState<AutocompleteValue>({ value: '', image_url: null })
  const handleSearch = async (query: string) => simulateSearch(mockCities, query)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Without portal — dropdown clipped by overflow: hidden
        </div>
        <div
          style={{
            overflow: 'hidden',
            border: '1px dashed #e74c3c',
            borderRadius: 8,
            padding: 16,
            height: 80,
          }}
        >
          <AutocompleteComponent
            fullWidth
            label="City"
            placeholder="Search cities..."
            value={value}
            onChange={setValue}
            onSearch={handleSearch}
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          With portalRenderNode — dropdown escapes overflow: hidden
        </div>
        <div
          style={{
            overflow: 'hidden',
            border: '1px dashed #27ae60',
            borderRadius: 8,
            padding: 16,
            height: 80,
          }}
        >
          <AutocompleteComponent
            fullWidth
            label="City"
            placeholder="Search cities..."
            value={value}
            onChange={setValue}
            onSearch={handleSearch}
            portalRenderNode={document.body}
          />
        </div>
      </div>
    </div>
  )
}

export const Portal: Story = {
  name: 'Portal (overflow: hidden)',
  parameters: { layout: 'padded' },
  render: () => <PortalDemo />,
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 500 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Autocomplete with submit button
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete label="Search" placeholder="Find something..." />
          <Button variant="normal">Search</Button>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Autocomplete with validation message (error state)
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <InteractiveAutocomplete
            fullWidth
            variant="error"
            label="Category"
            placeholder="Select category"
            message="Please select a valid category"
          />
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Form with multiple autocompletes and buttons
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete fullWidth label="Country" placeholder="Select country" />
          <InteractiveAutocomplete fullWidth label="City" placeholder="Select city" />
          <InteractiveAutocomplete fullWidth label="Category" placeholder="Select category" />
          <div style={{ display: 'flex', gap: 12, justifyContent: 'flex-end' }}>
            <Button variant="system">Cancel</Button>
            <Button variant="normal">Submit</Button>
          </div>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Mixed sizes in same form</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 12,
            border: '1px dashed #ccc',
            padding: 16,
          }}
        >
          <InteractiveAutocomplete
            fullWidth
            size="default"
            label="Default size"
            placeholder="Default"
          />
          <InteractiveAutocomplete
            fullWidth
            size="compact"
            label="Compact size"
            placeholder="Compact"
          />
        </div>
      </div>
    </div>
  ),
}
