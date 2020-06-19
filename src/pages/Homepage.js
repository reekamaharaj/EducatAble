import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/index';
import LearnMore from '../components/LearnMore/index';
import Section from '../components/Section/index';
const useStyles = makeStyles({
    root: {
        backgroundColor: '#72A0C1',
    },

})

function Homepage() {
    const classes = useStyles();
   return <div style={{ width: '100%'}}>
        <Container className={classes.root}>
            <Logo />
            <LearnMore />
        </Container>
        <Container>
            <Section />
            <Section />
        </Container>
        </div>
}

export default Homepage;
