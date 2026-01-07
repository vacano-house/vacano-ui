import {
  StyledContainer,
  StyledHeader,
  StyledIcon,
  StyledLabel,
  StyledTrend,
  StyledValue,
} from './styled'
import { StatusCardProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('status-card')

export const StatusCard = ({
  border = false,
  className,
  classnames,
  icon,
  label,
  ref,
  shadow = false,
  trend,
  trendVariant = 'neutral',
  value,
  ...rest
}: StatusCardProps) => {
  return (
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $border={border}
      $shadow={shadow}
    >
      <StyledHeader>
        <StyledLabel className={css('label', classnames?.label)}>{label}</StyledLabel>
        {icon && <StyledIcon>{icon}</StyledIcon>}
      </StyledHeader>
      <StyledValue className={css('value', classnames?.value)}>{value}</StyledValue>
      {trend && (
        <StyledTrend className={css('trend', classnames?.trend)} $variant={trendVariant}>
          {trend}
        </StyledTrend>
      )}
    </StyledContainer>
  )
}
