import { Tooling } from '../../../lib/utils'
import { StyledKeySymbol } from './styled'
import { KeySymbolProps } from './types'

const css = Tooling.newClassNameGetter('key-symbol')
export const KeySymbol = ({ className, symbol, variant = 'light', ...rest }: KeySymbolProps) => {
  if (!symbol) {
    return null
  }

  return (
    <StyledKeySymbol {...rest} className={css('container', className)} $variant={variant}>
      {symbol}
    </StyledKeySymbol>
  )
}
