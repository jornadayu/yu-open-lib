import { withStyles } from '@material-ui/core'
import { TimelineItem as MuiTimelineItem } from '@material-ui/lab'

/**
 * Use as replacement for Material-UI `TimelineItem` when using Yu-lib Timeline components
 *
 * ```tsx
 * import { Timeline } from '@material-ui/core'
 * import StarsIcon from '@material-ui/icons/Stars'
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
