import makeStyles from '@material-ui/styles/makeStyles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  title: {
    marginTop: theme.spacing(20)
  }
}))

const Title = ({ children }) => {
  const { title } = useStyles()

  return <Typography variant='h1' className={title}>{ children }</Typography>
}

export default Title
