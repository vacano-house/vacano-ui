import { formatDate } from './helpers'
import { StyledContainer, StyledHash, StyledSeparator } from './styled'
import { DateRangeProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('date-range')

export const DateRange = ({
  className,
  classnames,
  from,
  locale = 'en',
  presentLabel = 'Present Time',
  ref,
  to,
  ...rest
}: DateRangeProps) => (
  <StyledContainer {...rest} ref={ref} className={css('container', className)}>
    <StyledHash className={css('hash', classnames?.hash)}>#</StyledHash>
    <span className={css('from', classnames?.from)}>{formatDate(from, locale)}</span>
    <StyledSeparator className={css('separator', classnames?.separator)}>&mdash;</StyledSeparator>
    <span className={css('to', classnames?.to)}>{to ? formatDate(to, locale) : presentLabel}</span>
  </StyledContainer>
)
