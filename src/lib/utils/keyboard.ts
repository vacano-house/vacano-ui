import { getOperatingSystem } from './platform'
import { KEY_SYMBOLS } from '../constants'
import { KeyboardEventKey } from '../types'

export const getKeySymbols = (keys?: KeyboardEventKey[]): string[] => {
  if (!keys) {
    return []
  }

  const os = getOperatingSystem()

  return keys.map((key) => {
    const symbol = KEY_SYMBOLS[key]

    if (!symbol) {
      return key
    }

    return os === 'macos' ? symbol.mac : symbol.other
  })
}
