# Container

Responsive container component that constrains content width at each breakpoint.

*Also known as: wrapper, page container, content wrapper, max-width container*

<a href="/storybook/?path=/story/components-container--playground" target="_blank">View in Storybook</a>

## When to use

- Centering page content with responsive max-width. Use as the main layout wrapper.

## Import

```tsx
import { Container } from '@vacano/ui'
```

## Usage

```tsx
<Container>
  <h1>Page Title</h1>
  <p>Content is centered and has max-width.</p>
</Container>
```

## Page Layout Example

```tsx
function PageLayout() {
  return (
    <div>
      <header>
        <Container>
          <nav>Navigation</nav>
        </Container>
      </header>
      <main>
        <Container>
          <h1>Main Content</h1>
          <p>Your page content here.</p>
        </Container>
      </main>
      <footer>
        <Container>
          <p>Footer content</p>
        </Container>
      </footer>
    </div>
  )
}
```

## Responsive Breakpoints

The container applies `max-width` at each breakpoint:

| Breakpoint | Min Width | Container Max Width |
|------------|-----------|---------------------|
| `sm` | `640px` | `640px` |
| `md` | `768px` | `768px` |
| `lg` | `1024px` | `1024px` |
| `xl` | `1280px` | `1280px` |
| `2xl` | `1536px` | `1536px` |

Below `640px`, the container is `width: 100%` with no max-width constraint.

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Container content |
| `className` | `string` | - | CSS class name for the root element |
| `ref` | `Ref<HTMLDivElement>` | - | Ref forwarded to the root `div` element |
| `data-test-id` | `string` | - | Test identifier attribute |

All standard HTML `div` attributes are also supported.

## CSS Class

The root element receives `vacano_container_container`.

## Related

- [Panel](/components/panel) - Titled content section
