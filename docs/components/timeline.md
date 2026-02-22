# Timeline

Vertical timeline component for displaying a sequence of events in chronological order. Each item shows a dot connected by a vertical line, with a title, optional description, and optional rich content body.

*Also known as: activity feed, event log, history, changelog, chronology*

<a href="/storybook/?path=/story/components-timeline--playground" target="_blank">View in Storybook</a>

## When to use

- Displaying chronological events such as work experience, education history, or project milestones.
- Activity logs and audit trails showing a sequence of actions over time.
- Order or process tracking where each step is a distinct event.
- Changelogs and release histories.
- For step-by-step wizards with interactive navigation, use [Stepper](/components/stepper) instead.

## Import

```tsx
import { Timeline } from '@vacano/ui'
```

## Usage

```tsx
<Timeline
  items={[
    { title: 'Order placed' },
    { title: 'Payment confirmed' },
    { title: 'Shipped' },
    { title: 'Delivered' },
  ]}
/>
```

## Title with Description

Each item can include an optional `description` rendered below the title in a smaller, muted style.

```tsx
<Timeline
  items={[
    { title: 'Step 1: Register', description: 'Create your account' },
    { title: 'Step 2: Verify', description: 'Confirm your email address' },
    { title: 'Step 3: Setup', description: 'Configure your workspace' },
    { title: 'Step 4: Start', description: 'Invite your team and begin' },
  ]}
/>
```

## Rich Content

Use the `children` field on each item to render arbitrary React content below the description. It accepts both strings and JSX.

```tsx
<Timeline
  items={[
    {
      title: 'Lead Frontend Developer',
      description: 'Acme Corp',
      children: (
        <ul style={{ margin: 0, paddingLeft: 20 }}>
          <li>Led a team of 12 developers</li>
          <li>Migrated core product to micro-frontend architecture</li>
          <li>Improved Core Web Vitals by 40%</li>
        </ul>
      ),
    },
    {
      title: 'Senior Frontend Engineer',
      description: 'Global Soft',
      children:
        'Developed internal BI tool. Implemented design system and CI/CD pipelines.',
    },
    {
      title: 'Frontend Developer',
      description: 'Startup Media',
      children: 'Built SPA with React. Integrated REST and GraphQL APIs.',
    },
  ]}
/>
```

## Activity Log Example

```tsx
<Timeline
  items={[
    {
      title: 'Deployment completed',
      description: 'v2.4.1 — 2 hours ago',
      children: 'Production deployment to 3 regions. All health checks passed.',
    },
    {
      title: 'Pull request merged',
      description: '#482 — 5 hours ago',
      children: 'feat: add user notification preferences',
    },
    {
      title: 'Issue resolved',
      description: '#179 — yesterday',
      children: 'Fixed memory leak in WebSocket connection handler.',
    },
    {
      title: 'Release published',
      description: 'v2.4.0 — 3 days ago',
    },
  ]}
/>
```

## Single Item

The timeline works with a single item. The connecting line is automatically hidden for the last (or only) item.

```tsx
<Timeline
  items={[
    {
      title: 'Project started',
      description: 'January 2025',
      children: 'Initial commit and project setup.',
    },
  ]}
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `TimelineItem[]` | **required** | Array of timeline event definitions. See TimelineItem below. |
| `className` | `string` | - | CSS class name applied to the root container element |
| `classnames` | `TimelineClassNames` | - | Custom class names for internal sub-elements. See ClassNames below. |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root `<div>` element |
| `data-test-id` | `string` | - | Test identifier attribute |

All additional `HTMLDivElement` attributes (e.g. `style`, `id`, `onClick`) are forwarded to the root element.

### TimelineItem

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `title` | `string` | Yes | Primary text displayed for the event. Rendered in bold (600 weight) at 15px. |
| `description` | `ReactNode` | No | Secondary text rendered below the title in a muted color at 13px. Accepts strings or JSX. |
| `children` | `ReactNode` | No | Additional content rendered below the description at 14px. Accepts strings or JSX for rich content such as lists, links, or nested components. |

### ClassNames

Custom class names can be applied to internal sub-elements via the `classnames` prop.

| Key | Description |
|-----|-------------|
| `item` | Each timeline row (contains the track and content for a single event) |
| `dot` | The circular dot indicator on the left side of each event |
| `line` | The vertical connector line between consecutive dots |
| `content` | The content area to the right of the track (wraps title, description, and body) |
| `title` | The primary title text element |
| `description` | The secondary description text element |
| `body` | The container for `children` content below the description |

### CSS Class Names

The component generates the following CSS class names using the `vacano_timeline_` prefix:

| Class | Element |
|-------|---------|
| `vacano_timeline_container` | Root container element |
| `vacano_timeline_item` | Each timeline row |
| `vacano_timeline_dot` | Circular dot indicator |
| `vacano_timeline_line` | Vertical connector line |
| `vacano_timeline_content` | Content area for each event |
| `vacano_timeline_title` | Title text |
| `vacano_timeline_description` | Description text |
| `vacano_timeline_body` | Body content wrapper |

## Visual Details

- The dot is a 10px circle with a black fill, positioned with a 5px top margin to align with the title text.
- The connector line is 2px wide in gray, hidden for the last item.
- Content has 24px bottom padding between items, except for the last item which has no bottom padding.
- The layout uses CSS Grid with a 20px track column and 12px gap.

## Related

- [Stepper](/components/stepper) - Interactive step indicator for multi-step flows
- [StepLog](/components/step-log) - Step-based log display
- [Progress](/components/progress) - Progress bar for completion tracking
