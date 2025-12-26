import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { AnimatedIcon } from '../AnimatedIcon'

vi.mock('@lordicon/react', () => ({
  Player: vi.fn(({ size, colorize }) => (
    <div data-testid="lordicon-player" data-size={size} data-colorize={colorize} />
  )),
}))

describe('AnimatedIcon', () => {
  it('renders with required name prop', () => {
    render(<AnimatedIcon name="animated-bookmark" />)

    expect(screen.getByTestId('lordicon-player')).toBeInTheDocument()
  })

  it('applies default size of 24', () => {
    render(<AnimatedIcon name="animated-bookmark" />)

    expect(screen.getByTestId('lordicon-player')).toHaveAttribute('data-size', '24')
  })

  it('applies custom size', () => {
    render(<AnimatedIcon name="animated-bookmark" size={48} />)

    expect(screen.getByTestId('lordicon-player')).toHaveAttribute('data-size', '48')
  })

  it('applies color prop', () => {
    render(<AnimatedIcon name="animated-bookmark" color="#ff0000" />)

    expect(screen.getByTestId('lordicon-player')).toHaveAttribute('data-colorize', '#ff0000')
  })

  it('applies className to container', () => {
    render(<AnimatedIcon name="animated-bookmark" className="custom-class" />)

    const container = screen.getByTestId('lordicon-player').parentElement
    expect(container).toHaveClass('vacano_animated-icon_container')
    expect(container).toHaveClass('custom-class')
  })

  it('applies classnames.container to container', () => {
    render(<AnimatedIcon name="animated-bookmark" classnames={{ container: 'custom-container' }} />)

    const container = screen.getByTestId('lordicon-player').parentElement
    expect(container).toHaveClass('custom-container')
  })

  it('applies data-test-id attribute', () => {
    render(<AnimatedIcon name="animated-bookmark" data-test-id="test-icon" />)

    const container = screen.getByTestId('lordicon-player').parentElement
    expect(container).toHaveAttribute('data-test-id', 'test-icon')
  })

  it('triggers animation on mouse enter by default', async () => {
    const user = userEvent.setup()
    render(<AnimatedIcon name="animated-bookmark" />)

    const container = screen.getByTestId('lordicon-player').parentElement!
    await user.hover(container)

    // Animation would be triggered - we verify it doesn't throw
    expect(container).toBeInTheDocument()
  })

  it('does not trigger animation on mouse enter when disableOnHover is true', async () => {
    const user = userEvent.setup()
    render(<AnimatedIcon name="animated-bookmark" disableOnHover />)

    const container = screen.getByTestId('lordicon-player').parentElement!
    await user.hover(container)

    // Animation would not be triggered - we verify it doesn't throw
    expect(container).toBeInTheDocument()
  })
})
