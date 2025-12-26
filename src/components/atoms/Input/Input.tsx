import { cloneElement, isValidElement } from 'react'

import { useTheme } from '@emotion/react'

import { AnimatedIcon } from '../../../icons/Animated/AnimatedIcon'
import type { AnimatedIconName } from '../../../icons/Animated/types'
import { classNameGetter } from '../../../lib/utils'
import { INPUT_PASSWORD_ICON_PATHS } from './constants'
import {
  StyledInputContainer,
  StyledInputField,
  StyledInputIconWrapper,
  StyledInputLabel,
  StyledInputToggle,
  StyledInputToggleIcon,
  StyledInputWrapper,
} from './styled'
import type { InputProps } from './types'
import { useInput } from './useInput'

const css = classNameGetter('input')

const ICON_SIZE = 16

export const Input = ({
  className,
  classnames,
  fullWidth,
  icon,
  iconRef,
  label,
  onChange,
  onBlur,
  onFocus,
  ref,
  state,
  type,
  value,
  ...rest
}: InputProps) => {
  const theme = useTheme()
  const {
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
  } = useInput({ icon, iconRef, onBlur, onFocus, type, value })

  const iconColor = rest.disabled ? theme.input.icon.disabled.color : theme.input.icon.color

  const passwordIconPaths = isPasswordVisible
    ? INPUT_PASSWORD_ICON_PATHS.visible
    : INPUT_PASSWORD_ICON_PATHS.hidden

  const renderIcon = () => {
    if (!icon) {
      return null
    }

    if (isAnimatedIcon) {
      return (
        <AnimatedIcon
          name={icon as AnimatedIconName}
          size={ICON_SIZE}
          ref={effectiveIconRef}
          disableOnHover
          color={iconColor}
        />
      )
    }

    if (isLucideIcon && isValidElement(icon)) {
      return cloneElement(icon, { size: ICON_SIZE } as Record<string, unknown>)
    }

    return null
  }

  return (
    <StyledInputContainer
      className={css('container', className, classnames?.container)}
      $fullWidth={fullWidth}
    >
      {label && (
        <StyledInputLabel className={css('label', classnames?.label)} $state={state}>
          {label}
        </StyledInputLabel>
      )}
      <StyledInputWrapper
        className={css('wrapper', classnames?.wrapper)}
        $state={state}
        $disabled={rest.disabled}
      >
        {icon && (
          <StyledInputIconWrapper
            className={css('icon', classnames?.icon)}
            $disabled={rest.disabled}
            $state={state}
          >
            {renderIcon()}
          </StyledInputIconWrapper>
        )}
        <StyledInputField
          {...rest}
          ref={ref}
          className={css('input', classnames?.input)}
          $state={state}
          type={inputType}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {isPassword && (
          <StyledInputToggle
            type="button"
            className={css('toggle', classnames?.toggle)}
            $state={state}
            $disabled={rest.disabled}
            onMouseDown={handlePasswordMouseDown}
            onMouseUp={handlePasswordMouseUp}
            onMouseLeave={handlePasswordMouseUp}
            tabIndex={-1}
          >
            <StyledInputToggleIcon viewBox="0 0 16 16" fill="currentColor">
              {passwordIconPaths.map((path) => (
                <path key={path} d={path} />
              ))}
            </StyledInputToggleIcon>
          </StyledInputToggle>
        )}
      </StyledInputWrapper>
    </StyledInputContainer>
  )
}
