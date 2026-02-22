# Accordion

Expandable content sections that allow users to show and hide related content. Supports single and multiple expansion, two visual variants, and controlled/uncontrolled state.

*Also known as: collapsible, expandable, disclosure, collapse panel*

<a href="/storybook/?path=/story/components-accordion--playground" target="_blank">View in Storybook</a>

## When to use

- Organizing content into collapsible sections (FAQ, settings, menus).
- Reducing visual clutter by hiding secondary content.
- Displaying lists of items where only one or a few need to be visible at a time.

## Import

```tsx
import { Accordion } from '@vacano/ui'
```

## Usage

```tsx
const items = [
  { value: 'section-1', title: 'Section 1', content: 'Content for section 1' },
  { value: 'section-2', title: 'Section 2', content: 'Content for section 2' },
]

<Accordion items={items} />
```

## Variants

### Outlined

Items separated by border lines.

```tsx
<Accordion items={items} variant="outlined" />
```

### Splitted

Items as separate rounded cards with gap between them.

```tsx
<Accordion items={items} variant="splitted" />
```

## Multiple

Allow multiple items to be expanded at the same time.

```tsx
<Accordion items={items} multiple />
```

## Default expanded

Pre-expand specific items on mount.

```tsx
<Accordion items={items} defaultValue={['section-1']} />
```

## Controlled

Control the expanded state externally.

```tsx
const [value, setValue] = useState(['section-1'])

<Accordion items={items} value={value} onChange={setValue} />
```

## Disabled items

Individual items can be disabled.

```tsx
const items = [
  { value: '1', title: 'Available', content: '...' },
  { value: '2', title: 'Disabled', content: '...', disabled: true },
]

<Accordion items={items} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `AccordionItem[]` | **required** | Array of accordion items |
| `variant` | `'outlined' \| 'splitted'` | `'outlined'` | Visual style variant |
| `multiple` | `boolean` | `false` | Allow multiple items open simultaneously |
| `value` | `string[]` | - | Controlled expanded item values |
| `defaultValue` | `string[]` | `[]` | Initially expanded items (uncontrolled) |
| `onChange` | `(value: string[]) => void` | - | Callback when expanded items change |
| `className` | `string` | - | CSS class name |
| `classnames` | `AccordionClassNames` | - | Custom class names for sub-elements |

### AccordionItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | **required** | Unique identifier for the item |
| `title` | `ReactNode` | **required** | Trigger label |
| `content` | `ReactNode` | **required** | Expandable content |
| `disabled` | `boolean` | `false` | Disable interaction |

### AccordionClassNames

| Key | Description |
|-----|-------------|
| `item` | Accordion item wrapper |
| `trigger` | Clickable header button |
| `content` | Expanded content area |
| `icon` | Chevron icon |

## Related

- [Tabs](/components/tabs) - Switch between content views
- [Stepper](/components/stepper) - Step-by-step navigation
- [Panel](/components/panel) - Container for grouped content
