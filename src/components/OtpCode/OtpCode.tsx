import { ChangeEvent, ClipboardEvent, KeyboardEvent, useCallback, useEffect, useRef } from 'react'

import {
  StyledContainer,
  StyledInput,
  StyledInputsWrapper,
  StyledLabel,
  StyledMessage,
} from './styled'
import { OtpCodeProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('otp-code')

export const OtpCode = ({
  autoFocus,
  className,
  classnames,
  disabled,
  label,
  length = 6,
  message,
  onChange,
  ref,
  size = 'default',
  value = '',
  variant = 'normal',
  ...rest
}: OtpCodeProps) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([])

  useEffect(() => {
    if (autoFocus && inputRefs.current[0]) {
      inputRefs.current[0].focus()
    }
  }, [autoFocus])

  const focusInput = useCallback((index: number) => {
    const input = inputRefs.current[index]
    if (input) {
      input.focus()
      input.select()
    }
  }, [])

  const handleChange = useCallback(
    (index: number, e: ChangeEvent<HTMLInputElement>) => {
      const inputValue = e.target.value
      const digit = inputValue.replace(/\D/g, '').slice(-1)

      if (!digit) return

      const newValue = value.padEnd(length, ' ').split('')

      // Find first empty slot to insert the digit
      const firstEmptyIndex = newValue.findIndex((char) => char === ' ' || char === '')
      const insertIndex = firstEmptyIndex !== -1 ? firstEmptyIndex : index

      newValue[insertIndex] = digit
      const updatedValue = newValue.join('').replace(/ /g, '')

      onChange?.(updatedValue)

      // Move focus to the next empty slot after insertion
      const nextEmptyIndex = insertIndex + 1
      if (nextEmptyIndex < length) {
        focusInput(nextEmptyIndex)
      }
    },
    [value, length, onChange, focusInput],
  )

  const handleKeyDown = useCallback(
    (index: number, e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Backspace') {
        e.preventDefault()
        const newValue = value.split('')

        if (newValue[index]) {
          newValue[index] = ''
          onChange?.(newValue.join(''))
        } else if (index > 0) {
          newValue[index - 1] = ''
          onChange?.(newValue.join(''))
          focusInput(index - 1)
        }
      } else if (e.key === 'ArrowLeft' && index > 0) {
        e.preventDefault()
        focusInput(index - 1)
      } else if (e.key === 'ArrowRight' && index < length - 1) {
        e.preventDefault()
        focusInput(index + 1)
      }
    },
    [value, length, onChange, focusInput],
  )

  const handlePaste = useCallback(
    (e: ClipboardEvent<HTMLInputElement>) => {
      e.preventDefault()
      const pastedData = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length)

      if (pastedData) {
        onChange?.(pastedData)

        const nextIndex = Math.min(pastedData.length, length - 1)
        focusInput(nextIndex)
      }
    },
    [length, onChange, focusInput],
  )

  return (
    <StyledContainer ref={ref} className={css('container', className)} {...rest}>
      {label && (
        <StyledLabel variant={variant} className={css('label', classnames?.label)}>
          {label}
        </StyledLabel>
      )}
      <StyledInputsWrapper $size={size}>
        {Array.from({ length }).map((_, index) => (
          <StyledInput
            key={index}
            ref={(el) => {
              inputRefs.current[index] = el
            }}
            type="text"
            inputMode="numeric"
            autoComplete="one-time-code"
            maxLength={2}
            disabled={disabled}
            value={value[index] ?? ''}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            onFocus={(e) => e.target.select()}
            $size={size}
            $variant={variant}
            className={css('input', classnames?.input)}
          />
        ))}
      </StyledInputsWrapper>
      {message && (
        <StyledMessage variant={variant} className={css('message')}>
          {message}
        </StyledMessage>
      )}
    </StyledContainer>
  )
}
