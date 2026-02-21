import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import {
  StyledContainer,
  StyledEmpty,
  StyledLabel,
  StyledMessage,
  StyledModalContent,
  StyledModalHeader,
  StyledModalTitle,
  StyledOption,
  StyledOptionLabel,
  StyledOptionsList,
  StyledPlaceholder,
  StyledTrigger,
} from './styled'
import { MultiSelectProps } from './types'
import { Button } from '../Button'
import { Checkbox } from '../Checkbox'
import { Chip } from '../Chip'
import { Input } from '../Input'
import { Modal } from '../Modal'
import { X } from '../../icons/Lucide'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('multi-select')

export const MultiSelect = ({
  className,
  classnames,
  disabled = false,
  emptyMessage = 'No options found',
  label,
  maxVisible = Infinity,
  message,
  modalTitle = 'Select options',
  onChange,
  options,
  placeholder = 'Select...',
  ref,
  searchPlaceholder = 'Search...',
  value,
  variant = 'normal',
  ...rest
}: MultiSelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState('')
  const modalContentRef = useRef<HTMLDivElement>(null)

  const selectedOptions = useMemo(() => {
    return options.filter((opt) => value.includes(opt.value))
  }, [options, value])

  const filteredOptions = useMemo(() => {
    if (!search.trim()) return options
    const query = search.toLowerCase().trim()
    return options.filter((opt) => opt.label.toLowerCase().includes(query))
  }, [options, search])

  const visibleChips =
    maxVisible === Infinity ? selectedOptions : selectedOptions.slice(0, maxVisible)
  const hiddenCount = selectedOptions.length - visibleChips.length

  const handleOpen = () => {
    if (!disabled) {
      setIsOpen(true)
      setSearch('')
    }
  }

  const handleClose = useCallback(() => {
    setIsOpen(false)
    setSearch('')
  }, [])

  const handleToggle = (optionValue: string) => {
    if (value.includes(optionValue)) {
      onChange(value.filter((v) => v !== optionValue))
    } else {
      onChange([...value, optionValue])
    }
  }

  const handleRemove = (optionValue: string) => {
    onChange(value.filter((v) => v !== optionValue))
  }

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e: MouseEvent) => {
      if (modalContentRef.current && !modalContentRef.current.contains(e.target as Node)) {
        handleClose()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, handleClose])

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {label && (
        <StyledLabel variant={variant} className={css('label', classnames?.trigger)}>
          {label}
        </StyledLabel>
      )}
      <StyledTrigger
        $variant={variant}
        $disabled={disabled}
        onClick={handleOpen}
        className={css('trigger', classnames?.trigger)}
      >
        {selectedOptions.length === 0 ? (
          <StyledPlaceholder
            $variant={variant}
            className={css('placeholder', classnames?.placeholder)}
          >
            {placeholder}
          </StyledPlaceholder>
        ) : (
          <>
            {visibleChips.map((opt) => (
              <Chip
                key={opt.value}
                variant={variant === 'error' ? 'red' : 'gray'}
                deletable
                onDelete={() => handleRemove(opt.value)}
                onClick={(e) => e.stopPropagation()}
                className={css('chip', classnames?.chip)}
              >
                {opt.label}
              </Chip>
            ))}
            {hiddenCount > 0 && (
              <Chip
                variant={variant === 'error' ? 'red' : 'gray'}
                onClick={(e) => e.stopPropagation()}
                className={css('chip', classnames?.chip)}
              >
                +{hiddenCount}
              </Chip>
            )}
          </>
        )}
      </StyledTrigger>
      {message && (
        <StyledMessage variant={variant} className={css('message')}>
          {message}
        </StyledMessage>
      )}

      <Modal open={isOpen} width="400px" animated className={css('modal', classnames?.modal)}>
        <StyledModalContent ref={modalContentRef}>
          <StyledModalHeader>
            <StyledModalTitle>{modalTitle}</StyledModalTitle>
            <Button
              variant="transparent"
              size="compact"
              icon={<X />}
              keyBindings={['Escape']}
              onClick={handleClose}
            />
          </StyledModalHeader>

          <Input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            autoFocus
            fullWidth
            className={css('search', classnames?.search)}
          />

          <StyledOptionsList className={css('options', classnames?.options)}>
            {filteredOptions.length === 0 ? (
              <StyledEmpty className={css('empty', classnames?.empty)}>{emptyMessage}</StyledEmpty>
            ) : (
              filteredOptions.map((opt) => (
                <StyledOption
                  key={opt.value}
                  $disabled={Boolean(opt.disabled)}
                  className={css('option', classnames?.option)}
                >
                  <Checkbox
                    checked={value.includes(opt.value)}
                    disabled={opt.disabled}
                    onChange={() => handleToggle(opt.value)}
                  />
                  <StyledOptionLabel>{opt.label}</StyledOptionLabel>
                </StyledOption>
              ))
            )}
          </StyledOptionsList>
        </StyledModalContent>
      </Modal>
    </StyledContainer>
  )
}
