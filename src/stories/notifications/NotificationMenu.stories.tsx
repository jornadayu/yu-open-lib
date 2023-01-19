import React, { useState } from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { BADGES } from '../../../.storybook/constants'
import NotificationMenu, {
  Props
} from '../../components/notifications/NotificationMenu'
import { notificationsData } from '../mocks/notificationMocks'

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
