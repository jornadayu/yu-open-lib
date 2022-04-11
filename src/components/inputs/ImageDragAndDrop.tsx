import React, { useCallback } from 'react'

import { useDropzone } from 'react-dropzone'

import styled from '@emotion/styled'

import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'
import BlockIcon from '@mui/icons-material/Block'
import { IconButton, Tooltip, Typography } from '@mui/material'

type MainContainerProps = {
  width: number
  height: number
}

const MainContainer = styled.div`
  position: relative;
  width: ${(props: MainContainerProps) => props.width}px;
  height: ${(props: MainContainerProps) => props.height}px;
  img {
    width: ${(props: MainContainerProps) => props.width}px;
    height: ${(props: MainContainerProps) => props.height}px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }
  &:hover {
    cursor: pointer;
    .addIcon {
      opacity: 0.7;
    }
  }
`

const AddIcon = styled(IconButton)`
  transition: 500ms;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0.3;
  color: white;
`

const Backdrop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    position: absolute;
    background: rgba(255, 255, 255, 0.3);
    width: 100%;
    height: 100%;
  }
`

const RejectFile = styled(Typography)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export type Props = {
  imageSrc: string
  onAttach: (file: File) => void
  /**
   * @default 300
   */
  height?: number
  /**
   * @default 300
   */
  width?: number
  title?: string
  /**
   * @default 'Clique ou arraste para adicionar'
   */
  onDragText?: string
  /**
   * @default 'Somente imagens'
   */
  onlyImagesText?: string
}

const ImageDragAndDrop: React.FC<Props> = ({
  imageSrc,
  onAttach,
  height = 300,
  width = 300,
  title,
  onDragText = 'Clique ou arraste para adicionar',
  onlyImagesText = 'Somente imagens'
}) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles.length) {
        onAttach(acceptedFiles[0])
      }
    },
    [onAttach]
  )

  const { getRootProps, getInputProps, isDragActive, isDragReject } =
    useDropzone({
      onDrop,
      accept: 'image/*'
    })

  return (
    <Tooltip title={onDragText}>
      <MainContainer {...getRootProps()} width={width} height={height}>
        <input {...getInputProps()} />
        {isDragActive ? (
          isDragReject ? (
            <Backdrop>
              <div />
              <RejectFile color='secondary'>
                {onlyImagesText} <BlockIcon />
              </RejectFile>
              <img src={imageSrc} />
            </Backdrop>
          ) : (
            <Backdrop>
              <div />
              <IconButton
                color='primary'
                style={{ position: 'absolute' }}
                size='large'
              >
                <AddAPhotoIcon />
              </IconButton>
              <img src={imageSrc} />
            </Backdrop>
          )
        ) : (
          <React.Fragment>
            <AddIcon className='addIcon' size='large'>
              <AddAPhotoIcon />
            </AddIcon>
            <img src={imageSrc} />
          </React.Fragment>
        )}
        {!!title && (
          <Typography style={{ wordBreak: 'break-all', width }}>
            {title}
          </Typography>
        )}
      </MainContainer>
    </Tooltip>
  )
}

export default ImageDragAndDrop
