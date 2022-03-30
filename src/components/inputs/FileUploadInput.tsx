import React, { useState } from 'react'

import { Publish as PublishIcon, Save } from '@mui/icons-material'
import { LoadingButton, LoadingButtonProps } from '@mui/lab'
import {
  Fade,
  Grid,
  GridProps,
  IconButton,
  IconButtonProps
} from '@mui/material'

export type Props = {
  /** @default 'video/mp4,video/mkv,video/x-m4v,video/*' */
  accept?: string
  /** Input field name */
  field: string
  /** Input Label */
  label: string
  gridItemProps?: GridProps
  gridContainerProps?: GridProps
  buttonProps?: LoadingButtonProps
  saveButtonProps?: IconButtonProps
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >
  onSubmit: (file: File) => void
  onError?: () => void
  defaultValue?: File
  loading?: boolean
}

const FileUploadInput: React.FC<Props> = ({
  field,
  label,
  gridItemProps,
  onSubmit,
  gridContainerProps,
  buttonProps,
  saveButtonProps,
  labelProps,
  onError,
  loading = false,
  defaultValue = null,
  accept = 'video/mp4,video/mkv,video/x-m4v,video/*'
}) => {
  const [file, setFile] = useState<File | null>(defaultValue)

  const handleCapture = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    if (target.files && target.files.length) {
      setFile(target.files[0])
    } else {
      onError?.()
    }
  }

  async function submit() {
    if (file) {
      onSubmit(file)
      setFile(null)
    }
  }

  return (
    <Grid container spacing={1} {...gridContainerProps}>
      <input
        hidden
        accept={accept}
        id={field}
        type='file'
        name={field}
        disabled={loading}
        onChange={handleCapture}
      />

      <Grid item xs={10} md={3} {...gridItemProps}>
        <label htmlFor={field}>
          <LoadingButton
            component='span'
            size='large'
            variant='outlined'
            endIcon={<PublishIcon />}
            loading={loading}
            {...buttonProps}
          >
            {label}
          </LoadingButton>
        </label>

        <Fade in={!!file}>
          <label style={{ marginLeft: 10 }} {...labelProps}>
            {file?.name}
          </label>
        </Fade>

        <Fade in={!!file}>
          <IconButton
            sx={{ ml: 2 }}
            onClick={() => submit()}
            size='large'
            {...saveButtonProps}
          >
            <Save />
          </IconButton>
        </Fade>
      </Grid>
    </Grid>
  )
}

export default FileUploadInput
