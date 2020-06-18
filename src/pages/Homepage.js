import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/index';
import LearnMore from '../components/LearnMore/index';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#72A0C1',
    },

})

function Homepage() {
    const classes = useStyles();
   return <Container className={classes.root}>
                <Logo />
                <LearnMore />
        </Container>
}

export default Homepage;
