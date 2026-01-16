import type { NotificationAction, NotificationState } from './types'

export const notificationReducer = (
  state: NotificationState,
  action: NotificationAction,
): NotificationState => {
  switch (action.type) {
    case 'ADD_NOTIFICATION': {
      const newNotification = action.payload

      // If no current notification, show immediately
      if (!state.current) {
        return {
          ...state,
          current: newNotification,
        }
      }

      // Otherwise add to queue
      return {
        ...state,
        queue: [...state.queue, newNotification],
      }
    }

    case 'REMOVE_CURRENT': {
      return {
        ...state,
        current: null,
      }
    }

    case 'SHOW_NEXT': {
      const nextNotification = state.queue[0]

      if (!nextNotification) {
        return state
      }

      return {
        current: nextNotification,
        queue: state.queue.slice(1),
      }
    }

    default:
      return state
  }
}

export const initialNotificationState: NotificationState = {
  current: null,
  queue: [],
}
