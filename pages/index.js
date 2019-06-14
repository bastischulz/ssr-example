import Title from '../src/Title'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import makeStyles from '@material-ui/styles/makeStyles/makeStyles'

const useStyles = makeStyles(theme => ({
  div: {
    marginTop: theme.spacing(10)
  }
}))

const Index = () => {
  const { div } = useStyles()

  return (
      <Grid item xs={6}>
        <div className={div}>
          <Title>Index</Title>
          <Link href='/about'><a>About</a></Link>
        </div>
      </Grid>
  )
}
export default Index
