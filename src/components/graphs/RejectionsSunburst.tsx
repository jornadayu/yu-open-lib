import React, { useMemo } from 'react'
import { makeStyles, useTheme, Grid } from '@material-ui/core'

import { ResponsiveSunburst, SunburstSvgProps } from '@nivo/sunburst'
import { ResponsivePie } from '@nivo/pie'
import NivoTextTooltip from './NivoTextTooltip'
import { useViewport } from '../../hooks'
import { legendProps } from '../../hooks/nivo'

export type ResponsiveSunburstProps<RawDatum> = Partial<
  Omit<SunburstSvgProps<RawDatum>, 'data' | 'width' | 'height'>
> &
  Pick<SunburstSvgProps<RawDatum>, 'data'>

const useStyles = makeStyles(() => ({
  container: {
    height: '100%'
  },
  rejectionGraph: {
    height: '80%',
    marginTop: '5%'
  },
  legendsStyle: {
    marginTop: '2%'
  }
}))

export type Datum = {
  name: string
  color?: string
  count?: number
  children?: Datum[]
}

export type Props = {
  data: Datum
}

const RejectionsSunburst: React.FC<
  Partial<ResponsiveSunburstProps<Datum>> & Props
> = ({ data, ...sunBurstProps }) => {
  const { isMobile } = useViewport()
  const classes = useStyles()
  const theme = useTheme()

  const pluckRejectionTypes = useMemo(() => {
    if (!data || !data.children) return []

    return data.children.map((rejection) => ({
      id: rejection.name,
      label: rejection.name,
      value: 1
    }))
  }, [data])

  const mobileData = useMemo(() => {
    // Mobile view will not have the extra children layers.
    if (!isMobile) return data
    if (!data || !data.children) return data

    return {
      ...data,
      children: data.children.map((child) => ({
        ...child,
        count: data?.children?.reduce(
          (sum, object) => (sum += object.count || 0),
          0
        ),
        children: []
      }))
    }
  }, [data, isMobile])

  return (
    <Grid container className={classes.container}>
      <Grid
        item
        xs={isMobile ? 8 : 12}
        md={isMobile ? 8 : 12}
        className={classes.rejectionGraph}
      >
        <ResponsiveSunburst
          data={mobileData}
          margin={{
            top: 0,
            right: 30,
            bottom: 0,
            left: 10
          }}
          id='name'
          value='count'
          cornerRadius={2}
          borderColor={theme.palette.background.paper}
          childColor={{ from: 'color', modifiers: [['brighter', 0.1]] }}
          enableArcLabels
          arcLabelsSkipAngle={10}
          borderWidth={2}
          arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 1.4]] }}
          arcLabel={(label) =>
            label.formattedValue.replace(/\.[0-9]*?(?=%)/, '')
          }
          tooltip={(input) => (
            <NivoTextTooltip
              text={input.id as string}
              value={input.value}
              color={input.color as string}
            />
          )}
          {...sunBurstProps}
        />
      </Grid>
      {/* As of 24 Jun 2021, Sunburst does not support legends. The pie below is
      hidden, only used to generate the legends. */}
      <Grid
        item
        xs={isMobile ? 4 : 12}
        md={isMobile ? 4 : 12}
        className={classes.legendsStyle}
      >
        <ResponsivePie
          data={pluckRejectionTypes}
          margin={{
            top: isMobile ? 20 : -10,
            right: 70,
            bottom: 0,
            left: 51
          }}
          layers={['legends']}
          legends={[
            {
              ...legendProps,
              direction: isMobile ? 'column' : 'row',
              translateY: isMobile ? 50 : 20,
              anchor: 'top',
              itemTextColor: '#999',
              itemWidth: 70,
              symbolSize: isMobile ? 10 : 15,
              itemsSpacing: isMobile ? 10 : 29
            }
          ]}
        />
      </Grid>
    </Grid>
  )
}

export default RejectionsSunburst
