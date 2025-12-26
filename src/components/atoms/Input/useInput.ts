import {
  isValidElement,
  useMemo,
  useRef,
  useState,
  type FocusEventHandler,
  type MouseEventHandler,
  type Ref,
} from 'react'

import type { AnimatedIconRef } from '../../../icons/Animated'
import type { InputProps, InputType } from './types'

type UseInputProps = Pick<InputProps, 'icon' | 'iconRef' | 'onBlur' | 'onFocus' | 'type' | 'value'>

type UseInputReturn = {
  effectiveIconRef: Ref<AnimatedIconRef>
  inputType: InputType | undefined
  isAnimatedIcon: boolean
  isLucideIcon: boolean
  isPassword: boolean
  isPasswordVisible: boolean
  handleBlur: FocusEventHandler<HTMLInputElement>
  handleFocus: FocusEventHandler<HTMLInputElement>
  handlePasswordMouseDown: MouseEventHandler<HTMLButtonElement>
  handlePasswordMouseUp: MouseEventHandler<HTMLButtonElement>
}

export const useInput = ({
  icon,
  iconRef,
  onBlur,
  onFocus,
  type,
  value,
}: UseInputProps): UseInputReturn => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const internalIconRef = useRef<AnimatedIconRef>(null)

  const isPassword = type === 'password'

  const isAnimatedIcon = useMemo(() => {
    return typeof icon === 'string' && icon.startsWith('animated-')
  }, [icon])

  const isLucideIcon = useMemo(() => {
    return isValidElement(icon)
  }, [icon])

  const effectiveIconRef: Ref<AnimatedIconRef> = useMemo(() => {
    return iconRef ?? internalIconRef
  }, [iconRef])

  const inputType = useMemo(() => {
    if (isPassword && isPasswordVisible) {
      return 'text'
    }

    return type
  }, [isPassword, isPasswordVisible, type])

  const handleFocus: FocusEventHandler<HTMLInputElement> = (e) => {
    if (isAnimatedIcon && effectiveIconRef && 'current' in effectiveIconRef) {
      effectiveIconRef.current?.play()
    }

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
    effectiveIconRef,
    inputType,
    isAnimatedIcon,
    isLucideIcon,
    isPassword,
    isPasswordVisible,
    handleBlur,
    handleFocus,
    handlePasswordMouseDown,
    handlePasswordMouseUp,
  }
}
