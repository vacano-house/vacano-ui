import { keyframes } from '@emotion/react'

import { KeyboardEventKey } from './types'

export enum BREAKPOINTS {
  'sm' = 640,
  'md' = 768,
  'lg' = 1024,
  'xl' = 1280,
  '2xl' = 1536,
}

export const enum COLORS {
  'black' = '#212529',
  'white' = '#ffffff',
  'red' = '#C1121F',
  'steel-blue' = '#0582ca',
  'iron-grey' = '#495057',
}

export const KEYFRAMES = {
  rotate: keyframes`
  to {
    transform: rotate(1turn);
  }`,
}

export const KEY_SYMBOLS: Partial<Record<KeyboardEventKey, { mac: string; other: string }>> = {
  // Modifiers
  Meta: { mac: '⌘', other: 'Win' },
  Control: { mac: '⌃', other: 'Ctrl' },
  Alt: { mac: '⌥', other: 'Alt' },
  Shift: { mac: '⇧', other: '⇧' },

  // Navigation
  ArrowUp: { mac: '↑', other: '↑' },
  ArrowDown: { mac: '↓', other: '↓' },
  ArrowLeft: { mac: '←', other: '←' },
  ArrowRight: { mac: '→', other: '→' },
  Home: { mac: '↖', other: '↖' },
  End: { mac: '↘', other: '↘' },
  PageUp: { mac: '⇞', other: '⇞' },
  PageDown: { mac: '⇟', other: '⇟' },

  // Whitespace & Enter
  ' ': { mac: '␣', other: '␣' },
  Enter: { mac: 'Enter', other: 'Enter' },
  Tab: { mac: '⇥', other: '⇥' },

  // Editing
  Backspace: { mac: '⌫', other: '⌫' },
  Delete: { mac: '⌦', other: '⌦' },
  Escape: { mac: 'Esc', other: 'Esc' },
  Insert: { mac: 'Ins', other: 'Ins' },

  // System
  CapsLock: { mac: '⇪', other: '⇪' },
  NumLock: { mac: '⇭', other: '⇭' },
}
