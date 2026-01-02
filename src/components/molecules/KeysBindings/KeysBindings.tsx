import { useMemo } from 'react'

import { StyledKeyBindings } from './styled'
import { KeysBindingsProps } from './types'
import { KeySymbol } from '../../atoms'
import { getKeySymbols, newClassNameGetter } from '../../../lib'

const css = newClassNameGetter('key-bindings')
export const KeysBindings = ({
  className,
  classnames,
  keys,
  variant,
  ...rest
}: KeysBindingsProps) => {
  const symbols = useMemo(() => getKeySymbols(keys), [keys])
  if (symbols.length === 0) {
    return null
  }

  return (
    <StyledKeyBindings {...rest} className={css('container', className)}>
      {symbols.map((item) => (
        <KeySymbol
          key={item}
          symbol={item}
          className={css('item', classnames?.item)}
          variant={variant}
        />
      ))}
    </StyledKeyBindings>
  )
}
