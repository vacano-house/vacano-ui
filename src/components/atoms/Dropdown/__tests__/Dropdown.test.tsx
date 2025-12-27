import type { ReactNode } from 'react'

import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'

import { ThemeProvider } from '../../../../theme'
import { Button } from '../../../atoms/Button/Button'
import { Dropdown } from '../Dropdown'

const renderWithTheme = (ui: ReactNode) => {
  return render(<ThemeProvider>{ui}</ThemeProvider>)
}

const TestDropdown = (props: Partial<React.ComponentProps<typeof Dropdown>>) => (
  <Dropdown trigger={<Button>Trigger</Button>} {...props}>
    <div data-testid="dropdown-content">Content</div>
  </Dropdown>
)

describe('Dropdown', () => {
  it('renders trigger element', () => {
    renderWithTheme(<TestDropdown />)

    expect(screen.getByRole('button', { name: 'Trigger' })).toBeInTheDocument()
  })

  it('applies default class names', () => {
    renderWithTheme(<TestDropdown />)

    expect(document.querySelector('.vacano_dropdown_container')).toBeInTheDocument()
    expect(document.querySelector('.vacano_dropdown_trigger')).toBeInTheDocument()
    expect(document.querySelector('.vacano_dropdown_content')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    renderWithTheme(<TestDropdown className="custom-class" />)

    const container = document.querySelector('.vacano_dropdown_container')
    expect(container).toHaveClass('custom-class')
  })

  it('applies classnames.container', () => {
    renderWithTheme(<TestDropdown classnames={{ container: 'custom-container' }} />)

    expect(document.querySelector('.vacano_dropdown_container')).toHaveClass('custom-container')
  })

  it('applies classnames.trigger', () => {
    renderWithTheme(<TestDropdown classnames={{ trigger: 'custom-trigger' }} />)

    expect(document.querySelector('.vacano_dropdown_trigger')).toHaveClass('custom-trigger')
  })

  it('applies classnames.content', () => {
    renderWithTheme(<TestDropdown classnames={{ content: 'custom-content' }} />)

    expect(document.querySelector('.vacano_dropdown_content')).toHaveClass('custom-content')
  })

  it('applies data-test-id attribute', () => {
    renderWithTheme(<TestDropdown data-test-id="test-dropdown" />)

    expect(document.querySelector('.vacano_dropdown_container')).toHaveAttribute(
      'data-test-id',
      'test-dropdown',
    )
  })

  it('is closed by default', () => {
    renderWithTheme(<TestDropdown />)

    const content = document.querySelector('.vacano_dropdown_content')
    expect(content).toHaveStyle({ visibility: 'hidden' })
  })

  it('opens on trigger click', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TestDropdown />)

    await user.click(screen.getByRole('button', { name: 'Trigger' }))

    const content = document.querySelector('.vacano_dropdown_content')
    expect(content).toHaveStyle({ visibility: 'visible' })
  })

  it('closes on second trigger click', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TestDropdown />)

    await user.click(screen.getByRole('button', { name: 'Trigger' }))
    await user.click(screen.getByRole('button', { name: 'Trigger' }))

    const content = document.querySelector('.vacano_dropdown_content')
    expect(content).toHaveStyle({ visibility: 'hidden' })
  })

  it('closes on Escape key', async () => {
    const user = userEvent.setup()
    renderWithTheme(<TestDropdown />)

    await user.click(screen.getByRole('button', { name: 'Trigger' }))
    await user.keyboard('{Escape}')

    const content = document.querySelector('.vacano_dropdown_content')
    expect(content).toHaveStyle({ visibility: 'hidden' })
  })

  it('closes on click outside', async () => {
    const user = userEvent.setup()
    renderWithTheme(
      <div>
        <TestDropdown />
        <button data-testid="outside">Outside</button>
      </div>,
    )

    await user.click(screen.getByRole('button', { name: 'Trigger' }))
    await user.click(screen.getByTestId('outside'))

    const content = document.querySelector('.vacano_dropdown_content')
    await waitFor(() => {
      expect(content).toHaveStyle({ visibility: 'hidden' })
    })
  })

  describe('controlled mode', () => {
    it('respects controlled open prop', () => {
      renderWithTheme(<TestDropdown open={true} />)

      const content = document.querySelector('.vacano_dropdown_content')
      expect(content).toHaveStyle({ visibility: 'visible' })
    })

    it('calls onOpenChange when trigger clicked', async () => {
      const user = userEvent.setup()
      const handleOpenChange = vi.fn()

      renderWithTheme(<TestDropdown open={false} onOpenChange={handleOpenChange} />)

      await user.click(screen.getByRole('button', { name: 'Trigger' }))

      expect(handleOpenChange).toHaveBeenCalledWith(true)
    })

    it('calls onOpenChange when Escape pressed', async () => {
      const user = userEvent.setup()
      const handleOpenChange = vi.fn()

      renderWithTheme(<TestDropdown open={true} onOpenChange={handleOpenChange} />)

      await user.keyboard('{Escape}')

      expect(handleOpenChange).toHaveBeenCalledWith(false)
    })
  })

  describe('portal mode', () => {
    it('renders content in portal when portalRenderNode is provided', async () => {
      const user = userEvent.setup()
      const portalRoot = document.createElement('div')
      portalRoot.id = 'portal-root'
      document.body.appendChild(portalRoot)

      renderWithTheme(<TestDropdown portalRenderNode={portalRoot} />)

      await user.click(screen.getByRole('button', { name: 'Trigger' }))

      expect(portalRoot.querySelector('.vacano_dropdown_content')).toBeInTheDocument()

      document.body.removeChild(portalRoot)
    })
  })

  describe('fullWidth', () => {
    it('applies fullWidth styling', () => {
      renderWithTheme(<TestDropdown fullWidth />)

      const container = document.querySelector('.vacano_dropdown_container')
      expect(container).toHaveStyle({ width: '100%' })
    })
  })
})
