import {
  StyledActions,
  StyledContainer,
  StyledDescription,
  StyledIconArea,
  StyledIconBox,
  StyledRings,
  StyledRingsOuter,
  StyledTitle,
} from './styled'
import { type EmptyStateProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('empty-state')

export const EmptyState = ({
  actions,
  className,
  classnames,
  description,
  icon,
  ref,
  title,
  ...rest
}: EmptyStateProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {icon && (
        <StyledIconArea className={css('icon', classnames?.icon)}>
          <StyledRingsOuter />
          <StyledRings />
          <StyledIconBox>{icon}</StyledIconBox>
        </StyledIconArea>
      )}

      <StyledTitle className={css('title', classnames?.title)}>{title}</StyledTitle>

      {description && (
        <StyledDescription className={css('description', classnames?.description)}>
          {description}
        </StyledDescription>
      )}

      {actions && (
        <StyledActions className={css('actions', classnames?.actions)}>{actions}</StyledActions>
      )}
    </StyledContainer>
  )
}
