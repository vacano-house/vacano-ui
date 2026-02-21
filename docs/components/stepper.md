# Stepper

Step indicator component for multi-step flows.

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
| `value` | `string` | **required** | Current step value |
| `steps` | `StepItem[]` | **required** | Array of steps |
| `onChange` | `(value: string) => void` | - | Change handler |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `className` | `string` | - | CSS class name |
| `classnames` | `StepperClassNames` | - | Custom class names |

## Step Item Type

```tsx
type StepItem = {
  value: string
  label: string
}
```

## ClassNames

| Key | Description |
|-----|-------------|
| `step` | Individual step |
| `circle` | Step circle |
| `label` | Step label |
| `line` | Connector line |

## Related

- [Tabs](/components/tabs) - Tab navigation for switching views
