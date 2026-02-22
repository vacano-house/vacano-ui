# Progress

Progress bar indicator component.

*Also known as: progress bar, loading bar, completion indicator, percentage bar*

<a href="/storybook/?path=/story/components-progress--playground" target="_blank">View in Storybook</a>

## When to use

- Showing completion percentage (0-100). For indeterminate loading, use Spinner.
- For background save indication, use SaveProgress.

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
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `ProgressClassNames` | - | Custom class names for sub-elements |

### ClassNames

| Key | Description |
|-----|-------------|
| `track` | Background track |
| `bar` | Progress bar fill |

## Related

- [Spinner](/components/spinner) - Indeterminate loading indicator
- [SaveProgress](/components/save-progress) - Background save indicator
