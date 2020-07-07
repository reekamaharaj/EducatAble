import * as React from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        backgroundColor: '#EBECF0',
        padding: '20px',
        fontFamily: 'Roboto, sans-serif'
    },
    contentPlacing: {
        justifyContent: 'center'
    }
});

export default function Footer() {
    const classes = useStyles();
    return (
        <div style={{ width: '100%' }} className={classes.root}>
            <Box display='flex' className={classes.contentPlacing}>
                <Box p={1}>&copy; 2020 EducatAble</Box>
            </Box>
        </div>
    );
}
