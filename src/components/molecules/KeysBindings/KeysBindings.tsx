import { useMemo } from 'react'

import { Keyboard, Tools } from '../../../lib/utils'
import { KeySymbol } from '../../atoms'
import { StyledKeyBindings } from './styled'
import { KeysBindingsProps } from './types'

const css = Tools.classNameGetter('key-bindings')
export const KeysBindings = ({
  className,
  classnames,
  keys,
  variant,
  ...rest
}: KeysBindingsProps) => {
  const symbols = useMemo(() => {
    return Keyboard.getKeySymbols(keys)
  }, [keys])

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
