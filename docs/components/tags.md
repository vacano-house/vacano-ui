# Tags

Tag input component with autocomplete suggestions and free-form entry.

*Also known as: tag input, chip input, token input, keyword input*

<a href="/storybook/?path=/story/components-tags--playground" target="_blank">View in Storybook</a>

## When to use

- Entering multiple tags/keywords with autocomplete suggestions. Use `freeSolo` for custom tags.
- For selecting from a fixed list, use MultiSelect.

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

Allow creating tags not in the options list (enabled by default):

```tsx
<Tags
  value={tags}
  options={options}
  onChange={setTags}
  freeSolo
  placeholder="Type to add custom tags"
/>
```

Disable free solo to restrict to options only:

```tsx
<Tags
  value={tags}
  options={options}
  onChange={setTags}
  freeSolo={false}
  placeholder="Select from options only"
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

## With Message

```tsx
<Tags label="Tags" variant="error" value={tags} onChange={setTags} message="At least one tag is required" />
<Tags label="Keywords" value={tags} onChange={setTags} message="Add up to 5 keywords" />
```

## Disabled

```tsx
<Tags disabled value={['react', 'vue']} onChange={() => {}} />
```

## Portal Rendering

For use inside containers with `overflow: hidden`:

```tsx
<Tags
  value={tags}
  options={options}
  onChange={setTags}
  portalRenderNode={document.body}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string[]` | **required** | Selected tag values |
| `onChange` | `(value: string[]) => void` | **required** | Change handler |
| `options` | `TagsOption[]` | `[]` | Suggestion options |
| `label` | `string` | - | Label text |
| `placeholder` | `string` | `'Add tag...'` | Input placeholder |
| `variant` | `'normal' \| 'error'` | `'normal'` | Visual variant |
| `disabled` | `boolean` | `false` | Disable input |
| `message` | `string` | - | Message text below input (error, hint) |
| `freeSolo` | `boolean` | `true` | Allow creating custom tags not in the options list |
| `createKey` | `'Tab' \| 'Enter'` | `'Tab'` | Key to create tag |
| `emptyMessage` | `ReactNode` | `'No options'` | Empty state message when no suggestions match |
| `portalRenderNode` | `HTMLElement \| null` | - | Portal target for dropdown |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `TagsClassNames` | - | Custom class names for inner elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref to the root container element |
| `data-test-id` | `string` | - | Test identifier attribute |

### Option Type

```tsx
type TagsOption = {
  value: string
  label: string
}
```

### ClassNames

| Key | Description |
|-----|-------------|
| `trigger` | Container element |
| `chip` | Tag chip |
| `input` | Text input |
| `dropdown` | Suggestions dropdown |
| `option` | Suggestion option |
| `empty` | Empty state |

## Related

- [MultiSelect](/components/multi-select) - Multiple selection with modal picker
- [Chip](/components/chip) - Individual tag/label display
- [Autocomplete](/components/autocomplete) - Search input with suggestions
