import React from 'react';
import Typography from '@material-ui/core/Typography';
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
        <div>
            <img src='https://via.placeholder.com/250' alt='logo placeholder'/>
            <Typography variant='h1' className={classes.root}>EducatAble</Typography>
        </div>
    )
}
