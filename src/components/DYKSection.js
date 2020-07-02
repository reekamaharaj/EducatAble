import * as React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    root: {
        height: '400px',
        borderRight: '2px solid #fff',
        backgroundColor: '#72A0C1',
    },
    boxStyle: {
        justifyContent: 'center',
        padding: '40px',
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        color: 'white'
    }
})

export default function DYKSection() {
    const classes = useStyles();

    return (
        <div style={{width: '50%'}} className={classes.root}>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='h2'>Did you know?</Typography>
            </Box>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='p'> 
                    Sign language isn’t universal and there are actually many different versions of it. 
                </Typography>
            </Box>
        </div>
    )
}
