# Form Wrappers

react-hook-form integration for all Vacano UI form components.

*Also known as: form bindings, controlled form fields, rhf wrappers*

## What are Form Wrappers?

Form Wrappers (`Form*` components) connect Vacano UI components with [react-hook-form](https://react-hook-form.com/). Each wrapper:

- Binds the component's value and onChange to a form field via `Controller`
- Automatically shows validation errors (red variant + error message)
- Keeps the same API as the base component, replacing `value`/`onChange` with `name`/`control`

## Installation

Form wrappers require `react-hook-form` as a peer dependency. For schema validation, add a resolver (e.g. `yup`, `zod`):

```bash
pnpm add react-hook-form @hookform/resolvers yup
```

## Import

```tsx
import { FormInput, FormSelect, FormCheckbox } from '@vacano/ui/form'
```

All 17 form wrappers are exported from the `@vacano/ui/form` entry point.

## Quick Example

```tsx
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { FormInput, FormSelect } from '@vacano/ui/form'
import { Button } from '@vacano/ui'

const schema = yup.object({
  name: yup.string().required('Name is required'),
  role: yup.string().required('Role is required'),
})

type FormValues = yup.InferType<typeof schema>

const MyForm = () => {
  const { control, handleSubmit } = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: { name: '', role: '' },
  })

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <FormInput control={control} name="name" label="Name" />
      <FormSelect
        control={control}
        name="role"
        label="Role"
        options={[
          { value: 'admin', label: 'Admin' },
          { value: 'user', label: 'User' },
        ]}
      />
      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## How It Works

Every Form Wrapper is a thin wrapper around `Controller` from react-hook-form:

```
FormInput  =  Controller  +  Input
FormSelect =  Controller  +  Select
FormCheckbox = Controller + Checkbox
...
```

The wrapper reads `formState.errors[name]` and automatically:

1. Sets `variant="error"` when there's a validation error
2. Passes the error message to the `message` prop (for components that support it)

## Props Pattern

Every Form Wrapper accepts the same props as its base component, plus `name` and `control`, minus the controlled value props:

```tsx
// Base component
<Input value={value} onChange={onChange} label="Email" />

// Form wrapper — value/onChange replaced by name/control
<FormInput control={control} name="email" label="Email" />
```

| Prop | Type | Description |
|------|------|-------------|
| `name` | `FieldPath<T>` | Field name in the form schema (type-safe) |
| `control` | `Control<T>` | Form control from `useForm()` |
| *...rest* | | All props from the base component (except `value`/`onChange` or `checked`/`onChange`) |

## All Form Wrappers

### Text Fields

These wrappers automatically display error messages via the `message` prop.

| Wrapper | Base Component | Omitted Props |
|---------|---------------|---------------|
| `FormInput` | [Input](/components/input) | — (extends InputProps) |
| `FormTextarea` | [Textarea](/components/textarea) | — (extends TextareaProps) |
| `FormSelect` | [Select](/components/select) | `value`, `onChange` |
| `FormAutocomplete` | [Autocomplete](/components/autocomplete) | `value`, `onChange` |
| `FormDatePicker` | [DatePicker](/components/date-picker) | `value`, `onChange` |
| `FormMultiSelect` | [MultiSelect](/components/multi-select) | `value`, `onChange` |
| `FormOtpCode` | [OtpCode](/components/otp-code) | `value`, `onChange` |
| `FormTags` | [Tags](/components/tags) | `value`, `onChange` |

### Boolean Controls

These wrappers set `variant="error"` on validation errors (no message text).

| Wrapper | Base Component | Omitted Props |
|---------|---------------|---------------|
| `FormCheckbox` | [Checkbox](/components/checkbox) | `checked`, `onChange` |
| `FormCheckboxCard` | [CheckboxCard](/components/checkbox-card) | `checked`, `onChange` |
| `FormToggle` | [Toggle](/components/toggle) | `checked`, `onChange` |
| `FormToggleCard` | [ToggleCard](/components/toggle-card) | `checked`, `onChange` |

### Group Controls

These wrappers set `variant="error"` on validation errors and manage array or nullable values.

| Wrapper | Base Component | Omitted Props |
|---------|---------------|---------------|
| `FormCheckboxGroup` | [CheckboxGroup](/components/checkbox-group) | `value`, `onChange` |
| `FormToggleGroup` | [ToggleGroup](/components/toggle-group) | `value`, `onChange` |
| `FormRadioGroup` | [RadioGroup](/components/radio-group) | `value`, `onChange` |

### Radio Controls

These wrappers compare `field.value === value` to determine checked state.

| Wrapper | Base Component | Omitted Props |
|---------|---------------|---------------|
| `FormRadio` | [Radio](/components/radio) | `checked`, `onChange` |
| `FormRadioCard` | [RadioCard](/components/radio-card) | `checked`, `onChange` |

## Usage Examples

### Login Form

```tsx
const schema = yup.object({
  email: yup.string().email().required('Email is required'),
  password: yup.string().min(6, 'Min 6 characters').required('Password is required'),
})

type LoginValues = yup.InferType<typeof schema>

const LoginForm = () => {
  const { control, handleSubmit } = useForm<LoginValues>({
    resolver: yupResolver(schema),
    defaultValues: { email: '', password: '' },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput control={control} name="email" label="Email" />
      <FormInput control={control} name="password" label="Password" type="password" />
      <Button type="submit">Sign In</Button>
    </form>
  )
}
```

### Settings Form with Toggles

```tsx
const schema = yup.object({
  notifications: yup.boolean(),
  newsletter: yup.boolean(),
  theme: yup.string().required('Select a theme'),
})

type SettingsValues = yup.InferType<typeof schema>

const SettingsForm = () => {
  const { control, handleSubmit } = useForm<SettingsValues>({
    resolver: yupResolver(schema),
    defaultValues: { notifications: true, newsletter: false, theme: '' },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormToggleCard
        control={control}
        name="notifications"
        label="Notifications"
        description="Receive email notifications"
      />
      <FormToggleCard
        control={control}
        name="newsletter"
        label="Newsletter"
        description="Weekly product updates"
      />
      <FormSelect
        control={control}
        name="theme"
        label="Theme"
        options={[
          { value: 'light', label: 'Light' },
          { value: 'dark', label: 'Dark' },
        ]}
      />
      <Button type="submit">Save</Button>
    </form>
  )
}
```

### Radio Selection

```tsx
const schema = yup.object({
  plan: yup.string().required('Select a plan'),
})

type PlanValues = yup.InferType<typeof schema>

const PlanForm = () => {
  const { control, handleSubmit } = useForm<PlanValues>({
    resolver: yupResolver(schema),
    defaultValues: { plan: '' },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormRadioGroup
        control={control}
        name="plan"
        label="Select Plan"
        options={[
          { value: 'free', label: 'Free' },
          { value: 'pro', label: 'Pro' },
          { value: 'enterprise', label: 'Enterprise' },
        ]}
      />
      <Button type="submit">Continue</Button>
    </form>
  )
}
```

### Multi-Value Fields

```tsx
const schema = yup.object({
  skills: yup.array().of(yup.string()).min(1, 'Select at least one skill'),
  features: yup.array().of(yup.string()).min(1, 'Enable at least one feature'),
})

type ProfileValues = yup.InferType<typeof schema>

const ProfileForm = () => {
  const { control, handleSubmit } = useForm<ProfileValues>({
    resolver: yupResolver(schema),
    defaultValues: { skills: [], features: [] },
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormCheckboxGroup
        control={control}
        name="skills"
        label="Skills"
        options={[
          { value: 'react', label: 'React' },
          { value: 'vue', label: 'Vue' },
          { value: 'angular', label: 'Angular' },
        ]}
      />
      <FormToggleGroup
        control={control}
        name="features"
        label="Features"
        options={[
          { value: 'dark-mode', label: 'Dark Mode' },
          { value: 'notifications', label: 'Notifications' },
          { value: 'analytics', label: 'Analytics' },
        ]}
      />
      <Button type="submit">Save</Button>
    </form>
  )
}
```

## Using with FieldRow

Form wrappers work seamlessly with [FieldRow](/components/field-row) for horizontal layouts:

```tsx
<FieldRow>
  <FormInput control={control} name="firstName" label="First Name" />
  <FormInput control={control} name="lastName" label="Last Name" />
</FieldRow>
```

## Validation Libraries

Form wrappers work with any resolver supported by react-hook-form:

| Library | Resolver |
|---------|----------|
| [Yup](https://github.com/jquense/yup) | `@hookform/resolvers/yup` |
| [Zod](https://github.com/colinhacks/zod) | `@hookform/resolvers/zod` |
| [Joi](https://github.com/hapijs/joi) | `@hookform/resolvers/joi` |
| [Superstruct](https://github.com/ianstormtaylor/superstruct) | `@hookform/resolvers/superstruct` |

## Related

- [FieldRow](/components/field-row) - Horizontal field alignment
- [FieldLabel](/components/field-label) - Standalone form label
- [FieldMessage](/components/field-message) - Validation message
