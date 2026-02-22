import type { Meta, StoryObj } from '@storybook/react-vite'

import { ShellScreen as ShellScreenComponent } from './ShellScreen'
import { Button } from '../Button'
import { Input } from '../Input'

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

const AlertTriangleIcon = () => (
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
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
    <path d="M12 9v4" />
    <path d="M12 17h.01" />
  </svg>
)

const LockIcon = () => (
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
    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
)

const MailIcon = () => (
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
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const LogoPlaceholder = () => (
  <div
    style={{
      width: 140,
      height: 40,
      borderRadius: 8,
      background: '#212529',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: 1,
    }}
  >
    VACANO
  </div>
)

const meta: Meta<typeof ShellScreenComponent> = {
  title: 'components/ShellScreen',
  component: ShellScreenComponent,
  parameters: {
    layout: 'fullscreen',
  },
}

export default meta

type Story = StoryObj<typeof ShellScreenComponent>

export const Playground: Story = {
  args: {
    icon: <SearchIcon />,
    title: 'Page not found',
    description: 'Sorry, the page you are looking for does not exist or has been moved.',
    children: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Button>Go to homepage</Button>
      </div>
    ),
  },
}

export const NotFound: Story = {
  name: '404 Page',
  render: () => (
    <ShellScreenComponent
      logo={<LogoPlaceholder />}
      title="Page not found"
      description="Sorry, the page you are looking for doesn't exist or has been moved."
      footer="Need help? Contact support"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Button>Back to homepage</Button>
      </div>
    </ShellScreenComponent>
  ),
}

export const Login: Story = {
  render: () => (
    <ShellScreenComponent
      logo={<LogoPlaceholder />}
      title="Welcome back"
      description="Enter your credentials to access your account."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Enter your password" type="password" />
        <Button style={{ width: '100%' }}>Sign in</Button>
      </div>
    </ShellScreenComponent>
  ),
}

export const ErrorPage: Story = {
  render: () => (
    <ShellScreenComponent
      icon={<AlertTriangleIcon />}
      title="Something went wrong"
      description="An unexpected error occurred. Please try again later or contact support if the problem persists."
    >
      <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
        <Button variant="transparent">Contact support</Button>
        <Button>Try again</Button>
      </div>
    </ShellScreenComponent>
  ),
}

export const CheckEmail: Story = {
  render: () => (
    <ShellScreenComponent
      logo={<LogoPlaceholder />}
      icon={<MailIcon />}
      title="Check your email"
      description="We sent a password reset link to your email address. Please check your inbox."
      footer="Didn't receive the email? Check spam folder"
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
        <Button style={{ width: '100%' }}>Open email app</Button>
      </div>
    </ShellScreenComponent>
  ),
}

export const Maintenance: Story = {
  render: () => (
    <ShellScreenComponent
      icon={<LockIcon />}
      title="Under maintenance"
      description="We're currently performing scheduled maintenance. We'll be back shortly."
      gridSize={48}
    />
  ),
}

export const WithLogoOnly: Story = {
  name: 'Logo Only',
  render: () => (
    <ShellScreenComponent
      logo={<LogoPlaceholder />}
      title="Create your account"
      description="Get started with a free account today."
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Input label="Full name" placeholder="Enter your full name" />
        <Input label="Email" placeholder="Enter your email" />
        <Input label="Password" placeholder="Create a password" type="password" />
        <Button style={{ width: '100%' }}>Create account</Button>
        <p style={{ textAlign: 'center', fontSize: 14, color: '#495057', margin: 0 }}>
          Already have an account?{' '}
          <a href="#" style={{ color: '#0582ca' }}>
            Sign in
          </a>
        </p>
      </div>
    </ShellScreenComponent>
  ),
}
