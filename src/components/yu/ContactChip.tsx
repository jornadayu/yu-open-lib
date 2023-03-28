import React, { useState } from 'react'

import {
  CheckCircle,
  ContentCopy,
  Email,
  Error,
  LinkedIn,
  WhatsApp
} from '@mui/icons-material'
import {
  Chip,
  ChipProps,
  Collapse,
  IconButton,
  SvgIconProps
} from '@mui/material'
import { Box } from '@mui/system'

import { copyToClipboard } from '../../helpers/text'

export type ContactChipVariant = 'whatsapp' | 'linkedin' | 'email'

export type WhatsAppProps = {
  variant: 'whatsapp'
} & (
  | {
      copyable: true
      copyAs: 'phoneNumber' | 'url'
    }
  | {
      copyable?: false
      copyAs?: undefined
    }
)

export type EmailProps = {
  variant: 'email'
  copyAs?: never
}

export type LinkedInProps = {
  variant: 'linkedin'
  copyAs?: never
}

export type Props = {
  /**
   * Value for that contact, can be a phone number, email or linkedin url
   */
  value: string
  /**
   * Variant of the contact chip
   */
  variant: ContactChipVariant
  /**
   * Callback on clipboard copy success
   */
  onCopySuccess?: (value: string) => void
  /**
   * Callback on clipboard copy error
   */
  onCopyError?: (error?: unknown) => void
  /**
   * Whether the contact chip url/value is copyable
   */
  copyable?: boolean
  /**
   * If copyable, what to copy
   */
  copyAs?: 'phoneNumber' | 'url'
  chipProps?: Partial<ChipProps>
} & (WhatsAppProps | EmailProps | LinkedInProps)

const getChipColor = (variant: ContactChipVariant) => {
  switch (variant) {
    case 'whatsapp':
      return '#1a9147'
    case 'linkedin':
      return '#0077b5'
    case 'email':
      return '#d44638'
  }
}

const getChipIcon = (variant: ContactChipVariant) => {
  const color = getChipColor(variant)
  const props: Partial<SvgIconProps> = {
    style: {
      color
    }
  }

  switch (variant) {
    case 'whatsapp':
      return <WhatsApp {...props} />
    case 'linkedin':
      return <LinkedIn {...props} />
    case 'email':
      return <Email {...props} />
  }
}

const getChipHref = (variant: ContactChipVariant, value: string) => {
  switch (variant) {
    case 'whatsapp':
      return `https://wa.me/${value}`
    case 'linkedin':
      // If username format proper url, else just return url
      if (value.startsWith('http')) {
        return value
      } else {
        return `https://linkedin.com/in/${value}`
      }
    case 'email':
      return `mailto:${value}`
  }
}

type CopyState = 'success' | 'error' | 'default' | 'loading'

const ContactChip: React.FC<Props> = ({
  variant,
  copyable,
  copyAs,
  value,
  onCopySuccess,
  onCopyError,
  chipProps
}) => {
  const [copiedState, setCopiedState] = useState<CopyState>('default')

  const onCopy = () => {
    setCopiedState('loading')

    try {
      copyToClipboard(value)

      if (variant === 'whatsapp') {
        if (copyAs === 'phoneNumber') {
          copyToClipboard(value)
        } else if (copyAs === 'url') {
          copyToClipboard(`https://wa.me/${value}`)
        }
      }

      setCopiedState('success')

      if (onCopySuccess) {
        onCopySuccess(value)
      }
    } catch (error) {
      if (onCopyError) {
        onCopyError(error)
      }

      setCopiedState('error')
    } finally {
      setTimeout(() => {
        setCopiedState('default')
      }, 2000)
    }
  }

  return (
    <Chip
      label={
        <IconButton
          sx={{
            ml: -1,
            mr: -1
          }}
          size='small'
          href={getChipHref(variant, value)}
          target='_blank'
        >
          {getChipIcon(variant)}
        </IconButton>
      }
      sx={{
        height: 40,
        borderColor: getChipColor(variant),
        borderRadius: 2,
        borderWidth: 2,
        color: getChipColor(variant),
        '& .MuiChip-deleteIcon': {
          color: 'text.secondary',
          ml: 0.8
        }
      }}
      variant='outlined'
      onDelete={copyable ? onCopy : undefined}
      deleteIcon={
        copyable ? (
          <Box>
            <Collapse in={copiedState === 'success'} timeout={400}>
              <CheckCircle sx={{ mt: 1 }} style={{ color: 'success' }} />
            </Collapse>

            <Collapse in={copiedState === 'default'} timeout={400}>
              <ContentCopy sx={{ mt: 1 }} />
            </Collapse>

            <Collapse in={copiedState === 'error'} timeout={400}>
              <Error sx={{ mt: 1 }} style={{ color: 'error' }} />
            </Collapse>
          </Box>
        ) : undefined
      }
      {...chipProps}
    />
  )
}

export default ContactChip
