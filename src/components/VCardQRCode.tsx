import React from 'react'

import QRCode from 'qrcode.react'

type Contact = {
  fullName: string
  lastName: string
  firstName: string
  email: string
  phoneNumber: string
}

type Props = {
  contact: Contact
  revisionDate: Date
}

/**
 * Generates a QR Code (in a HTML Canvas) with a VCard text to add a phone contact
 */
const VCardQRCode: React.FC<Props> = ({ contact, revisionDate }) => (
  <QRCode
    value={
      `BEGIN:VCARD\nVERSION:3.0\nFN:${contact.fullName}\nN:${contact.lastName};` +
      `${contact.firstName};\nEMAIL:${contact.email}\nTEL;` +
      `TYPE=cell:${contact.phoneNumber}\nREV:${revisionDate}\nEND:VCARD`
    }
  />
)

export default VCardQRCode
