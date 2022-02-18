import React from 'react'

import { WhatsApp as WhatsAppIcon } from '@mui/icons-material'
import Chip from '@mui/material/Chip'

export type Props = {
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
  const whatsappurl = `https://wa.me/${number}?text=${message}`

  return (
    <Chip
      clickable
      component='a'
      target='_blank'
      href={whatsappurl}
      onClick={onClick}
      color='success'
      icon={<WhatsAppIcon />}
      label={number}
    />
  )
}

export default WhatsappChip
