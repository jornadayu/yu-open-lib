import React from 'react'

import makeStyles from '@mui/styles/makeStyles'
import Chip from '@mui/material/Chip'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const useStyles = makeStyles((theme) => ({
  whatsappChip: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
    '&:hover': {
      color: 'white',
      backgroundColor: theme.palette.success.dark
    }
  },
  whatsappIcon: {
    color: 'white'
  }
}))

type Props = {
  /**
   * Valid Phone number for WhatsApp (with area code)
   */
  number: string

  /**
   * Default message on WhatsApp chatbox
   */
  message?: string

  /**
   * Callback to run before clicking on the WhatsApp Chip
   */
  onClick?: () => void
}

/**
 * Basic WhatsApp digit, when clicked goes to a page uising Whatsapp APIs to send a specific message
 * to the specific number in the props
 */
const WhatsappChip: React.FC<Props> = ({
  number,
  message = '',
  onClick = () => {}
}) => {
  const classes = useStyles()

  const whatsappurl = `https://api.whatsapp.com/send?phone=${number}&text=${message}`

  return (
    <Chip
      clickable
      component='a'
      target='_blank'
      href={whatsappurl}
      onClick={onClick}
      icon={<WhatsAppIcon className={classes.whatsappIcon} />}
      className={classes.whatsappChip}
      label={number}
    />
  )
}

export default WhatsappChip
