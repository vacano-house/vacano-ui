# Card

Flexible container component with sub-components for header, body, and footer. Supports shadow levels, radius, hover/press effects, blur, and more.

*Also known as: container, content box, surface, tile*

<a href="/storybook/?path=/story/components-card--playground" target="_blank">View in Storybook</a>

## When to use

- Grouping related content with visual separation.
- Building profile cards, product cards, or content previews.
- Creating interactive card grids with press/hover effects.
- Overlaying content on images with blurred footers.

## Import

```tsx
import { Card, CardHeader, CardBody, CardFooter } from '@vacano/ui'
```

## Usage

```tsx
<Card>
  <CardBody>
    <p>Card content goes here.</p>
  </CardBody>
</Card>
```

## Full composition

```tsx
<Card shadow="md">
  <CardHeader>
    <User name="Zoey Lang" description="@zoeylang" src="..." />
  </CardHeader>
  <CardBody>
    <p>Frontend developer and UI/UX enthusiast.</p>
  </CardBody>
  <CardFooter>
    <Stat value="4" label="Following" />
    <Stat value="97.1K" label="Followers" />
  </CardFooter>
</Card>
```

## With Divider

```tsx
<Card shadow="md">
  <CardHeader>
    <User name="Vacano UI" description="vacano-ui.dev" />
  </CardHeader>
  <Divider />
  <CardBody>
    <p>Make beautiful websites regardless of your design experience.</p>
  </CardBody>
  <Divider />
  <CardFooter>
    <a href="#">Visit source code on GitHub.</a>
  </CardFooter>
</Card>
```

## Shadow levels

```tsx
<Card shadow="none">...</Card>
<Card shadow="sm">...</Card>
<Card shadow="md">...</Card>
<Card shadow="lg">...</Card>
```

You can also pass a boolean: `shadow={true}` resolves to `'md'`, `shadow={false}` resolves to `'none'`.

## Radius levels

```tsx
<Card radius="none">...</Card>
<Card radius="sm">...</Card>
<Card radius="md">...</Card>
<Card radius="lg">...</Card>
```

## Border

```tsx
<Card border shadow="none">Bordered card</Card>
<Card border shadow="sm">Border + shadow</Card>
```

## Hoverable

Elevates shadow on hover.

```tsx
<Card hoverable shadow="sm">
  <CardBody>Hover me</CardBody>
</Card>
```

## Pressable

Adds click interaction with scale-down on press and hover shadow.

```tsx
<Card pressable shadow="sm" onClick={() => {}}>
  <CardBody>Click me</CardBody>
</Card>
```

## Blurred footer

Absolute-positioned footer with backdrop blur over an image. Can be enabled via `footerBlurred` on Card or `blurred` on CardFooter.

```tsx
<Card shadow="md" footerBlurred>
  <img src="..." style={{ width: '100%', height: 320, objectFit: 'cover' }} />
  <CardFooter
    blurred
    style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
  >
    <span>Available soon.</span>
    <Button size="compact">Notify me</Button>
  </CardFooter>
</Card>
```

## Blurred card

Semi-transparent card with backdrop blur.

```tsx
<Card blurred shadow="md">
  <CardBody>Content with blurred background</CardBody>
</Card>
```

## Disabled

```tsx
<Card disabled shadow="md">
  <CardBody>This card is disabled.</CardBody>
</Card>
```

## Full width

```tsx
<Card fullWidth shadow="sm" border>
  <CardBody>Stretches to fill container.</CardBody>
</Card>
```

## Card Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Card content |
| `shadow` | `'none' \| 'sm' \| 'md' \| 'lg' \| boolean` | `'md'` | Shadow depth. `true` resolves to `'md'`, `false` to `'none'` |
| `radius` | `'none' \| 'sm' \| 'md' \| 'lg'` | `'lg'` | Border radius |
| `border` | `boolean` | `false` | Show border |
| `hoverable` | `boolean` | `false` | Elevate shadow on hover |
| `pressable` | `boolean` | `false` | Enable click interaction with scale-down effect |
| `disabled` | `boolean` | `false` | Disable interactions, reduce opacity |
| `fullWidth` | `boolean` | `false` | Stretch to container width |
| `blurred` | `boolean` | `false` | Semi-transparent with backdrop blur |
| `footerBlurred` | `boolean` | `false` | Enable blur on the card footer |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name for the root element |
| `classnames` | `CardClassNames` | - | Custom class names for sub-elements |

## CardHeader Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Header content |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name |

## CardBody Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Body content |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name |

## CardFooter Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | - | Footer content |
| `blurred` | `boolean` | `false` | Backdrop blur with semi-transparent background |
| `ref` | `Ref<HTMLDivElement>` | - | Forwarded ref |
| `className` | `string` | - | CSS class name |

### ClassNames

| Key | Description |
|-----|-------------|
| `header` | CardHeader element |
| `body` | CardBody element |
| `footer` | CardFooter element |

## Related

- [Panel](/components/panel) - Titled content section
- [User](/components/user) - User identity block for CardHeader
- [Stat](/components/stat) - Stat display for CardFooter
- [Divider](/components/divider) - Section separator between card parts
