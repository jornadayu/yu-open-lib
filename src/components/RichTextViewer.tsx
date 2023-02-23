import React from 'react'

import CSS from 'csstype'

import { Typography, styled } from '@mui/material'

export type Props = {
  html?: string
  /** Yu style variants */
  yuMode?: boolean
  customStyle?: CSS.Properties
  maxHeight?: number
}

const MainContainer = styled(Typography)`
  margin-top: 12px;
  padding: 5px;
  color: ${({ theme }: any) => theme.palette.text.primary};
  border: ${({ theme }: any) => theme.palette.divider} 1px solid;
  width: 100%;
  border-radius: 5px;
  overflow: auto;

  .variants {
    line-height: 25px;
    & > h1 {
      font-family: 'Integral CF Bold';
      font-size: 1.2rem;
      line-height: 22px;
    }
    & strong {
      font-family: 'Integral CF Bold';
      font-weight: 400;
    }
  }
`

const RichTextViewer: React.FC<Props> = ({
  html,
  customStyle,
  yuMode = true,
  maxHeight = 250
}) => {
  if (!html) return null

  return (
    <MainContainer variant='body1' style={{ ...customStyle, maxHeight }}>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className={yuMode ? 'variants' : ''}
      />
    </MainContainer>
  )
}

export default RichTextViewer
