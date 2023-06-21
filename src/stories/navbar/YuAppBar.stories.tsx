import React from 'react'

import { Meta, StoryFn } from '@storybook/react'

import { Group as GroupIcon, Shop as ShopIcon } from '@mui/icons-material'
import { Button, Link } from '@mui/material'

import YuAppBar from '../../components/NavBar/YuAppBar'
import NotificationItem from '../../components/notifications/NotificationItem'
import NotificationMenu from '../../components/notifications/NotificationMenu'
import { notificationsData } from '../mocks/notificationMocks'

export default {
  title: 'NavBar/YuAppBar',
  component: YuAppBar
} as Meta<typeof YuAppBar>

const Template: StoryFn<typeof YuAppBar> = (args) => {
  return <YuAppBar logo='yu' homeURL='/' {...args} />
}

const navItems = {
  drawerItems: [
    { text: 'Marcas', path: '/brands', icon: <GroupIcon /> },
    { text: 'Usuários', component: Link, to: '/users', icon: <GroupIcon /> },
    {
      text: 'Some Things',
      path: '/some_things',
      icon: <GroupIcon />
    },
    {
      text: 'Stuff',
      path: '/stuff',
      icon: <GroupIcon />
    },
    {
      text: 'Other Stuff',
      path: '/other_stuff',
      icon: <GroupIcon />
    }
  ],
  leftItems: [
    { text: 'Vagas', path: '/jobs', icon: <GroupIcon />, iconButton: true },
    {
      text: 'Projetos',
      path: '/projects',
      icon: <GroupIcon />,
      iconButton: true,
      tooltip: 'Projetos'
    },
    {
      text: 'Search',
      path: '/search',
      icon: <GroupIcon />
    }
  ],
  rightItems: []
}

export const LoggedIn = Template.bind({})
LoggedIn.args = {
  loggedIn: true,
  items: navItems
}

export const LoggedOut = Template.bind({})
LoggedOut.args = {
  loggedIn: false,
  items: navItems
}

export const YuriLogo = Template.bind({})
YuriLogo.args = {
  loggedIn: true,
  items: navItems,
  logo: 'yuri'
}

export const CustomLogo = Template.bind({})
CustomLogo.args = {
  loggedIn: true,
  items: navItems,
  logo: <ShopIcon />
}

export const CustomItems = Template.bind({})
CustomItems.args = {
  loggedIn: true,
  items: {
    ...navItems,
    drawerItems: [
      ...navItems.drawerItems,
      {
        renderItem: () => (
          <Button sx={{ ml: 1 }} variant='outlined' endIcon={<ShopIcon />}>
            Custom Item
          </Button>
        )
      }
    ],
    leftItems: [
      {
        renderItem: () => (
          <Button variant='outlined' endIcon={<ShopIcon />}>
            Custom Item
          </Button>
        )
      },
      {
        renderItem: () => (
          <Button
            sx={{ ml: 2 }}
            variant='outlined'
            color='error'
            endIcon={<ShopIcon />}
          >
            Custom Item 2
          </Button>
        )
      }
    ]
  }
}

const mobileActionItemBar = {
  iconButton: true,
  text: 'Notificações',
  icon: (
    <NotificationMenu
      title='Notificações'
      emptyNotificationText='Nenhuma notificação'
      showOnlyUnreadText='Mostrar somente não lidas'
      markAllAsReadText='Marcar todas como lidas'
      NotificationItem={(props) => <NotificationItem {...props} />}
      notifications={notificationsData}
      handleNotifications={(ids) =>
        alert('Ids das notificações marcadas como lidas: ' + ids)
      }
      onClose={() => console.log('fechou')}
    />
  )
}

export const mobileActionItemInMobile = Template.bind({})
mobileActionItemInMobile.args = {
  loggedIn: true,
  items: navItems,
  mobileActionItem: mobileActionItemBar
}
