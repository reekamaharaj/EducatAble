import React from "react";
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Logo from '../components/Logo/index';
import LearnMore from '../components/LearnMore/index';
import DYKSection from '../components/DYKSection/index';
import Resources from '../components/ResourceSection/index';
import Footer from '../components/Footer/index';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#72A0C1',
    },

})

function Homepage() {
    const classes = useStyles();
    return <div style={{ width: '100%'}} className={classes.root}>
        <Container className={classes.root}>
            <Logo />
            <LearnMore />
        </Container>
        <Box 
        display="flex"
        flexWrap="nowrap"
        p={1}
        m={1}>
            <DYKSection/>
            <Resources />
        </Box>
        <Footer />
        </div>
}

export default Homepage;
