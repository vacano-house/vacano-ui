import { classNameGetter } from '../../../lib/utils'
import { DEFAULT_LOADER_PROP_ARIA_LABEL, DEFAULT_LOADER_PROP_SIZE } from './constants'
import { StyledLoaderContainer, StyledLoaderDot } from './styled'
import type { LoaderProps } from './types'

const css = classNameGetter('loader')

export const Loader = ({
  'aria-label': ariaLabel = DEFAULT_LOADER_PROP_ARIA_LABEL,
  className,
  classnames,
  size = DEFAULT_LOADER_PROP_SIZE,
  ...rest
}: LoaderProps) => {
  return (
    <StyledLoaderContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      role="status"
      aria-label={ariaLabel}
      $size={size}
    >
      <StyledLoaderDot $size={size} $delay={0} />
      <StyledLoaderDot $size={size} $delay={0.15} />
      <StyledLoaderDot $size={size} $delay={0.3} />
    </StyledLoaderContainer>
  )
}
