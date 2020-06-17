import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../components/Logo/index';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#72A0C1',
    },
    learnMoreButton: {
        backgroundColor: '#fff',
        padding: '10px',
        margin: '20px'
    },
})

function Questions() {
    const classes = useStyles();
    return <Container className={classes.root}>
                <Logo />
                <Button className={classes.learnMoreButton}> Learn More </Button>
            </Container>
}

export default Questions;
