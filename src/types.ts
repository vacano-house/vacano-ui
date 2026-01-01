import type { Ref } from 'react'

export type VacanoComponentClassNames<T> = T

export type VacanoComponentProps<
  E extends HTMLElement | null,
  T extends Record<string, string> = Record<string, never>,
> = {
  'data-test-id'?: string
  className?: string
  classnames?: VacanoComponentClassNames<T>
  ref?: Ref<E>
}

export type VacanoComponentSize = 'compact' | 'default'

export type VacanoInteractiveElementState = {
  active: string
  disabled: string
  hover: string
  static: string
}

/**
 * Keyboard key values based on KeyboardEvent.key
 * @see https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values
 */
export type KeyboardEventKey =
  // Modifiers
  | 'Meta'
  | 'Control'
  | 'Alt'
  | 'Shift'
  // Letters
  | 'A'
  | 'B'
  | 'C'
  | 'D'
  | 'E'
  | 'F'
  | 'G'
  | 'H'
  | 'I'
  | 'J'
  | 'K'
  | 'L'
  | 'M'
  | 'N'
  | 'O'
  | 'P'
  | 'Q'
  | 'R'
  | 'S'
  | 'T'
  | 'U'
  | 'V'
  | 'W'
  | 'X'
  | 'Y'
  | 'Z'
  // Digits
  | '0'
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  // Function keys
  | 'F1'
  | 'F2'
  | 'F3'
  | 'F4'
  | 'F5'
  | 'F6'
  | 'F7'
  | 'F8'
  | 'F9'
  | 'F10'
  | 'F11'
  | 'F12'
  // Navigation
  | 'ArrowUp'
  | 'ArrowDown'
  | 'ArrowLeft'
  | 'ArrowRight'
  | 'Home'
  | 'End'
  | 'PageUp'
  | 'PageDown'
  // Whitespace & Enter
  | ' '
  | 'Enter'
  | 'Tab'
  // Editing
  | 'Backspace'
  | 'Delete'
  | 'Insert'
  | 'Escape'
  // Punctuation & Symbols
  | '`'
  | '-'
  | '='
  | '['
  | ']'
  | '\\'
  | ';'
  | "'"
  | ','
  | '.'
  | '/'
  // Numpad
  | 'NumLock'
  | 'NumpadEnter'
  | 'NumpadAdd'
  | 'NumpadSubtract'
  | 'NumpadMultiply'
  | 'NumpadDivide'
  | 'NumpadDecimal'
  | 'Numpad0'
  | 'Numpad1'
  | 'Numpad2'
  | 'Numpad3'
  | 'Numpad4'
  | 'Numpad5'
  | 'Numpad6'
  | 'Numpad7'
  | 'Numpad8'
  | 'Numpad9'
  // System
  | 'CapsLock'
  | 'ScrollLock'
  | 'Pause'
  | 'PrintScreen'
  | 'ContextMenu'
