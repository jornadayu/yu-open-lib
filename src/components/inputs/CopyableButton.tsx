import React, { useState } from 'react'

import {
  CheckCircleOutline as CheckCircleOutlineIcon,
  FileCopy as FileCopyIcon
} from '@mui/icons-material'
import { IconButton, Tooltip } from '@mui/material'

import { copyToClipboard } from '../../helpers/text'

export type Props = {
  text: string
  /** @default 'Copiar' */
  tooltip?: string
  format?: 'text/plain' | 'text/html'
  icon?: React.ReactElement
}

const CopyableButton: React.FC<Props> = ({
  text,
  tooltip = 'Copiar',
  format = 'text/plain',
  icon = <FileCopyIcon />
}) => {
  const [copied, setCopied] = useState(false)

  const copyText = () => {
    copyToClipboard(text, format)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={copyText}>
        {copied ? <CheckCircleOutlineIcon /> : icon}
      </IconButton>
    </Tooltip>
  )
}

export default CopyableButton
