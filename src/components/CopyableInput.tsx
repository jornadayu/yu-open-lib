import React, { useState } from 'react'

import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import TextField from '@material-ui/core/TextField'
import Tooltip from '@material-ui/core/Tooltip'
import FileCopyIcon from '@material-ui/icons/FileCopy'
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline'

type Props = {
  /** Input Text to be copied */
  text: string

  /** Input Label */
  label: string

  /**
   * If the input should be Full Width or not
   * @default {false}
   */
  fullWidth?: boolean
}

const CopyableInput: React.FC<Props> = ({ text, label, fullWidth = false }) => {
  const [copied, setCopied] = useState(false)

  const copyText = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 1000)
  }

  return (
    <React.Fragment>
      <TextField
        id='standard-full-width'
        variant='filled'
        label={label}
        value={text}
        style={{ margin: 8 }}
        fullWidth={fullWidth}
        margin='normal'
        color='secondary'
        InputLabelProps={{
          shrink: true
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <Tooltip title='Copiar' aria-label='copy-to-clipboard'>
                <IconButton aria-label='copy to clipboard' onClick={copyText}>
                  {copied ? <CheckCircleOutlineIcon /> : <FileCopyIcon />}
                </IconButton>
              </Tooltip>
            </InputAdornment>
          )
        }}
      />
    </React.Fragment>
  )
}

export default CopyableInput
