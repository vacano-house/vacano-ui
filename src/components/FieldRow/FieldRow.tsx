import { StyledFieldRow } from './styled'
import { FieldRowProps } from './types'
import { newClassNameGetter } from '../../lib'

const css = newClassNameGetter('field-row')
export const FieldRow = ({ className, gap = 16, ref, ...rest }: FieldRowProps) => {
  return <StyledFieldRow {...rest} ref={ref} $gap={gap} className={css('container', className)} />
}
