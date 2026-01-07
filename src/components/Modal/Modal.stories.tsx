import { useState } from 'react'

import { Button, Input } from '..'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Modal as ModalComponent } from './Modal'
import type { ModalProps } from './types'
import { AlertTriangle, Edit, Image, Info, Trash2, X } from '../../icons/Lucide'

const meta: Meta<typeof ModalComponent> = {
  title: 'components/Modal',
  component: ModalComponent,
  parameters: {
    layout: 'centered',
  },
  args: {
    open: false,
    animated: true,
    width: '500px',
  },
  argTypes: {
    open: { control: 'boolean' },
    animated: { control: 'boolean' },
    width: { control: 'text' },
  },
}

export default meta

type Story = StoryObj<typeof ModalComponent>

const PlaygroundStory = (args: ModalProps) => {
  const [open, setOpen] = useState(args.open)

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalComponent {...args} open={open}>
        <div style={{ padding: 24 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 16,
            }}
          >
            <h2 style={{ margin: 0 }}>Modal Title</h2>
            <Button
              onClick={() => setOpen(false)}
              variant="transparent"
              keyBindings={['Escape']}
              icon={<X />}
            />
          </div>
          <p style={{ margin: '0 0 16px', color: '#666' }}>
            This is the modal content. You can customize the width, animation, and content.
          </p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
            <Button variant="system" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="normal" onClick={() => setOpen(false)}>
              Confirm
            </Button>
          </div>
        </div>
      </ModalComponent>
    </>
  )
}

export const Playground: Story = {
  render: (args) => <PlaygroundStory {...args} />,
}

const SizesStory = () => {
  const [openSmall, setOpenSmall] = useState(false)
  const [openMedium, setOpenMedium] = useState(false)
  const [openLarge, setOpenLarge] = useState(false)
  const [openFullscreen, setOpenFullscreen] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Small (300px)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenSmall(true)}>Open Small Modal</Button>
          <ModalComponent open={openSmall} width="300px" animated>
            <div style={{ padding: 24 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h3 style={{ margin: 0 }}>Small Modal</h3>
                <Button onClick={() => setOpenSmall(false)} variant="transparent" icon={<X />} />
              </div>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                This is a small modal with 300px width.
              </p>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Medium (500px - Default)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenMedium(true)}>Open Medium Modal</Button>
          <ModalComponent open={openMedium} width="500px" animated>
            <div style={{ padding: 24 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h3 style={{ margin: 0 }}>Medium Modal</h3>
                <Button onClick={() => setOpenMedium(false)} variant="transparent" icon={<X />} />
              </div>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                This is a medium modal with 500px width (default).
              </p>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Large (800px)</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenLarge(true)}>Open Large Modal</Button>
          <ModalComponent open={openLarge} width="800px" animated>
            <div style={{ padding: 24 }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h3 style={{ margin: 0 }}>Large Modal</h3>
                <Button onClick={() => setOpenLarge(false)} variant="transparent" icon={<X />} />
              </div>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                This is a large modal with 800px width. Suitable for complex content or forms.
              </p>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Fullscreen (calc(100vw - 64px))
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenFullscreen(true)}>Open Fullscreen Modal</Button>
          <ModalComponent open={openFullscreen} width="calc(100vw - 64px)" animated>
            <div style={{ padding: 24, minHeight: 'calc(100vh - 96px)' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 16,
                }}
              >
                <h3 style={{ margin: 0 }}>Fullscreen Modal</h3>
                <Button
                  onClick={() => setOpenFullscreen(false)}
                  variant="transparent"
                  icon={<X />}
                />
              </div>
              <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                This is a fullscreen modal that takes up most of the viewport.
              </p>
            </div>
          </ModalComponent>
        </div>
      </div>
    </div>
  )
}

export const Sizes: Story = {
  parameters: { layout: 'padded' },
  render: () => <SizesStory />,
}

const WithHeaderStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Modal with header/title bar
      </div>
      <Button onClick={() => setOpen(true)}>Open Modal with Header</Button>
      <ModalComponent open={open} width="500px" animated>
        <div
          style={{
            borderBottom: '1px solid #eee',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Modal Header</h3>
          <Button
            onClick={() => setOpen(false)}
            variant="transparent"
            icon={<X />}
            size="compact"
          />
        </div>
        <div style={{ padding: 24 }}>
          <p style={{ margin: 0, color: '#666' }}>
            This modal has a separate header section with a title and close button. The header is
            visually separated from the content with a border.
          </p>
        </div>
      </ModalComponent>
    </div>
  )
}

export const WithHeader: Story = {
  parameters: { layout: 'padded' },
  render: () => <WithHeaderStory />,
}

const WithFooterStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Modal with footer/action buttons
      </div>
      <Button onClick={() => setOpen(true)}>Open Modal with Footer</Button>
      <ModalComponent open={open} width="500px" animated>
        <div style={{ padding: 24 }}>
          <p style={{ margin: 0, color: '#666' }}>
            This modal has a footer section with action buttons. The footer is visually separated
            and typically contains primary and secondary actions.
          </p>
        </div>
        <div
          style={{
            borderTop: '1px solid #eee',
            padding: '16px 24px',
            backgroundColor: '#fafafa',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 12,
          }}
        >
          <Button variant="system" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="normal" onClick={() => setOpen(false)}>
            Save Changes
          </Button>
        </div>
      </ModalComponent>
    </div>
  )
}

export const WithFooter: Story = {
  parameters: { layout: 'padded' },
  render: () => <WithFooterStory />,
}

const WithHeaderAndFooterStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Full modal layout with header, content, and footer
      </div>
      <Button onClick={() => setOpen(true)}>Open Full Layout Modal</Button>
      <ModalComponent open={open} width="500px" animated>
        <div
          style={{
            borderBottom: '1px solid #eee',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Edit Profile</h3>
          <Button
            onClick={() => setOpen(false)}
            variant="transparent"
            icon={<X />}
            size="compact"
          />
        </div>
        <div style={{ padding: 24 }}>
          <p style={{ margin: '0 0 16px', color: '#666' }}>
            This is a complete modal layout with a header, scrollable content area, and a footer
            with actions.
          </p>
          <p style={{ margin: 0, color: '#666' }}>
            The header contains the title and close button, the middle section contains the main
            content, and the footer contains the action buttons.
          </p>
        </div>
        <div
          style={{
            borderTop: '1px solid #eee',
            padding: '16px 24px',
            backgroundColor: '#fafafa',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 12,
          }}
        >
          <Button variant="system" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="normal" onClick={() => setOpen(false)}>
            Save
          </Button>
        </div>
      </ModalComponent>
    </div>
  )
}

export const WithHeaderAndFooter: Story = {
  parameters: { layout: 'padded' },
  render: () => <WithHeaderAndFooterStory />,
}

const ConfirmationStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
        Confirmation dialog pattern
      </div>
      <Button onClick={() => setOpen(true)} variant="danger" icon={<Trash2 />}>
        Delete Item
      </Button>
      <ModalComponent open={open} width="400px" animated>
        <div style={{ padding: 24, textAlign: 'center' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: '50%',
              backgroundColor: '#fee2e2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
            }}
          >
            <AlertTriangle style={{ color: '#dc2626', width: 24, height: 24 }} />
          </div>
          <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>Delete Item?</h3>
          <p style={{ margin: '0 0 24px', color: '#666', fontSize: 14 }}>
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
            <Button variant="system" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => setOpen(false)}>
              Delete
            </Button>
          </div>
        </div>
      </ModalComponent>
    </div>
  )
}

export const Confirmation: Story = {
  parameters: { layout: 'padded' },
  render: () => <ConfirmationStory />,
}

const FormStory = () => {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ border: '1px dashed #ccc', padding: 16 }}>
      <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Modal containing a form</div>
      <Button onClick={() => setOpen(true)}>Open Form Modal</Button>
      <ModalComponent open={open} width="500px" animated>
        <div
          style={{
            borderBottom: '1px solid #eee',
            padding: '16px 24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Create New Project</h3>
          <Button
            onClick={() => setOpen(false)}
            variant="transparent"
            icon={<X />}
            size="compact"
          />
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault()
            setOpen(false)
          }}
        >
          <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <Input label="Project Name" placeholder="Enter project name" fullWidth />
            <Input label="Description" placeholder="Enter project description" fullWidth />
            <Input label="Repository URL" placeholder="https://github.com/..." fullWidth />
            <div>
              <label style={{ display: 'block', marginBottom: 8, fontSize: 14, fontWeight: 500 }}>
                Project Type
              </label>
              <select
                style={{
                  width: '100%',
                  padding: '10px 12px',
                  border: '1px solid #e5e7eb',
                  borderRadius: 8,
                  fontSize: 14,
                }}
              >
                <option>Web Application</option>
                <option>Mobile Application</option>
                <option>API Service</option>
                <option>Library</option>
              </select>
            </div>
          </div>
          <div
            style={{
              borderTop: '1px solid #eee',
              padding: '16px 24px',
              backgroundColor: '#fafafa',
              display: 'flex',
              justifyContent: 'flex-end',
              gap: 12,
            }}
          >
            <Button variant="system" onClick={() => setOpen(false)} type="button">
              Cancel
            </Button>
            <Button variant="normal" type="submit">
              Create Project
            </Button>
          </div>
        </form>
      </ModalComponent>
    </div>
  )
}

export const Form: Story = {
  parameters: { layout: 'padded' },
  render: () => <FormStory />,
}

const AlertStory = () => {
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openError, setOpenError] = useState(false)
  const [openWarning, setOpenWarning] = useState(false)
  const [openInfo, setOpenInfo] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Success Alert</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenSuccess(true)} variant="normal">
            Show Success
          </Button>
          <ModalComponent open={openSuccess} width="400px" animated>
            <div style={{ padding: 24, textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#dcfce7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg
                  style={{ color: '#16a34a', width: 24, height: 24 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>Success!</h3>
              <p style={{ margin: '0 0 24px', color: '#666', fontSize: 14 }}>
                Your changes have been saved successfully.
              </p>
              <Button variant="normal" onClick={() => setOpenSuccess(false)}>
                Continue
              </Button>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Error Alert</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenError(true)} variant="danger">
            Show Error
          </Button>
          <ModalComponent open={openError} width="400px" animated>
            <div style={{ padding: 24, textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#fee2e2',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <svg
                  style={{ color: '#dc2626', width: 24, height: 24 }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>Error</h3>
              <p style={{ margin: '0 0 24px', color: '#666', fontSize: 14 }}>
                Something went wrong. Please try again later.
              </p>
              <Button variant="danger" onClick={() => setOpenError(false)}>
                Close
              </Button>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Warning Alert</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenWarning(true)} variant="system">
            Show Warning
          </Button>
          <ModalComponent open={openWarning} width="400px" animated>
            <div style={{ padding: 24, textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#fef3c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <AlertTriangle style={{ color: '#d97706', width: 24, height: 24 }} />
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>Warning</h3>
              <p style={{ margin: '0 0 24px', color: '#666', fontSize: 14 }}>
                Your session is about to expire. Please save your work.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                <Button variant="system" onClick={() => setOpenWarning(false)}>
                  Dismiss
                </Button>
                <Button variant="normal" onClick={() => setOpenWarning(false)}>
                  Extend Session
                </Button>
              </div>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Info Alert</div>
        <div style={{ border: '1px dashed #ccc', padding: 16 }}>
          <Button onClick={() => setOpenInfo(true)} variant="transparent">
            Show Info
          </Button>
          <ModalComponent open={openInfo} width="400px" animated>
            <div style={{ padding: 24, textAlign: 'center' }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: '#dbeafe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <Info style={{ color: '#2563eb', width: 24, height: 24 }} />
              </div>
              <h3 style={{ margin: '0 0 8px', fontSize: 18, fontWeight: 600 }}>Information</h3>
              <p style={{ margin: '0 0 24px', color: '#666', fontSize: 14 }}>
                A new version is available. Update to get the latest features.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 12 }}>
                <Button variant="transparent" onClick={() => setOpenInfo(false)}>
                  Later
                </Button>
                <Button variant="normal" onClick={() => setOpenInfo(false)}>
                  Update Now
                </Button>
              </div>
            </div>
          </ModalComponent>
        </div>
      </div>
    </div>
  )
}

export const Alert: Story = {
  parameters: { layout: 'padded' },
  render: () => <AlertStory />,
}

const MixedWithContentStory = () => {
  const [openDelete, setOpenDelete] = useState(false)
  const [openEdit, setOpenEdit] = useState(false)
  const [openInfo, setOpenInfo] = useState(false)
  const [openImage, setOpenImage] = useState(false)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 600 }}>
      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>
          Delete Confirmation in Context
        </div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}
          >
            <div>
              <h4 style={{ margin: '0 0 4px', fontSize: 14 }}>project-alpha.zip</h4>
              <span style={{ fontSize: 12, color: '#666' }}>2.4 MB - Uploaded 2 days ago</span>
            </div>
            <Button
              onClick={() => setOpenDelete(true)}
              variant="danger"
              icon={<Trash2 />}
              size="compact"
            />
          </div>
          <ModalComponent open={openDelete} width="400px" animated>
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    backgroundColor: '#fee2e2',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Trash2 style={{ color: '#dc2626', width: 20, height: 20 }} />
                </div>
                <div>
                  <h3 style={{ margin: '0 0 4px', fontSize: 16, fontWeight: 600 }}>Delete file?</h3>
                  <p style={{ margin: 0, color: '#666', fontSize: 14 }}>
                    Are you sure you want to delete &ldquo;project-alpha.zip&rdquo;? This cannot be
                    undone.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                <Button variant="system" onClick={() => setOpenDelete(false)}>
                  Keep File
                </Button>
                <Button variant="danger" onClick={() => setOpenDelete(false)}>
                  Delete
                </Button>
              </div>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Edit Form in Card</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <div
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}
          >
            <div>
              <h4 style={{ margin: '0 0 8px', fontSize: 16 }}>User Profile</h4>
              <p style={{ margin: '0 0 4px', fontSize: 14 }}>John Doe</p>
              <p style={{ margin: 0, fontSize: 12, color: '#666' }}>john.doe@example.com</p>
            </div>
            <Button
              onClick={() => setOpenEdit(true)}
              variant="system"
              icon={<Edit />}
              size="compact"
            >
              Edit
            </Button>
          </div>
          <ModalComponent open={openEdit} width="500px" animated>
            <div
              style={{
                borderBottom: '1px solid #eee',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Edit Profile</h3>
              <Button
                onClick={() => setOpenEdit(false)}
                variant="transparent"
                icon={<X />}
                size="compact"
              />
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setOpenEdit(false)
              }}
            >
              <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  <Input label="First Name" defaultValue="John" fullWidth />
                  <Input label="Last Name" defaultValue="Doe" fullWidth />
                </div>
                <Input label="Email" defaultValue="john.doe@example.com" fullWidth />
                <Input label="Phone" placeholder="+1 (555) 000-0000" fullWidth />
              </div>
              <div
                style={{
                  borderTop: '1px solid #eee',
                  padding: '16px 24px',
                  backgroundColor: '#fafafa',
                  display: 'flex',
                  justifyContent: 'flex-end',
                  gap: 12,
                }}
              >
                <Button variant="system" onClick={() => setOpenEdit(false)} type="button">
                  Cancel
                </Button>
                <Button variant="normal" type="submit">
                  Save Changes
                </Button>
              </div>
            </form>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Info Modal from Link</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <p style={{ margin: '0 0 12px', fontSize: 14 }}>
            Your subscription includes access to premium features.{' '}
            <button
              onClick={() => setOpenInfo(true)}
              style={{
                background: 'none',
                border: 'none',
                color: '#2563eb',
                cursor: 'pointer',
                padding: 0,
                fontSize: 'inherit',
                textDecoration: 'underline',
              }}
            >
              Learn more
            </button>
          </p>
          <ModalComponent open={openInfo} width="500px" animated>
            <div
              style={{
                borderBottom: '1px solid #eee',
                padding: '16px 24px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <h3 style={{ margin: 0, fontSize: 18, fontWeight: 600 }}>Premium Features</h3>
              <Button
                onClick={() => setOpenInfo(false)}
                variant="transparent"
                icon={<X />}
                size="compact"
              />
            </div>
            <div style={{ padding: 24 }}>
              <ul
                style={{
                  margin: 0,
                  paddingLeft: 20,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                }}
              >
                <li style={{ color: '#666', fontSize: 14 }}>Unlimited project storage</li>
                <li style={{ color: '#666', fontSize: 14 }}>Advanced analytics dashboard</li>
                <li style={{ color: '#666', fontSize: 14 }}>Priority customer support</li>
                <li style={{ color: '#666', fontSize: 14 }}>Custom integrations</li>
                <li style={{ color: '#666', fontSize: 14 }}>Team collaboration tools</li>
              </ul>
            </div>
            <div
              style={{
                borderTop: '1px solid #eee',
                padding: '16px 24px',
                backgroundColor: '#fafafa',
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button variant="normal" onClick={() => setOpenInfo(false)}>
                Got it
              </Button>
            </div>
          </ModalComponent>
        </div>
      </div>

      <div>
        <div style={{ marginBottom: 8, fontSize: 12, color: '#666' }}>Image Preview Modal</div>
        <div style={{ border: '1px dashed #ccc', padding: 16, borderRadius: 8 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {[1, 2, 3].map((i) => (
              <button
                key={i}
                onClick={() => setOpenImage(true)}
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  backgroundColor: '#f3f4f6',
                  border: '1px solid #e5e7eb',
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image style={{ color: '#9ca3af', width: 24, height: 24 }} />
              </button>
            ))}
          </div>
          <ModalComponent open={openImage} width="800px" animated>
            <div style={{ position: 'relative' }}>
              <Button
                onClick={() => setOpenImage(false)}
                variant="transparent"
                icon={<X />}
                style={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  zIndex: 1,
                  backgroundColor: 'rgba(0,0,0,0.5)',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  backgroundColor: '#1f2937',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minHeight: 400,
                  borderRadius: 16,
                }}
              >
                <div
                  style={{
                    color: '#9ca3af',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 8,
                  }}
                >
                  <Image style={{ width: 48, height: 48 }} />
                  <span style={{ fontSize: 14 }}>Image Preview</span>
                </div>
              </div>
            </div>
          </ModalComponent>
        </div>
      </div>
    </div>
  )
}

export const MixedWithContent: Story = {
  name: 'Mixed with Other Content',
  parameters: { layout: 'padded' },
  render: () => <MixedWithContentStory />,
}
