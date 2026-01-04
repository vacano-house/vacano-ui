import { keyframes } from '@emotion/react'

import { KeyboardEventKey } from './types'

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const

export const COLORS = {
  black: '#212529',
  white: '#ffffff',
  red: '#C1121F',
  'steel-blue': '#0582ca',
  'iron-grey': '#495057',
  'baltic-blue': '#1e6091',
} as const

export const KEYFRAMES = {
  rotate: keyframes`
    to {
      transform: rotate(1turn);
    }
  `,
  fadeIn: keyframes`
    from { opacity: 0; }
    to { opacity: 1; }
  `,
  fadeOut: keyframes`
    from { opacity: 1; }
    to { opacity: 0; }
  `,
  slideInLeft: keyframes`
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
  `,
  slideOutLeft: keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(-100%); }
  `,
  slideInRight: keyframes`
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  `,
  slideOutRight: keyframes`
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  `,
  slideInTop: keyframes`
    from { transform: translateY(-100%); }
    to { transform: translateY(0); }
  `,
  slideOutTop: keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(-100%); }
  `,
  slideInBottom: keyframes`
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  `,
  slideOutBottom: keyframes`
    from { transform: translateY(0); }
    to { transform: translateY(100%); }
  `,
  scaleIn: keyframes`
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
  `,
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
