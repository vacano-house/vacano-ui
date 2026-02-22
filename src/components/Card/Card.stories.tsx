import type { Meta, StoryObj } from '@storybook/react-vite'

import { Card as CardComponent } from './Card'
import { CardBody } from './CardBody'
import { CardFooter } from './CardFooter'
import { CardHeader } from './CardHeader'
import { Button } from '../Button'
import { Divider } from '../Divider'
import { Hashtag } from '../Hashtag'
import { Heading } from '../Heading'
import { Overline } from '../Overline'
import { Stat } from '../Stat'
import { User } from '../User'

const meta: Meta<typeof CardComponent> = {
  title: 'components/Card',
  component: CardComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    shadow: 'md',
    radius: 'lg',
    border: false,
    hoverable: false,
    pressable: false,
    disabled: false,
    fullWidth: false,
    blurred: false,
  },
  argTypes: {
    shadow: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    radius: { control: 'select', options: ['none', 'sm', 'md', 'lg'] },
    border: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    pressable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    blurred: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof CardComponent>

export const Playground: Story = {
  render: (args) => (
    <CardComponent {...args} style={{ maxWidth: 340 }}>
      <CardBody>
        <p style={{ margin: 0, fontSize: 14 }}>
          Make beautiful websites regardless of your design experience.
        </p>
      </CardBody>
    </CardComponent>
  ),
}

export const WithDivider: Story = {
  render: () => (
    <CardComponent shadow="md" style={{ maxWidth: 340 }}>
      <CardHeader>
        <User name="Vacano UI" description="vacano-ui.dev" />
      </CardHeader>
      <Divider />
      <CardBody>
        <p style={{ margin: 0, fontSize: 14 }}>
          Make beautiful websites regardless of your design experience.
        </p>
      </CardBody>
      <Divider />
      <CardFooter>
        <a href="#" style={{ fontSize: 13, color: '#0582ca', textDecoration: 'none' }}>
          Visit source code on GitHub.
        </a>
      </CardFooter>
    </CardComponent>
  ),
}

export const WithImage: Story = {
  render: () => (
    <CardComponent shadow="sm" style={{ maxWidth: 300 }}>
      <CardHeader>
        <div>
          <Overline description="12 Tracks">Daily Mix</Overline>
          <Heading level={3} style={{ marginTop: 4 }}>
            Frontend Radio
          </Heading>
        </div>
      </CardHeader>
      <CardBody>
        <img
          src="https://heroui.com/images/hero-card-complete.jpeg"
          alt="Album cover"
          style={{ width: '100%', borderRadius: 12, objectFit: 'cover' }}
        />
      </CardBody>
    </CardComponent>
  ),
}

export const BlurredFooter: Story = {
  render: () => (
    <CardComponent shadow="md" style={{ width: 260 }}>
      <img
        src="https://heroui.com/images/hero-card.jpeg"
        alt="Product"
        style={{ width: '100%', height: 320, objectFit: 'cover' }}
      />
      <CardFooter
        blurred
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          justifyContent: 'space-between',
        }}
      >
        <span style={{ fontSize: 13, fontWeight: 500 }}>Available soon.</span>
        <Button size="compact" variant="normal">
          Notify me
        </Button>
      </CardFooter>
    </CardComponent>
  ),
}

export const Shadows: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {(['none', 'sm', 'md', 'lg'] as const).map((s) => (
        <CardComponent key={s} shadow={s} border={s === 'none'} style={{ width: 180 }}>
          <CardBody>
            <p style={{ margin: 0, fontSize: 12, color: '#666' }}>shadow</p>
            <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 600 }}>{s}</p>
          </CardBody>
        </CardComponent>
      ))}
    </div>
  ),
}

export const Radii: Story = {
  name: 'Radius',
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start' }}>
      {(['none', 'sm', 'md', 'lg'] as const).map((r) => (
        <CardComponent key={r} radius={r} border shadow="none" style={{ width: 180 }}>
          <CardBody>
            <p style={{ margin: 0, fontSize: 12, color: '#666' }}>radius</p>
            <p style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 600 }}>{r}</p>
          </CardBody>
        </CardComponent>
      ))}
    </div>
  ),
}

export const Hoverable: Story = {
  render: () => (
    <CardComponent hoverable shadow="sm" style={{ maxWidth: 300 }}>
      <CardBody>
        <h4 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 600 }}>Hover me</h4>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          This card elevates its shadow on hover.
        </p>
      </CardBody>
    </CardComponent>
  ),
}

export const Pressable: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, maxWidth: 700 }}>
      {['Orange', 'Tangerine', 'Raspberry', 'Lemon'].map((fruit) => (
        <CardComponent key={fruit} pressable shadow="sm" onClick={() => {}}>
          <CardBody style={{ alignItems: 'center', padding: '24px 16px' }}>
            <span style={{ fontSize: 28 }}>{fruit[0]}</span>
          </CardBody>
          <CardFooter style={{ justifyContent: 'space-between' }}>
            <span style={{ fontSize: 13, fontWeight: 500 }}>{fruit}</span>
            <span style={{ fontSize: 13, color: '#666' }}>$5.50</span>
          </CardFooter>
        </CardComponent>
      ))}
    </div>
  ),
}

export const Composition: Story = {
  render: () => (
    <CardComponent shadow="md" style={{ maxWidth: 340 }}>
      <CardHeader style={{ justifyContent: 'space-between' }}>
        <User
          name="Zoey Lang"
          description="@zoeylang"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <Button size="compact" variant="normal">
          Follow
        </Button>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, fontSize: 14 }}>
          Frontend developer and UI/UX enthusiast. Join me on this coding adventure!
        </p>
        <Hashtag onClick={() => {}} style={{ marginTop: 8 }}>
          FrontendWithZoey
        </Hashtag>
      </CardBody>
      <CardFooter style={{ gap: 16 }}>
        <Stat value="4" label="Following" />
        <Stat value="97.1K" label="Followers" />
      </CardFooter>
    </CardComponent>
  ),
}

export const CoverImage: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, maxWidth: 700 }}>
      {[
        {
          img: 'https://heroui.com/images/card-example-6.jpeg',
          label: 'What to watch',
          title: 'Stream the Acme event',
        },
        {
          img: 'https://heroui.com/images/card-example-2.jpeg',
          label: 'Plant a tree',
          title: 'Contribute to the planet',
        },
        {
          img: 'https://heroui.com/images/card-example-3.jpeg',
          label: 'Supercharged',
          title: 'Creates beauty like a beast',
        },
      ].map((item) => (
        <CardComponent key={item.title} shadow="md" style={{ position: 'relative' }}>
          <img
            src={item.img}
            alt={item.title}
            style={{ width: '100%', height: 240, objectFit: 'cover' }}
          />
          <CardHeader
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 10,
                fontWeight: 700,
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.7)',
              }}
            >
              {item.label}
            </p>
            <h4 style={{ margin: '4px 0 0', fontSize: 16, fontWeight: 700, color: '#fff' }}>
              {item.title}
            </h4>
          </CardHeader>
        </CardComponent>
      ))}
    </div>
  ),
}

export const Bordered: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', gap: 24 }}>
      <CardComponent border shadow="none" style={{ maxWidth: 300 }}>
        <CardHeader>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Bordered Card</h4>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>Card with border and no shadow.</p>
        </CardBody>
      </CardComponent>
      <CardComponent border shadow="sm" style={{ maxWidth: 300 }}>
        <CardHeader>
          <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Border + Shadow</h4>
        </CardHeader>
        <CardBody>
          <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
            Card with both border and shadow.
          </p>
        </CardBody>
      </CardComponent>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <CardComponent shadow="md" disabled style={{ maxWidth: 300 }}>
      <CardHeader>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Disabled Card</h4>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          This card is disabled and cannot be interacted with.
        </p>
      </CardBody>
    </CardComponent>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <CardComponent shadow="sm" border fullWidth>
      <CardHeader>
        <h4 style={{ margin: 0, fontSize: 16, fontWeight: 600 }}>Full Width Card</h4>
      </CardHeader>
      <CardBody>
        <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
          This card stretches to fill its container width.
        </p>
      </CardBody>
    </CardComponent>
  ),
}
