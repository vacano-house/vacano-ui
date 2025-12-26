import { classNameGetter } from '../../../lib/utils'
import { DEFAULT_ANIMATED_DOTS_PROP_ARIA_LABEL, DEFAULT_ANIMATED_DOTS_PROP_SIZE } from './constants'
import { StyledAnimatedDot, StyledAnimatedDotsContainer } from './styled'
import type { AnimatedDotsProps } from './types'

const css = classNameGetter('animated-dots')

export const AnimatedDots = ({
  'aria-label': ariaLabel = DEFAULT_ANIMATED_DOTS_PROP_ARIA_LABEL,
  className,
  classnames,
  size = DEFAULT_ANIMATED_DOTS_PROP_SIZE,
  ...rest
}: AnimatedDotsProps) => {
  return (
    <StyledAnimatedDotsContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      role="status"
      aria-label={ariaLabel}
      $size={size}
    >
      <StyledAnimatedDot $size={size} $delay={0} />
      <StyledAnimatedDot $size={size} $delay={0.15} />
      <StyledAnimatedDot $size={size} $delay={0.3} />
    </StyledAnimatedDotsContainer>
  )
}
