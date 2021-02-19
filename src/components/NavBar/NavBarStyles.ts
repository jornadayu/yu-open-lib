import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    background: ({ backgroundColor }: { backgroundColor: string }) =>
      backgroundColor
  },
  logoYuri: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  toolbarButton: {
    margin: theme.spacing(0, 0, 0, 3),
    fontSize: 20
  },
  externalAppBar: {
    alignItems: 'center'
  },
  toolBar: {}
}))
