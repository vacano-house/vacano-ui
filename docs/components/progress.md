# Progress

Progress bar indicator component.

<a href="/storybook/?path=/docs/atoms-progress--docs" target="_blank">View in Storybook</a>

## Import

```tsx
import { Progress } from '@vacano/ui'
```

## Usage

```tsx
<Progress value={50} />
```

## Values

```tsx
<Progress value={0} />   {/* Empty */}
<Progress value={25} />  {/* Quarter */}
<Progress value={50} />  {/* Half */}
<Progress value={75} />  {/* Three quarters */}
<Progress value={100} /> {/* Full */}
```

## Sizes

```tsx
<Progress size="default" value={60} />
<Progress size="compact" value={60} />
```

## Dynamic Progress

```tsx
const [progress, setProgress] = useState(0)

useEffect(() => {
  const timer = setInterval(() => {
    setProgress((prev) => (prev >= 100 ? 0 : prev + 10))
  }, 500)
  return () => clearInterval(timer)
}, [])

<Progress value={progress} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | **required** | Progress value (0-100) |
| `size` | `'compact' \| 'default'` | `'default'` | Bar size |
| `className` | `string` | - | CSS class name |
| `classnames` | `ProgressClassNames` | - | Custom class names |

## ClassNames

| Key | Description |
|-----|-------------|
| `track` | Background track |
| `bar` | Progress bar fill |
