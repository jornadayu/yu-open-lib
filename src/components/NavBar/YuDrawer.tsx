import React, { useMemo } from 'react'

import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'

import YuriBlackLogo from '/../../assets/images/yuri_black.png'
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
      <ListItem button key={path} href={path} component='a' {...props}>
        {inner}
      </ListItem>
    )
  }

  return (
    <ListItem button key={path} component={component} {...props}>
      {inner}
    </ListItem>
  )
}

const ListItems: React.FC<ListProps> = ({ buttons }) => (
  <React.Fragment>
    {buttons.map((button) => (
      <NavListItem key={button.text} {...button} />
    ))}
  </React.Fragment>
)

type DrawerProps = {
  items: {
    leftItems: NavbarItem[]
    rightItems: NavbarItem[]
    drawerItems: NavbarItem[]
  }

  open: boolean
  handleClose: () => void
}

const YuDrawer: React.FC<DrawerProps> = ({ items, open, handleClose }) => {
  const { leftItems, rightItems, drawerItems } = items
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

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
        <ListItem button component='a' href='/'>
          <img src={YuriBlackLogo} width='32' />
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
