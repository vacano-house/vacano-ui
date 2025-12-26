import { cloneElement, isValidElement } from 'react'

import { useTheme } from '@emotion/react'

import { AnimatedIcon } from '../../../icons/Animated/AnimatedIcon'
import type { AnimatedIconName } from '../../../icons/Animated/types'
import { classNameGetter } from '../../../lib/utils'
import { AnimatedDots } from '../AnimatedDots/AnimatedDots'
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

const ICON_SIZE = 18

export const Button = ({
  char,
  children,
  className,
  classnames,
  disabled,
  fullWidth,
  icon,
  iconRef,
  loading,
  onClick,
  variant = DEFAULT_BUTTON_PROP_VARIANT,
  ...rest
}: ButtonProps) => {
  const theme = useTheme()
  const {
    isAnimatedIcon,
    isLucideIcon,
    iconOnly,
    showSpinner,
    showDots,
    effectiveIconRef,
    handleMouseEnter,
    handleMouseLeave,
    handleClick,
  } = useButton(icon, iconRef, children, char, loading, disabled, onClick)

  const iconColor = disabled
    ? theme.button[variant].disabled.color
    : theme.button[variant].icon.color

  const renderIcon = () => {
    if (!icon) {
      return null
    }

    if (isAnimatedIcon) {
      return (
        <StyledButtonIconWrapper
          className={css('icon', classnames?.icon)}
          $variant={variant}
          $loading={loading}
        >
          <AnimatedIcon
            name={icon as AnimatedIconName}
            size={ICON_SIZE}
            ref={effectiveIconRef}
            disableOnHover
            color={iconColor}
          />
        </StyledButtonIconWrapper>
      )
    }

    if (isLucideIcon && isValidElement(icon)) {
      return (
        <StyledButtonIconWrapper
          className={css('icon', classnames?.icon)}
          $variant={variant}
          $loading={loading}
        >
          {cloneElement(icon, { size: ICON_SIZE } as Record<string, unknown>)}
        </StyledButtonIconWrapper>
      )
    }

    return null
  }

  const renderLoader = () => {
    if (showSpinner) {
      return (
        <StyledButtonLoader className={css('loader', classnames?.loader)}>
          <Spinner size={ICON_SIZE} />
        </StyledButtonLoader>
      )
    }

    if (showDots) {
      return (
        <StyledButtonLoader className={css('loader', classnames?.loader)}>
          <AnimatedDots size={4} />
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
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
