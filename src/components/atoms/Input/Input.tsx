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

export const Input = ({
  className,
  classnames,
  fullWidth,
  icon,
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
  const {
    inputType,
    isPassword,
    isPasswordVisible,
    handleBlur,
    handleFocus,
    handlePasswordMouseDown,
    handlePasswordMouseUp,
  } = useInput({ onBlur, onFocus, type, value })

  const passwordIconPaths = isPasswordVisible
    ? INPUT_PASSWORD_ICON_PATHS.visible
    : INPUT_PASSWORD_ICON_PATHS.hidden

  const renderIcon = () => {
    if (!icon) {
      return null
    }

    return icon
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
