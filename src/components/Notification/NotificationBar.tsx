import { useEffect, useState } from 'react'

import {
  StyledNotificationBar,
  StyledNotificationCloseButton,
  StyledNotificationMessage,
  StyledNotificationWrapper,
} from './styled'
import type { Notification } from './types'
import { X } from '../../icons/Lucide'

type NotificationBarProps = {
  notification: Notification
  onRemove: () => void
  onAnimationEnd: () => void
}

export const NotificationBar = ({
  notification,
  onRemove,
  onAnimationEnd,
}: NotificationBarProps) => {
  const [isExiting, setIsExiting] = useState(false)

  const handleRemove = () => {
    setIsExiting(true)
  }

  const handleAnimationEnd = () => {
    if (isExiting) {
      onRemove()
      onAnimationEnd()
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      handleRemove()
    }, notification.duration)

    return () => clearTimeout(timer)
  }, [notification.duration, notification.id])

  return (
    <StyledNotificationWrapper>
      <StyledNotificationBar
        $variant={notification.variant}
        $isExiting={isExiting}
        onAnimationEnd={handleAnimationEnd}
      >
        <StyledNotificationMessage>{notification.message}</StyledNotificationMessage>
        <StyledNotificationCloseButton onClick={handleRemove}>
          <X style={{ width: 18, height: 18 }} />
        </StyledNotificationCloseButton>
      </StyledNotificationBar>
    </StyledNotificationWrapper>
  )
}
