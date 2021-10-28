import React from 'react'

import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { FileCopy as FileCopyIcon } from '@mui/icons-material'

import { copyToClipboard } from '../helpers/text'

export type Props = {
  text: string
  /** @default 'Copiar' */
  tooltip?: string
}

const CopyableButton: React.FC<Props> = ({ text, tooltip = 'Copiar' }) => (
  <Tooltip title={tooltip}>
    <IconButton onClick={() => copyToClipboard(text as string)}>
      <FileCopyIcon />
    </IconButton>
  </Tooltip>
)

export default CopyableButton
