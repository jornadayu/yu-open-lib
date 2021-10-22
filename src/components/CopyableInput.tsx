import React, { useState } from 'react'

import IconButton from '@mui/material/IconButton'
import InputAdornment from '@mui/material/InputAdornment'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import FileCopyIcon from '@mui/icons-material/FileCopy'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

export type Props = {
  /** Input Text to be copied */
  text: string
  /** Input Label */
  label: string
  /**
   * If the input should be Full Width or not
   * @default false
   */
  fullWidth?: boolean
  /**
   * Tooltip of the copy button inside the tooltip
   * @default 'Copiar'
   */
  tooltip?: string
  /**
   * Border colors when input is active
   * @default 'primary'
   */
  color?: 'primary' | 'secondary'
}

/**
 * A disabled Text input with a copy to clipboard button, when clicked it copies the
 * text passed as the input value (`text` prop)
 */
const CopyableInput: React.FC<Props> = ({
  text,
  label,
  fullWidth = false,
  tooltip = 'Copiar',
  color = 'primary'
}) => {
  const [copied, setCopied] = useState(false)

  const copyText = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <React.Fragment>
      <TextField
        variant='filled'
        label={label}
        value={text}
        style={{ margin: 8 }}
        fullWidth={fullWidth}
        margin='normal'
        color={color}
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Tooltip title={tooltip} aria-label='copy-to-clipboard'>
                <IconButton aria-label='copy to clipboard' onClick={copyText} size="large">
                  {copied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )
        }}
      />
    </React.Fragment>
  );
}

export default CopyableInput
