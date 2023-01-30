import React, { useState } from 'react'

import dayjs from 'dayjs'

import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Badge,
  Box,
  Link,
  Typography
} from '@mui/material'

import { YuriNotification } from './NotificationMenu'

type Props = {
  /**
   * @description Notification object where the data come from the API and is automatically inputed by the NotificationMenu component
   * @example {id: 1, title: 'Notificação 1', description: 'Descrição da notificação 1', user_id: 16, created_at: new Date(), updated_at: new Date(), viewed_at: new Date(), viewed: false,
   * notifiable_id?: 2084, notifiable_uuid?: 'f3b0c0c0-0c0c-0c0c-0c0c-0c0c0c0c0c0c', notifiable_type?: 'Job', notification_type?: 'chatbot_validation' }
   */
  notification: YuriNotification
  /**
   * @description React element to be used as the action button
   * @example <Button>Teste</Button>
   * @default undefined
   */
  actionButton?: React.ReactElement
  /**
   * @description Function to set the notification ids, automatically inputed by the NotificationMenu component,  its a setState hook
   * @example (ids: (string | number)[]) => void
   */
  setNotificationIds: React.Dispatch<React.SetStateAction<(string | number)[]>>
  /**
   * @description Array of notification ids, automatically inputed by the NotificationMenu component
   * @example [1, 2, 3, 4]
   */
  notificationIds: (string | number)[]
}

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

const NotificationItem: React.FC<Props> = ({
  notification,
  actionButton,
  setNotificationIds,
  notificationIds
}) => {
  const [expanded, setExpanded] = useState<string | false>(false)

  const handleChange =
    (panel: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
      const id = panel.split('-')[1]
      if (isExpanded && !notificationIds.includes(id)) {
        setNotificationIds([...notificationIds, id])
      }
    }

  return (
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
              expanded === `panel-${notification.id}` ? undefined : 'primary'
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
        <Box
          sx={{
            width: '80%',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography
            sx={{
              color: 'text.secondary',
              textAlign: 'left',
              mb: 1
            }}
          >
            {linkifyText(notification.description)}
          </Typography>
          <Box>{actionButton}</Box>
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default NotificationItem
