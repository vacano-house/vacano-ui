# Textarea

Многострочное текстовое поле для ввода длинного текста.

<a href="/storybook/?path=/docs/components-textarea--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Textarea } from '@vacano/ui'
```

## Basic Usage

```tsx
<Textarea label="Description" placeholder="Enter description..." />
```

## Variants

```tsx
<Textarea variant="normal" label="Normal" placeholder="Normal textarea" />
<Textarea variant="error" label="Error" placeholder="Error textarea" />
```

## Rows

Количество видимых строк можно настроить через проп `rows`:

```tsx
<Textarea rows={2} label="Small" placeholder="2 rows" />
<Textarea rows={4} label="Default" placeholder="4 rows (default)" />
<Textarea rows={8} label="Large" placeholder="8 rows" />
```

## Full Width

```tsx
<Textarea fullWidth label="Full width" placeholder="Expands to container width" />
```

## Disabled

```tsx
<Textarea disabled label="Disabled" placeholder="Disabled textarea" />
<Textarea disabled label="Disabled with value" value="Some text" />
```

## Without Label

```tsx
<Textarea placeholder="Textarea without label" />
```

## Controlled

```tsx
const [value, setValue] = useState('')

<Textarea
  value={value}
  onChange={(e) => setValue(e.target.value)}
  label="Controlled"
  placeholder="Controlled textarea"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | `string` | - | Текст метки над полем |
| `variant` | `'normal' \| 'error'` | `'normal'` | Визуальный вариант |
| `rows` | `number` | `4` | Количество видимых строк |
| `fullWidth` | `boolean` | `false` | Занимает всю ширину контейнера |
| `disabled` | `boolean` | `false` | Отключает поле |
| `className` | `string` | - | CSS класс для контейнера |
| `classnames` | `TextareaClassNames` | - | Объект CSS классов для внутренних элементов |

### TextareaClassNames

```tsx
type TextareaClassNames = {
  textarea?: string
  label?: string
}
```

## Accessibility

- Поле связано с меткой через структуру компонента
- Поддерживает стандартные атрибуты `aria-*`
- Поддерживает навигацию с клавиатуры
