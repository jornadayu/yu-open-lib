import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import {
  FileCopy as FileCopyIcon,
  CheckCircleOutline as CheckCircleOutlineIcon
} from '@mui/icons-material'

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
