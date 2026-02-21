import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'

import { DROPDOWN_PADDING, OPTION_GAP, OPTION_HEIGHT } from './constants'
import {
  StyledCheckmark,
  StyledChevron,
  StyledContainer,
  StyledDropdown,
  StyledLabel,
  StyledOption,
  StyledPortalDropdown,
  StyledTrigger,
  StyledTriggerText,
} from './styled'
import { SelectProps } from './types'
import { Check, ChevronDown } from '../../icons/Lucide'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('select')

type PortalPosition = {
  top: number
  left: number
  width: number
}

export const Select = ({
  className,
  classnames,
  disabled = false,
  fullWidth = false,
  label,
  onChange,
  options,
  placeholder = 'Select...',
  portalRenderNode,
  ref,
  size = 'default',
  value,
  variant = 'normal',
  ...rest
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [portalPosition, setPortalPosition] = useState<PortalPosition>({
    top: 0,
    left: 0,
    width: 0,
  })

  const containerRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const selectedOption = options.find((opt) => opt.value === value)
  const selectedIndex = Math.max(
    0,
    options.findIndex((opt) => opt.value === value),
  )
  const dropdownTop = -(selectedIndex * (OPTION_HEIGHT + OPTION_GAP) + DROPDOWN_PADDING)

  const updatePortalPosition = () => {
    if (!triggerRef.current || !portalRenderNode) return

    const triggerRect = triggerRef.current.getBoundingClientRect()
    const selectedOffset = selectedIndex * (OPTION_HEIGHT + OPTION_GAP) + DROPDOWN_PADDING

    let top = triggerRect.top - selectedOffset

    const dropdownHeight =
      options.length * OPTION_HEIGHT + (options.length - 1) * OPTION_GAP + DROPDOWN_PADDING * 2
    const minTop = 8
    const maxTop = window.innerHeight - dropdownHeight - 8

    if (top < minTop) top = minTop
    if (top > maxTop) top = maxTop

    setPortalPosition({
      top,
      left: triggerRect.left - DROPDOWN_PADDING,
      width: triggerRect.width + DROPDOWN_PADDING * 2,
    })
  }

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue)
    setIsOpen(false)
    triggerRef.current?.focus()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled || options.length === 0) return

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setIsOpen((prev) => !prev)
    } else if (e.key === 'Escape' && isOpen) {
      e.preventDefault()
      setIsOpen(false)
    } else if (e.key === 'ArrowDown' && !isOpen) {
      e.preventDefault()
      setIsOpen(true)
    }
  }

  useLayoutEffect(() => {
    if (isOpen && portalRenderNode) {
      updatePortalPosition()
    }
  }, [isOpen, portalRenderNode, selectedIndex, options.length])

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node
      const isOutsideContainer = containerRef.current && !containerRef.current.contains(target)
      const isOutsideDropdown = dropdownRef.current && !dropdownRef.current.contains(target)

      if (portalRenderNode) {
        if (isOutsideContainer && isOutsideDropdown) {
          setIsOpen(false)
        }
      } else {
        if (isOutsideContainer) {
          setIsOpen(false)
        }
      }
    }

    const handleScroll = () => {
      if (portalRenderNode) {
        updatePortalPosition()
      }
    }

    const handleResize = () => {
      if (portalRenderNode) {
        updatePortalPosition()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    if (portalRenderNode) {
      window.addEventListener('scroll', handleScroll, true)
      window.addEventListener('resize', handleResize)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      window.removeEventListener('scroll', handleScroll, true)
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, portalRenderNode])

  const renderOptions = () =>
    options.map((option) => (
      <StyledOption
        key={option.value}
        type="button"
        role="option"
        $selected={option.value === value}
        $disabled={option.disabled ?? false}
        disabled={option.disabled}
        aria-selected={option.value === value}
        onClick={() => handleSelect(option.value)}
        className={css('option', classnames?.option)}
      >
        <span>{option.label}</span>
        {option.value === value && (
          <StyledCheckmark>
            <Check size={16} />
          </StyledCheckmark>
        )}
      </StyledOption>
    ))

  const dropdown = portalRenderNode ? (
    createPortal(
      <StyledPortalDropdown
        ref={dropdownRef}
        role="listbox"
        style={{
          top: portalPosition.top,
          left: portalPosition.left,
          width: portalPosition.width,
        }}
        className={css('dropdown', classnames?.dropdown)}
      >
        {renderOptions()}
      </StyledPortalDropdown>,
      portalRenderNode,
    )
  ) : (
    <StyledDropdown
      ref={dropdownRef}
      role="listbox"
      style={{ top: dropdownTop }}
      className={css('dropdown', classnames?.dropdown)}
    >
      {renderOptions()}
    </StyledDropdown>
  )

  return (
    <StyledContainer
      {...rest}
      ref={(node) => {
        ;(containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node
        if (typeof ref === 'function') ref(node)
        else if (ref) ref.current = node
      }}
      $fullWidth={fullWidth}
      className={css('container', className)}
    >
      {label && (
        <StyledLabel
          variant={variant === 'error' ? 'error' : 'normal'}
          className={css('label', classnames?.label)}
        >
          {label}
        </StyledLabel>
      )}

      <StyledTrigger
        ref={triggerRef}
        type="button"
        $size={size}
        $variant={variant}
        $disabled={disabled}
        $hasValue={Boolean(selectedOption)}
        disabled={disabled}
        onClick={() => !disabled && options.length > 0 && setIsOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={css('trigger', classnames?.trigger)}
      >
        <StyledTriggerText>{selectedOption?.label ?? placeholder}</StyledTriggerText>
        <StyledChevron $open={isOpen}>
          <ChevronDown size={16} />
        </StyledChevron>
      </StyledTrigger>

      {isOpen && dropdown}
    </StyledContainer>
  )
}
