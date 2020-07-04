import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Footer from '../components/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    borderRight: '2px solid #fff',
    backgroundColor: '#72A0C1',
  },

  large: {
    width: theme.spacing(20),
    height: theme.spacing(20),
    margin: theme.spacing(5),
  },
  bio: {
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '300',
    color: 'black',
    padding: '20px',
  },
  subtitle:{
    fontFamily: 'Roboto, sans-serif',
    fontWeight: '500',
    color: 'black',
    padding: '20px',
    textAlign: 'center'
  },
  paperStyle: {
    display: 'flex',
    margin: '20px',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function SavedQs() {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }} className={classes.root}>
      <div className={classes.root}>
      <br />
        <Paper elevation={3} className={classes.paperStyle}>
        <Typography variant='subtitle' className={classes.bio}>
          <h2>Your Favorites Page</h2>
          </Typography>
          </Paper>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default SavedQs;
