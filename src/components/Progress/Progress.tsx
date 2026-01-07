import { StyledBar, StyledTrack } from './styled'
import { ProgressProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('progress')

export const Progress = ({
  value,
  size = 'default',
  className,
  classnames,
  ref,
  ...rest
}: ProgressProps) => {
  return (
    <StyledTrack
      {...rest}
      ref={ref}
      $size={size}
      className={css('track', className, classnames?.track)}
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <StyledBar $size={size} $value={value} className={css('bar', classnames?.bar)} />
    </StyledTrack>
  )
}
