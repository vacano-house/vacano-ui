# Stepper

Step indicator component for multi-step flows. Shows numbered circles connected by lines, with visual distinction between completed, active, and pending steps.

*Also known as: step indicator, wizard, progress steps, multi-step, breadcrumb steps*

<a href="/storybook/?path=/story/components-stepper--playground" target="_blank">View in Storybook</a>

## When to use

- Multi-step flows and wizards. Shows progress through a sequence of steps.
- For switching between views, use Tabs.

## Import

```tsx
import { Stepper } from '@vacano/ui'
```

## Usage

```tsx
const [step, setStep] = useState('step1')

const steps = [
  { value: 'step1', label: 'Account' },
  { value: 'step2', label: 'Profile' },
  { value: 'step3', label: 'Review' },
]

<Stepper
  value={step}
  steps={steps}
  onChange={setStep}
/>
```

## Orientations

```tsx
// Horizontal (default)
<Stepper
  orientation="horizontal"
  value={step}
  steps={steps}
  onChange={setStep}
/>

// Vertical
<Stepper
  orientation="vertical"
  value={step}
  steps={steps}
  onChange={setStep}
/>
```

## Read-Only

Without `onChange`, the stepper is display-only:

```tsx
<Stepper value="step2" steps={steps} />
```

## Full Wizard Example

```tsx
function Wizard() {
  const [step, setStep] = useState('step1')

  const steps = [
    { value: 'step1', label: 'Details' },
    { value: 'step2', label: 'Payment' },
    { value: 'step3', label: 'Confirm' },
  ]

  const currentIndex = steps.findIndex(s => s.value === step)

  const goNext = () => {
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1].value)
    }
  }

  const goPrev = () => {
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1].value)
    }
  }

  return (
    <div>
      <Stepper value={step} steps={steps} onChange={setStep} />

      <div style={{ marginTop: 24 }}>
        {step === 'step1' && <p>Enter your details...</p>}
        {step === 'step2' && <p>Payment information...</p>}
        {step === 'step3' && <p>Review and confirm...</p>}
      </div>

      <div style={{ marginTop: 16, display: 'flex', gap: 8 }}>
        <Button onClick={goPrev} disabled={currentIndex === 0}>
          Previous
        </Button>
        <Button onClick={goNext} disabled={currentIndex === steps.length - 1}>
          Next
        </Button>
      </div>
    </div>
  )
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `string` | **required** | Current active step value |
| `steps` | `StepItem[]` | **required** | Array of step definitions |
| `onChange` | `(value: string) => void` | - | Callback fired when a step is clicked. When omitted, stepper is display-only. |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction of the stepper |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `StepperClassNames` | - | Custom class names for sub-elements |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root element |
| `data-test-id` | `string` | - | Test identifier attribute |

### StepItem

| Property | Type | Description |
|----------|------|-------------|
| `value` | `string` | Unique identifier for the step |
| `label` | `string` | Display label shown below/beside the step circle |

### StepperClassNames

| Key | Description |
|-----|-------------|
| `step` | Individual step button (circle + label wrapper) |
| `circle` | Numbered circle indicator |
| `label` | Step label text |
| `line` | Connector line between steps |

## Related

- [Tabs](/components/tabs) - Tab navigation for switching views
