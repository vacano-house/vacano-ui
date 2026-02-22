import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledFooter,
  StyledGrid,
  StyledHeader,
  StyledIconBox,
  StyledInner,
  StyledLogo,
  StyledTitle,
} from './styled'
import { type ShellScreenProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('shell-screen')

export const ShellScreen = ({
  children,
  className,
  classnames,
  description,
  footer,
  gridSize = 64,
  icon,
  logo,
  ref,
  title,
  ...rest
}: ShellScreenProps) => {
  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      <StyledGrid $size={gridSize} className={css('grid', classnames?.grid)} />

      <StyledInner>
        {logo && <StyledLogo>{logo}</StyledLogo>}

        {icon && <StyledIconBox className={css('icon')}>{icon}</StyledIconBox>}

        {(title || description) && (
          <StyledHeader className={css('header', classnames?.header)}>
            {title && (
              <StyledTitle className={css('title', classnames?.title)}>{title}</StyledTitle>
            )}
            {description && (
              <StyledDescription className={css('description', classnames?.description)}>
                {description}
              </StyledDescription>
            )}
          </StyledHeader>
        )}

        {children && (
          <StyledContent className={css('content', classnames?.content)}>{children}</StyledContent>
        )}

        {footer && (
          <StyledFooter className={css('footer', classnames?.footer)}>{footer}</StyledFooter>
        )}
      </StyledInner>
    </StyledContainer>
  )
}
