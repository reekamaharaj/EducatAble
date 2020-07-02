import * as React from 'react'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';

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
        '&:hover': {
            color: '#72A0C1',
            backgroundColor: '#fff' 
        }
    },
    contentPlacing: {
        justifyContent: 'center'
    }
})

const Test = function Test() {
    const classes = useStyles();

    return (
        <div style={{width: '100%'}}>
            <Box display='flex' className={classes.contentPlacing}>
                <Button className={classes.testButton}> AHH </Button>
            </Box>
        </div>
    )
}

// this is just a test comment 

export default Test;