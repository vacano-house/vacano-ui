import {
  StyledContainer,
  StyledContent,
  StyledDescription,
  StyledHeader,
  StyledTitle,
} from './styled'
import { PanelProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('panel')

export const Panel = ({
  children,
  className,
  classnames,
  description,
  ref,
  title,
  variant = 'light',
  ...rest
}: PanelProps) => {
  const hasHeader = title || description

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} $variant={variant}>
      {hasHeader && (
        <StyledHeader>
          {title && (
            <StyledTitle className={css('title', classnames?.title)} $variant={variant}>
              {title}
            </StyledTitle>
          )}
          {description && (
            <StyledDescription
              className={css('description', classnames?.description)}
              $variant={variant}
            >
              {description}
            </StyledDescription>
          )}
        </StyledHeader>
      )}
      <StyledContent className={css('content', classnames?.content)}>{children}</StyledContent>
    </StyledContainer>
  )
}
