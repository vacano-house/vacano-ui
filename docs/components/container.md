# Container

Responsive container component with max-width constraints.

<a href="/storybook/?path=/docs/atoms-container--docs" target="_blank">View in Storybook</a>

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

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Container content |
| `className` | `string` | - | CSS class name |

All standard HTML div attributes are also supported.
