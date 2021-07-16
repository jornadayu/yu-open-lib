import React, { useState, useMemo } from 'react'

import { ResponsiveBar, BarDatum, BarSvgProps } from '@nivo/bar'
import Gradient from 'javascript-color-gradient'

import { legendProps, useNivoTheme } from '../../../hooks/nivo'
import { formattedCurrency, kCurrency } from '../../../helpers'
import { useViewport } from '../../../hooks'
import NivoTextTooltip from '../NivoTextTooltip'
import BarGraphLine, { Props as BarGraphLineProps } from './BarGraphLine'
import ClickableArea from '../../ClickableArea'

export type BaseDatum = BarDatum

export type DatumWithCount = BaseDatum & {
  count: number
}

export type BaseProps = {
  legend: string
  maxValue: number
  keys: string[]
  indexBy: string
  line?: BarGraphLineProps
  startColor?: string
  endColor?: string
  samplingLabel?: string
}

export type WithSamplingProps = {
  data: DatumWithCount[]
  hasSampling?: boolean
  samplingLabel: string
}

export type WithoutSamplingProps = {
  data: BaseDatum[]
  hasSampling: false
}

export type Props = BaseProps &
  (WithSamplingProps | WithoutSamplingProps) &
  Omit<BarSvgProps<BarDatum>, 'height' | 'width'>

const SalariesBarGraph: React.FC<Props> = ({
  legend,
  maxValue,
  keys,
  data,
  indexBy,
  line,
  samplingLabel,
  hasSampling = true,
  startColor = '#c4f7ff',
  endColor = '#066878',
  ...props
}) => {
  const nivoTheme = useNivoTheme()
  const { isMobile } = useViewport()

  const [key, setKey] = useState(keys[0])

  /** Cycle through keys passed when clicking on graph */
  const nextKey = () => {
    const index = keys.indexOf(key)

    if (index >= 0 && index < keys.length - 1) {
      setKey(keys[index + 1])
    } else {
      setKey(keys[0])
    }
  }

  // Color gradient to be used on graph based on sampling count (closer to end = higher)
  const [colorGradient] = useState(() => {
    const gradient = new Gradient()
    gradient.setGradient(startColor, endColor)
    gradient.setMidpoint(100)

    return gradient
  })

  const dataSum = useMemo(
    () => data.reduce((a, b) => (a as number) + (b.count as number), 0),
    [data]
  )

  // Add color attribute to each datum passed based on sampling count and the color gradient calculated
  const mappedData = useMemo(
    () =>
      data.map((datum) => ({
        ...datum,
        color: colorGradient.getColor(
          Number.parseInt(
            (((datum.count as number) / (dataSum || 1)) * 100).toFixed(0),
            10
          ) || 1
        )
      })),
    [dataSum, data, colorGradient]
  )

  return (
    <ClickableArea onClick={nextKey} active={keys.length > 1}>
      <ResponsiveBar
        axisTop={{
          legend,
          legendPosition: 'start',
          legendOffset: -13,
          tickSize: 0,
          format: () => ''
        }}
        data={mappedData}
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
            {hasSampling && (
              <>
                <br />
                {samplingLabel}: <strong>{input.data.count}</strong>
              </>
            )}
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
    </ClickableArea>
  )
}

export default SalariesBarGraph
