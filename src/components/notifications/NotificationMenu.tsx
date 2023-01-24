import React, { Dispatch, SetStateAction, useMemo, useState } from 'react'

import dayjs from 'dayjs'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import NotificationsIcon from '@mui/icons-material/Notifications'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  Link,
  Popover,
  Switch,
  Typography,
  useMediaQuery,
  useTheme
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { SxProps, Theme } from '@mui/system'

export interface YuriNotification {
  id: string | number
  title: string
  description: string
  // eslint-disable-next-line camelcase
  created_at: Date
  // eslint-disable-next-line camelcase
  updated_at: Date
  // eslint-disable-next-line camelcase
  viewed_at: Date | null
  viewed: boolean
}

export type Props = {
  /**
   * @default 'Notificações'
   */
  title?: string
  /**
   * @default 'Você não tem notificações'
   */
  emptyNotificationText?: string
  /**
   * @default 'Ver somente não lidas'
   */
  showOnlyUnreadText?: string
  /**
   * @default 'Marcar todas como lidas'
   */
  markAllAsReadText?: string
  /**
   * @description Sx props for the container
   */
  containerSx?: SxProps<Theme> | undefined
  /**
   * @example {id: 1, title: 'Notificação 1', description: 'Descrição da notificação 1', created_at: new Date(), updated_at: new Date(), viewed_at: new Date(), viewed: false}
   */
  notifications: YuriNotification[]
  /**
   * @description Function to handle notifications
   * @example (ids: (string | number)[]) => void
   */
  handleNotifications?: (id: (string | number)[]) => void
  open?: boolean
  onClose: () => void
  setAnchorEl?: Dispatch<
    SetStateAction<Element | (EventTarget & SVGSVGElement) | null>
  >
  anchorEl?: Element | (EventTarget & SVGSVGElement) | null
}

const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  '& .MuiSwitch-track': {
    borderRadius: 22 / 2,
    '&:before, &:after': {
      content: '""',
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16
    },
    '&:before': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
      left: 12
    },
    '&:after': {
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
        theme.palette.getContrastText(theme.palette.primary.main)
      )}" d="M19,13H5V11H19V13Z" /></svg>')`,
      right: 12
    }
  },
  '& .MuiSwitch-thumb': {
    boxShadow: 'none',
    width: 16,
    height: 16,
    margin: 2
  }
}))

function linkifyText(str?: string): (string | JSX.Element)[] | undefined {
  if (!str) return undefined

  const URL_REGEX =
    /https?:\/\/[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/

  return str.split(' ').map((part, index) =>
    URL_REGEX.test(part) ? (
      <Link
        key={`${part}-${index}`}
        href={part}
        variant='body2'
        target='_blank'
        rel='noreferrer'
        className='hyperlink'
      >
        {part}{' '}
      </Link>
    ) : (
      `${part} `
    )
  )
}

const NotificationPopover: React.FC<Props> = ({
  title = 'Notificações',
  emptyNotificationText = 'Você não tem notificações',
  showOnlyUnreadText = 'Ver somente não lidas',
  markAllAsReadText = 'Marcar todas como lidas',
  containerSx,
  notifications,
  handleNotifications,
  open,
  anchorEl,
  setAnchorEl,
  onClose
}) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  const [expanded, setExpanded] = useState<string | false>(false)
  const [checkedOnlyNotViewed, setCheckedOnlyNotViewed] = useState(true)
  const [notificationIds, setNotificationIds] = useState<(string | number)[]>(
    []
  )
  const [anchorElNotify, setAnchorElNotify] = useState<Element | null>(null)

  const badgeNotificationsContent = useMemo(() => {
    if (!notifications) return null

    if (notifications?.length) {
      return notifications?.filter(
        (notification: YuriNotification) => notification.viewed === false
      ).length
    }

    return null
  }, [notifications])

  const filteredNotifications = useMemo(() => {
    if (!notifications) return []

    if (checkedOnlyNotViewed) {
      return notifications
        ?.filter(
          (notification: YuriNotification) => notification.viewed === false
        )
        .sort((a, b) => {
          const dateA: Date = new Date(a.created_at)
          const dateB: Date = new Date(b.created_at)
          return dateB.getTime() - dateA.getTime()
        })
    }

    return notifications
      ?.sort((a, b) => {
        const dateA: Date = new Date(a.created_at)
        const dateB: Date = new Date(b.created_at)
        return dateB.getTime() - dateA.getTime()
      })
      .sort((a, b) => {
        if (a.viewed === b.viewed) return 0
        if (a.viewed === false) return -1
        return 1
      })
  }, [notifications, checkedOnlyNotViewed])

  const handleCheckedOnlyNotViewedChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCheckedOnlyNotViewed(event.target.checked)
  }

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
      const id = panel.split('-')[1]
      if (isExpanded && !notificationIds.includes(id)) {
        setNotificationIds([...notificationIds, id])
      }
    }

  const handleMarkAllAsRead = () => {
    const ids = notifications
      ?.filter(
        (notification: YuriNotification) => notification.viewed === false
      )
      .map((notification: YuriNotification) => notification.id)
    handleNotifications?.(ids)
    setNotificationIds([])
  }
  return (
    <div>
      <IconButton
        onClick={(e) => {
          setAnchorElNotify(e.currentTarget)
          setAnchorEl?.(e.currentTarget)
        }}
        id='notify-item'
        color='inherit'
      >
        <Badge badgeContent={badgeNotificationsContent} color='primary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
      <Popover
        anchorEl={anchorElNotify || anchorEl}
        open={open || Boolean(anchorElNotify)}
        onClose={() => {
          if (notificationIds.length) {
            handleNotifications?.(notificationIds)
          }
          setNotificationIds([])
          setExpanded(false)
          setAnchorElNotify(null)
          setAnchorEl?.(null)
          onClose?.()
        }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          alignContent: 'center'
        }}
      >
        <Box>
          <Typography
            variant='h6'
            component='div'
            sx={{ width: '100%', padding: 1 }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              alignItems: 'center',
              overflowY: 'auto',
              height: '40vh',
              width: isMobile ? '100%' : '45vw',
              pb: 2,
              ...containerSx
            }}
          >
            {!!filteredNotifications && filteredNotifications?.length ? (
              filteredNotifications?.map((notification) => (
                <Accordion
                  key={notification.id}
                  sx={{ width: '98%', mb: 1 }}
                  expanded={expanded === `panel-${notification.id}`}
                  onChange={handleChange(`panel-${notification.id}`)}
                >
                  <AccordionSummary
                    expandIcon={
                      <Badge
                        variant={notification.viewed ? undefined : 'dot'}
                        color={
                          expanded === `panel-${notification.id}`
                            ? undefined
                            : 'primary'
                        }
                      >
                        <ExpandMoreIcon />
                      </Badge>
                    }
                    aria-controls='panel1a-content'
                    id='panel1a-header'
                    sx={{ minHeight: '80px' }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%'
                      }}
                    >
                      <Typography>{notification.title}</Typography>
                      <Typography textAlign='right'>
                        {dayjs(notification.created_at).fromNow()}
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ width: '80%' }}>
                      <Typography
                        sx={{ color: 'text.secondary', textAlign: 'left' }}
                      >
                        {linkifyText(notification.description)}
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))
            ) : (
              <Typography variant='body2' color='text.secondary' padding={1}>
                {emptyNotificationText}
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              flexWrap: 'wrap'
            }}
          >
            <FormControlLabel
              control={
                <Android12Switch
                  checked={checkedOnlyNotViewed}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                    handleCheckedOnlyNotViewedChange(event)
                  }
                />
              }
              label={showOnlyUnreadText}
              labelPlacement='start'
            />
            {isMobile && <br style={{ marginTop: 8 }} />}
            <FormControlLabel
              control={
                <Button
                  onClick={() => handleMarkAllAsRead()}
                  variant='text'
                  sx={{ display: 'none' }}
                />
              }
              labelPlacement='start'
              sx={{
                textDecoration: 'underline',
                mr: 2
              }}
              label={markAllAsReadText}
            />
          </Box>
        </Box>
      </Popover>
    </div>
  )
}

export default NotificationPopover
