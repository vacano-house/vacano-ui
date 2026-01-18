# EditableText

Inline editable text with pencil/check icon toggle.

<a href="/storybook/?path=/docs/components-editabletext--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { EditableText } from '@vacano/ui'
```

## Usage

```tsx
const [name, setName] = useState('John Doe')

<EditableText value={name} onChange={setName} />
```

## With Placeholder

```tsx
<EditableText
  value=""
  placeholder="Enter name..."
  onChange={setName}
/>
```

## Disabled

```tsx
<EditableText
  value="Cannot edit this"
  onChange={setName}
  disabled
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | required | Current value |
| `onChange` | `(value: string) => void` | required | Called when value is saved |
| `disabled` | `boolean` | `false` | Disable editing |
| `placeholder` | `string` | — | Placeholder for empty value |
| `className` | `string` | — | CSS class name |
| `classnames` | `EditableTextClassNames` | — | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `text` | Text element |
| `button` | Icon button |

## Behavior

- Click pencil icon to start editing
- **Cmd+Enter** — Save changes
- **Click outside** — Save changes
- **Escape** — Cancel and revert
- Click check icon — Save changes
