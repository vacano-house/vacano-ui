import { useCallback, useEffect, useRef, useState } from 'react'

import { StyledButton, StyledContainer, StyledText } from './styled'
import type { EditableTextProps } from './types'
import { Check, Pencil } from '../../icons/Lucide'

export const EditableText = ({
  value,
  onChange,
  disabled = false,
  placeholder,
  className,
  classnames,
  'data-test-id': dataTestId,
}: EditableTextProps) => {
  const [isEditing, setIsEditing] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)

  const save = useCallback(() => {
    setIsEditing(false)
    const newValue = textRef.current?.textContent || ''
    if (newValue !== value) {
      onChange(newValue)
    }
  }, [onChange, value])

  useEffect(() => {
    if (isEditing && textRef.current) {
      textRef.current.focus()
      // Move cursor to end
      const range = document.createRange()
      const selection = window.getSelection()
      range.selectNodeContents(textRef.current)
      range.collapse(false)
      selection?.removeAllRanges()
      selection?.addRange(range)
    }
  }, [isEditing])

  useEffect(() => {
    if (!isEditing) return

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        save()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isEditing, save])

  const handleEditClick = () => {
    if (disabled) return
    setIsEditing(true)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (e.key === 'Enter' && e.metaKey) {
      e.preventDefault()
      save()
    } else if (e.key === 'Escape') {
      if (textRef.current) {
        textRef.current.textContent = value
      }
      setIsEditing(false)
    }
  }

  return (
    <StyledContainer ref={containerRef} className={className} data-test-id={dataTestId}>
      <StyledText
        ref={textRef}
        className={classnames?.text}
        contentEditable={isEditing}
        suppressContentEditableWarning
        onKeyDown={handleKeyDown}
        $isEmpty={!value}
      >
        {value || placeholder}
      </StyledText>
      <StyledButton
        type="button"
        className={classnames?.button}
        $disabled={disabled && !isEditing}
        onClick={isEditing ? save : handleEditClick}
        disabled={disabled && !isEditing}
        aria-label={isEditing ? 'Save' : 'Edit'}
      >
        {isEditing ? <Check size={16} /> : <Pencil size={14} />}
      </StyledButton>
    </StyledContainer>
  )
}
