import { classNameGetter } from '../../../lib/utils'
import { DEFAULT_SPINNER_PROP_ARIA_LABEL, DEFAULT_SPINNER_PROP_SIZE } from './constants'
import { StyledSpinnerContainer } from './styled'
import type { SpinnerProps } from './types'

const css = classNameGetter('spinner')

export const Spinner = ({
  'aria-label': ariaLabel = DEFAULT_SPINNER_PROP_ARIA_LABEL,
  className,
  classnames,
  size = DEFAULT_SPINNER_PROP_SIZE,
  ...rest
}: SpinnerProps) => {
  return (
    <StyledSpinnerContainer
      {...rest}
      className={css('container', className, classnames?.container)}
      role="status"
      aria-label={ariaLabel}
      $size={size}
    />
  )
}
