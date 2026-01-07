import { StyledSpinner } from './styled'
import { SpinnerProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('spinner')

export const Spinner = ({
  'aria-label': ariaLabel = 'Loading',
  className,
  ref,
  size = 'md',
  ...rest
}: SpinnerProps) => {
  return (
    <StyledSpinner
      {...rest}
      ref={ref}
      className={css('container', className)}
      role="status"
      aria-label={ariaLabel}
      $size={size}
    />
  )
}
