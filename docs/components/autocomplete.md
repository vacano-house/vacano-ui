# Autocomplete

Async search input with suggestions dropdown.

*Also known as: typeahead, search input, async search, combobox, suggestion input*

<a href="/storybook/?path=/story/components-autocomplete--playground" target="_blank">View in Storybook</a>

## When to use

- Search with async suggestions from API. For static option lists, use Select.
- For multiple selections, use MultiSelect or Tags.

## Import

```tsx
import { Autocomplete } from '@vacano/ui'
```

## Usage

```tsx
import { Autocomplete, AutocompleteValue, AutocompleteSuggestion } from '@vacano/ui'

const [value, setValue] = useState<AutocompleteValue>({ value: '', image_url: null })

const handleSearch = async (query: string): Promise<AutocompleteSuggestion[]> => {
  const response = await fetch(`/api/search?q=${query}`)
  return response.json() // [{ id, value, image_url }]
}

<Autocomplete
  label="Search"
  placeholder="Type to search..."
  value={value}
  onChange={setValue}
  onSearch={handleSearch}
/>
```

## With Images

Suggestions can include images (avatars, icons, etc.):

```tsx
const handleSearch = async (query: string) => {
  return [
    { id: '1', value: 'John Doe', image_url: 'https://example.com/avatar.jpg' },
    { id: '2', value: 'Jane Smith', image_url: null },
  ]
}

<Autocomplete
  label="Select User"
  onSearch={handleSearch}
  value={value}
  onChange={setValue}
/>
```

## Variants

```tsx
<Autocomplete variant="normal" label="Normal" onSearch={handleSearch} />
<Autocomplete variant="error" label="Error" onSearch={handleSearch} />
```

## Sizes

```tsx
<Autocomplete size="default" label="Default Size" onSearch={handleSearch} />
<Autocomplete size="compact" label="Compact Size" onSearch={handleSearch} />
```

## Custom Debounce

```tsx
<Autocomplete
  debounceMs={500}
  label="Slow Search"
  onSearch={handleSearch}
/>
```

## Custom No Results Message

For internationalization:

```tsx
<Autocomplete
  noResultsMessage="Ничего не найдено"
  label="Поиск"
  onSearch={handleSearch}
/>
```

## Full Width

```tsx
<Autocomplete fullWidth label="Full Width" onSearch={handleSearch} />
```

## Disabled

```tsx
<Autocomplete
  disabled
  label="Disabled"
  value={{ value: 'Selected value', image_url: null }}
  onSearch={handleSearch}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onSearch` | `(query: string) => Promise<AutocompleteSuggestion[]>` | **required** | Async search function |
| `onChange` | `(value: AutocompleteValue) => void` | - | Called on value change |
| `value` | `AutocompleteValue` | - | Current value |
| `debounceMs` | `number` | `300` | Debounce delay in ms |
| `minChars` | `number` | `1` | Min characters to trigger search |
| `noResultsMessage` | `string` | `'No results found'` | Empty state message |
| `label` | `string` | - | Label text |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `size` | `'compact' \| 'default'` | `'default'` | Input size |
| `fullWidth` | `boolean` | `false` | Full width input |
| `disabled` | `boolean` | `false` | Disabled state |

All standard HTML input attributes are also supported.

## Types

```tsx
type AutocompleteSuggestion = {
  id: string
  value: string
  image_url: string | null
}

type AutocompleteValue = {
  value: string
  image_url: string | null
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `input` | Input element |
| `label` | Label element |
| `dropdown` | Dropdown container |
| `item` | Suggestion item |

## Related

- [Input](/components/input) - Basic text input
- [Select](/components/select) - Static option selection
- [Tags](/components/tags) - Tag input with suggestions
- [MultiSelect](/components/multi-select) - Multiple option selection
