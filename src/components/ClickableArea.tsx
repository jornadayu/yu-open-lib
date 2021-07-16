import React from 'react'

import { makeStyles } from '@material-ui/core'

type Props = {
  onClick: (e?: React.MouseEvent<HTMLSpanElement>) => any

  /** @default 'space' */
  keybinding?: string

  /** @default true */
  useKeybinding?: boolean

  /** @default true */
  active?: boolean
}

const useStyles = makeStyles(() => ({
  clickArea: {
    cursor: 'pointer',
    outline: 'none'
  }
}))

/**
 * Use around a component to have it as a clickable area with a onClick callback
 *
 * ```tsx
 * import { ClickableArea } from 'yu-open-lib'
 *
 * const MyComponent = () => (
 *   <ClickableArea onClick={() => console.log('clicked card')}>
 *     <Card>
 *       <CardContent>My Card Content</CardContent>
 *     </Card>
 *   </ClickableArea>
 * )
 * ```
 */
const ClickableArea: React.FC<Props> = ({
  onClick,
  children,
  active = true,
  useKeybinding = true,
  keybinding = 'space'
}) => {
  const classes = useStyles()

  const handleKeybind = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    if (event.key === keybinding && useKeybinding) onClick()
  }

  return (
    <span
      role='button'
      tabIndex={0}
      onClick={active ? onClick : undefined}
      onKeyDown={active ? handleKeybind : undefined}
      className={active ? classes.clickArea : undefined}
    >
      {children}
    </span>
  )
}

export default ClickableArea
