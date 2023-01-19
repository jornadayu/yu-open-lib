import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { BADGES } from '../../../.storybook/constants'
import NotificationMenu, {
  Notification,
  Props
} from '../../components/notifications/NotificationMenu'

const notificationsData: Notification[] = [
  {
    id: 1,
    title: 'Notificação 1',
    description: 'Descrição da notificação 1',
    viewed: false,
    created_at: new Date(),
    updated_at: new Date(),
    viewed_at: null
  },
  {
    id: 2,
    title: 'Notificação 2',
    description: 'A descrição também pode receber um link: https://google.com',
    viewed: false,
    created_at: new Date(),
    updated_at: new Date(),
    viewed_at: null
  },
  {
    id: 3,
    title: 'Notificação 3',
    description: 'Descrição da notificação 3',
    viewed: true,
    created_at: new Date(),
    updated_at: new Date(),
    viewed_at: new Date()
  }
]

export default {
  title: 'notifications/NotificationMenu',
  component: NotificationMenu,
  parameters: {
    badges: [BADGES.UNRELEASED]
  }
} as ComponentMeta<typeof NotificationMenu>

const Template: ComponentStory<typeof NotificationMenu> = (args) => {
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
  handleNotifications: (ids) =>
    alert('Ids das notificações marcadas como lidas: ' + ids)
}

export const Base: Story<Props> = Template.bind({})
Base.args = {
  ...baseProps
}
