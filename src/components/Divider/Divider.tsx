import { StyledContainer, StyledLabel, StyledLine } from './styled'
import { DividerProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('divider')

export const Divider = ({
  children,
  className,
  classnames,
  ref,
  spacing = 8,
  ...rest
}: DividerProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} $spacing={spacing}>
      <StyledLine className={css('line', classnames?.line)} />
      {children && (
        <>
          <StyledLabel className={css('label', classnames?.label)}>{children}</StyledLabel>
          <StyledLine className={css('line', classnames?.line)} />
        </>
      )}
    </StyledContainer>
  )
}
