import * as React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        color: '#fff',
        fontWeight: '700',
        fontSize: '68px',
        letterSpacing: '3px',
        paddingLeft: '10px'
    },
    contentPlacing: {
        justifyContent: 'center'
    },
    picStyles: {
        width: '700px'
    }
});

export default function Logo() {
    const classes = useStyles();

    return (
        <div style={{ width: '100%' }}>
            <Box display='flex' className={classes.contentPlacing}>
                <img
                    src='/images/open-figures.png'
                    alt='logo placeholder'
                    className={classes.picStyles}
                />
            </Box>
            <Box display='flex' className={classes.contentPlacing}>
                <Typography variant='h2' className={classes.root}>
                    {' '}
                    EducatAble
                </Typography>
            </Box>
        </div>
    );
}
