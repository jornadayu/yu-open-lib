import React from 'react'

import { ComponentMeta, ComponentStory, Story } from '@storybook/react'

import { Group as GroupIcon, Shop as ShopIcon } from '@mui/icons-material'
import { Link } from '@mui/material'

import { Props as YuAppBarProps } from '../../components/NavBar/BaseAppBar'
import YuAppBar from '../../components/NavBar/YuAppBar'

export default {
  title: 'NavBar/YuAppBar',
  component: YuAppBar
} as ComponentMeta<typeof YuAppBar>

const Template: ComponentStory<typeof YuAppBar> = (args) => {
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

export const LoggedIn: Story<YuAppBarProps> = Template.bind({})
LoggedIn.args = {
  loggedIn: true,
  items: navItems
}

export const LoggedOut: Story<YuAppBarProps> = Template.bind({})
LoggedOut.args = {
  loggedIn: false,
  items: navItems
}

export const YuriLogo: Story<YuAppBarProps> = Template.bind({})
YuriLogo.args = {
  loggedIn: true,
  items: navItems,
  logo: 'yuri'
}

export const CustomLogo: Story<YuAppBarProps> = Template.bind({})
CustomLogo.args = {
  loggedIn: true,
  items: navItems,
  logo: <ShopIcon />
}
