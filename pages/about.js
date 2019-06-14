import Title from '../src/Title'
import Link from 'next/link'
import { Grid } from '@material-ui/core'
import makeStyles from '@material-ui/styles/makeStyles/makeStyles'

const useStyles = makeStyles(theme => ({
  div: {
    marginTop: theme.spacing(10)
  },
  item: {
    padding: theme.spacing(2)
  }
}))

const About = () => {
  const { div, item } = useStyles()

  return (
      <Grid item xs={6}>
        <div className={div}>
          <Title>About</Title>
          <Link href='/'><a>Home</a></Link>
        </div>
      </Grid>
    )
}
export default About
