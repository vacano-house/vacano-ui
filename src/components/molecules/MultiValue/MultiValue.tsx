import { getMultiValueChipVariant } from './helpers'
import { StyledChips, StyledContainer, StyledLabel } from './styled'
import { MultiValueProps } from './types'
import { Chip } from '../../atoms'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('multi-value')

export const MultiValue = ({
  className,
  classnames,
  count = Infinity,
  disabled,
  items,
  label,
  onChange,
  ref,
  variant = 'normal',
  ...rest
}: MultiValueProps) => {
  const chipVariant = getMultiValueChipVariant(variant)
  const visibleItems = items.slice(0, count)
  const hiddenCount = items.length - visibleItems.length

  const handleDelete = (value: string) => {
    if (disabled) return
    onChange?.(items.filter((item) => item.value !== value))
  }

  return (
    <StyledContainer {...rest} ref={ref} className={css('container', className)}>
      {label && (
        <StyledLabel variant={variant} className={css('label', classnames?.label)}>
          {label}
        </StyledLabel>
      )}
      <StyledChips
        className={css('chips', classnames?.chips)}
        $variant={variant}
        $disabled={Boolean(disabled)}
      >
        {visibleItems.map((item) => (
          <Chip
            key={item.value}
            className={css('chip', classnames?.chip)}
            variant={chipVariant}
            deletable={!item.disabled}
            onDelete={() => handleDelete(item.value)}
          >
            {item.label}
          </Chip>
        ))}
        {hiddenCount > 0 && (
          <Chip className={css('more', classnames?.more)} variant="gray">
            +{hiddenCount}
          </Chip>
        )}
      </StyledChips>
    </StyledContainer>
  )
}
