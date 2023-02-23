import React, { useState } from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Button } from '@mui/material'

import NotificationItem from '../../components/notifications/NotificationItem'
import NotificationMenu, {
  Props
} from '../../components/notifications/NotificationMenu'
import { notificationsData } from '../mocks/notificationMocks'

export default {
  title: 'notifications/NotificationMenu',
  component: NotificationMenu,
  parameters: {
    badges: ['Added: v2.7.0']
  }
} as Meta<typeof NotificationMenu>

const Template: StoryFn<typeof NotificationMenu> = (args) => {
  const [anchorEl, setAnchorEl] = useState<
    Element | (EventTarget & SVGSVGElement) | null
  >(null)
  return (
    <NotificationMenu
      {...args}
      open={Boolean(anchorEl)}
      anchorEl={anchorEl}
      setAnchorEl={setAnchorEl}
      onClose={() => setAnchorEl(null)}
    />
  )
}

const baseProps: Partial<Props> = {
  title: 'Notificações',
  emptyNotificationText: 'Nenhuma notificação',
  showOnlyUnreadText: 'Mostrar somente não lidas',
  markAllAsReadText: 'Marcar todas como lidas',
  notifications: notificationsData,
  NotificationItem: NotificationItem,
  handleNotifications: (ids) =>
    alert('Ids das notificações marcadas como lidas: ' + ids)
}

export const Base = Template.bind({})
Base.args = {
  ...baseProps
}

export const WithActionButton = Template.bind({})
WithActionButton.args = {
  ...baseProps,
  NotificationItem: (props) => (
    <NotificationItem
      {...props}
      actionButton={
        <Button
          variant='outlined'
          onClick={() =>
            alert(
              `Clicou na notificação de id: ${props.notification.id} e uuid: ${props.notification.notifiable_uuid}`
            )
          }
        >
          Botão de ação
        </Button>
      }
    />
  )
}
