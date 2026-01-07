import { MAX_VISIBLE_TOASTS } from './constants'
import type { ToastAction, ToastState } from './types'

export const toastReducer = (state: ToastState, action: ToastAction): ToastState => {
  switch (action.type) {
    case 'ADD_TOAST': {
      const newToast = action.payload

      if (state.toasts.length < MAX_VISIBLE_TOASTS) {
        return {
          ...state,
          toasts: [...state.toasts, newToast],
        }
      }

      return {
        ...state,
        queue: [...state.queue, newToast],
      }
    }

    case 'REMOVE_TOAST': {
      const toastId = action.payload
      const updatedToasts = state.toasts.filter((toast) => toast.id !== toastId)
      const nextToast = state.queue[0]

      if (nextToast && updatedToasts.length < MAX_VISIBLE_TOASTS) {
        return {
          toasts: [...updatedToasts, nextToast],
          queue: state.queue.slice(1),
        }
      }

      return {
        ...state,
        toasts: updatedToasts,
      }
    }

    case 'SHOW_NEXT_FROM_QUEUE': {
      const nextToast = state.queue[0]

      if (!nextToast || state.toasts.length >= MAX_VISIBLE_TOASTS) {
        return state
      }

      return {
        toasts: [...state.toasts, nextToast],
        queue: state.queue.slice(1),
      }
    }

    default:
      return state
  }
}

export const initialToastState: ToastState = {
  toasts: [],
  queue: [],
}
