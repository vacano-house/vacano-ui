import { StyledBadge, StyledContainer } from './styled'
import { BadgeProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('badge')

export const Badge = ({
  children,
  className,
  classnames,
  color = 'default',
  content,
  dot = false,
  invisible = false,
  placement = 'top-right',
  ref,
  shape = 'rectangle',
  showOutline = true,
  size = 'md',
  variant = 'solid',
  ...rest
}: BadgeProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {children}
      <StyledBadge
        className={css('badge', classnames?.badge)}
        $color={color}
        $dot={dot}
        $invisible={invisible}
        $placement={placement}
        $shape={shape}
        $showOutline={showOutline}
        $size={size}
        $variant={variant}
      >
        {!dot && content}
      </StyledBadge>
    </StyledContainer>
  )
}
