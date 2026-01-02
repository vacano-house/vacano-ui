import { StyledKeySymbol } from './styled'
import { KeySymbolProps } from './types'
import { newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('key-symbol')
export const KeySymbol = ({
  className,
  ref,
  symbol,
  variant = 'light',
  ...rest
}: KeySymbolProps) => {
  if (!symbol) {
    return null
  }

  return (
    <StyledKeySymbol {...rest} ref={ref} className={css('container', className)} $variant={variant}>
      {symbol}
    </StyledKeySymbol>
  )
}
