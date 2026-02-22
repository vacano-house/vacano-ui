# StepLog

Displays a log of sequential steps with expandable content, status indicators, and optional line-numbered log output. Inspired by CI/CD pipeline interfaces like GitHub Actions.

*Also known as: job log, pipeline viewer, build log, activity log*

<a href="/storybook/?path=/story/components-steplog--playground" target="_blank">View in Storybook</a>

## When to use

- Showing CI/CD pipeline or build process steps.
- Displaying step-by-step execution logs with status indicators.
- Visualizing deployment progress with expandable log details.

## Import

```tsx
import { StepLog } from '@vacano/ui'
```

## Usage

```tsx
const steps = [
  {
    value: 'build',
    title: 'Build project',
    status: 'success',
    duration: '33s',
    lines: [
      { line: 1, text: 'vite build' },
      { line: 2, text: '✓ 2284 modules transformed.' },
      { line: 3, text: '✓ built in 19.38s' },
    ],
  },
  {
    value: 'deploy',
    title: 'Deploy to production',
    status: 'running',
    lines: [
      { line: 1, text: 'Uploading artifacts...' },
    ],
  },
]

<StepLog steps={steps} />
```

## Step statuses

Each step has a visual status indicator:

- `success` — green check circle
- `error` — red X circle
- `running` — yellow spinning indicator
- `pending` — gray hollow circle

## Default expanded

Pre-expand specific steps.

```tsx
<StepLog steps={steps} defaultValue={['build']} />
```

## Controlled

```tsx
const [expanded, setExpanded] = useState(['build'])

<StepLog steps={steps} value={expanded} onChange={setExpanded} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `StepLogItem[]` | **required** | Array of step items |
| `value` | `string[]` | - | Controlled expanded step values |
| `defaultValue` | `string[]` | `[]` | Initially expanded steps (uncontrolled) |
| `onChange` | `(value: string[]) => void` | - | Callback when expanded steps change |
| `className` | `string` | - | CSS class name |
| `classnames` | `StepLogClassNames` | - | Custom class names for sub-elements |

### StepLogItem

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `value` | `string` | **required** | Unique step identifier |
| `title` | `ReactNode` | **required** | Step title |
| `status` | `'success' \| 'error' \| 'running' \| 'pending'` | `'pending'` | Step status |
| `duration` | `string` | - | Duration label (e.g. "33s") |
| `lines` | `StepLogLine[]` | - | Log lines with line numbers |

### StepLogLine

| Property | Type | Description |
|----------|------|-------------|
| `line` | `number` | Line number |
| `text` | `string` | Line content (displayed in monospace) |

### StepLogClassNames

| Key | Description |
|-----|-------------|
| `step` | Step wrapper |
| `header` | Clickable step header |
| `log` | Log content block |

## Related

- [Accordion](/components/accordion) - General-purpose expandable sections
- [Stepper](/components/stepper) - Step-by-step navigation
- [Progress](/components/progress) - Progress indicator
