# Tags

Tag input component with autocomplete suggestions and free-form entry.

<a href="/storybook/?path=/docs/molecules-tags--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Tags } from '@vacano/ui'
```

## Usage

```tsx
const [tags, setTags] = useState<string[]>([])

<Tags
  value={tags}
  onChange={setTags}
  placeholder="Add tags..."
/>
```

## With Suggestions

```tsx
const options = [
  { value: 'react', label: 'React' },
  { value: 'typescript', label: 'TypeScript' },
  { value: 'javascript', label: 'JavaScript' },
]

<Tags
  value={tags}
  options={options}
  onChange={setTags}
  placeholder="Select or type tags"
/>
```

## Free Solo Mode

Allow creating tags not in the options list:

```tsx
<Tags
  value={tags}
  options={options}
  onChange={setTags}
  freeSolo
  placeholder="Type to add custom tags"
/>
```

## Create Key

Choose which key creates a new tag:

```tsx
// Tab key creates tag (default)
<Tags createKey="Tab" value={tags} onChange={setTags} />

// Enter key creates tag
<Tags createKey="Enter" value={tags} onChange={setTags} />
```

## With Label

```tsx
<Tags
  label="Skills"
  value={tags}
  options={options}
  onChange={setTags}
/>
```

## Custom Empty Message

```tsx
<Tags
  value={tags}
  options={options}
  onChange={setTags}
  emptyMessage="No matching tags found"
/>
```

## Variants

```tsx
<Tags variant="normal" value={tags} onChange={setTags} />
<Tags variant="error" value={tags} onChange={setTags} />
```

## Disabled

```tsx
<Tags disabled value={['react', 'vue']} onChange={() => {}} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string[]` | **required** | Selected tag values |
| `onChange` | `(value: string[]) => void` | **required** | Change handler |
| `options` | `TagsOption[]` | - | Suggestion options |
| `label` | `string` | - | Label text |
| `placeholder` | `string` | - | Input placeholder |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable input |
| `freeSolo` | `boolean` | `false` | Allow custom tags |
| `createKey` | `'Tab' \| 'Enter'` | `'Tab'` | Key to create tag |
| `emptyMessage` | `ReactNode` | - | Empty state message |
| `portalRenderNode` | `HTMLElement \| null` | - | Portal target |
| `className` | `string` | - | CSS class name |
| `classnames` | `TagsClassNames` | - | Custom class names |

## Option Type

```tsx
type TagsOption = {
  value: string
  label: string
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `trigger` | Container element |
| `chip` | Tag chip |
| `input` | Text input |
| `dropdown` | Suggestions dropdown |
| `option` | Suggestion option |
| `empty` | Empty state |
