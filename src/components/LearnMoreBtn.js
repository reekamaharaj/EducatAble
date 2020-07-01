import * as React from 'react';
// import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  learnMoreButton: {
    backgroundColor: '#72A0C1',
    color: '#fff',
    padding: '15px 25px',
    margin: '20px',
    border: '2px #fff solid',
    borderRadius: '15px',
    justifyContent: 'center',
    transitionDuration: '0.4s',
    transitionTimingFunction: 'linear',
    textDecoration: 'none',
    '&:hover': {
      color: '#72A0C1',
      backgroundColor: '#fff',
    },
  },
  link: {
    textDecoration: 'none',
    color: '#fff',
  },
  contentPlacing: {
    justifyContent: 'center',
  },
});

export default function LearnMore() {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }}>
      <Box display='flex' className={classes.contentPlacing}>
        <Button component='a' href='/learnmore' className={classes.learnMoreButton}>
            Learn More
        </Button>
      </Box>
    </div>
  );
}
