import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import Footer from '../components/Footer/index';

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
  paperStyle: {
    display: 'flex',
    margin: '20px',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

function LearnMore() {
  const classes = useStyles();

  return (
    <div style={{ width: '100%' }} className={classes.root}>
      <div className={classes.root}>
        <br />
        <Paper elevation={3} className={classes.paperStyle}>
          <Avatar
            alt='Reeka Mararaj'
            img
            src='images/reeka.jpeg'
            className={classes.large}
          />
          <br />
          <Typography variant='subtitle1' className={classes.bio}>
            Hiya. My name is Reeka. I love to learn new things and can often
            find myself falling into endless rabbit holes looking things up
            about... well everything. I am a former civil engineer and am
            excited to shift careers towards software development, specifically
            into web dev. Woohoo! Other things about me. I enjoy to draw and
            have a small art business Doodlejutsu. Along with my mental health
            advocacy I run a blog called I'll Get There where I write honestly
            about living with mental illness.
            <br />
            <p>Favorite Band: Linkin Park</p>
          </Typography>
        </Paper>
        <br />
        <Paper elevation={3} className={classes.paperStyle}>
          <Avatar
            alt='Viviana Garcia'
            img
            src='images/viviana.jpeg'
            className={classes.large}
          />
          <br />
          <Typography variant='subtitle1' className={classes.bio}>
            I'm Viviana, and I'm a mom, wife and front-end web developer. I like
            pina coladas and getting lost in the rain. Just kidding. My hobbies
            include trying new recipes and making soy candles. I have a passion
            for usability and look forward to further challenge my self as a
            developer.
            <br />
            <p>If I could live anywhere for a year, it would be South Korea!</p>
          </Typography>
        </Paper>
        <br />
        <Paper elevation={3} className={classes.paperStyle}>
          <Avatar
            alt='Travis Sceroler'
            src='images/travis.jpeg'
            className={classes.large}
          />
          <Typography variant='subtitle1' className={classes.bio}>
            yoooo it's troovis! bio about troovis goes here.
            <br />
          </Typography>
        </Paper>
        <br />
        <Paper elevation={3} className={classes.paperStyle}>
          <Avatar
            alt='Claire Labry'
            src='images/claire.jpeg'
            className={classes.large}
          />
          <Typography variant='subtitle1' className={classes.bio}>
            My name is Claire. I'm especially interested in creating
            applications and platforms that maximize and organize user
            productivity. When I'm not coding or honing my programming skills,
            you'll find me hidden in the depths of my garden or in my nook with
            a book in my hands. I love all Asian kindsa food. You name it: Thai,
            Chinese, Japanese, Korean, and Indian.
            <br />
            <p>Favorite Drink: Lavender honey tea</p>
          </Typography>
        </Paper>
        <br />
      </div>
      <Footer />
    </div>
  );
}

export default LearnMore;
