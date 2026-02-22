import { StyledContainer, StyledHash, StyledLabel, StyledLink } from './styled'
import { HashtagProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('hashtag')

export const Hashtag = ({
  children,
  className,
  classnames,
  href,
  onClick,
  ref,
  ...rest
}: HashtagProps) => {
  const content = (
    <>
      <StyledHash className={css('hash', classnames?.hash)}>#</StyledHash>
      <StyledLabel className={css('label', classnames?.label)}>{children}</StyledLabel>
    </>
  )

  if (href) {
    return (
      <StyledLink
        ref={ref as never}
        href={href}
        className={css('container', className)}
        onClick={onClick}
      >
        {content}
      </StyledLink>
    )
  }

  const clickable = Boolean(onClick)

  return (
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $clickable={clickable}
      onClick={onClick}
      role={clickable ? 'button' : undefined}
      tabIndex={clickable ? 0 : undefined}
    >
      {content}
    </StyledContainer>
  )
}
