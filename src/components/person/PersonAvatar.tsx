import React, { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import BlockIcon from '@mui/icons-material/Block'
import { IconButton, Tooltip, Typography } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(() => ({
  root: {
    position: 'relative',
    '& $img': {
      width: '280px',
      height: '280px',
      objectFit: 'cover',
      objectPosition: 'center',
      borderRadius: '5px'
    },
    '&:hover': {
      cursor: 'pointer',
      '& $addIcon': {
        opacity: '0.7'
      }
    }
  },
  addIcon: {
    transition: '500ms',
    position: 'absolute',
    right: 0,
    top: 0,
    opacity: '0.3',
    color: 'white'
  },
  backdrop: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& $div': {
      position: 'absolute',
      background: 'rgba(255,255,255,0.3)',
      width: '100%',
      height: '100%'
    }
  },
  rejectFile: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  children: {
    position: 'absolute',
    padding: '5px',
    zIndex: 2,
    bottom: 0
  }
}))

export type Props = {
  avatarSrc: React.ImgHTMLAttributes<any>['src']
  /** @default 'Clique ou arraste para adicionar' */
  tooltip?: string
  /** @default 'avatar' */
  fileKey?: string
  onAttach?: (data: FormData) => void
  imageProps?: React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >
} & React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

const PersonAvatar: React.FC<Props> = ({
  avatarSrc,
  children,
  onAttach,
  fileKey = 'avatar',
  tooltip = 'Clique ou arraste para adicionar',
  imageProps,
  ...props
}) => {
  const classes = useStyles()

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const formData = new FormData()
    if (acceptedFiles.length) {
      formData.append(fileKey, acceptedFiles[0])
      onAttach && onAttach(formData)
    }
  }, [])

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: 'image/*'
    })

  const AvatarImage: React.FC = () => <img src={avatarSrc} {...imageProps} />

  return (
    <div style={{ position: 'relative' }}>
      <div className={classes.children}>{children}</div>
      <Tooltip title={tooltip}>
        <div className={classes.root} {...getRootProps()} {...props}>
          <input {...getInputProps()} />
          {isDragActive ? (
            isDragReject ? (
              <div className={classes.backdrop}>
                <div />
                <Typography color='secondary' className={classes.rejectFile}>
                  Somente imagens <BlockIcon />
                </Typography>
                <AvatarImage />
              </div>
            ) : (
              <div className={classes.backdrop}>
                <div />
                <IconButton
                  color='primary'
                  style={{ position: 'absolute' }}
                  size='large'
                >
                  <AddAPhotoIcon />
                </IconButton>
                <AvatarImage />
              </div>
            )
          ) : (
            <React.Fragment>
              <IconButton className={classes.addIcon} size='large'>
                <AddAPhotoIcon />
              </IconButton>
              <AvatarImage />
            </React.Fragment>
          )}
        </div>
      </Tooltip>
    </div>
  )
}

export default PersonAvatar
