import makeStyles from '@mui/styles/makeStyles'

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
    marginLeft: theme.spacing(2),
    width: 64,
    height: 64
  },
  toolbarButton: {
    margin: `${theme.spacing(0, 0, 0, 3)} !important`,
    fontSize: 20
  },
  externalAppBar: {
    alignItems: 'center'
  },
  toolBar: {}
}))
