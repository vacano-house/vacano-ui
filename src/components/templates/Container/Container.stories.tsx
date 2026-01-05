import type { Meta, StoryObj } from '@storybook/react-vite'

import { CONTAINER_MAX_WIDTHS } from './constants'
import { Container as ContainerComponent } from './Container'
import { Card } from '../Card'
import { Button } from '../../organisms'

const meta: Meta<typeof ContainerComponent> = {
  title: 'templates/Container',
  component: ContainerComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ContainerComponent>

export const Playground: Story = {
  args: {
    style: {
      backgroundColor: '#fff',
      border: '1px dashed #ccc',
      padding: 24,
      minHeight: 200,
    },
    children: 'Container content goes here. Resize the viewport to see responsive behavior.',
  },
  render: (args) => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <ContainerComponent {...args} />
    </div>
  ),
}

export const Breakpoints: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ marginBottom: 24, fontSize: 14, color: '#666' }}>
        The container responds to viewport width and adjusts its max-width at each breakpoint.
        Resize your browser to see the behavior.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Current Container (resize viewport to test)
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '2px solid #0582ca',
              padding: 24,
            }}
          >
            <div style={{ fontWeight: 600, marginBottom: 12 }}>Container Breakpoints</div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    Breakpoint
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    Min Viewport
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '8px 12px',
                      borderBottom: '1px solid #eee',
                    }}
                  >
                    Max Width
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>
                    xs (default)
                  </td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>0px</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>100%</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>sm</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>640px</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>
                    {CONTAINER_MAX_WIDTHS.sm}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>md</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>768px</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>
                    {CONTAINER_MAX_WIDTHS.md}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>lg</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>1024px</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>
                    {CONTAINER_MAX_WIDTHS.lg}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>xl</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>1280px</td>
                  <td style={{ padding: '8px 12px', borderBottom: '1px solid #eee' }}>
                    {CONTAINER_MAX_WIDTHS.xl}
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px 12px' }}>2xl</td>
                  <td style={{ padding: '8px 12px' }}>1536px</td>
                  <td style={{ padding: '8px 12px' }}>{CONTAINER_MAX_WIDTHS['2xl']}</td>
                </tr>
              </tbody>
            </table>
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const MaxWidth: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ marginBottom: 24, fontSize: 14, color: '#666' }}>
        Override the default max-width using inline styles or CSS classes.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Default (responsive)</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 16,
            }}
          >
            Default container - width adjusts based on viewport
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Custom max-width: 600px
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#e3f2fd',
              border: '1px dashed #0582ca',
              padding: 16,
              maxWidth: 600,
            }}
          >
            Narrower container with max-width: 600px
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Custom max-width: 800px
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#e8f5e9',
              border: '1px dashed #4caf50',
              padding: 16,
              maxWidth: 800,
            }}
          >
            Medium container with max-width: 800px
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Custom max-width: 1000px
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff3e0',
              border: '1px dashed #ff9800',
              padding: 16,
              maxWidth: 1000,
            }}
          >
            Wider container with max-width: 1000px
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const WithPadding: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ marginBottom: 24, fontSize: 14, color: '#666' }}>
        Different padding variations for containers.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>No padding</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
            }}
          >
            <div style={{ backgroundColor: '#e3f2fd', padding: 16 }}>
              Content with no container padding - content provides its own padding
            </div>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Small padding (8px)</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 8,
            }}
          >
            Container with 8px padding
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Medium padding (16px)</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 16,
            }}
          >
            Container with 16px padding
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Large padding (24px)</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
            }}
          >
            Container with 24px padding
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Extra large padding (48px)
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 48,
            }}
          >
            Container with 48px padding
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Horizontal padding only (0 24px)
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: '0 24px',
            }}
          >
            Container with horizontal padding only
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const Centered: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ marginBottom: 24, fontSize: 14, color: '#666' }}>
        Center containers using margin: auto or flexbox.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            margin: 0 auto (default centering)
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
              margin: '0 auto',
            }}
          >
            Centered container using margin: 0 auto
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Parent with display: flex and justify-content: center
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ContainerComponent
              style={{
                backgroundColor: '#e3f2fd',
                border: '1px dashed #0582ca',
                padding: 24,
                maxWidth: 600,
              }}
            >
              Centered using flexbox parent
            </ContainerComponent>
          </div>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Centered with custom max-width
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#e8f5e9',
              border: '1px dashed #4caf50',
              padding: 24,
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            Narrow centered container (max-width: 500px)
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const FullWidth: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ padding: 24, marginBottom: 24, fontSize: 14, color: '#666' }}>
        Full width containers that span the entire viewport width.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div>
          <div style={{ padding: '0 24px', marginBottom: 8, fontSize: 12, color: '#666' }}>
            Full width container (max-width: 100%)
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
              maxWidth: '100%',
            }}
          >
            Full width container - spans entire viewport
          </ContainerComponent>
        </div>

        <div>
          <div style={{ padding: '0 24px', marginBottom: 8, fontSize: 12, color: '#666' }}>
            Full width header example
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#212529',
              color: '#fff',
              padding: '16px 24px',
              maxWidth: '100%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontWeight: 600 }}>Brand Logo</div>
              <nav style={{ display: 'flex', gap: 24 }}>
                <span>Home</span>
                <span>About</span>
                <span>Services</span>
                <span>Contact</span>
              </nav>
            </div>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ padding: '0 24px', marginBottom: 8, fontSize: 12, color: '#666' }}>
            Full width footer example
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#495057',
              color: '#fff',
              padding: '32px 24px',
              maxWidth: '100%',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontWeight: 600, marginBottom: 8 }}>Company Name</div>
                <div style={{ fontSize: 14, opacity: 0.8 }}>2024 All rights reserved</div>
              </div>
              <div style={{ display: 'flex', gap: 48 }}>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Products</div>
                  <div style={{ fontSize: 14, opacity: 0.8 }}>Feature 1</div>
                  <div style={{ fontSize: 14, opacity: 0.8 }}>Feature 2</div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 8 }}>Support</div>
                  <div style={{ fontSize: 14, opacity: 0.8 }}>Help Center</div>
                  <div style={{ fontSize: 14, opacity: 0.8 }}>Contact</div>
                </div>
              </div>
            </div>
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutNested: Story = {
  name: 'Layout: Nested',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ marginBottom: 24, fontSize: 14, color: '#666' }}>
        Nested containers for complex layouts.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Outer container with nested inner container
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#e3f2fd',
              border: '2px solid #0582ca',
              padding: 24,
            }}
          >
            <div style={{ marginBottom: 8, fontSize: 12, color: '#0582ca' }}>Outer Container</div>
            <ContainerComponent
              style={{
                backgroundColor: '#fff',
                border: '2px solid #4caf50',
                padding: 24,
                maxWidth: 800,
                margin: '0 auto',
              }}
            >
              <div style={{ marginBottom: 8, fontSize: 12, color: '#4caf50' }}>Inner Container</div>
              <p style={{ margin: 0 }}>Nested container with its own max-width constraint</p>
            </ContainerComponent>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Three-level nesting</div>
          <ContainerComponent
            style={{
              backgroundColor: '#ffebee',
              border: '2px solid #f44336',
              padding: 24,
            }}
          >
            <div style={{ marginBottom: 8, fontSize: 12, color: '#f44336' }}>Level 1</div>
            <ContainerComponent
              style={{
                backgroundColor: '#fff3e0',
                border: '2px solid #ff9800',
                padding: 24,
                maxWidth: 900,
                margin: '0 auto',
              }}
            >
              <div style={{ marginBottom: 8, fontSize: 12, color: '#ff9800' }}>Level 2</div>
              <ContainerComponent
                style={{
                  backgroundColor: '#e8f5e9',
                  border: '2px solid #4caf50',
                  padding: 24,
                  maxWidth: 600,
                  margin: '0 auto',
                }}
              >
                <div style={{ marginBottom: 8, fontSize: 12, color: '#4caf50' }}>Level 3</div>
                <p style={{ margin: 0 }}>Deeply nested content area</p>
              </ContainerComponent>
            </ContainerComponent>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
            Side-by-side nested containers
          </div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
            }}
          >
            <div style={{ display: 'flex', gap: 24 }}>
              <ContainerComponent
                style={{
                  backgroundColor: '#e3f2fd',
                  border: '1px dashed #0582ca',
                  padding: 16,
                  flex: 1,
                  maxWidth: 'none',
                }}
              >
                <div style={{ fontSize: 12, color: '#0582ca', marginBottom: 8 }}>Left Panel</div>
                <p style={{ margin: 0, fontSize: 14 }}>Content for left side</p>
              </ContainerComponent>
              <ContainerComponent
                style={{
                  backgroundColor: '#e8f5e9',
                  border: '1px dashed #4caf50',
                  padding: 16,
                  flex: 1,
                  maxWidth: 'none',
                }}
              >
                <div style={{ fontSize: 12, color: '#4caf50', marginBottom: 8 }}>Right Panel</div>
                <p style={{ margin: 0, fontSize: 14 }}>Content for right side</p>
              </ContainerComponent>
            </div>
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const LayoutWithContent: Story = {
  name: 'Layout: WithContent',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh', padding: 24 }}>
      <div style={{ marginBottom: 24, fontSize: 14, color: '#666' }}>
        Container with various content types.
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Text content</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
              maxWidth: 800,
              margin: '0 auto',
            }}
          >
            <h2 style={{ margin: '0 0 16px' }}>Article Title</h2>
            <p style={{ margin: '0 0 12px', lineHeight: 1.6 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris.
            </p>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Card grid</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: 16,
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <Card key={i} border style={{ padding: 16 }}>
                  <h3 style={{ margin: '0 0 8px' }}>Card {i}</h3>
                  <p style={{ margin: 0, fontSize: 14, color: '#666' }}>
                    Card content description goes here.
                  </p>
                </Card>
              ))}
            </div>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Form content</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
              maxWidth: 500,
              margin: '0 auto',
            }}
          >
            <h3 style={{ margin: '0 0 24px' }}>Contact Form</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label
                  htmlFor="name-input"
                  style={{ display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 }}
                >
                  Name
                </label>
                <input
                  id="name-input"
                  type="text"
                  placeholder="Your name"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email-input"
                  style={{ display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 }}
                >
                  Email
                </label>
                <input
                  id="email-input"
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message-input"
                  style={{ display: 'block', marginBottom: 4, fontSize: 14, fontWeight: 500 }}
                >
                  Message
                </label>
                <textarea
                  id="message-input"
                  placeholder="Your message"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid #ccc',
                    borderRadius: 4,
                    boxSizing: 'border-box',
                    resize: 'vertical',
                  }}
                />
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                <Button variant="transparent">Cancel</Button>
                <Button variant="normal">Send Message</Button>
              </div>
            </div>
          </ContainerComponent>
        </div>

        <div>
          <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>List content</div>
          <ContainerComponent
            style={{
              backgroundColor: '#fff',
              border: '1px dashed #ccc',
              padding: 24,
              maxWidth: 600,
              margin: '0 auto',
            }}
          >
            <h3 style={{ margin: '0 0 16px' }}>Feature List</h3>
            <ul style={{ margin: 0, paddingLeft: 20, lineHeight: 2 }}>
              <li>Responsive design out of the box</li>
              <li>Customizable max-width at each breakpoint</li>
              <li>Flexible padding options</li>
              <li>Easy nesting for complex layouts</li>
              <li>Works with any content type</li>
            </ul>
          </ContainerComponent>
        </div>
      </div>
    </div>
  ),
}

export const MixedWithContent: Story = {
  name: 'Mixed with Content',
  parameters: { layout: 'fullscreen' },
  render: () => (
    <div style={{ width: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      {/* Full-width header */}
      <ContainerComponent
        style={{
          backgroundColor: '#212529',
          color: '#fff',
          padding: '16px 24px',
          maxWidth: '100%',
        }}
      >
        <ContainerComponent
          style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 18 }}>Vacano UI</div>
          <nav style={{ display: 'flex', gap: 24, fontSize: 14 }}>
            <span style={{ cursor: 'pointer' }}>Components</span>
            <span style={{ cursor: 'pointer' }}>Documentation</span>
            <span style={{ cursor: 'pointer' }}>Examples</span>
          </nav>
        </ContainerComponent>
      </ContainerComponent>

      {/* Hero section */}
      <ContainerComponent
        style={{
          backgroundColor: '#0582ca',
          color: '#fff',
          padding: '64px 24px',
          maxWidth: '100%',
          textAlign: 'center',
        }}
      >
        <ContainerComponent style={{ margin: '0 auto', maxWidth: 800 }}>
          <h1 style={{ margin: '0 0 16px', fontSize: 48, fontWeight: 700 }}>Build Beautiful UIs</h1>
          <p style={{ margin: '0 0 32px', fontSize: 18, opacity: 0.9 }}>
            A comprehensive React component library with responsive containers and flexible layouts.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <Button variant="normal">Get Started</Button>
            <Button variant="transparent" style={{ color: '#fff', borderColor: '#fff' }}>
              View on GitHub
            </Button>
          </div>
        </ContainerComponent>
      </ContainerComponent>

      {/* Features section */}
      <ContainerComponent
        style={{
          padding: '64px 24px',
          margin: '0 auto',
        }}
      >
        <h2 style={{ textAlign: 'center', margin: '0 0 48px' }}>Features</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 24,
          }}
        >
          <Card border style={{ padding: 24 }}>
            <h3 style={{ margin: '0 0 12px' }}>Responsive</h3>
            <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>
              Automatically adjusts to viewport size with predefined breakpoints.
            </p>
          </Card>
          <Card border style={{ padding: 24 }}>
            <h3 style={{ margin: '0 0 12px' }}>Flexible</h3>
            <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>
              Customize max-width, padding, and alignment to fit your needs.
            </p>
          </Card>
          <Card border style={{ padding: 24 }}>
            <h3 style={{ margin: '0 0 12px' }}>Composable</h3>
            <p style={{ margin: 0, color: '#666', lineHeight: 1.6 }}>
              Nest containers and combine with other components seamlessly.
            </p>
          </Card>
        </div>
      </ContainerComponent>

      {/* CTA section */}
      <ContainerComponent
        style={{
          backgroundColor: '#f8f9fa',
          padding: '48px 24px',
          maxWidth: '100%',
        }}
      >
        <ContainerComponent style={{ margin: '0 auto', maxWidth: 600, textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 16px' }}>Ready to Get Started?</h2>
          <p style={{ margin: '0 0 24px', color: '#666' }}>
            Install Vacano UI and start building your next project today.
          </p>
          <div
            style={{
              backgroundColor: '#212529',
              color: '#fff',
              padding: '12px 20px',
              borderRadius: 8,
              fontFamily: 'monospace',
              fontSize: 14,
            }}
          >
            npm install @vacano/ui
          </div>
        </ContainerComponent>
      </ContainerComponent>

      {/* Footer */}
      <ContainerComponent
        style={{
          backgroundColor: '#212529',
          color: '#fff',
          padding: '32px 24px',
          maxWidth: '100%',
        }}
      >
        <ContainerComponent
          style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ opacity: 0.8, fontSize: 14 }}>2024 Vacano UI. All rights reserved.</div>
          <div style={{ display: 'flex', gap: 24, fontSize: 14, opacity: 0.8 }}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Contact</span>
          </div>
        </ContainerComponent>
      </ContainerComponent>
    </div>
  ),
}
