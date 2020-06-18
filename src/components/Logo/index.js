import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        fontWeight: '700'
    }
})
export default function Logo() {
    const classes = useStyles();

    return (
        <div style={{width: '100%'}}>
        <Box display='flex'>
            <img src='https://via.placeholder.com/250' alt='logo placeholder'/>
            <Typography variant='h1' className={classes.root}>EducatAble</Typography>
        </Box>
        </div>
    )
}
