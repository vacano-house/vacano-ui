import { KeyboardEventKey } from '../types'

const isMac =
  typeof navigator !== 'undefined' &&
  (('userAgentData' in navigator &&
    /macOS/i.test((navigator.userAgentData as { platform?: string })?.platform ?? '')) ||
    /Mac|iPhone|iPad|iPod/i.test(navigator.userAgent))

const KEY_SYMBOLS: Record<string, string | { mac: string; other: string }> = {
  // Modifiers
  Meta: { mac: '⌘', other: 'Win' },
  Control: { mac: '⌃', other: 'Ctrl' },
  Alt: { mac: '⌥', other: 'Alt' },
  Shift: '⇧',

  // Navigation
  ArrowUp: '↑',
  ArrowDown: '↓',
  ArrowLeft: '←',
  ArrowRight: '→',
  Home: '↖',
  End: '↘',
  PageUp: '⇞',
  PageDown: '⇟',

  // Whitespace & Enter
  ' ': '␣',
  Enter: 'Enter',
  Tab: '⇥',

  // Editing
  Backspace: '⌫',
  Delete: '⌦',
  Escape: 'Esc',
  Insert: 'Ins',

  // System
  CapsLock: '⇪',
  NumLock: '⇭',
}

export const getKeySymbols = (keys: KeyboardEventKey[]): string[] => {
  return keys.map((key) => {
    const symbol = KEY_SYMBOLS[key]

    if (!symbol) {
      return key
    }

    if (typeof symbol === 'string') {
      return symbol
    }

    return isMac ? symbol.mac : symbol.other
  })
}
