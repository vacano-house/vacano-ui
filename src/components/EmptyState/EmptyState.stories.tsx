import type { Meta, StoryObj } from '@storybook/react-vite'

import { EmptyState as EmptyStateComponent } from './EmptyState'
import { Button } from '../Button'

const SearchIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <path d="m21 21-4.3-4.3" />
  </svg>
)

const InboxIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
  </svg>
)

const UsersIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const CloudIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
  </svg>
)

const FileTextIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
)

const meta: Meta<typeof EmptyStateComponent> = {
  title: 'components/EmptyState',
  component: EmptyStateComponent,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof EmptyStateComponent>

export const Playground: Story = {
  args: {
    icon: <SearchIcon />,
    title: 'No results found',
    description: 'Your search did not match any results. Please try again with different keywords.',
    actions: (
      <>
        <Button variant="transparent" size="compact">
          Clear search
        </Button>
        <Button size="compact">New project</Button>
      </>
    ),
  },
}

export const NoData: Story = {
  render: () => (
    <EmptyStateComponent
      icon={<InboxIcon />}
      title="No messages yet"
      description="When you receive messages, they will appear here."
    />
  ),
}

export const WithActions: Story = {
  render: () => (
    <EmptyStateComponent
      icon={<FileTextIcon />}
      title="No documents"
      description="Get started by creating your first document."
      actions={<Button size="compact">Create document</Button>}
    />
  ),
}

export const NoUsers: Story = {
  render: () => (
    <EmptyStateComponent
      icon={<UsersIcon />}
      title="No team members"
      description="Invite people to collaborate with you on this project."
      actions={
        <>
          <Button variant="transparent" size="compact">
            Learn more
          </Button>
          <Button size="compact">Invite people</Button>
        </>
      }
    />
  ),
}

export const CloudSync: Story = {
  render: () => (
    <EmptyStateComponent
      icon={<CloudIcon />}
      title="No files uploaded"
      description="Upload files to the cloud to access them from anywhere."
      actions={<Button size="compact">Upload files</Button>}
    />
  ),
}

export const WithoutIcon: Story = {
  render: () => (
    <EmptyStateComponent
      title="Nothing here"
      description="There is no content to display at this time."
    />
  ),
}

export const MinimalTitle: Story = {
  name: 'Minimal (Title Only)',
  render: () => <EmptyStateComponent icon={<SearchIcon />} title="No results found" />,
}
