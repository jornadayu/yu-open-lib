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
}

const CopyableButton: React.FC<Props> = ({ text, tooltip = 'Copiar' }) => {
  const [copied, setCopied] = useState(false)

  const copyText = () => {
    copyToClipboard(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <Tooltip title={tooltip}>
      <IconButton onClick={copyText}>
        {copied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
      </IconButton>
    </Tooltip>
  )
}

export default CopyableButton
