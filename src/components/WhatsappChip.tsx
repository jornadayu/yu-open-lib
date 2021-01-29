import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import Chip from '@material-ui/core/Chip'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'

const useStyles = makeStyles((theme) => ({
  whatsappChip: {
    backgroundColor: theme.palette.success.main,
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.success.dark
    }
  },
  whatsappIcon: {
    color: 'white'
  }
}))

type Props = {
  number: string
  message: string
  onClick: () => void
}

const WhatsappChip: React.FC<Props> = ({
  number,
  message,
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
