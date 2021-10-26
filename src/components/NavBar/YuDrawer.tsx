import React, { useMemo } from 'react'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { Avatar } from '@mui/material'
import { grey } from '@mui/material/colors'

import { NavbarItem } from '../../types'

type ListProps = {
  buttons: NavbarItem[]
}

const NavListItem: React.FC<NavbarItem> = ({
  path,
  icon,
  text,
  component,
  ...props
}) => {
  const inner = (
    <React.Fragment>
      <ListItemIcon>{icon}</ListItemIcon>
      <ListItemText primary={text} />
    </React.Fragment>
  )

  if (!component) {
    return (
      <ListItem button key={path || text} href={path} component='a' {...props}>
        {inner}
      </ListItem>
    )
  }

  return (
    <ListItem button key={path || text} component={component} {...props}>
      {inner}
    </ListItem>
  )
}

const ListItems: React.FC<ListProps> = ({ buttons }) => (
  <React.Fragment>
    {buttons.map((button) => (
      <NavListItem key={button.path || button.text} {...button} />
    ))}
  </React.Fragment>
)

type DrawerProps = {
  items: {
    leftItems: NavbarItem[]
    rightItems: NavbarItem[]
    drawerItems: NavbarItem[]
  }

  logo: JSX.Element
  open: boolean
  handleClose: () => void
}

const YuDrawer: React.FC<DrawerProps> = ({
  items,
  logo,
  open,
  handleClose
}) => {
  const { leftItems, rightItems, drawerItems } = items
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const allItems = useMemo(() => {
    if (isMobile) {
      return {
        up: [...leftItems, ...rightItems],
        down: drawerItems
      }
    }

    return {
      up: drawerItems,
      down: []
    }
  }, [isMobile, leftItems, rightItems, drawerItems])

  return (
    <Drawer anchor='left' open={open} onClose={handleClose}>
      <List>
        <ListItem
          button
          component='a'
          href='/'
          sx={{
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <Avatar
            sx={{
              height: 48,
              padding: 1.5,
              width: 48,
              bgcolor: grey[100]
            }}
          >
            {logo}
          </Avatar>
        </ListItem>

        <ListItems buttons={allItems.up} />
      </List>

      <Divider />

      <List>
        <ListItems buttons={allItems.down} />
      </List>
    </Drawer>
  )
}

export default YuDrawer
