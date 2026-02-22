import { StyledCard } from './styled'
import { CardProps, CardShadow } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('card')

export const Card = ({
  blurred = false,
  border = false,
  children,
  className,
  disabled = false,
  footerBlurred = false,
  fullWidth = false,
  hoverable = false,
  pressable = false,
  radius = 'lg',
  ref,
  shadow = 'md',
  ...rest
}: CardProps) => {
  const resolvedShadow: CardShadow = typeof shadow === 'boolean' ? (shadow ? 'md' : 'none') : shadow

  return (
    <StyledCard
      {...rest}
      ref={ref}
      className={css('container', className)}
      $blurred={blurred}
      $border={border}
      $disabled={disabled}
      $footerBlurred={footerBlurred}
      $fullWidth={fullWidth}
      $hoverable={hoverable}
      $pressable={pressable}
      $radius={radius}
      $shadow={resolvedShadow}
      tabIndex={pressable && !disabled ? 0 : undefined}
      role={pressable ? 'button' : undefined}
    >
      {children}
    </StyledCard>
  )
}
