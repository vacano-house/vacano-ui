import { StyledSkeleton } from './styled'
import { SkeletonProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('skeleton')

export const Skeleton = ({
  animation = 'pulse',
  circle = false,
  className,
  height = 16,
  radius = 'md',
  ref,
  width = '100%',
  ...rest
}: SkeletonProps) => (
  <StyledSkeleton
    {...rest}
    ref={ref}
    className={css('container', className)}
    $animation={animation}
    $circle={circle}
    $height={height}
    $radius={radius}
    $width={width}
  />
)
