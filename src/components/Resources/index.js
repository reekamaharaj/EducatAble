import React from 'react'
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        height: '400px',
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

export default function Resources() {
    const classes = useStyles();

    return (
        <div style={{width: '50%'}} className={classes.root}>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='h2'>Resources:</Typography>
            </Box>
            <Box display='flex' className={classes.boxStyle}>
                <Typography variant='p'>Cat ipsum dolor sit amet, cheetah tomcat munchkin. Burmese havana brown, grimalkin singapura so american bobtail but tiger, yet american shorthair. </Typography>
            </Box>
        </div>
    )
}
