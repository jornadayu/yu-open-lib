import React from 'react'

import { BarDatum, BarSvgProps, ResponsiveBar } from '@nivo/bar'
import { OrdinalColorScaleConfig } from '@nivo/colors'

import { useViewport } from '../../../hooks'
import { legendProps, useNivoTheme } from '../../../hooks/nivo'

type Datum = {
  name: string
  [key: string]: number | string | undefined
}

export type Props = {
  keys: string[]
  data: Datum[]

  /** @default { scheme: 'nivo' } */
  colors?: OrdinalColorScaleConfig<BarDatum>
} & Partial<BarSvgProps>

const YuBarGraph: React.FC<Props> = ({
  keys,
  data,
  colors = { scheme: 'nivo' },
  ...barGraphProps
}) => {
  const nivoTheme = useNivoTheme()
  const { isMobile } = useViewport()

  return (
    <ResponsiveBar
      theme={nivoTheme}
      data={data}
      keys={keys}
      indexBy='name'
      margin={{
        top: 0,
        right: isMobile ? 30 : 0,
        bottom: 65,
        left: isMobile ? 130 : 125
      }}
      animate
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={colors}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        tickValues: isMobile ? 4 : 9
      }}
      axisLeft={{
        format: (v: string) =>
          v.length > 22 ? (
            <tspan>
              {v.substring(0, 18).trim()}
              ...
              <title>{v}</title>
            </tspan>
          ) : (
            v
          ),
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: '',
        legendPosition: 'middle',
        legendOffset: -40
      }}
      labelSkipWidth={isMobile ? 20 : 10}
      layout='horizontal'
      labelTextColor={{ from: 'color', modifiers: [['darker', 3.5]] }}
      label={(datum) => datum?.value?.toString() || ''}
      legends={[
        {
          ...legendProps,
          translateX: isMobile ? -35 : -20,
          translateY: 60,
          dataFrom: 'keys',
          itemsSpacing: isMobile ? 0 : 20
        }
      ]}
      {...barGraphProps}
    />
  )
}

export default YuBarGraph
