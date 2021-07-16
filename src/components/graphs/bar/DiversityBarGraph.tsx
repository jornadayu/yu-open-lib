import React, { useMemo } from 'react'

import { Typography, makeStyles } from '@material-ui/core'

import { OrdinalColorScaleConfig } from '@nivo/colors'
import { ResponsiveBar, BarDatum, ComputedDatum, BarSvgProps } from '@nivo/bar'

import { useNivoTheme } from '../../../hooks/nivo'
import { asPercentage, truncatedText } from '../../../helpers'
import NivoTextTooltip from '../NivoTextTooltip'

export type Datum = BarDatum & {
  total: number
}

type SharedProps = {
  groupMode?: 'stacked' | 'grouped'
  colors?: OrdinalColorScaleConfig<ComputedDatum<Datum>>
  theme: any
  keys: string[]
  animate: boolean
  label: (datum: ComputedDatum<Datum>) => string
}

export type Props = {
  data: Datum[]

  /** @default false */
  verticalGraph?: boolean

  /** @default 'question' */
  key?: string

  /** @default false */
  isPercentage?: boolean
} & Omit<BarSvgProps<Datum>, 'height' | 'width'>

const useStyles = makeStyles(() => ({
  mobileDiversityContainer: {
    height: '15%'
  }
}))

const DiversityBarGraph: React.FC<Props> = ({
  data,
  key = 'question',
  verticalGraph = false,
  isPercentage = false,
  ...barGraphProps
}) => {
  const nivoTheme = useNivoTheme()
  const classes = useStyles()

  const keys = useMemo(() => {
    // nivo's API requires each key to be individually listed, so the code below
    // does just that (except for question (which should be the indexer rather
    // than a key) and total (which is only used to calculate the percentage)).
    const mappedKeys: Set<string> = new Set()
    if (!data) return mappedKeys

    data.forEach((datum) => {
      Object.keys(datum).forEach((key) => mappedKeys.add(key))
    })

    mappedKeys.delete(key)
    mappedKeys.delete('total')

    return mappedKeys
  }, [data])

  function barLabel(datum: ComputedDatum<Datum>) {
    const start = `${truncatedText(datum.id.toString(), 20)}:`
    if (isPercentage) return `${start} ${asPercentage(datum.value as number)}`

    const labelPercentage =
      (datum.value as number) / (datum.data.total as number)

    const label = `${start} ${asPercentage(labelPercentage)}`

    return label
  }

  function diversityTooltip(input: any) {
    return (
      <NivoTextTooltip
        text={input.id as string}
        value={input.value}
        color={input.color}
        isPercentage={isPercentage || undefined}
      />
    )
  }

  const sharedPropsDesktopAndMobile: SharedProps = {
    groupMode: 'stacked',
    colors: { scheme: 'pastel1' },
    theme: nivoTheme,
    keys: Array.from(keys),
    animate: true,
    label: (datum: ComputedDatum<Datum>) => barLabel(datum)
  }

  if (verticalGraph) {
    return (
      <>
        {data.map((datum) => (
          <>
            <Typography variant='subtitle2'>{datum.question}</Typography>
            <div className={classes.mobileDiversityContainer}>
              <ResponsiveBar
                {...sharedPropsDesktopAndMobile}
                data={[datum]}
                labelTextColor='rgba(0, 0, 0, 0.87);'
                tooltip={diversityTooltip}
                margin={{
                  top: 40,
                  right: 0,
                  bottom: 40,
                  left: 0
                }}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 5,
                  tickRotation: 0,
                  format: () => ''
                }}
                layout='horizontal'
                labelSkipWidth={64}
                {...barGraphProps}
              />
            </div>
          </>
        ))}
      </>
    )
  }

  return (
    <span style={{ cursor: 'pointer' }} role='button'>
      <ResponsiveBar
        {...sharedPropsDesktopAndMobile}
        data={data}
        labelTextColor='rgba(0, 0, 0, 0.87);'
        tooltip={diversityTooltip}
        indexBy='question'
        margin={{
          top: 30,
          right: 40,
          bottom: 15,
          left: 40
        }}
        axisTop={{}}
        axisBottom={{
          format: () => ''
        }}
        axisLeft={{
          format: (value) => (isPercentage ? `${value * 100}%` : value)
        }}
        layout='vertical'
        padding={0.3}
        labelSkipHeight={15}
        {...barGraphProps}
      />
    </span>
  )
}

export default DiversityBarGraph
