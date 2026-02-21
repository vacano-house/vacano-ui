# Components

Vacano UI provides 38+ production-ready components organized by category.

::: tip Interactive Playground
Explore all components interactively in our [Storybook](/storybook/).
:::

## Icons

1800+ [Lucide icons](/components/icons) as React components with tree-shaking support.

```tsx
import { Search, User, Plus, Check, X } from '@vacano/ui/icons'
```

[Browse all icons](/components/icons)

## Form

Components for user input and form controls.

| Component | Description |
|-----------|-------------|
| [Autocomplete](/components/autocomplete) | Async search input with suggestions (typeahead, combobox) |
| [Button](/components/button) | Clickable button with variants, icons, keyboard bindings, and loading state |
| [Checkbox](/components/checkbox) | Checkbox input with label and indeterminate state |
| [CheckboxCard](/components/checkbox-card) | Card-style checkbox with description |
| [CheckboxGroup](/components/checkbox-group) | Group of checkboxes with shared state |
| [DatePicker](/components/date-picker) | Date, month, or year selection with calendar dropdown |
| [EditableText](/components/editable-text) | Inline editable text with click-to-edit |
| [Input](/components/input) | Single-line text input with label and validation |
| [MultiSelect](/components/multi-select) | Multiple selection with modal picker |
| [OtpCode](/components/otp-code) | OTP/PIN verification code input (SMS, 2FA) |
| [Radio](/components/radio) | Radio button input |
| [RadioCard](/components/radio-card) | Card-style radio button with description |
| [RadioGroup](/components/radio-group) | Group of radio buttons |
| [Select](/components/select) | Single selection dropdown |
| [Tags](/components/tags) | Tag input with autocomplete and free-form support |
| [Textarea](/components/textarea) | Multiline text input with label and validation |

## Data Display

Components for displaying information.

| Component | Description |
|-----------|-------------|
| [Card](/components/card) | Container with optional border and shadow |
| [Chip](/components/chip) | Small label/tag with optional delete action |
| [Progress](/components/progress) | Progress bar indicator (0-100%) |
| [StatusCard](/components/status-card) | Metric/KPI card with trend indicator |
| [Tabs](/components/tabs) | Tab navigation for switching views |

## Feedback

Components for user notifications, confirmations, and loading states.

| Component | Description |
|-----------|-------------|
| [Confirmation](/components/confirmation) | Yes/no confirmation dialog for destructive actions |
| [Modal](/components/modal) | Overlay dialog for forms and content |
| [Drawer](/components/drawer) | Slide-out side panel (left, right, top, bottom) |
| [Notification](/components/notification) | Top-of-screen notification bar (one at a time, queued) |
| [SaveProgress](/components/save-progress) | Background save/upload indicator (bottom-right) |
| [Spinner](/components/spinner) | Loading/activity indicator |
| [Toastr](/components/toastr) | Toast notifications (multiple, bottom-left) |
| [Tooltip](/components/tooltip) | Hover tooltip with placement and variants |

## Layout

Components for page structure.

| Component | Description |
|-----------|-------------|
| [Container](/components/container) | Responsive centered container with max-width |
| [Panel](/components/panel) | Titled content section with description |

## Navigation

Components for navigation and flow.

| Component | Description |
|-----------|-------------|
| [Dropdown](/components/dropdown) | Popup menu triggered by any element |
| [Stepper](/components/stepper) | Step indicator for multi-step wizards |

## Utility

Helper components for forms, keyboard shortcuts, and styling.

| Component | Description |
|-----------|-------------|
| [FieldLabel](/components/field-label) | Form field label with required indicator |
| [FieldMessage](/components/field-message) | Validation message, hint, or error below form fields |
| [GlobalStyle](/components/global-style) | Global CSS reset and base styles (required) |
| [ImageCropper](/components/image-cropper) | Image upload and cropping (avatars, profile pictures) |
| [KeysBindings](/components/keys-bindings) | Keyboard shortcut display (e.g. Cmd+S) |
| [KeySymbol](/components/key-symbol) | Single key symbol display |

---

## Choosing the Right Component

### Text Input

| Need | Component |
|------|-----------|
| Single-line text | [Input](/components/input) |
| Multiline text | [Textarea](/components/textarea) |
| Search with API suggestions | [Autocomplete](/components/autocomplete) |
| Inline click-to-edit | [EditableText](/components/editable-text) |
| OTP / verification code | [OtpCode](/components/otp-code) |

### Selection

| Need | Component |
|------|-----------|
| One option from a list | [Select](/components/select) |
| Multiple options from a list | [MultiSelect](/components/multi-select) |
| Tags / keywords with autocomplete | [Tags](/components/tags) |
| Simple yes/no toggle | [Checkbox](/components/checkbox) |
| One from few options (visible) | [RadioGroup](/components/radio-group) |
| Multiple from few options (visible) | [CheckboxGroup](/components/checkbox-group) |
| Rich option cards (single) | [RadioCard](/components/radio-card) |
| Rich option cards (multiple) | [CheckboxCard](/components/checkbox-card) |
| Date / month / year | [DatePicker](/components/date-picker) |

### Overlays

| Need | Component |
|------|-----------|
| Form or content overlay | [Modal](/components/modal) |
| Side panel for details | [Drawer](/components/drawer) |
| Simple yes/no confirmation | [Confirmation](/components/confirmation) |
| Custom popup menu | [Dropdown](/components/dropdown) |
| Hover information | [Tooltip](/components/tooltip) |

### Notifications & Loading

| Need | Component |
|------|-----------|
| Brief feedback (success, error) | [Toastr](/components/toastr) — multiple toasts, bottom-left |
| Prominent single notification | [Notification](/components/notification) — top bar, queued |
| Background save indicator | [SaveProgress](/components/save-progress) — bottom-right, non-blocking |
| Loading spinner | [Spinner](/components/spinner) |
| Completion percentage | [Progress](/components/progress) |
| Button loading state | [Button](/components/button) — `loading` prop |
