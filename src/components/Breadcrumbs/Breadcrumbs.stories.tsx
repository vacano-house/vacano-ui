import type { Meta, StoryObj } from '@storybook/react-vite'

import { BreadcrumbItem } from './BreadcrumbItem'
import { Breadcrumbs as BreadcrumbsComponent } from './Breadcrumbs'
import { AudioLines, Disc, Home, Music, User } from '../../icons/Lucide'

const meta: Meta<typeof BreadcrumbsComponent> = {
  title: 'components/Breadcrumbs',
  component: BreadcrumbsComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    size: 'md',
    variant: 'light',
  },
  argTypes: {
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    variant: { control: 'select', options: ['light', 'solid', 'bordered'] },
    disabled: { control: 'boolean' },
  },
}

export default meta

type Story = StoryObj<typeof BreadcrumbsComponent>

export const Playground: Story = {
  render: (args) => (
    <BreadcrumbsComponent {...args}>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Music</BreadcrumbItem>
      <BreadcrumbItem href="#">Artist</BreadcrumbItem>
      <BreadcrumbItem href="#">Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </BreadcrumbsComponent>
  ),
}

export const Disabled: Story = {
  render: () => (
    <BreadcrumbsComponent disabled>
      <BreadcrumbItem href="#">Home</BreadcrumbItem>
      <BreadcrumbItem href="#">Music</BreadcrumbItem>
      <BreadcrumbItem href="#">Artist</BreadcrumbItem>
      <BreadcrumbItem href="#">Album</BreadcrumbItem>
      <BreadcrumbItem>Song</BreadcrumbItem>
    </BreadcrumbsComponent>
  ),
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Small</div>
        <BreadcrumbsComponent size="sm">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Medium</div>
        <BreadcrumbsComponent size="md">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Large</div>
        <BreadcrumbsComponent size="lg">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
    </div>
  ),
}

export const Variants: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Light</div>
        <BreadcrumbsComponent variant="light">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Solid</div>
        <BreadcrumbsComponent variant="solid">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Bordered</div>
        <BreadcrumbsComponent variant="bordered">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
    </div>
  ),
}

export const WithIcons: Story = {
  render: () => (
    <BreadcrumbsComponent>
      <BreadcrumbItem href="#" startContent={<Home />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#" startContent={<Music />}>
        Music
      </BreadcrumbItem>
      <BreadcrumbItem href="#" startContent={<User />}>
        Artist
      </BreadcrumbItem>
      <BreadcrumbItem href="#" startContent={<Disc />}>
        Album
      </BreadcrumbItem>
      <BreadcrumbItem startContent={<AudioLines />}>Song</BreadcrumbItem>
    </BreadcrumbsComponent>
  ),
}

export const CustomSeparator: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Slash separator</div>
        <BreadcrumbsComponent separator="/">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Dash separator</div>
        <BreadcrumbsComponent separator="—">
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
    </div>
  ),
}

export const CollapsingItems: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          maxItems=3, before=1, after=2
        </div>
        <BreadcrumbsComponent maxItems={3} itemsBeforeCollapse={1} itemsAfterCollapse={2}>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Music</BreadcrumbItem>
          <BreadcrumbItem href="#">Artist</BreadcrumbItem>
          <BreadcrumbItem href="#">Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          maxItems=2, before=1, after=1
        </div>
        <BreadcrumbsComponent maxItems={2} itemsBeforeCollapse={1} itemsAfterCollapse={1}>
          <BreadcrumbItem href="#">Home</BreadcrumbItem>
          <BreadcrumbItem href="#">Category</BreadcrumbItem>
          <BreadcrumbItem href="#">Subcategory</BreadcrumbItem>
          <BreadcrumbItem href="#">Product Type</BreadcrumbItem>
          <BreadcrumbItem href="#">Brand</BreadcrumbItem>
          <BreadcrumbItem>Product</BreadcrumbItem>
        </BreadcrumbsComponent>
      </div>
    </div>
  ),
}

export const VariantWithIcons: Story = {
  name: 'Solid + Icons',
  render: () => (
    <BreadcrumbsComponent variant="solid">
      <BreadcrumbItem href="#" startContent={<Home />}>
        Home
      </BreadcrumbItem>
      <BreadcrumbItem href="#" startContent={<Music />}>
        Music
      </BreadcrumbItem>
      <BreadcrumbItem startContent={<AudioLines />}>Song</BreadcrumbItem>
    </BreadcrumbsComponent>
  ),
}
