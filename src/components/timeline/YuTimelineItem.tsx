import { TimelineItem as MuiTimelineItem } from '@mui/lab'
import { withStyles } from '@mui/styles'

/**
 * Use as replacement for MUI `TimelineItem` when using Yu-lib Timeline components
 *
 * ```tsx
 * import { Timeline } from '@mui/material'
 * import StarsIcon from '@mui/icons-material/Stars'
 *
 * import {
 *   YuTimelineItem,
 *   YuTimelineDate,
 *   YuTimelineIcon,
 *   YuTimelineContent
 * } from 'yu-open-lib'
 *
 * const MyCustomTimeline = () => (
 *   <Timeline>
 *     <YuTimelineItem>
 *        <YuTimelineDate date={new Date()} />
 *
 *        <YuTimelineIcon
 *          onClick={() => console.log('click')}
 *          iconColor="#fff"
 *          icon={<StarsIcon />}
 *          count={2}
 *        />
 *
 *        <YuTimelineContent
 *          onClick={() => console.log('click')}
 *          title="Some Title"
 *          description="Some Description"
 *        />
 *     </YuTimelineItem>
 *   </Timeline>
 * )
 * ```
 */
const YuTimelineItem = withStyles({
  missingOppositeContent: {
    '&:before': {
      display: 'none'
    }
  }
})(MuiTimelineItem)

export default YuTimelineItem
