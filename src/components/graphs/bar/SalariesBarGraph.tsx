import React from 'react'

import { ResponsiveBar, BarDatum, BarSvgProps } from '@nivo/bar'

import { legendProps, useNivoTheme } from '../../../hooks/nivo'
import { formattedCurrency, kCurrency } from '../../../helpers'
import { useViewport } from '../../../hooks'
import NivoTextTooltip from '../NivoTextTooltip'
import BarGraphLine, { Props as BarGraphLineProps } from './BarGraphLine'

export type Datum = Record<string, number | string | undefined>

export type Props = {
  legend: string
  data: Datum[]
  maxValue: number
  key: string
  indexBy: string
  line?: BarGraphLineProps
  samplingLabel: string
} & Omit<BarSvgProps<BarDatum>, 'height' | 'width'>

const SalariesBarGraph: React.FC<Props> = ({
  legend,
  maxValue,
  key,
  data,
  indexBy,
  line,
  samplingLabel,
  ...props
}) => {
  const nivoTheme = useNivoTheme()
  const { isMobile } = useViewport()

  return (
    <ResponsiveBar
      axisTop={{
        legend,
        legendPosition: 'start',
        legendOffset: -13,
        tickSize: 0,
        format: () => ''
      }}
      data={data}
      maxValue={maxValue}
      keys={[key]}
      indexBy={indexBy}
      margin={{
        top: 20,
        right: 10,
        bottom: 65,
        left: 60
      }}
      label={(datum) => kCurrency(datum.value as number, 1)}
      padding={0.2}
      groupMode='grouped'
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={(bar) => bar.data.color as string}
      theme={nivoTheme}
      borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      axisRight={null}
      axisLeft={{
        format: (v: string) => formattedCurrency(Number.parseInt(v, 10))
      }}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: isMobile ? -15 : 0,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        format: (v: string) =>
          v.length > 18 ? (
            <tspan>
              {v.substring(0, 16).trim()}
              ...
              <title>{v}</title>
            </tspan>
          ) : (
            v
          )
      }}
      labelSkipWidth={12}
      labelSkipHeight={35}
      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
      tooltip={(input) => (
        <NivoTextTooltip
          text={(input.id as string)?.replace(/ *\([^)]*\)/, '')}
          value={formattedCurrency(input.value)}
          color={input.color}
        >
          <br />
          {samplingLabel}: <strong>{input.data.expected_count}</strong>
        </NivoTextTooltip>
      )}
      legends={[{ ...legendProps, translateX: -110, dataFrom: 'keys' }]}
      animate
      layers={[
        'grid',
        'axes',
        'bars',
        'markers',
        'legends',
        'annotations',
        line
          ? ({ bars, yScale }) => (
              <BarGraphLine bars={bars} yScale={yScale} {...line} />
            )
          : 'annotations'
      ]}
      {...props}
    />
  )
}

export default SalariesBarGraph
