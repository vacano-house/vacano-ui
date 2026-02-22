import { StyledBody, StyledContainer, StyledDescription, StyledIcon, StyledTitle } from './styled'
import { type AlertProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('alert')

export const Alert = ({
  className,
  classnames,
  description,
  icon,
  radius = 'lg',
  ref,
  title,
  variant = 'normal',
  ...rest
}: AlertProps) => {
  return (
    <StyledContainer
      {...rest}
      ref={ref}
      role="alert"
      className={css('container', className)}
      $radius={radius}
      $center={!description}
    >
      {icon && (
        <StyledIcon $variant={variant} className={css('icon', classnames?.icon)}>
          <span>{icon}</span>
        </StyledIcon>
      )}

      <StyledBody>
        {title && <StyledTitle className={css('title', classnames?.title)}>{title}</StyledTitle>}
        {description && (
          <StyledDescription className={css('description', classnames?.description)}>
            {description}
          </StyledDescription>
        )}
      </StyledBody>
    </StyledContainer>
  )
}
