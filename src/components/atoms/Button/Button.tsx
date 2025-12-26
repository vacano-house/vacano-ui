import { classNameGetter } from '../../../lib/utils'
import { Loader } from '../Loader/Loader'
import { Spinner } from '../Spinner/Spinner'
import { DEFAULT_BUTTON_PROP_VARIANT } from './constants'
import {
  StyledButtonChar,
  StyledButtonContainer,
  StyledButtonContent,
  StyledButtonIconWrapper,
  StyledButtonLoader,
  StyledButtonText,
} from './styled'
import type { ButtonProps } from './types'
import { useButton } from './useButton'

const css = classNameGetter('button')

const SPINNER_SIZE = 18

export const Button = ({
  char,
  children,
  className,
  classnames,
  disabled,
  fullWidth,
  icon,
  loading,
  onClick,
  variant = DEFAULT_BUTTON_PROP_VARIANT,
  ...rest
}: ButtonProps) => {
  const { iconOnly, showSpinner, showDots, handleClick } = useButton(
    icon,
    children,
    char,
    loading,
    onClick,
  )

  const renderIcon = () => {
    if (!icon) {
      return null
    }

    return (
      <StyledButtonIconWrapper
        className={css('icon', classnames?.icon)}
        $variant={variant}
        $loading={loading}
      >
        {icon}
      </StyledButtonIconWrapper>
    )
  }

  const renderLoader = () => {
    if (showSpinner) {
      return (
        <StyledButtonLoader className={css('loader', classnames?.loader)}>
          <Spinner size={SPINNER_SIZE} />
        </StyledButtonLoader>
      )
    }

    if (showDots) {
      return (
        <StyledButtonLoader className={css('loader', classnames?.loader)}>
          <Loader size={4} />
        </StyledButtonLoader>
      )
    }

    return null
  }

  return (
    <StyledButtonContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      disabled={disabled || loading}
      onClick={handleClick}
      $variant={variant}
      $fullWidth={fullWidth}
      $loading={loading}
      $iconOnly={iconOnly}
    >
      <StyledButtonContent className={css('content', classnames?.content)}>
        {renderIcon()}
        {renderLoader()}
        {children && (
          <StyledButtonText className={css('text', classnames?.text)} $loading={loading}>
            {children}
          </StyledButtonText>
        )}
        {char && (
          <StyledButtonChar
            className={css('char', classnames?.char)}
            $variant={variant}
            $loading={loading}
          >
            {char}
          </StyledButtonChar>
        )}
      </StyledButtonContent>
    </StyledButtonContainer>
  )
}
