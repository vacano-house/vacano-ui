import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Stepper } from './Stepper'
import { StepperProps } from './types'

const IMPORT_STEPS = [
  { value: 'upload', label: 'Upload' },
  { value: 'map', label: 'Map Columns' },
  { value: 'review', label: 'Review' },
]

const CHECKOUT_STEPS = [
  { value: 'cart', label: 'Cart' },
  { value: 'shipping', label: 'Shipping' },
  { value: 'payment', label: 'Payment' },
  { value: 'confirm', label: 'Confirmation' },
]

const ONBOARDING_STEPS = [
  { value: 'account', label: 'Create Account' },
  { value: 'profile', label: 'Complete Profile' },
  { value: 'preferences', label: 'Set Preferences' },
  { value: 'verify', label: 'Verify Email' },
  { value: 'done', label: 'Get Started' },
]

const meta: Meta<typeof Stepper> = {
  title: 'components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Stepper>

const InteractiveStepper = (
  props: Omit<StepperProps, 'onChange'> & { onChange?: StepperProps['onChange'] },
) => {
  const [value, setValue] = useState(props.value)
  return <Stepper {...props} value={value} onChange={props.onChange ?? setValue} />
}

export const Playground: Story = {
  args: {
    value: 'upload',
    steps: IMPORT_STEPS,
    orientation: 'horizontal',
  },
  render: (args) => <InteractiveStepper {...args} />,
}

export const Horizontal: Story = {
  render: () => <InteractiveStepper value="map" steps={IMPORT_STEPS} orientation="horizontal" />,
}

export const Vertical: Story = {
  render: () => <InteractiveStepper value="map" steps={IMPORT_STEPS} orientation="vertical" />,
}

export const VerticalFourSteps: Story = {
  name: 'Vertical: Four Steps',
  render: () => (
    <InteractiveStepper value="shipping" steps={CHECKOUT_STEPS} orientation="vertical" />
  ),
}

export const VerticalFiveSteps: Story = {
  name: 'Vertical: Five Steps',
  render: () => (
    <InteractiveStepper value="preferences" steps={ONBOARDING_STEPS} orientation="vertical" />
  ),
}

export const FirstStep: Story = {
  render: () => <InteractiveStepper value="upload" steps={IMPORT_STEPS} />,
}

export const MiddleStep: Story = {
  render: () => <InteractiveStepper value="map" steps={IMPORT_STEPS} />,
}

export const LastStep: Story = {
  render: () => <InteractiveStepper value="review" steps={IMPORT_STEPS} />,
}

export const FourSteps: Story = {
  render: () => <InteractiveStepper value="shipping" steps={CHECKOUT_STEPS} />,
}

export const FiveSteps: Story = {
  render: () => <InteractiveStepper value="preferences" steps={ONBOARDING_STEPS} />,
}

export const TwoSteps: Story = {
  render: () => (
    <InteractiveStepper
      value="select"
      steps={[
        { value: 'select', label: 'Select' },
        { value: 'confirm', label: 'Confirm' },
      ]}
    />
  ),
}

export const ReadOnly: Story = {
  render: () => <Stepper value="map" steps={IMPORT_STEPS} />,
}

export const WithNavigation: Story = {
  name: 'With Navigation Controls',
  render: () => {
    const NavigableStepper = () => {
      const [currentIndex, setCurrentIndex] = useState(0)
      const steps = CHECKOUT_STEPS

      const goNext = () => {
        if (currentIndex < steps.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      }

      const goPrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
      }

      const currentStep = steps[currentIndex]

      return (
        <div style={{ width: 500 }}>
          <Stepper
            value={currentStep?.value ?? ''}
            steps={steps}
            onChange={(val) => {
              const idx = steps.findIndex((s) => s.value === val)
              if (idx !== -1) setCurrentIndex(idx)
            }}
          />
          <div
            style={{
              marginTop: 24,
              padding: 20,
              background: '#f5f5f5',
              borderRadius: 8,
              textAlign: 'center',
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
              Step {currentIndex + 1}: {currentStep?.label}
            </div>
            <div style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
              Content for {currentStep?.label?.toLowerCase()} step
            </div>
            <div style={{ display: 'flex', gap: 8, justifyContent: 'center' }}>
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: '1px solid #ccc',
                  background: 'white',
                  cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                  opacity: currentIndex === 0 ? 0.5 : 1,
                }}
              >
                Previous
              </button>
              <button
                onClick={goNext}
                disabled={currentIndex === steps.length - 1}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: 'none',
                  background: '#212529',
                  color: 'white',
                  cursor: currentIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: currentIndex === steps.length - 1 ? 0.5 : 1,
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )
    }
    return <NavigableStepper />
  },
}

export const VerticalWithNavigation: Story = {
  name: 'Vertical: With Navigation',
  render: () => {
    const NavigableStepper = () => {
      const [currentIndex, setCurrentIndex] = useState(1)
      const steps = CHECKOUT_STEPS

      const goNext = () => {
        if (currentIndex < steps.length - 1) {
          setCurrentIndex(currentIndex + 1)
        }
      }

      const goPrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1)
        }
      }

      const currentStep = steps[currentIndex]

      return (
        <div style={{ display: 'flex', gap: 32 }}>
          <Stepper
            value={currentStep?.value ?? ''}
            steps={steps}
            orientation="vertical"
            onChange={(val) => {
              const idx = steps.findIndex((s) => s.value === val)
              if (idx !== -1) setCurrentIndex(idx)
            }}
          />
          <div
            style={{
              flex: 1,
              padding: 20,
              background: '#f5f5f5',
              borderRadius: 8,
              minWidth: 250,
            }}
          >
            <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>
              {currentStep?.label}
            </div>
            <div style={{ fontSize: 14, color: '#666', marginBottom: 16 }}>
              Content for step {currentIndex + 1}
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={goPrev}
                disabled={currentIndex === 0}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: '1px solid #ccc',
                  background: 'white',
                  cursor: currentIndex === 0 ? 'not-allowed' : 'pointer',
                  opacity: currentIndex === 0 ? 0.5 : 1,
                }}
              >
                Previous
              </button>
              <button
                onClick={goNext}
                disabled={currentIndex === steps.length - 1}
                style={{
                  padding: '8px 16px',
                  borderRadius: 6,
                  border: 'none',
                  background: '#212529',
                  color: 'white',
                  cursor: currentIndex === steps.length - 1 ? 'not-allowed' : 'pointer',
                  opacity: currentIndex === steps.length - 1 ? 0.5 : 1,
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )
    }
    return <NavigableStepper />
  },
}

export const ProgressIndicator: Story = {
  name: 'As Progress Indicator',
  render: () => {
    const ProgressDemo = () => {
      const [step, setStep] = useState(0)
      const steps = [
        { value: '0', label: 'Uploading' },
        { value: '1', label: 'Processing' },
        { value: '2', label: 'Validating' },
        { value: '3', label: 'Complete' },
      ]

      return (
        <div style={{ width: 450 }}>
          <Stepper value={String(step)} steps={steps} />
          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <button
              onClick={() => setStep((s) => Math.min(s + 1, steps.length - 1))}
              disabled={step >= steps.length - 1}
              style={{
                padding: '8px 16px',
                borderRadius: 6,
                border: 'none',
                background: '#212529',
                color: 'white',
                cursor: step >= steps.length - 1 ? 'not-allowed' : 'pointer',
                opacity: step >= steps.length - 1 ? 0.5 : 1,
              }}
            >
              {step < steps.length - 1 ? 'Simulate Progress' : 'Done!'}
            </button>
          </div>
        </div>
      )
    }
    return <ProgressDemo />
  },
}

export const LayoutVerticalInCard: Story = {
  name: 'Layout: Vertical In Card',
  parameters: { layout: 'padded' },
  render: () => (
    <div
      style={{
        border: '1px solid #e5e5e5',
        borderRadius: 12,
        padding: 24,
        width: 300,
        background: 'white',
      }}
    >
      <Stepper value="shipping" steps={CHECKOUT_STEPS} orientation="vertical" />
    </div>
  ),
}

export const LayoutSidebar: Story = {
  name: 'Layout: Sidebar',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', border: '1px dashed #ccc', width: 600 }}>
      <div style={{ padding: 24, borderRight: '1px solid #e5e5e5' }}>
        <Stepper value="profile" steps={ONBOARDING_STEPS} orientation="vertical" />
      </div>
      <div style={{ flex: 1, padding: 24 }}>
        <h2 style={{ margin: '0 0 16px', fontSize: 20 }}>Complete Profile</h2>
        <p style={{ margin: 0, color: '#666' }}>Main content area</p>
      </div>
    </div>
  ),
}
