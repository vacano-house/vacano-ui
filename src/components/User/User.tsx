import { StyledContainer, StyledDescription, StyledInfo, StyledName } from './styled'
import { UserProps } from './types'
import { Avatar } from '../Avatar'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('user')

export const User = ({
  avatarPosition = 'left',
  avatarProps,
  className,
  classnames,
  description,
  name,
  ref,
  src,
  ...rest
}: UserProps) => {
  const isRight = avatarPosition === 'right'

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)} $reverse={isRight}>
      <Avatar
        size="sm"
        {...avatarProps}
        name={typeof name === 'string' ? name : undefined}
        src={src ?? avatarProps?.src}
        className={css('avatar', classnames?.avatar)}
      />
      <StyledInfo $align={isRight ? 'right' : 'left'}>
        <StyledName className={css('name', classnames?.name)}>{name}</StyledName>
        {description && (
          <StyledDescription className={css('description', classnames?.description)}>
            {description}
          </StyledDescription>
        )}
      </StyledInfo>
    </StyledContainer>
  )
}
