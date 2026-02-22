# Components

Vacano UI provides 50+ production-ready components organized by category.

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
| [FileUpload](/components/file-upload) | Drag-and-drop file upload with progress tracking |
| [Input](/components/input) | Single-line text input with label and validation |
| [MultiSelect](/components/multi-select) | Multiple selection with modal picker |
| [OtpCode](/components/otp-code) | OTP/PIN verification code input (SMS, 2FA) |
| [Radio](/components/radio) | Radio button input |
| [RadioCard](/components/radio-card) | Card-style radio button with description |
| [RadioGroup](/components/radio-group) | Group of radio buttons |
| [Select](/components/select) | Single selection dropdown |
| [Tags](/components/tags) | Tag input with autocomplete and free-form support |
| [Textarea](/components/textarea) | Multiline text input with label and validation |
| [Toggle](/components/toggle) | Toggle switch for binary on/off settings |
| [ToggleCard](/components/toggle-card) | Card-style toggle with description |
| [ToggleGroup](/components/toggle-group) | Group of toggles with shared state |

## Data Display

Components for displaying information.

| Component | Description |
|-----------|-------------|
| [Avatar](/components/avatar) | User avatar with image, initials fallback, icon, and status indicator |
| [AvatarGroup](/components/avatar-group) | Group of overlapping avatars with max count |
| [Badge](/components/badge) | Status indicator dot or counter on any element |
| [Card](/components/card) | Container with header, body, footer, shadow, and border |
| [Chip](/components/chip) | Small label/tag with optional icon and delete action |
| [DateRange](/components/date-range) | Display a date range (from–to) with optional "Present" label |
| [Hashtag](/components/hashtag) | Hashtag display with optional link |
| [Heading](/components/heading) | Semantic heading (h1–h6) with visual level override |
| [Overline](/components/overline) | Small uppercase label with optional description |
| [Progress](/components/progress) | Progress bar indicator (0–100%) |
| [Skeleton](/components/skeleton) | Loading placeholder with pulse or wave animation |
| [Stat](/components/stat) | Statistic display with value and label |
| [StepLog](/components/step-log) | CI/CD-style step log with status, duration, and expandable output |
| [Tabs](/components/tabs) | Tab navigation for switching views |
| [Timeline](/components/timeline) | Vertical timeline for chronological events |
| [User](/components/user) | User display with avatar, name, and description |

## Feedback

Components for user notifications, confirmations, and loading states.

| Component | Description |
|-----------|-------------|
| [Alert](/components/alert) | Inline alert block with icon, title, description, and variant colors |
| [Confirmation](/components/confirmation) | Yes/no confirmation dialog for destructive actions |
| [Drawer](/components/drawer) | Slide-out side panel (left, right, top, bottom) |
| [EmptyState](/components/empty-state) | Empty view with icon, title, description, and actions |
| [Modal](/components/modal) | Overlay dialog for forms and content |
| [Notification](/components/notification) | Top-of-screen notification bar (one at a time, queued) |
| [NotifyConfirmation](/components/notify-confirmation) | Slide-in confirmation with confirm/discard actions |
| [SaveProgress](/components/save-progress) | Background save/upload indicator (bottom-right) |
| [Spinner](/components/spinner) | Loading/activity indicator |
| [Toastr](/components/toastr) | Toast notifications (multiple, bottom-left) |
| [Tooltip](/components/tooltip) | Hover tooltip with placement and variants |

## Layout

Components for page structure.

| Component | Description |
|-----------|-------------|
| [Container](/components/container) | Responsive centered container with max-width |
| [Divider](/components/divider) | Visual separator with optional label |
| [Panel](/components/panel) | Titled content section with description |
| [ShellScreen](/components/shell-screen) | Full-screen layout with grid background for auth, error, and status pages |

## Navigation

Components for navigation and flow.

| Component | Description |
|-----------|-------------|
| [Accordion](/components/accordion) | Expandable content sections with outlined or splitted variants |
| [Breadcrumbs](/components/breadcrumbs) | Navigation breadcrumb trail with collapsing support |
| [Dropdown](/components/dropdown) | Popup menu triggered by any element |
| [MenuButton](/components/menu-button) | Animated hamburger menu button (toggles to X) |
| [Pagination](/components/pagination) | Page navigation with variants and controls |
| [Stepper](/components/stepper) | Step indicator for multi-step wizards |

## Form Wrappers (react-hook-form)

17 `Form*` components for [react-hook-form](https://react-hook-form.com/) integration. Each wrapper binds a Vacano UI component to a form field, automatically handling value binding, validation errors, and error display.

| Wrapper | Base Component |
|---------|---------------|
| [FormInput](/components/form-wrappers) | Input |
| [FormTextarea](/components/form-wrappers) | Textarea |
| [FormSelect](/components/form-wrappers) | Select |
| [FormAutocomplete](/components/form-wrappers) | Autocomplete |
| [FormDatePicker](/components/form-wrappers) | DatePicker |
| [FormMultiSelect](/components/form-wrappers) | MultiSelect |
| [FormOtpCode](/components/form-wrappers) | OtpCode |
| [FormTags](/components/form-wrappers) | Tags |
| [FormCheckbox](/components/form-wrappers) | Checkbox |
| [FormCheckboxCard](/components/form-wrappers) | CheckboxCard |
| [FormCheckboxGroup](/components/form-wrappers) | CheckboxGroup |
| [FormRadio](/components/form-wrappers) | Radio |
| [FormRadioCard](/components/form-wrappers) | RadioCard |
| [FormRadioGroup](/components/form-wrappers) | RadioGroup |
| [FormToggle](/components/form-wrappers) | Toggle |
| [FormToggleCard](/components/form-wrappers) | ToggleCard |
| [FormToggleGroup](/components/form-wrappers) | ToggleGroup |

[Full documentation and examples](/components/form-wrappers)

## Utility

Helper components for forms, keyboard shortcuts, and styling.

| Component | Description |
|-----------|-------------|
| [FieldLabel](/components/field-label) | Form field label with required indicator |
| [FieldMessage](/components/field-message) | Validation message, hint, or error below form fields |
| [FieldRow](/components/field-row) | Grid container for horizontal field alignment (CSS Subgrid) |
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
| OTP / verification code | [OtpCode](/components/otp-code) |
| File selection | [FileUpload](/components/file-upload) |

### Selection

| Need | Component |
|------|-----------|
| One option from a list | [Select](/components/select) |
| Multiple options from a list | [MultiSelect](/components/multi-select) |
| Tags / keywords with autocomplete | [Tags](/components/tags) |
| Simple yes/no toggle | [Checkbox](/components/checkbox) or [Toggle](/components/toggle) |
| One from few options (visible) | [RadioGroup](/components/radio-group) |
| Multiple from few options (visible) | [CheckboxGroup](/components/checkbox-group) |
| Rich option cards (single) | [RadioCard](/components/radio-card) |
| Rich option cards (multiple) | [CheckboxCard](/components/checkbox-card) or [ToggleCard](/components/toggle-card) |
| Date / month / year | [DatePicker](/components/date-picker) |

### Data Display

| Need | Component |
|------|-----------|
| User identity | [Avatar](/components/avatar) or [User](/components/user) |
| Multiple users | [AvatarGroup](/components/avatar-group) |
| Status label / tag | [Chip](/components/chip) or [Badge](/components/badge) |
| Key statistic | [Stat](/components/stat) |
| Section label | [Overline](/components/overline) or [Heading](/components/heading) |
| Loading placeholder | [Skeleton](/components/skeleton) |
| Completion percentage | [Progress](/components/progress) |
| CI/CD pipeline | [StepLog](/components/step-log) |
| Chronological events | [Timeline](/components/timeline) |

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
| Inline alert / message | [Alert](/components/alert) — inside containers, cards, panels |
| Brief feedback (success, error) | [Toastr](/components/toastr) — multiple toasts, bottom-left |
| Prominent single notification | [Notification](/components/notification) — top bar, queued |
| Background save indicator | [SaveProgress](/components/save-progress) — bottom-right, non-blocking |
| Loading spinner | [Spinner](/components/spinner) |
| Completion percentage | [Progress](/components/progress) |
| Button loading state | [Button](/components/button) — `loading` prop |
| Empty content placeholder | [EmptyState](/components/empty-state) |

### Navigation

| Need | Component |
|------|-----------|
| Page breadcrumbs | [Breadcrumbs](/components/breadcrumbs) |
| Tab switching | [Tabs](/components/tabs) |
| Multi-step wizard | [Stepper](/components/stepper) |
| Page pagination | [Pagination](/components/pagination) |
| Collapsible sections | [Accordion](/components/accordion) |
| Hamburger menu toggle | [MenuButton](/components/menu-button) |
