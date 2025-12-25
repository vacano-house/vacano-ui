import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { Example } from '../Example'

describe('Example', () => {
  it('renders children', () => {
    render(<Example size="md">Test Content</Example>)

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('has role="alert"', () => {
    render(<Example size="md">Content</Example>)

    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('uses default variant "one" when not specified', () => {
    const { container } = render(<Example size="md">Content</Example>)

    expect(container.firstChild).toHaveStyle({ gridTemplateColumns: '1fr' })
  })

  it('renders with variant "two"', () => {
    const { container } = render(
      <Example size="md" variant="two">
        Content
      </Example>,
    )

    expect(container.firstChild).toHaveStyle({ gridTemplateColumns: '1fr 1fr' })
  })

  it('calls alert on click', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const user = userEvent.setup()

    render(<Example size="md">Content</Example>)
    await user.click(screen.getByRole('alert'))

    expect(alertSpy).toHaveBeenCalledWith('one')
    alertSpy.mockRestore()
  })

  it('calls alert with correct variant on click', async () => {
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {})
    const user = userEvent.setup()

    render(
      <Example size="md" variant="two">
        Content
      </Example>,
    )
    await user.click(screen.getByRole('alert'))

    expect(alertSpy).toHaveBeenCalledWith('two')
    alertSpy.mockRestore()
  })
})

describe('Example sizes', () => {
  it('applies small font size', () => {
    const { container } = render(<Example size="sm">Content</Example>)

    expect(container.firstChild).toHaveStyle({ fontSize: '10px' })
  })

  it('applies medium font size', () => {
    const { container } = render(<Example size="md">Content</Example>)

    expect(container.firstChild).toHaveStyle({ fontSize: '14px' })
  })

  it('applies large font size', () => {
    const { container } = render(<Example size="lg">Content</Example>)

    expect(container.firstChild).toHaveStyle({ fontSize: '16px' })
  })
})
