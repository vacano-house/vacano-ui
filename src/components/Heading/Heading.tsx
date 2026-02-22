import { StyledHeading } from './styled'
import { HeadingProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('heading')

export const Heading = ({ as, children, className, level = 3, ref, ...rest }: HeadingProps) => (
  <StyledHeading
    {...rest}
    as={`h${as ?? level}` as 'h1'}
    ref={ref}
    className={css('container', className)}
    $level={level}
  >
    {children}
  </StyledHeading>
)
