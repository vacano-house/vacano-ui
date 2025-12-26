import { useMemo, useState, type FocusEventHandler, type MouseEventHandler } from 'react'

import type { InputProps, InputType } from './types'

type UseInputProps = Pick<InputProps, 'onBlur' | 'onFocus' | 'type' | 'value'>

type UseInputReturn = {
  inputType: InputType | undefined
  isPassword: boolean
  isPasswordVisible: boolean
  handleBlur: FocusEventHandler<HTMLInputElement>
  handleFocus: FocusEventHandler<HTMLInputElement>
  handlePasswordMouseDown: MouseEventHandler<HTMLButtonElement>
  handlePasswordMouseUp: MouseEventHandler<HTMLButtonElement>
}

export const useInput = ({ onBlur, onFocus, type, value }: UseInputProps): UseInputReturn => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const isPassword = type === 'password'

  const inputType = useMemo(() => {
    if (isPassword && isPasswordVisible) {
      return 'text'
    }

    return type
  }, [isPassword, isPasswordVisible, type])

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    onFocus?.(e)
  }

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur?.(e)
  }

  const handlePasswordMouseDown: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()

    if (value) {
      setIsPasswordVisible(true)
    }
  }

  const handlePasswordMouseUp: MouseEventHandler<HTMLButtonElement> = () => {
    setIsPasswordVisible(false)
  }

  return {
    inputType,
    isPassword,
    isPasswordVisible,
    handleBlur,
    handleFocus,
    handlePasswordMouseDown,
    handlePasswordMouseUp,
  }
}
