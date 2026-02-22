import { StyledContainer, StyledDelete, StyledIcon, StyledLabel } from './styled'
import { ChipProps } from './types'
import { X } from '../../icons/Lucide'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('chip')

export const Chip = ({
  children,
  className,
  classnames,
  deletable,
  icon,
  onDelete,
  ref,
  variant = 'gray',
  ...rest
}: ChipProps) => {
  return (
    <StyledContainer
      {...rest}
      ref={ref}
      className={css('container', className)}
      $variant={variant}
      $deletable={Boolean(deletable)}
    >
      {icon && <StyledIcon className={css('icon', classnames?.icon)}>{icon}</StyledIcon>}
      <StyledLabel className={css('label', classnames?.label)}>{children}</StyledLabel>
      {deletable && (
        <StyledDelete
          type="button"
          className={css('delete', classnames?.delete)}
          $variant={variant}
          onClick={onDelete}
        >
          <X />
        </StyledDelete>
      )}
    </StyledContainer>
  )
}
