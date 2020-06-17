import React from "react";
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
        backgroundColor: '#72A0C1',

    }
})
function Questions() {
    const classes = useStyles();
    return <Container className={classes.root}>
            <Typography variant='h6'>Content will go here</Typography>
        </Container>
}

export default Questions;
