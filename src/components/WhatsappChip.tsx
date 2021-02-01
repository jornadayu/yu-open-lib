import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

const useStyles = makeStyles(() => ({
  whatsappChip: {
    backgroundColor: '#4caf50',
    color: 'white',
    '&:hover': {
      backgroundColor: '#458c48'
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
