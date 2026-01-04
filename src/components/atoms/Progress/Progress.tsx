import { StyledFill, StyledTrack } from './styled'
import { ProgressProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('progress')

export const Progress = ({
  animated = true,
  className,
  classnames,
  ref,
  value,
  ...rest
}: ProgressProps) => {
  return (
    <StyledTrack {...rest} ref={ref} className={css('track', className, classnames?.track)}>
      <StyledFill className={css('fill', classnames?.fill)} $value={value} $animated={animated} />
    </StyledTrack>
  )
}
